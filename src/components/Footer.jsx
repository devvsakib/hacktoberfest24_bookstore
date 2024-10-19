import React from 'react';
import { images } from '../config/images';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <footer className="footer text-neutral-content py-24 px-10 md:px-0">
        <div className='max-w-[1280px] mx-auto flex gap-10 flex-col md:flex-row justify-between w-full'>
          <aside>
            <img src={images.logo} className='rounded-md w-14' />
            <p className='text-4xl font-semibold pt-2'>
              SunnahBookshop
            </p>
            <span>Providing authentic Islamic books.</span>
          </aside>
          <nav>
            <h6 className="footer-title text-3xl">Contact</h6>
            <div className='flex gap-3 items-center'>
              <Link to="https://www.facebook.com/Sunnahbookshop" target="_blank">
                <img className='w-8' src={images.facebook} alt='Facebook' typeof='button' />
              </Link>
              <Link to="https://wa.me/8801641447822" target="_blank">
                <img className='w-8' src={images.whatsapp} alt='WhatsApp' typeof='button' />
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
