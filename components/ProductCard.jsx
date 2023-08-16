import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    <div className={`bg-[url('/images/product2.png')] h-[350px] relative p-[16px]`}>
      <div className='absolute bottom-[3%] z-10 flex gap-[10px] justify-between md:w-[240px] '>
        <div className='flex flex-col gap-[10px] pt-[20px]'>
<h3 className='text-[#fff] font-[700] text-[14px] md:text-[18px]'>Pablo Esocobar</h3>
<span className='text-[#DDDDDD] font-[500] text-[10px] md:text-[14px]'>117k Followers</span>
<span className='text-[#DDDDDD] font-[500] text-[10px] md:text-[14px]'>#video #music #play</span>

<Link href='/' className='bg-[#D03459] text-[#fff] flex justify-center items-center w-[86px] h-[25px] font-[600] text-[10px] md:text-[13px]'>
Buy Now
</Link>
        </div>

        <div className='flex flex-col gap-[10px]'>
<div className='flex flex-col'>
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.001 1.73198C12.35 -0.378682 15.98 -0.308611 18.2426 1.96104C20.5053 4.2307 20.583 7.84663 18.4786 10.205L9.9999 18.7056L1.52138 10.205C-0.582952 7.84663 -0.504292 4.22498 1.75736 1.96104C4.02157 -0.305458 7.64519 -0.381815 10.001 1.73198Z" fill="white"/>
</svg>
<span className='text-[#fff] text-[14px] font-[500]'>23.5k</span>
</div>
<div className='flex flex-col'>
<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6.2614C0 2.9478 2.67654 0.261597 6.00066 0.261597H13.9993C17.3134 0.261597 20 2.9591 20 6.2614V18.2798H6.00066C2.68659 18.2798 0 15.5823 0 12.28V6.2614ZM12 8.26969V10.2717H14V8.26969H12ZM6 8.26969V10.2717H8V8.26969H6Z" fill="white"/>
</svg>

<span className='text-[#fff] text-[14px] font-[500]'>23.5k</span>
</div>
<div className='flex flex-col'>
<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.493 14.3284L5.65177 11.6851C5.05243 12.2806 4.22703 12.6486 3.31579 12.6486C1.48453 12.6486 0 11.1625 0 9.32942C0 7.4963 1.48453 6.01027 3.31579 6.01027C4.22698 6.01027 5.05233 6.37818 5.65166 6.97371L10.493 4.33036C10.4459 4.10749 10.4211 3.87638 10.4211 3.63946C10.4211 1.80634 11.9056 0.320312 13.7368 0.320312C15.5681 0.320312 17.0526 1.80634 17.0526 3.63946C17.0526 5.47257 15.5681 6.9586 13.7368 6.9586C12.8256 6.9586 12.0002 6.59066 11.4009 5.99509L6.55962 8.63837C6.60678 8.86132 6.63158 9.09243 6.63158 9.32942C6.63158 9.56631 6.60679 9.79741 6.55965 10.0203L11.4009 12.6637C12.0003 12.0682 12.8257 11.7002 13.7368 11.7002C15.5681 11.7002 17.0526 13.1863 17.0526 15.0194C17.0526 16.8525 15.5681 18.3385 13.7368 18.3385C11.9056 18.3385 10.4211 16.8525 10.4211 15.0194C10.4211 14.7825 10.4459 14.5513 10.493 14.3284Z" fill="white"/>
</svg>

<span className='text-[#fff] text-[14px] font-[500]'>23.5k</span>
</div>
        </div>

      </div>

    </div>
  )
}

export default  ProductCard