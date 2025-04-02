import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import "./ListOfProducts.css";

function ListOfProducts() {
  let navigate = useNavigate();
  let [ProductArr, setProductArr] = useState([]);
  let { isLogin, setLogin, currentUser, setCurrentUser } = useContext(Context);
  useEffect(() => {
    let result = axios
      .get(`http://localhost:4000/User/get-product/${currentUser}`)
      .then((product) => setProductArr(product.data));
    //setProductArr(product.data));
    console.log("Inside useEffect", ProductArr);
  }, []);
  // if (isLogin === false) {
  //   navigate("/");
  // }
  return (
    <div className="listBody">
      <p className="display-6 text-light text-end m-2">Welcome,{currentUser}</p>
      <p className="display-4 text-center text-light">List of Products</p>

      <div className="gradient-custom-1">
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="table-responsive bg-white tabborder">
                  <table className="table mb-0 table-striped  ">
                    <thead className="">
                      <tr className="tabheader">
                        <th scope="col">Product ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Creation Date</th>
                        <th scope="col">Expire Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ProductArr.map((e, index) => (
                        <tr key={index}>
                          <td>{e.productId}</td>
                          <td>{e.productName}</td>
                          <td>{e.category}</td>
                          <td>{e.mrp}</td>
                          <td>{e.creationDate}</td>
                          <td>{e.expireDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOfProducts;
