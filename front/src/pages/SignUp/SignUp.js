import useInput from "../../hooks/useInput";
import useMutate from "../../hooks/useMutate";
import {addUser} from "../../api/user";
import {
  Button,
  Container,
  Form,
  GlobalStyle,
  Input, SignUpButton, SignUpContainer,
  SocialContainer
} from "../SignUp/style";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Signup() {
  const [email, onChangeEmail] = useInput('');
  const [nickName, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [confirmPassword, onChangeConfirmPassword] = useInput('');
  const addUser_mutate = useMutate(addUser,'user');
  const navigate = useNavigate();

  useEffect(() => {
    if (addUser_mutate.isSuccess) {
      navigate("/");
    }
  }, [addUser_mutate.isSuccess, navigate]);

  const goLogin = () =>{
    navigate("/Login");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const newUser = {
      email,
      password,
      nickName,
    };
    addUser_mutate.mutate(newUser)
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <GlobalStyle/>
      <Container>
            <SignUpContainer>
              <SignUpButton onClick={goLogin}>Login</SignUpButton>
            </SignUpContainer>
        <Form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div>
            <SocialContainer>
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </SocialContainer>
          </div>
          <span>or use your email for registration</span>
          <Input type="email" placeholder="Email" value={email} onChange={onChangeEmail}/>
          <Input type="nickName" placeholder="NickName" value={nickName} onChange={onChangeNickname}/>
          <Input type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
          <Input type="confirmpassword" placeholder="ConfirmPassword" value={confirmPassword} onChange={onChangeConfirmPassword}/>
          <Button>Sign Up</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Signup;
