import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { Context } from "./../../Context/LoginContext";
import "./AddProduct.css";

function AddProducts() {
  let { currentUser, setCurrentUser } = useContext(Context);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let formSubmit = async (productObj) => {
    console.log(productObj);
    await axios.put("http://localhost:4000/User/add-product", {
      user: currentUser,
      product: productObj,
    });
    console.log("current user", currentUser);
  };

  return (
    <div className="addproduct p-4">
      <div className="card col-lg-7 col-md-8 col-sm-10 col-12 mx-auto shadow-lg  pt-2 pb-4">
        <p className="display-6 text-center text-primary">Add Product</p>
        <div className="w-50 mx-auto">
          <form onSubmit={handleSubmit(formSubmit)}>
            <input
              className="form-control"
              name="productName"
              type="text"
              placeholder="Product Name"
              {...register("productName", { required: true })}
            />
            <br />
            {errors.productName?.type === "required" && (
              <p className="text-danger errs">*Product Name is required</p>
            )}
            <input
              className="form-control"
              name="productId"
              type="number"
              placeholder="Product Id"
              {...register("productId", { required: true })}
            />
            <br />
            {errors.productId?.type === "required" && (
              <p className="text-danger errs">*Product Id is required</p>
            )}
            <input
              className="form-control"
              name="category"
              type="text"
              placeholder="Category"
              {...register("category", { required: true })}
            />
            <br />
            {errors.category?.type === "required" && (
              <p className="text-danger errs">*Category is required</p>
            )}
            <input
              className="form-control"
              name="mrp"
              type="number"
              placeholder="MRP"
              {...register("mrp", { required: true })}
            />
            <br />
            {errors.mrp?.type === "required" && (
              <p className="text-danger errs">*MRP is required</p>
            )}
            <input
              className="form-control"
              name="creationDate"
              type="date"
              placeholder="Creation Date"
              {...register("creationDate", { required: true })}
            />
            <br />
            {errors.creationDate?.type === "required" && (
              <p className="text-danger errs">*Creation Date is required</p>
            )}
            <input
              className="form-control"
              name="expireDate"
              type="date"
              placeholder="Expire Date"
              {...register("expireDate", { required: true })}
            />
            <br />
            {errors.expireDate?.type === "required" && (
              <p className="text-danger errs">*Expirebtn Date is required</p>
            )}
            <div className="text-center">
              <button className=" btn3 btn ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
