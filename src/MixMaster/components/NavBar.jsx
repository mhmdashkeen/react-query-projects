import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/NavBarPage';
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <span className='logo'>MixMaster</span>
        <div className='nav-links'>
          <NavLink to='/mix-master' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/mix-master/about' className='nav-link'>
            About
          </NavLink>
          <NavLink to='/mix-master/newsletter' className='nav-link'>
            Newsletter
          </NavLink>
        </div>
     </div>
    </Wrapper>
  );
};



export default Navbar;