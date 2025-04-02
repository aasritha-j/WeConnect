import { useState, createContext } from "react";

export let Context = createContext();

function LoginContext(props) {
  let [isLogin, setLogin] = useState(false);
  let [currentUser, setCurrentUser] = useState("");
  return (
    <Context.Provider
      value={{ isLogin, setLogin, currentUser, setCurrentUser }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default LoginContext;
