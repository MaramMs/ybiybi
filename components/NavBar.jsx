'use client'
import React, { useState } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
const NavBar = () => {
  const [openMenu,setOpenMenu] = useState(false);
  const handleButtonMenu =() =>{
    setOpenMenu(!openMenu)
  }
  return (
    <>
     <div className='md:px-[230px] px-[16px] py-[16px] bg-[#fff] md:flex-row flex items-center justify-between'>
  <div className="logo">
    <img src="/images/logo.png" alt="" />
  </div>

  <div className=' md:flex-row flex-col md:flex justify-end items-center grow gap-[50px] hidden '>
  <ul className='md:flex-row flex flex-col gap-[20px] md:gap-[30px] text-[#aaa] font-[500] text-[16px]'>
    <li>
      <Link href=''>
      Home
      </Link>
    </li>

    <li>
      <Link href=''>
      About Us
      </Link>
    </li>
    <li>
      <Link href=''>
      Community
      </Link>
    </li>
    <li>
      <Link href=''>
      Shope
      </Link>
    </li>
    <li>
      <Link href=''>
      Contact
      </Link>
    </li>

  </ul>

  <div className='flex items-center gap-[10px]'>
    <Link href='/' className='text-[#aaa] font-[500] text-[16px]'>
    log in
    </Link>
    <span className='h-[1px] w-[15px] rotate-[90deg] bg-[#AAAAAA]'></span>

    <div className='relative'>
      <span className='absolute -right-[7px]  -top-[3px] w-[12px] h-[12px] bg-[#D03459] flex justify-center items-center text-[#fff] rounded-[8px] text-[12px]'>0</span>
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.125 11.5602H10.5724C13.9381 11.5602 14.4499 9.44368 15.0708 6.35673C15.2498 5.46636 15.3394 5.02118 15.124 4.72458C14.9087 4.42798 14.496 4.42798 13.6705 4.42798H3.625" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round"/>
<path d="M5.125 11.5602L3.15905 2.18691C2.99211 1.51848 2.39214 1.04956 1.70384 1.04956H1" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round"/>
<path d="M5.785 11.5602H5.47643C4.45391 11.5602 3.625 12.4245 3.625 13.4907C3.625 13.6684 3.76315 13.8125 3.93357 13.8125H12.25" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<ellipse cx="7" cy="14.9386" rx="1.125" ry="1.12614" stroke="#AAAAAA" stroke-width="1.5"/>
<ellipse cx="12.25" cy="14.9386" rx="1.125" ry="1.12614" stroke="#AAAAAA" stroke-width="1.5"/>
</svg>

    </div>
  </div>

 <Link href='/' className='bg-[#000] w-[140px] h-[50px] text-[#fff] font-[600] text-[16px] flex justify-center items-center'>
    Sign Up
 </Link>

 <div className='flex items-center gap-[10px]'>
<img src="/images/seller.png" alt="" />
 <span className='h-[1px] w-[15px] rotate-[90deg] bg-[#AAAAAA]'></span>
<img src="/images/marketer.png" alt="" />
 </div>
</div>





  <Button onClick={handleButtonMenu} className='md:hidden' >
  menu
</Button>


 </div>


{
  openMenu && 
  <div className=' md:flex-row flex-col flex justify-end px-[16px] grow gap-[50px] '>
  <ul className='md:flex-row flex flex-col gap-[20px] md:gap-[60px] text-[#aaa] font-[500] text-[16px]'>
    <li>
      <Link href=''>
      Home
      </Link>
    </li>

    <li>
      <Link href=''>
      About Us
      </Link>
    </li>
    <li>
      <Link href=''>
      Community
      </Link>
    </li>
    <li>
      <Link href=''>
      Shope
      </Link>
    </li>
    <li>
      <Link href=''>
      Contact
      </Link>
    </li>

  </ul>

  <div className='flex items-center gap-[10px]'>
    <Link href='/' className='text-[#aaa] font-[500] text-[16px]'>
    log in
    </Link>
    <span className='h-[1px] w-[15px] rotate-[90deg] bg-[#AAAAAA]'></span>

    <div className='relative'>
      <span className='absolute -right-[7px]  -top-[3px] w-[12px] h-[12px] bg-[#D03459] flex justify-center items-center text-[#fff] rounded-[8px] text-[12px]'>0</span>
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.125 11.5602H10.5724C13.9381 11.5602 14.4499 9.44368 15.0708 6.35673C15.2498 5.46636 15.3394 5.02118 15.124 4.72458C14.9087 4.42798 14.496 4.42798 13.6705 4.42798H3.625" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round"/>
<path d="M5.125 11.5602L3.15905 2.18691C2.99211 1.51848 2.39214 1.04956 1.70384 1.04956H1" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round"/>
<path d="M5.785 11.5602H5.47643C4.45391 11.5602 3.625 12.4245 3.625 13.4907C3.625 13.6684 3.76315 13.8125 3.93357 13.8125H12.25" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<ellipse cx="7" cy="14.9386" rx="1.125" ry="1.12614" stroke="#AAAAAA" stroke-width="1.5"/>
<ellipse cx="12.25" cy="14.9386" rx="1.125" ry="1.12614" stroke="#AAAAAA" stroke-width="1.5"/>
</svg>

    </div>
  </div>

 <Link href='/' className='bg-[#000] w-[140px] h-[50px] text-[#fff] font-[600] text-[16px] flex justify-center items-center'>
    Sign Up
 </Link>

 <div className='flex items-center gap-[10px]'>
<img src="/images/seller.png" alt="" />
 <span className='h-[1px] w-[15px] rotate-[90deg] bg-[#AAAAAA]'></span>
<img src="/images/marketer.png" alt="" />
 </div>
</div>

}
    </>




  )
}


export default NavBar;

