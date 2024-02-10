import {FaSearch, FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center
       max-w-6xl mx-auto p-3'>
      <h1 className='font-bold text-lg sm:text-xl
       flex flex-wrap'>
        <span className='text-green-700'>Pak</span>
        <span className='text-slate-500'>Estate</span>
      </h1>
      <form className='bg-slate-100 p-3 border
       border-green-700 rounded-lg flex items-center'>
        <input type='text' placeholder='Search...' 
        className='bg-transparent placeholder-green-700 
        placeholder:font-bold focus:outline-none w-24 sm:w-48 ' />
        <FaSearch className='text-green-700' />
      </form>
      <ul className='flex gap-5'>
        <Link to='/'>
        <li className='text-green-700 font-semibold
         sm:inline hover:underline'>Home</li></Link>
        <Link to='/about'>
        <li className='text-green-700 font-semibold
         sm:inline hover:underline'>About</li></Link>
        <Link to='/login'>
        <li className='text-green-700 font-semibold
         sm:inline hover:underline'>Login</li></Link>
      </ul>
      <FaBars className='sm:hidden text-green-700' />
      </div>
    </header>
  ) 
}
