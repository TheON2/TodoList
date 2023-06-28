import useInput from "../../hooks/useInput";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {loginUser} from "../../redux/reducers/userSlice";
import useMutate from "../../hooks/useMutate";
import {userLogin} from "../../api/user";

const Login=()=>{
  const navigate = useNavigate();
  const login_Mutate = useMutate(userLogin,'user',loginUser);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  useEffect(() => {
    if (login_Mutate.isSuccess) {
      navigate("/");
    }
  }, [login_Mutate.isSuccess, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {email,password}
    login_Mutate.mutate(user)
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