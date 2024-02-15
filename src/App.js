import React from "react";
import MyRouter from "./router/index.js";
import Navbar from "./components/Navbar.js";
import AuthUser from "./components/AuthUser.js";
import AuthRoute from "./router/AuthRoute.jsx";

function App() {
  const {getToken} = AuthUser();
  if(!getToken()) 
  {
    return <AuthRoute/>
  }
  return (
    <div>
      <Navbar />
      
      <MyRouter />
    </div>
  );
}

export default App;
