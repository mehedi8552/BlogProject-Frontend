import React from 'react';
import UserStore from "../Store/UserStore";

const AdminLogin = () => {
          const {
                    login,
                    setlogin,
                    OldLoginreq,
                  } = UserStore();
                
                  const loginbtn = async () => {
                    await OldLoginreq(login);
                  };
                  
    return (
        <div className=" h-screen flex justify-center items-center bg-green-200 p-4 ">
        <div className="flex justify-content-center bg-white rounded-xl shadow-md">
          <div>
            <div className=" p-5">
              <h4 className="text-center font-bold text-2xl my-6">
                Admin Login
              </h4>

              <input
                value={login.email}
                onChange={(e) => setlogin("email", e.target.value)}
                required
                placeholder=" Email"
                type="email"
                className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-8 w-80"
              />{" "}
              <br />
              <input
               value={login.password}
               onChange={(e) => setlogin("password", e.target.value)}
               required
               type="password"
                placeholder=" Password"
                className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-8 w-80"
              />{" "}<br/>
              <button onClick={loginbtn} className=" rounded-md m-2 bg-yellow-600 h-8 w-80 text-white hover:bg-yellow-300">
                Submit
              </button>
            </div>
          </div>
        </div>
</div>
          );
};

export default AdminLogin;