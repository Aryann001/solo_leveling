import Link from "next/link";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <p>Welcome To</p>
        <h2>
          <span>Solo Leveling</span>Solo Leveling<span>Solo Leveling</span>
        </h2>
      </div>
      <div>
        <Link href="/login" className="neonBtn">
          Sign In
        </Link>
        <Link href="/register" className="neonBtn">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
