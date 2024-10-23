import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItem } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'

function Home() {

  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);

  const dispatch = useDispatch()

  
  return (
    <div className='pt-40 mb-10 px-10 md:grid gap-10 grid-cols-4'>
      {
        data?.length>0 &&
        data?.map((items)=>(
          <div className="p-2">
        <div className='p-3 rounded shadow-lg'>
          <img src={items?.image} alt="no images" className='w-full h-60' />
          <h4 className='text-center text-2xl'>{items?.title.slice(0,20)}...</h4>
          <p className='text-justify'>{items?.description.slice(0,100)}</p>
          <p className='text-2xl'>Price: <span className='text-violet-900'>{items?.price}</span></p>
          <div className='flex justify-between'>
            <button onClick={()=>dispatch(addWishlistItem(items))} className='p-3 bg-red-700 text-white'><FontAwesomeIcon icon={faHeart} /></button>
            <button onClick={()=>dispatch(addItemToCart(items))} className=' p-3 bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
      </div>
        ))
      
      }
     
    </div>
  )
}

export default Home