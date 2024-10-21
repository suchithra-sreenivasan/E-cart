import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
    <div className='pt-32'>
      <h1 className='text-center text-4xl text-violet-900'>Cart</h1>
      <div className='md:grid grid-cols-[2fr_1fr] my-10'>
        <div className=' md:py-5 md:px-20'>
          <table className='w-full border border-gray-400'>
            <thead>
              <tr>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>#</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Tittle</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Image</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Price</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-gray-100 p-3 '>1</td>
                <td className='border border-gray-100 p-3'>dummy</td>
                <td className='border border-gray-100 p-3 flex justify-center'><img src="https://aqualogica.in/cdn/shop/products/7__1200x1200__2.jpg?v=1701149493" alt="no image" style={{width:'100px',height:'100px'}} /></td>
                <td className='border border-gray-100 p-3'>$40</td>
                <td className='border border-gray-100 p-3 text-center'><button className='bg-red-700  p-3 text-white rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='pt-5 px-3'>
          <div className='p-3 shadow-lg'>
            <h1 className='text-center text-3xl'>Cart Summary</h1>
            <p className='mt-4 text-xl'>Total number of products : 7</p>
            <p className='mt-2 text-xl'>Grand Total: $700</p>
            <button className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>Check Out</button>

          </div>
        </div>
      </div>


      
      <div className='w-full mt-10 md:grid grid-cols-3'>
        <div></div>
        <div className='flex justify-center items-center flex-col my-10'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png?f=webp" alt=""  className='w-full h-80' />
          <p className='text-center text-violet-800'>Your cart is empty</p>
          <Link to={'/'}><button className='bg-green-600 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2'/>BckHome</button></Link>
        </div>
        <div></div>
      </div>
    </div>
    </>
  )
}

export default Cart