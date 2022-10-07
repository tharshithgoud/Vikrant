import {
    FaRegBell,
    FaUserCircle,
  } from 'react-icons/fa';
  import logo from '../Assets/vikrant.png'

  const Header = () => {
    return (
      <div className='top-navigation fixed'>
        <Title />
        <BellIcon />
        <UserCircle />
      </div>
    );
  };
  

  

  const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
  const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon mr-20' />;
  const Title = () => <img className = 'title-text' src = {logo} alt = 'vikrant-logo'/>;
  
  export default Header;