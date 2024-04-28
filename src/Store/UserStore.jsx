import { create } from "zustand";
import axios from 'axios'
//import { getEmail, setEmail, unauthorized } from "../utility/utility";
import Cookies from "js-cookie";
const UserStore = create((set) => ({
  islogin: () => {
    return !!Cookies.get("token");
  },
  //islogin-------------------------------------------
  login:{email:"",password:""},
  setlogin:(name,value)=>{
    set((state)=>({
      login:{
        ...state.login,
        [name]:value
      }
    }));
  },

  OldLoginreq:async (body) => {
    let res = await axios.post(`/api/v1/UserLogin`,body);
    //setEmail(body.email);
    console.log(res)
    return res.data["status"] === "success";
  },   

  //SignUP--------------------------------------------
  loginData: {name:"", email: "",mobile:"",password:"" },
  loginDataReq:(name, value) => {
    set((state) => ({
      loginData: {
        ...state.loginData,
        [name]: value,
      },
    }));
  },


}));

export default UserStore;
