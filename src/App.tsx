import React from "react";
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";

import { LandingPage } from "./Component/LandingPage";
import { LogIn } from "./Component/LogIn";
import { SignUp } from "./Component/SignUp";
import { Thanks } from "./Component/Thanks";

// import React from 'react'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/log-in" element={<LogIn />}></Route>
        <Route path="/sin-in" element={<SignUp />}></Route>
        <Route path="/welcome" element={<Thanks />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

//link for link
// const App = () => {
//   return (
//     <Router>
//     {/* wrap the the BrowserRowter */}
//     <div className='header'>
//      <nav>
//      <ul>
//         <li><Link to='/'>Home</Link> </li>
//         <li><Link to='/about'>About</Link> </li>
//         <li><Link to='/username'>Username</Link> </li>
//       </ul>
//      </nav>

//       <Routes>
//       <Route path='/about' element={<About/>}></Route>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='/username' element={<User/>}></Route>

//     </Routes>
//     </div>
//     </Router>

//   )
// }
export default App;
