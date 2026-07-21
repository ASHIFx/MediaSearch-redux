import React from 'react'
import SearchBar from '../component/SearchBar'
import Tabs from '../component/Tabs'
import ResultGrid from '../component/ResultGrid'
import { useSelector } from 'react-redux'

const Homepage = () => {

  const { query } = useSelector((store)=> store.search)
  return (
    <div>
        <SearchBar/>
        {query != ''?
        <>
        <Tabs/>
        <ResultGrid/>
        </>
        :
        <div className='text-center mt-3 text-2xl font-semibold'>
          Search Something
        </div>
        }
    </div>
  )
}

export default Homepage