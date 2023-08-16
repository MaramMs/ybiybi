import React from 'react'

const HomeCard = ({bgColor}) => {
    console.log(bgColor , 'color');
  return (
    <div className={`bg-[${bgColor}]  h-[267px] flex flex-col gap-[8px] p-[16px]`} style={{background:bgColor}} >
      <h3 className='text-[#fff] font-[600] text-[50px]'>01</h3>
      <span className='text-[#fff] font-[700] text-[24px]'>Sign Up</span>
      <p className='text-[#fff] font-[500] text-[16px] w-[315px]'>Sign up to find out our new E-community For Shopping</p>

    </div>
  )
}

export default HomeCard
