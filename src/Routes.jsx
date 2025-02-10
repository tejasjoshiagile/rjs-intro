import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from "./Components/Router/Home";
import Contact from "./Components/Router/Contact";
import User from "./Components/Router/User";
import About from "./Components/Router/About/";

import { Layout } from "./Components/Router/Layout.jsx";
import { Github, githubInfoLoader } from "./Components/Router/Github/index.jsx";
import { ErrorPage } from "./Components/Router/ErrorPage/index.jsx";
import { Login } from "./Components/Router/Login/index.jsx";
import { ForgotPassword } from "./Components/Router/ForgotPassword/index.jsx";
import { Signup } from "./Components/Router/Signup/index.jsx";
import { UserListing } from "./Components/Router/UserListing/index.jsx";
import { ProtectedRoutes } from "./Components/ProtectedRoute/index.jsx";

// const Routers = () => {
//   return (
//     <Routes>
//       <Route element={<Layout />} path="/">
//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Route>
//     </Routes>
//   );
// };
const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="git" element={<Github />} loader={githubInfoLoader} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="login" element={<Login />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="signup" element={<Signup />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="list" element={<UserListing />} />
      </Route>
    </Route>
  )
);
export default Routers;
