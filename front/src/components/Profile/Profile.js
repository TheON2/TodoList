import {ProfileContainer, ProfileOptions, ProfilePicture, UserName} from "./style";
import {useNavigate} from "react-router-dom";
import useMutate from "../../hooks/useMutate";
import {profileChange, userLogOut} from "../../api/user";
import {getProfileImage, logOutUser} from "../../redux/reducers/userSlice";
import {useCallback, useEffect, useRef, useState} from "react";
import {Button} from "../../layout/Header/style";
import CustomButton from "../CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {useMutation, useQueryClient} from "react-query";
import {getTodosDone} from "../../api/todos";
import {loadTodosDone} from "../../redux/reducers/todosSlice";

const Profile =({nickName,wokringCount,doneCount})=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { imageUrl } = useSelector(state=>state.user)
  const logOut_mutate= useMutate(userLogOut,'user',logOutUser)
  const {mutate, isLoading, data,isSuccess} = useMutation(profileChange, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('todos');
      dispatch(getProfileImage(data))
    },
  });
  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    mutate(imageFormData)
  });
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
        {isSuccess ?
            <img src={`${process.env.REACT_APP_LOCAL_SERVER}/${data}`} style={{ width: '200px' }} alt={imageUrl} />
         : <img width="150px" alt="Anne Hathaway picture" src="https://avatars.githubusercontent.com/u/32028454?s=400&u=7993b49546f6ebb45968dbafa6c97c5789ec2254&v=4" />
        }
      </ProfilePicture>
      <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
      <Button onClick={onClickImageUpload}>이미지 업로드</Button>
      <UserName >{nickName}</UserName>
      <div className="profile-description">
        <p className="scnd-font-color">아 CSS 너무 재밌다!</p>
      </div>
      <div>
        <h1 className="list-title">Working.. 🔥</h1>
        <h1 style={{color:'blue'}}>{wokringCount}</h1>
        <h1 className="list-title">Done..! 🎉</h1>
        <h1 style={{color:'red'}}>{doneCount}</h1>
      </div>
      <CustomButton theme={'type2'} size={'small'} onClick={onLogOut}>LogOut</CustomButton>
    </ProfileContainer>
  </div>)
}

export default Profile