import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGif } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/SearchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const dispatch = useDispatch();
    const {query, activeTab, loading, results, error} = useSelector((store) => store.search)

    useEffect(function(){
        const getData = async () => {
            try{
                dispatch(setLoading())
                let data = []
                if(activeTab=='photos'){
                    let response = await fetchPhotos(query)
                    data = response.results.map((item)=>({
                        id: item.id,
                        type: 'photos',
                        title: item.alt_description,
                        thumbnail: item.urls.thumb,
                        src: item.urls.full,
                        url: item.links.html,
                    }))}
                if(activeTab=='videos'){
                    let response = await fetchVideos(query)
                    console.log(response);
                    
                    data = response.videos.map((item)=>({
                        id: item.id,
                        type: 'videos',
                        title: item.user?.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files?.[0]?.link || item.video_files?.[0]?.file,
                        url: item.url,
                    }))
                }
                if(activeTab=='gif'){
                    let response = await fetchGif(query)
                    data = response.data.map((item)=>({
                        id: item.id,
                        type: 'gif',
                        title: item.title || 'gif',
                        thumbnail: item.images?.downsized_still?.url || item.images?.fixed_width_still?.url || item.images?.original_still?.url,
                        src: item.images?.downsized?.url || item.images?.original?.url || item.embed_url,
                        url: item.url,
                    }))
                }
                dispatch(setResults(data))
                
            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activeTab, dispatch])

    if(error) return <h1>error</h1>
    if(loading) return <h1>loading</h1>

    return (
        <div className="bg-(--c3) w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((item) => (
                <ResultCard key={item.id || item.src} item={item} />
            ))}
        </div>
    )
}

export default ResultGrid