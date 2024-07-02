"use client"
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { MdOutlineKey } from "react-icons/md";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="loginContainer">
      <div>
        <div className="lc-1">
          <form>
            <div className="lc-1-input">
              <CiUser />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            <div className="lc-1-input">
              <MdOutlineKey />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </div>
            <div className="lc-1-links">
              <Link href={"/forgotpassword"}>Forgot Password ?</Link>
              {/*  */}
              <Link href={"/register"}>Create New Account ?</Link>
            </div>
            <input type="submit" value="LOGIN" className="loginBtn" />
          </form>
        </div>
        {/*  */}
        <div className="lc-2">
          <div>
            <button className="loginBtn">LOGIN with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
