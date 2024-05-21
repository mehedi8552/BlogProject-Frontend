import React from "react";
import ProductStore from "../Store/ProductStore";
import { GiCheckMark } from "react-icons/gi";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Remark = () => {
  const { ListByRemark, RemarkRequest } = ProductStore();
  useEffect(() => {
    (async () => {
      await RemarkRequest("All");
    })();
  }, []);
  return (
    <div className="section">
      <div className="container-fluid py-5 bg-white">
        <div className="row">
          <h1 className="headline-4 text-center my-2 p-0">All Blogs</h1>
          {/* <span className="bodySmal mb-3 text-center">
                            Explore a World of Choices Across Our Most Popular
                        </span> */}
          <div className="col-12">
            <div>
              <ul
                className="nav nav-pills  p-3  justify-content-center mb-3 "
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    onClick={() => {
                      RemarkRequest("All");
                    }}
                    className=" nav-link active:bg-green-500 text-black"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-All"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    onClick={() => {
                      RemarkRequest("Location");
                    }}
                    className=" nav-link active:bg-green-500 text-black"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Location"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Location
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    onClick={() => {
                      RemarkRequest("Safety");
                    }}
                    className=" nav-link active:bg-green-500 text-black"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Safety"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Safety
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    onClick={() => {
                      RemarkRequest("Hotel");
                    }}
                    className=" nav-link active:bg-green-500 text-black"
                    id="pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Hotel"
                    type="button"
                    role="tab"
                    aria-controls="pills-disabled"
                    aria-selected="false"
                  >
                    Hotel
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    onClick={() => {
                      RemarkRequest("Transport");
                    }}
                    className=" nav-link active:bg-green-500 text-black"
                    id="pills-disabled-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Transport"
                    type="button"
                    role="tab"
                    aria-controls="pills-disabled"
                    aria-selected="false"
                  >
                    Transport
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2 container">
            {ListByRemark?.map((item, i) => (
              <NavLink
                to={`/blog-details/${item._id}`}
                key={i}
                className="h-60 w-52 bg-yellow-300 m-6 rounded-md no-underline text-black"
              >
                <img
                  className="h-2/4 w-52 rounded-t-md"
                  src={item.image}
                  alt=""
                />
                <div className="mt-4 m-2">
                  <p className="m-1 ml-2">
                    <span className="font-bold ">{item.title}</span>
                  </p>
                  <div className="ml-2 flex">
                    <span className="mt-1 mr-1">
                      <GiCheckMark />
                    </span>
                    <span className="font-bold">{item.remark} </span>{" "}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remark;
