import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <div className="md:px-[230px] py-[50px] px-[16px] flex justify-between h-[926px] flex-wrap">
      <div className="flex flex-col gap-[32px] flex-1">
        <h1 className="text-[#000] font-[700] text-[20px] md:text-[65px] md:pt-[100px]">
          Build Your<br></br> YbiYbi Store 
           
          <br></br>
          And
          <span className="text-[#D03459]">Be Influential</span>
        </h1>

        <p className="md:w-[494px] text-[#888] font-[500] text-[16px]">
          Here, not only the best course, but also the best community.We provide
          YbiYbi accounts to help you get started.
        </p>

        <div className="flex flex-col gap-[20px] w-[400px]">
          
          <div className="flex items-center gap-[10px]">
<span className="bg-[#D03459] w-[50px] h-[1px]"></span>
<h2 className="text-[#000] font-[600] text-[18px]">Join 1000+ YbiYbi Ceo</h2>
          </div>

          <div className="rounded-[50%] flex gap-[20px]">
            <img src="/images/person-img.png" alt="" className="rounded-[50%]"/>
            <div className="flex flex-col gap-[10px]">
              
              <h2 className="text-[#555] font-[600] text-[14px]">HAMEED ALSULTANI - Verified Customer</h2>
            
            <p className="font-[500] text-[#888] text-[14px]">“When I had an idea for the project, my goal was to help everyone get a financial income. All the best for our community”</p>
            </div>

          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <img src="/images/hero-img.png" alt="" />

        <div className="flex flex-col gap-[20px] absolute md:bottom-[30%] -bottom-[8%]">
<div className="flex items-center gap-[10px]">
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.57442 1.26312C7.9133 0.434521 9.0867 0.434521 9.42558 1.26312L11.1625 5.50992C11.2726 5.77926 11.4946 5.98726 11.7706 6.07964L16.1676 7.55173C17.0776 7.85641 17.0776 9.14359 16.1676 9.44827L11.7706 10.9204C11.4946 11.0127 11.2726 11.2207 11.1625 11.4901L9.42558 15.7369C9.0867 16.5655 7.9133 16.5655 7.57442 15.7369L5.83754 11.4901C5.72739 11.2207 5.50538 11.0127 5.22943 10.9204L0.832408 9.44827C-0.0776283 9.14359 -0.0776298 7.85641 0.832407 7.55173L5.22943 6.07964C5.50538 5.98726 5.72739 5.77926 5.83754 5.50992L7.57442 1.26312Z" fill="#5FDDD2"/>
</svg>

<span>
YbiYbi Account
</span>


</div>
          <div className="bg-[#fff] shadow-sm flex justify-around items-center rounded-[70px] w-[400px] md:w-[670px] h-[110px]">
            <div className="flex flex-col gap-[10px]">
<span>Followers</span>
<span>20K Followers</span>


            </div>

            <Link href='/' className='flex gap-[10px] justify-center items-center bg-[#D03459] rounded-[70px] h-[60px] md:w-[345px] text-[#fff] font-[600]  text-[14px] md:text-[18px] '>
            Available Accounts
            <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9998 6.53984L1 6.53984" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7392 1.31722L21 6.56073L15.7392 11.8051" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeHeader;
