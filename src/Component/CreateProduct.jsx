import React from "react";
import ProductStore from "../Store/ProductStore";

const CreateProduct = () => {

  const {
    Createproduct,
    setCreateproduct,
    CreateRequest,
  } = ProductStore();

  const Submit = async () => {
    await CreateRequest(Createproduct);
  };
  //  title: "", Description: "", remark: "", image: ""
  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Create Product</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product title:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={Createproduct.title}
            onChange={(e) => setCreateproduct("title", e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            value={Createproduct.Description}
            onChange={(e) => setCreateproduct("Description", e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            remark:
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={Createproduct.remark}
            onChange={(e) => setCreateproduct("remark", e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL:
          </label>
          <input
            type="url"
            className="form-control"
            id="image"
            value={Createproduct.image}
            onChange={(e) => setCreateproduct("image", e.target.value)}
            required
          />
        </div>
        <button onClick={Submit} text="next" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>

    </div>
  );
};

export default CreateProduct;