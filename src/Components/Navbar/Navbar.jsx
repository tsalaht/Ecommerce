import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useContext, useState,useEffect } from 'react'
import { Link,useLocation  } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
export default function Navbar() {
  const [nav, setNav]=useState(false);
  const handel =()=>{
    setNav(!nav)
  }
  const location = useLocation();
  const {Cart} = useContext(ShopContext);
  const [activeItem, setActiveItem] = useState('shop');
  
  useEffect(() => {
    const pathname = location.pathname;

  
    if (pathname === '/' || pathname === null || pathname === '' || pathname === '/ecommerce') {
      setActiveItem('Shop');
    } 
  }, [location]);

  return (
    <div className='Navbar px-6 w-full flex items-center justify-between  py-2 shadow-xl h-20 z-30	'>
   <div className='Nav_logo flex items-center'>
 <img src={logo} alt=''/>  
 <p>Salah_Shop</p>
 </div> 
 <ul className="Nav_menu md:flex hidden md:flex-row mx-4 text-lg flex-col">
  <li
    className={`px-4 mx-4 rounded-xl ${
      activeItem === 'Shop' ? 'bg-[#ff0000] text-white' : ''
    }`}
    onClick={() => setActiveItem('Shop')}
  >
    <Link to="/">Shop</Link>
  </li>
  <li
    className={`px-4 mx-4 rounded-xl ${
      activeItem === 'Men' ? 'bg-[#ff0000] text-white' : ''
    }`}
    onClick={() => setActiveItem('Men')}
  >
    <Link to="/mens">Men</Link>
  </li>
  <li
    className={`px-4 mx-4 rounded-xl ${
      activeItem === 'Women' ? 'bg-[#ff0000] text-white' : ''
    }`}
    onClick={() => setActiveItem('Women')}
  >
    <Link to="/womens">Women</Link>
  </li>
  <li
    className={`px-4 mx-4 rounded-xl ${
      activeItem === 'Kids' ? 'bg-[#ff0000] text-white' : ''
    }`}
    onClick={() => setActiveItem('Kids')}
  >
    <Link to="/kids">Kids</Link>
  </li>
</ul>
 
 <div className='nav-login flex items-center'>
    <button className='buttn mr-3 px-4 py-3 rounded-[30px] text-white font-semibold bg-red-600'><Link to="/login">Login</Link></button>
    <Link to='/cart'><img src={cart_icon} className=' cursor-pointer' alt=''/> </Link>
    <div className='counter flex text-white justify-center items-center mt-[-36px] cursor-pointer ml-[-10px] w-6 h-6 bg-red-600 rounded-full p-3'>
    {Cart()}</div>
    <div onClick={handel} className='text-white cursor-pointer  md:hidden'>
    {nav ? <AiOutlineClose size={30} className=' text-black'/>:<AiOutlineMenu size={30} className=' text-black'/>}
   </div>
   <div className={nav ? 'ease-in duration-300 fixed left-0 bg-red-600 top-0 px-2  md:hidden w-[50%] ':'ease-in duration-300 fixed left-[-100%]'}>
   <ul className={'Nav_menu text-white flex flex-col h-screen  '}>
   <li className=' py-4 my-4 cursor-pointer font-bold text-lg   hover:pl-6 ' onClick={handel}><Link to="/">Shop</Link></li>
    <li className=' py-4 my-4 cursor-pointer font-bold text-lg  hover:pl-6  ' onClick={handel}><Link to='/mens'>Men</Link></li>
    <li className=' py-4 my-4 cursor-pointer font-bold text-lg hover:pl-6  ' onClick={handel}><Link to='/womens'>Women</Link></li>
    <li className=' py-4 my-4 cursor-pointer font-bold text-lg  hover:pl-6  ' onClick={handel}><Link to='/kids'>kids</Link></li>
    <img src={logo} alt=''/> 
 </ul>
 
   </div>
 </div>
    </div>
  )
}
