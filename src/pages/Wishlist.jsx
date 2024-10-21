import { faCartShopping, faHeart, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Wishlist() {
  return (
    
      <>
      <h1 className='pt-32 text-center text-4xl text-violet-700'>Whishlist</h1>
        <div className='pt-40 mb-10 px-10 md:grid gap-10 grid-cols-4'>
        <div className="p-2">
          <div className='p-3 rounded shadow-lg'>
            <img src="https://lh3.googleusercontent.com/proxy/5D9A-bqOKR6ohtboMLvuI3ib2wKa83ydvDAYwb8ZFysFj_J-pJFt5xate6eliNJUTii4ydOvN6tPz33RtkV2GYeq1jbAUxpBHIv_Vilzp0RucrsPBdHdHVl2KL_wlKM2CBtjrKrBRdxx9ra5ZQzga7_RxLl6ajnbhBZYdlpybwEkiw" alt="no images" className='w-full h-72' />
            <h4 className='text-center text-3xl'>Title</h4>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur repellendus soluta cumque, illo tenetur accusamus iure nisi corporis quos esse libero est, beatae porro error odio, aliquam rem voluptatum nam!</p>
            <p className='text-2xl'>Price: <span className='text-violet-900'>₹1500</span></p>
            <div className='flex justify-between'>
              <button className='p-3 bg-red-700 text-white'><FontAwesomeIcon icon={faTrashCan} /></button>
              <button className=' p-3 bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
        <div className=" p-2">
        <div className='p-3 rounded shadow-lg '>
            <img src="https://lh3.googleusercontent.com/proxy/Bdi6gOnHlwuPezKQi62WyWc02IyJMSNZHNpLIIyN2ScRnxy-sDcKg33B-kKzH0VdDC5c4eIcX8R47EbnJBg2RO1qZDmIKc7Tab3BRaTelC138PB7tLCrtl0A" alt="no images" className='w-full h-72' />
            <h4 className='text-center text-3xl'>Title</h4>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur repellendus soluta cumque, illo tenetur accusamus iure nisi corporis quos esse libero est, beatae porro error odio, aliquam rem voluptatum nam!</p>
            <p className='text-2xl'>Price: <span className='text-violet-900'>₹1500</span></p>
            <div className='flex justify-between'>
              <button className='p-3 bg-red-700 text-white'><FontAwesomeIcon icon={faTrashCan} /></button>
              <button className=' p-3 bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
        <div className=" p-2">
        <div className='p-3 rounded shadow-lg'>
            <img src="https://lh5.googleusercontent.com/proxy/mwEeey3p8JYMRSjhXb7CfeW-FtyOrG-lLy4e4cFnvBG9UELDHC9-RaRmh5DicWOM3Peho9RDhZT0DXj289_lXiXmAX3nvCzrHMn9uOIMh4QGqW8sVvIGNAHcDmgKgmZ0Idi27A" alt="no images" className='w-full h-72' />
            <h4 className='text-center text-3xl'>Title</h4>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur repellendus soluta cumque, illo tenetur accusamus iure nisi corporis quos esse libero est, beatae porro error odio, aliquam rem voluptatum nam!</p>
            <p className='text-2xl'>Price: <span className='text-violet-900'>₹1500</span></p>
            <div className='flex justify-between'>
              <button className='p-3 bg-red-700 text-white'><FontAwesomeIcon icon={faTrashCan} /></button>
              <button className=' p-3 bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
        <div className=" p-2">
        <div className='p-3 rounded shadow-lg'>
            <img src="https://lh5.googleusercontent.com/proxy/Ha1FVu7VTTOiNtOeq_NvfUzKRdlsrNiVGr8ubLL_LnO1Egj8mm0KnKN6jM9xbKji-aBHWlcMfBBSUEH0CywpKfws8-A3xvsIDwDtfrjNwu_rUETGZ1aFGxHffvuhvu1HU1Q" alt="no images" className='w-full h-72' />
            <h4 className='text-center text-3xl'>Title</h4>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur repellendus soluta cumque, illo tenetur accusamus iure nisi corporis quos esse libero est, beatae porro error odio, aliquam rem voluptatum nam!</p>
            <p className='text-2xl'>Price: <span className='text-violet-900'>₹1500</span></p>
            <div className='flex justify-between'>
              <button className='p-3 bg-red-700 text-white'><FontAwesomeIcon icon={faHeart} /></button>
              <button className=' p-3 bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full mt-10 md:grid grid-cols-3'>
        <div></div>
        <div>
          <img src="https://www.pavejewelers.com/assets/images/empty-wishlist.png" alt=""  className='w-full h-80' />
        </div>
        <div></div>
        </div>
      </>
    
  )
}

export default Wishlist