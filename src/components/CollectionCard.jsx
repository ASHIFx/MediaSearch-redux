import {removeCollection, removeToast } from '../redux/features/CollectionSlice'
import { useDispatch } from 'react-redux'

const CollectionCard = ({ item }) => {
  const href = item.url || null

  const dispatch = useDispatch()

  const removeFromCollection = ( item ) => {
    dispatch(removeCollection(item.id))
    dispatch(removeToast())
  }

  const mediaElement = (() => {
    if (item.type === 'photos') {
      return (
        <img
          className="h-full w-full object-cover object-center"
          src={item.src}
          alt={item.title || 'Result'}
          loading="lazy"
        />
      )
    }

    if (item?.type === 'videos') {
      return (
        <video
          className="h-full w-full object-cover object-center"
          src={item.src}
          muted
          loop
          playsInline
        />
      )
    }

    if (item?.type === 'gif') {
      return (
        <img
          className="h-full w-full object-cover object-center"
          src={item.src}
          alt={item.title || 'GIF'}
          loading="lazy"
        />
      )
    }

    return null
  })()

  return (
    <div className="relative h-80 w-full bg-(--c4) rounded-xl overflow-hidden border">
      {href ? (
        <a href={href} target="_blank" className="block h-full w-full">
          {mediaElement}
        </a>
      ) : (
        <div className="block h-full w-full">
          {mediaElement}
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-linear-to-t from-black/60 via-transparent to-transparent z-10">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-sm font-semibold capitalize max-h-14 overflow-hidden">{item.title}</h2>
          <button
            type="button"
            className="bg-red-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium"
            onClick={() => {
              removeFromCollection(item)
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard