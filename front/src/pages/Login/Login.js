import useInput from "../../hooks/useInput";
import {useNavigate} from "react-router-dom";
import React, {useCallback, useEffect} from "react";
import {loginUser} from "../../redux/reducers/userSlice";
import useMutate from "../../hooks/useMutate";
import {userLogin} from "../../api/user";
import {
  Button,
  Container,
  Form,
  GlobalStyle,
  Input, LoginButton,
  LoginContainer,
  SocialContainer
} from "./style";

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

  const forgotPassword = useCallback(()=>{
    alert('잘 떠올려보셈 ㅡㅡ')
  },[]);
  return(
    <div>
      <GlobalStyle/>
      <Container>
        <div>
          <LoginContainer>
            <LoginButton onClick={goSignUp}>Sign Up</LoginButton>
          </LoginContainer>
          <Form onSubmit={handleSubmit}>
            <h1>The TodoList</h1>
            <div>
              <SocialContainer>
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </SocialContainer>
            </div>
            <span>or use your account</span>
            <Input type="email" placeholder="Email" value={email} onChange={onChangeEmail}/>
            <Input type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
            <a href='#' onClick={forgotPassword}>Forgot your password?</a>
            <Button>Sign In</Button>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default Login