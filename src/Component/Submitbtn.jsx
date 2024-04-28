import React from 'react';
import UserStore from '../../store/UserStore';

const Submitbtn = (props) => {

    const {isSubmitbtn} = UserStore();

    if (isSubmitbtn === false){

        return <button onClick={props.onClick} className=" w-96 ml-10 rounded-xl font-semibold text-white py-2 px-4 bg-green-800 flex justify-center items-center mt-3 btn-success" text="Submit" > Submit</button>
    }else{
        return <button className=" w-96 ml-10 rounded-xl font-semibold text-white py-2 px-4 bg-green-800 flex justify-center items-center mt-3 btn-success" text="Submit" ><div className="spinner-border spinner-border-sm " role="status"></div> Processing...</button>
    }

};

export default Submitbtn;