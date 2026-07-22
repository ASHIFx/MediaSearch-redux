import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const Homepage = () => {

  const { query } = useSelector((store)=> store.search)
  return (
    <div className='bg-(--c3) h-screen'>
        <SearchBar/>
        {query != ''?
        <>
        <Tabs/>
        <ResultGrid/>
        </>
        :
        <div className='text-center pt-3 text-2xl font-semibold h-screen bg-(--c3)'>
          Search Something
        </div>
        }
    </div>
  )
}

export default Homepage