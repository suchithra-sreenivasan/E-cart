import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='min-h-80 text-white bg-violet-900 p-10 w-full grid grid-cols-1 md:grid-cols-4 gap-10'>
        

        <div>
          <h1 className='text-4xl flex items-center'>
            <FontAwesomeIcon icon={faCartShopping} className='mr-2' />
            E-Cart
          </h1>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eligendi odit aspernatur iure quas deserunt iste voluptatum obcaecati id? Ipsum earum laudantium consequatur suscipit impedit, modi possimus officia vero aperiam.
          </p>
        </div>
        

        <div>
          <h1 className='text-2xl mb-4'>Links</h1>
          <ul>
            <Link to={'/'}><li><a href="" className='hover:underline'>Home</a></li></Link>
            <Link to={'/wishlist'}><li><a href="" className='hover:underline'>Wishlist</a></li></Link>
            <Link to={'/cart'}><li><a href="" className='hover:underline'>Cart</a></li></Link>
          </ul>
        </div>
        
        <div>
          <h1 className='text-2xl mb-4'>Guides</h1>
          <ul>
            <li><a href="" className='hover:underline'>React</a></li>
            <li><a href="" className='hover:underline'>React Bootstrap</a></li>
            <li><a href="" className='hover:underline'>Bootswatch</a></li>
          </ul>
        </div>

        <div>
          <h1 className='text-2xl mb-4'>Contact Us</h1>
          <div className='flex mb-4'>
            <input type="text" placeholder="Your Email" className='p-2 rounded-md text-black w-full'/>
            <button className='bg-red-500 text-black px-4 py-2 ms-3 rounded-md'>Subscribe</button>
          </div>
          <div className='text-white text-3xl flex justify-between '>
          <FontAwesomeIcon icon={faInstagram}  />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        </div >
        
      </div>
    </>
  );
}

export default Footer;
