import React from 'react'
import About from "./About";
import App from "./App";
import Contact from "./Contact";
import { withAuthenticator} from "@aws-amplify/ui-react";

import Dashboard from "./Dashboard";
import { Route, Routes, BrowserRouter, Link, Outlet, useLocation } from "react-router-dom";
function Layout() {
  const pathname = useLocation().pathname
    // const match = useMatch({ path: resolved.pathname, end: true });
  console.log(pathname)
  return (
    <div className='top-header'>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li className={pathname === '/' && 'active'}>
            <Link to="/">Home</Link>
          </li>
          <li className={pathname === '/comment' && 'active'}>
            <Link to="/comment">Comment</Link>
          </li>
          <li className={pathname === '/contents' && 'active'}>
            <Link to="/contents">Contents</Link>
          </li>
          <li className={pathname === '/contact' && 'active'}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

const Login = ({ signOut, user }) => {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="comment" element={<About />} />
        <Route path="contents" element={<Dashboard />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}


export default withAuthenticator(Login);
