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
  loginReq:(name,value)=>{
    set((state)=>({
      login:{
        ...state.login,
        [name]:value
      }
    }));
  },

  OldLoginreq:async (email) => {

   set({ isSubmitbtn: true });
    let res = await axios.post(`/api/v1/Login/${email}`);
    setEmail(email);
    console.log(res)
    set({ isSubmitbtn: false });
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


// নতুন ইউজারের জন্য অ্যাকাউন্ট ক্রিয়েট করার পর ইমে্েলে ওটিপি যাবে। 
// ওটিপি পেইজে গিয়ে ওটিপি ভেরিফাই করে তারপর লগইন পেজ এ নিয়ে যাবে ।অতপর লগইন করলে কুকিই সেট হবে।
// যদি পুরাতন ইউজার হয় তাহলে ইমেইল ভেরিফাই করা লাগবেনা । সোজাসোজি লগইন পেইজ শো করাবেন।

// isSubmitbtn: false,
// OTPReqest: async (postbody) => {
//   set({ isSubmitbtn: true });
//   let res = await axios.post(`/api/v1/UserOTP`,postbody);
//   console.log(postbody);
//   setEmail(postbody["email"]);
//   set({ isSubmitbtn: false });
//   return res.data["status"] === "success";
// },

// OTP: { otp: "" },
// OTPData: async (name, value) => {
//   set((state) => ({
//     OTP: {
//       ...state.OTP,
//       [name]: value,
//     },
//   }));
// },

// LoginRequest: async (otp) => {
//   set({ isSubmitbtn: true });
//   let email = getEmail();
//   let res = await axios.get(`/api/v1/VarifyOTP/${email}/${otp}`);
//   set({ isSubmitbtn: false });
//   return res.data["status"] === "success";
// },


// //LogOut--------------------------
// LogOutRequest: async () => {
//   let res = await axios.get(`/api/v1/UserLogOut`);
//   return res.data["status"] === "success";
// },



// // profile...............

// ProfileFrom: {
//   cus_add: "",
//   cus_city: "",
//   cus_country: "",
//   cus_fax: "",
//   cus_name: "",
//   cus_phone: "",
//   cus_postcode: "",
//   cus_state: "",
//   ship_add: "",
//   ship_city: "",
//   ship_country: "",
//   ship_name: "",
//   ship_phone: "",
//   ship_postcode: "",
//   ship_state: ""
// },

// ProfileFromChange:(name,value)=>{
//  set((state)=>({
//   ProfileFrom:{
//       ...state.ProfileFrom,
//           [name]:value
//   }
//  })) 
// },

// ProfileDetails:null,
// ProfileDetailsRequest:async()=>{
//   try{
//      let res = await axios.get(`/api/v1/ReadProfile`);
//       console.log(res.data)
//       if(res.data['data'].length > 0){
//           set({ProfileDetails:res.data['data'][0]})
//           set({ProfileFrom:res.data['data'][0]})
//       }else{
//           set({ProfileDetails:[]})
//       }
//   }catch (e){
//       unauthorized(e.response.status)
//   }
// },

// ProfileSaveRequest: async(postBody)=>{
//   try{
//       set({ProfileDetails:null});
//       let res = await axios.post(`/api/v1/UpdateProfile`,postBody);
//       return res.data['status'] === 'success';
//   }
//   catch(e){
//       unauthorized(e.response.status)
//   }
// }

}));

export default UserStore;
