import { faCartShopping, faHeart, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItem, removeWishlistItem } from '../redux/slices/wishlistSlice'

function Wishlist() {

  const wishlist = useSelector((state)=>state.wishlist)
  console.log(wishlist);

  const dispatch = useDispatch()

  const wishes = (items)=>{
    dispatch(addWishlistItem(items))
    dispatch(removeWishlistItem(items.id))
  }
  
  return (
    
      <>
      <h1 className='pt-32 text-center text-4xl text-violet-700'>Whishlist</h1>
        { wishlist?.length > 0 ?
        <div className='pt-40 mb-10 px-10 md:grid gap-10 grid-cols-4'>
        {
          wishlist?.map((items)=>(
            <div className="p-2">
          <div className='p-3 rounded shadow-lg'>
            <img src={items?.image} alt="no images" className='w-full h-72' />
            <h4 className='text-center text-3xl'>{items?.title.slice(0,10)}...</h4>
            <p className='text-justify'>{items?.description.slice(0,50)}</p>
            <p className='text-2xl'>Price: <span className='text-violet-900'>{items?.price}</span></p>
            <div className='flex justify-between'>
              <button onClick={()=>dispatch(removeWishlistItem(items?.id))} className='p-3 bg-red-700 text-white'><FontAwesomeIcon icon={faTrashCan} /></button>
              <button onClick={()=>wishes(items)} className=' p-3 bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
          ))
          }
       
      </div>
      

          :

      <div className='w-full mt-10 md:grid grid-cols-3'>
        <div></div>
        <div>
          <img src="https://www.pavejewelers.com/assets/images/empty-wishlist.png" alt=""  className='w-full h-80' />
        </div>
        <div></div>
        </div>
      }
      </>
    
  )
}

export default Wishlist