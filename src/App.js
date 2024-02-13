import React from "react";
import MyRouter from "./router/index.js";
import Navbar from "./components/Navbar.js";
import AuthUser from "./components/AuthUser.js";
import Login from "./pages/Login.js";

function App() {
  const {getToken} = AuthUser();
  if(!getToken()) 
  {
    return <Login/>
  }
  return (
    <div>
      <Navbar />
      
      <MyRouter />
    </div>
  );
}

export default App;
