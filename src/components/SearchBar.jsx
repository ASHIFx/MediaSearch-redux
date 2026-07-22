import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/SearchSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
    }
  return (
    <div>
        <form onClick={(e)=>{
            submitHandler(e)
        }}
        className='bg-(--c2) flex items-center justify-between w-full h-20 px-4 text-white gap-4'
        >
            <input 
            value={text}
            className='px-2 py-1 border-2 w-full rounded'
            type="text" 
            placeholder='Search anything'
            onChange={(e)=>{
                setText(e.target.value)
            }}
            />
            <button 
            className='cursor-pointer px-2 py-1 rounded hover:opacity-80 font-semibold active:scale-95 border-2'
            >
                Search
            </button>
        </form>
    </div>
  )
}

export default SearchBar