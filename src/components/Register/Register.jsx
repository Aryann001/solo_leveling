"use client";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { MdOutlineKey } from "react-icons/md";
import { TbTournament } from "react-icons/tb";
import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/v1/register`, user);

      if (data.success) {
        console.log(data);
        router.push("/");
      }
    } catch (error) {
      console.log("Something Went Wrong!");
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="registerContainer">
      <div>
        <div className="rc-1">
          <form onSubmit={registerHandler}>
            <div className="rc-1-input">
              <TbTournament />
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                required
              />
            </div>
            <div className="rc-1-input">
              <CiUser />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            <div className="rc-1-input">
              <MdOutlineKey />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </div>
            <div className="rc-1-links">
              <div></div>
              {/*  */}
              <Link href={"/login"}>Already Have Account ?</Link>
            </div>
            <input type="submit" value="LOGIN" className="registerBtn" />
          </form>
        </div>
        {/*  */}
        <div className="rc-2">
          <div>
            <button className="registerBtn">LOGIN with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
