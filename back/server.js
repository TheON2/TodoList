let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors')
const morgan = require("morgan"); //프론트에서 백엔드로 어떤요청들을 보냈는지 로그를 띄워줌
const passportConfig = require("./passport");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const Todo = require('./models/todo');
const User = require('./models/user');
const path = require('path');
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();
passportConfig();

const port = process.env.PORT || 3001;
const origin = process.env.ORIGIN || 'https://todo-list-pi-wine.vercel.app';

console.log(origin)

app.use(morgan("dev"));
app.use(cors({
  origin:origin,
  credentials:true,
}))
app.use('/',express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);

app.post('/kakaoLogin', async (req, res) => {
  const { code } = req.query;  // 클라이언트에서 보낸 code를 받아옵니다.
  const response = await axios({
    method: 'POST',
    url: 'https://kauth.kakao.com/oauth/token',
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    data: {
      grant_type: 'authorization_code',
      client_id: 'bfd587f21bee3c4013621c9d16b0b6d8',
      redirect_uri: 'http://localhost:3000/kakao/callback',
      code,
    },
  });

  const { access_token } = response.data;

  const userInfoResponse = await axios({
    method: 'GET',
    url: 'https://kapi.kakao.com/v2/user/me',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  console.log('유저인포 2번',userInfoResponse)

  const user_name = userInfoResponse.data.properties.nickname;

  // 서버에서 클라이언트로 응답을 보냅니다.
  res.json({ user_name });
});


// app.use(passport.initialize());
// app.use(passport.session());
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('Connected to MongoDB server'))
//   .catch((err) => console.error(err));
// app.use(passport.initialize());
//
// const routerTodos = require('./routes/todos')(app, Todo);
// const routerUser = require('./routes/user')(app, User);

let server = app.listen(port, function () {
  console.log("Express server has started on port " + port)
});
