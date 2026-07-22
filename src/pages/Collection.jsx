import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCollection } from '../redux/features/CollectionSlice'
import CollectionCard from '../components/CollectionCard'

const Collection = () => {
  const dispatch = useDispatch()
  const collection = useSelector((state)=> state.collection.items)
  return (
    <div className='bg-(--c3) h-screen'>
      {collection.length > 0?
      <div className='flex justify-between p-4'>
        <h1 className='text-2xl font-bold '>Your Collection</h1>
        <button 
        className='rounded p-2 bg-(--c4) border font-semibold'
        onClick={() => dispatch(clearCollection())}>
          Clear Collection
        </button>
      </div>
      : 
      <div className='text-center pt-4 text-2xl font-bold h-screen'>
        <p>Collection is empty</p>
      </div>
      }

      <div  className="bg-(--c3) w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.map((item,idx)=>{
          return (
            <div key={idx}>
              <CollectionCard item={item}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Collection