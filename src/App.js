import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/LoginContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Contactus from "./components/Contactus/Contactus";
import Aboutus from "./components/Aboutus/Aboutus";
import NotFound from "./components/NotFound/NotFound";
import AddProducts from "./components/AddProducts/AddProducts";
import ListOfProducts from "./components/ListOfProducts/ListOfProducts";
import Logout from "./components/Logout";
import "./App.css";
function App() {
  let { isLogin, setLogin } = useContext(Context);

  return (
    <div className="navbar1">
      <div className="navbar2">
        {["md"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="">
            <Container fluid>
              <Navbar.Brand href="#">Navbar</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Navbar
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>

                    {isLogin === false ? (
                      <>
                        <NavLink
                          className="nav-link "
                          aria-current="page"
                          to="/login"
                        >
                          Login
                        </NavLink>

                        <NavLink
                          className="nav-link "
                          aria-current="page"
                          to="/register"
                        >
                          Register
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink
                          className="nav-link "
                          aria-current="page"
                          to="/"
                          onClick={() => setLogin(false)}
                        >
                          Log Out
                        </NavLink>

                        <NavLink
                          className="nav-link "
                          aria-current="page"
                          to="/addProduct"
                        >
                          Add Product
                        </NavLink>

                        <NavLink
                          className="nav-link "
                          aria-current="page"
                          to="/listOfProducts"
                        >
                          List Of Product
                        </NavLink>
                      </>
                    )}

                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/contactus"
                    >
                      Contact Us
                    </NavLink>

                    <NavLink
                      className="nav-link "
                      aria-current="page"
                      to="/aboutus"
                    >
                      About Us
                    </NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/addProduct" element={<AddProducts />} />
        <Route path="/listOfProducts" element={<ListOfProducts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
