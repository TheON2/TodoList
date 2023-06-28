import {useSelector} from "react-redux";
import useMutate from "../../hooks/useMutate";
import {userLogOut} from "../../api/user";
import {useCallback, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {logOutUser} from "../../redux/reducers/userSlice";
import {Button, Container} from "./style";

const Header = ({title,stack}) =>{
  const navigate = useNavigate();
  const {user} = useSelector(state=>state.user)
  const logOut_mutate= useMutate(userLogOut,'user',logOutUser)
  const onLogOut = useCallback(()=>{
    logOut_mutate.mutate()
  },[])
  useEffect(() => {
    if (logOut_mutate.isSuccess) {
      navigate("/Login");
    }
  }, [logOut_mutate.isSuccess, navigate]);

  return (<Container>
    <div>{title}</div>
    { user.nickName? <div>{user.nickName}님 어서오세요.<Button onClick={onLogOut}/></div> :<></> }
    <div>{stack}</div>
  </Container>)
}

export default Header