import "./page-not-found.scss";
import img from "../../../public/404.png";
export const PageNotFound = () => {
  return <img className="not__found" src={img} alt="not found" />;
};
