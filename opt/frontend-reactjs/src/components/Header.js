import { FaRegBell, FaUserCircle } from "react-icons/fa";
import logo from "../Assets/vikrant.png";
import { Link } from "react-router-dom";
const Header = () => {
  function dev() {
    alert("In Development")
  }
  return (
    <div className="top-navigation fixed">
      <Title />
      <div onClick={dev}>
        <BellIcon />
      </div>
      <Link to = "/signout">
        <UserCircle />
      </Link>
    </div>
  );
};

const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserCircle = () => (
  <FaUserCircle size="24" className="top-navigation-icon mr-20" />
);
const Title = () => (
  <img className="title-text" src={logo} alt="vikrant-logo" />
);

export default Header;
