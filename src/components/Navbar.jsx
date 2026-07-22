import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div
      className='flex items-center justify-between w-full h-16 px-6 text-white bg-(--c1) '
    >
      <div>
        <Link to='/'><h1 className='text-lg font-semibold'>Search Media</h1></Link>
      </div>
      <div className='flex gap-3'>
        <Link to='/'>
        <button
        className='cursor-pointer px-2 py-1 rounded hover:opacity-80 bg-(--c4) text-(--c1) font-semibold active:scale-95'
        >
          Search
        </button>
        </Link>
        <Link to='/collection'>
        <button 
        className='cursor-pointer px-2 py-1 rounded hover:opacity-80 bg-(--c4) text-(--c1) font-semibold active:scale-95'
        >
          Collection
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar