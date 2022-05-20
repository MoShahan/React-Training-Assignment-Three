import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <h1 className="homeTitle">Assignment 3</h1>
      <div className="homeButtonContainer">
        <Link to="/v1" className="linktags">
          <button className="toV1">Variant 1</button>
        </Link>

        <Link to="/v2" className="linktags">
          <button className="toV2">Variant 2</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
