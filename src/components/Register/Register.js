import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { BsPersonPlusFill } from "react-icons/bs";

function Register() {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let formSubmit = async (userObj) => {
    let result = await axios.post(
      "http://localhost:4000/User/create-user",
      userObj
    );
    console.log(result);
    navigate("/login");
  };
  return (
    <div className="regApp p-4">
      <div className="card col-lg-4 col-md-6 col-sm-8 col-10 mx-auto  border-0 shadow-lg cardapp">
        <div className="card-body">
          <p className="regicon">
            <BsPersonPlusFill />
          </p>
          <p className="heading1">Create Account</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="m-3">
              <input
                className="form-control"
                type="text"
                placeholder="username"
                {...register("user", { required: true })}
              />
              <br />
              {errors.username?.type === "required" && (
                <p className="text-danger errs">*username is required</p>
              )}
              <input
                className="form-control"
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email?.type === "required" && (
                <p className="text-danger errs">*Email is required</p>
              )}
              <input
                className="form-control"
                type="password"
                placeholder="password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password?.type === "required" && (
                <p className="text-danger errs"> *password is required</p>
              )}
              <div className="text-center">
                <button className="btn2 btn" type="submit">
                  Register
                </button>
              </div>
              <p className="pt-5 reglastp">
                Have already an account?{" "}
                <span className="regspan" onClick={() => navigate("/login")}>
                  Login here
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
