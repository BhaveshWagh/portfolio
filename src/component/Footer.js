import { Link } from "react-router-dom";
import { LINKEDIN_URL } from "../utils/constants";

// import { LINKEDIN_URL } from "../constants";
const Footer = () => {
  return (
    <div className="footer mb-1">
      <div className="footer-items flex shadow-lg justify-center p-10 border rounded-xl">
         
        Made with in India ❤
        <div className="mx-1">
          {" "}
          <span className="font-bold text-slate-700">
            No &copy; copyright issues.{" "}
          </span>{" "}
          Feel free to copy. If you need any help, ping me !
        </div>
        <Link className="font-bold text-base text-gray-500" to={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          Bhavesh Wagh
        </Link>
      </div>
      
    </div>
  );
};

export default Footer;
