import axios from "axios";
import {useDispatch} from "react-redux";
import {unauthUser} from "../redux/reducers/userSlice";
import store from "../redux/config/configStore";

const instance = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_SERVER,
  withCredentials: true,
});

instance.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행
    console.log("인터셉트 요청 성공!");
    return config;
  },
  function (error) {
    // 오류 요청을 보내기 전 수행
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 502 || error.response.status === 501) {
        console.log('토큰이 만료 되었습니다.')
        store.dispatch(unauthUser())
    }
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("인터넵트 응답 받았어요!");
    // 정상 응답
    return response;
  },

  function (error) {
    console.log("인터셉트 응답 못받았어요...ㅠㅠ");
    return Promise.reject(error);
  }
);

export default instance;