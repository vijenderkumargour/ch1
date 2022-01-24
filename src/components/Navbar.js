import { NavLink } from 'react-router-dom';

const Navbar = () => {
    let activeStyle={
        backgroundColor:'red',
        color:"white"
    }
    return (
        <div>
            <ul className='navbar'>
                <li>
                    <NavLink to="/"  actiivclassname="active" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" actiivclassname="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact"  actiivclassname="active">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/product/mobile"  actiivclassname="active">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/product/mobile/1"  actiivclassname="active">Product with id</NavLink>
                </li>
                

            </ul>

        </div>
    );
};

export default Navbar;
{/* <li>
<NavLink to="/" style={({ isActive }) => { return { backgroundColor: isActive ? activeStyle : '' } }} >Home</NavLink>
</li> */}