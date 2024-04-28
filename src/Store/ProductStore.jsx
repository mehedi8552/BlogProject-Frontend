import { create } from "zustand";
import axios from 'axios'
//import { getEmail, setEmail, unauthorized } from "../utility/utility";
//import Cookies from "js-cookie";
const UserStore = create((set) => ({

    SliderList:null,
    SliderListRequest:async()=>{
        let res= await axios.get(`/api/v1/ReadProduct`);
        if(res.data['status']==="success"){
            set({SliderList:res.data['data']})  
        }
    },
    ProfileList:null,
    ProfileListRequest:async()=>{
        let res= await axios.get(`/api/v1/AllBloggerProfile`);
        if(res.data['status']==="success"){
            set({ProfileList:res.data['data']})  
        }
    },
    CardList:null,
    CardListRequest:async()=>{
        let res= await axios.get(`/api/v1/ReadProduct`);
        if(res.data['status']==="success"){
            set({CardList:res.data['data']})  
        }
    },
    ListByRemark : null,
    RemarkRequest:async (Remark)=>{
        let res = await  axios.get(`/api/v1/ProducListByRemark/${Remark}`);
        if(res.data['status'] === "success"){
            set({ListByRemark:res.data['data']});
        }
    },
    KeywordListRequest:async(keyword)=>{
        set({ListProduct:null} )
        let res = await axios.get(`/api/v1/ProducListByKeyword/${keyword}`)
        if(res.data['status']=== "success"){
            set({ListProduct:res.data['data']})
        }
    },
    //////////////////////

    Createproduct: {
        title: "", Description: "", remark: "", image: ""
      },
      
      setCreateproduct:(name,value)=>{
       set((state)=>({
        Createproduct:{
            ...state.Createproduct,
            [name]:value
        }
       })) 
      },
      CreateRequest: async(postBody,productID)=>{
        
        try{
            console.log(postBody)
            if (productID == null){
                let res = await axios.post(`/api/v1/CreateProduct`,postBody);
                console.log(res.data)
                return res.data['status'] === 'success';
            } else{
                let res = await axios.post(`/api/v1/UpdateProduct/${productID}`,postBody);
                return res.data['status'] === 'success';
            }
        }
        catch(e){
            unauthorized(e.response.status)
        }
      },
      Details: null,
      DetailsRequest:async (productID)=>{
        let res = await  axios.get(`/api/v1/BloggerPostByID/${productID}`);
            if(res.data['status']=== "success"){
                set({Details:res.data['data']})
            }
        
    },
}));

export default UserStore;
