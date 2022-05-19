import { Link } from "react-router-dom";
import "./styles/Home.css"

const Home = () => {
  return (
    <>
      <h1 className="homeTitle">Assignment 3</h1>
      <div className="homeButtonContainer">
        <Link to="/v1">
          <button className="toV1">Version 1</button>
        </Link>

        <Link to="/v2">
          <button className="toV2">Version 2</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
