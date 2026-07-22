import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/SearchSlice'

const Tabs = () => {
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)
    const tabs = ['photos','videos','gif']
  return (
    <div className='bg-(--c3) flex gap-4 p-4'>
       {tabs.map(function(elem,idx){
        return (
            <button
            key={idx}
            className={`${(activeTab==elem?'bg-(--c2)':'bg-(--c4)')} hover:opacity-85 font-semibold transition cursor-pointer active:scale-95 px-4 py-1 rounded uppercase border`}
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}
            >
                {elem}
            </button>
        )
       }
       )
       }
    </div>
  )
}

export default Tabs