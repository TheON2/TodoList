const bcrypt = require('bcrypt')
const {isNotLoggedIn, isLoggedIn} = require("./middlewares");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const auth = require("../jwt/auth");
const refreshauth = require("../jwt/refreshauth");

module.exports = function(app, User)
{
  app.get('/user', auth, async (req, res) => {
    const user = await User.find({});
    res.json(user);
  });

  app.get('/usertoken', auth, async (req, res) => { // auth 미들웨어 적용
    try {
      const user = await User.findOne({ email: req.user.email });
      if (!user) res.status(404).send("No user found");
      const userResponse = user.toObject();
      delete userResponse.password;
      return res.status(200).json({userResponse});
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.get('/refreshToken',refreshauth, async (req, res) => { // auth 미들웨어 적용
    try {
      const payload = {
        email: req.user.email,
        exp: Math.floor(Date.now() / 1000) + (10 * 1), //토큰 유효기간 30분
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      return res.status(200).json({token});
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.get('/user/:email', auth, async (req, res) => {
    try {
      const user = await User.findOne({ email: req.params.email });
      if (!user) res.status(404).send("No user found");
      const userResponse = user.toObject();
      delete userResponse.password;
      res.send(userResponse);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post('/user', auth, async (req, res,next) => {
    try {
      const exUser = await User.findOne({email: req.body.email});
      if (exUser) {
        return res.status(403).send("이미 사용중인 아이디입니다");
      }
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    const user = new User({
      email: req.body.email,
      nickName: req.body.nickName,
      password: hashedPassword,
    })
    const savedUser = await user.save();
    res.json(savedUser);
  } catch(error){
    console.error(error);
    next(error)
  }
  });

  app.post("/user/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, async (loginErr) => {
        if (loginErr) {
          console.log(err);
          return next(loginErr);
        }
        const payload = {
          email: user.email,
          exp: Math.floor(Date.now() / 1000) + (10 * 1), //토큰 유효기간 30분
        };
        const refreshPayload = {
          email: user.email,
          exp: Math.floor(Date.now() / 1000) + (60 * 1 * 1 * 1), // Refresh token valid for 7 days
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        const refreshToken = jwt.sign(refreshPayload, process.env.JWT_REFRESH_SECRET);
        res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true });
        const userResponse = user.toObject();
        delete userResponse.password;
        return res.status(200).json({ userResponse, token });
      });
    })(req, res, next);
  });

  app.post("/user/logout", (req, res, next) => {
    req.logout(() => {
      req.session.destroy();
      res.cookie('refreshToken', '', { expires: new Date(0), httpOnly: true, sameSite: 'None', secure: true });
      res.send("ok");
    });
  });

  app.patch('/user/:email/done', auth, async (req, res) => {
    try {
      let user = await User.findOne({ email: req.params.email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.done = req.body.done;
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.patch('/user/:email/nickName', auth, async (req, res) => {
    try {
      let user = await User.findOne({ email: req.params.email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.nickName = req.body.nickName;
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.delete('/user/:email', auth, async (req, res) => {
    try {
      let user = await User.findOneAndDelete({ email: req.params.email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User successfully deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
}
