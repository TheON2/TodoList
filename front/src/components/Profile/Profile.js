import {ProfileContainer, ProfileOptions, ProfilePicture, UserName} from "./style";

const Profile =()=>{
  //유저 정보를 state에서 들고옴
  return(<div>
    <ProfileContainer className="profile block">
      <a className="add-button" href="#28"><span className="icon entypo-plus scnd-font-color"></span></a>
      <ProfilePicture >
        <img width="150px" alt="Anne Hathaway picture" src="https://avatars.githubusercontent.com/u/32028454?s=400&u=7993b49546f6ebb45968dbafa6c97c5789ec2254&v=4" />
      </ProfilePicture>
      <UserName >TheON2</UserName>
      <div className="profile-description">
        <p className="scnd-font-color">아 CSS 너무 재밌다!</p>
      </div>
      <div>
        <h2 className="list-title">Working.. 🔥</h2>
        <h1 style={{color:'blue'}}>14</h1>
        <h2 className="list-title">Done..! 🎉</h2>
        <h1 style={{color:'red'}}>16</h1>
      </div>
    </ProfileContainer>
  </div>)
}

export default Profile