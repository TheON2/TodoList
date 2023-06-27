import useInput from "../hooks/useInput";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import React from "react";
import {loginUser} from "../reducers/userSlice";

const Login=()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    dispatch(loginUser({email:email, name:'hi'}));
    navigate("/");
  };
  const goSignUp = () =>{
    navigate("/SignUp");
  }
  return(
    <div>
      <button onClick={goSignUp}>가입하기</button>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={onChangePassword} required />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login