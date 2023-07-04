import {ProfileContainer, ProfileOptions, ProfilePicture, UserName} from "./style";
import {useNavigate} from "react-router-dom";
import useMutate from "../../hooks/useMutate";
import {userLogOut} from "../../api/user";
import {logOutUser} from "../../redux/reducers/userSlice";
import {useCallback, useEffect} from "react";
import {Button} from "../../layout/Header/style";
import CustomButton from "../CustomButton/CustomButton";

const Profile =({nickName,wokringCount,doneCount})=>{
  const navigate = useNavigate();
  const logOut_mutate= useMutate(userLogOut,'user',logOutUser)
  const onLogOut = useCallback(()=>{
    logOut_mutate.mutate()
  },[])
  useEffect(() => {
    if (logOut_mutate.isSuccess) {
      navigate("/Login");
    }
  }, [logOut_mutate.isSuccess, navigate]);
  return(<div>
    <ProfileContainer className="profile block">
      <a className="add-button" href="#28"><span className="icon entypo-plus scnd-font-color"></span></a>
      <ProfilePicture >
        <img width="150px" alt="Anne Hathaway picture" src="https://avatars.githubusercontent.com/u/32028454?s=400&u=7993b49546f6ebb45968dbafa6c97c5789ec2254&v=4" />
      </ProfilePicture>
      <UserName >{nickName}</UserName>
      <div className="profile-description">
        <p className="scnd-font-color">아 CSS 너무 재밌다!</p>
      </div>
      <div>
        <h2 className="list-title">Working.. 🔥</h2>
        <h1 style={{color:'blue'}}>{wokringCount}</h1>
        <h2 className="list-title">Done..! 🎉</h2>
        <h1 style={{color:'red'}}>{doneCount}</h1>
      </div>
      <CustomButton theme={'type2'} size={'small'} onClick={onLogOut}>LogOut</CustomButton>
    </ProfileContainer>
  </div>)
}

export default Profile