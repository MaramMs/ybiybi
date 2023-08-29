import React from 'react';
import {Row,Col, Input, Button, Space} from 'antd'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#fff]'>
        <div className='md:px-[230px] px-[16px] pt-[80px] pb-[20px]'>
            <Row gutter={[16, 24]}>
                <Col span={24} md={{span:10}} className='gap-[16px]'>

<Space direction='vertical' size='large'>
<img src="/images/logo.png" alt="" />
<p className='text-[#aaa] font-[500] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                
                <ul className='flex gap-[10px]'>
                <li className='w-[45px] h-[45px] border border-[#aaa] rounded-full flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#D03459]'>
  <Link href='/'>
    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.9 8.90336H6.65L7.35 6.10052H4.9V4.69911C4.9 3.97738 4.9 3.29769 6.3 3.29769H7.35V0.943314C7.1218 0.913184 6.2601 0.845215 5.3501 0.845215C3.4496 0.845215 2.1 2.00629 2.1 4.13854V6.10052H0V8.90336H2.1V14.8594H4.9V8.90336Z" fill="#AAAAAA"/>
    </svg>
  </Link>
</li>

                    <li className='w-[45px]  h-[45px] border border-[#aaa] rounded-full flex justify-center items-center'>
                        <Link href='/'>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9994 2.10221C12.5125 2.3178 11.9961 2.45938 11.4675 2.52228C12.0247 2.18867 12.4418 1.66364 12.6409 1.04502C12.118 1.35656 11.5446 1.57489 10.9471 1.693C10.5457 1.26309 10.0136 0.977966 9.43364 0.881964C8.85367 0.785962 8.25825 0.884458 7.73997 1.16214C7.22168 1.43982 6.80956 1.88112 6.56768 2.41745C6.32579 2.95377 6.2677 3.55507 6.40242 4.12786C5.34191 4.07465 4.30442 3.79878 3.35733 3.31815C2.41023 2.83752 1.5747 2.16289 0.904974 1.33805C0.667915 1.74563 0.543339 2.20897 0.544005 2.6806C0.544005 3.60628 1.01467 4.42407 1.73023 4.90287C1.30677 4.88953 0.892623 4.77505 0.522321 4.56899V4.60219C0.522449 5.21869 0.735567 5.81618 1.12554 6.29335C1.51551 6.77051 2.05834 7.098 2.66199 7.22027C2.26889 7.3269 1.8567 7.34262 1.45663 7.26623C1.62683 7.79689 1.95855 8.26098 2.40535 8.59353C2.85215 8.92608 3.39166 9.11044 3.94834 9.12078C3.39508 9.55574 2.76159 9.87728 2.08411 10.067C1.40662 10.2567 0.698423 10.3109 0 10.2265C1.2192 11.0114 2.63845 11.428 4.08801 11.4267C8.99426 11.4267 11.6773 7.35816 11.6773 3.82972C11.6773 3.71481 11.6741 3.59862 11.669 3.48499C12.1912 3.10716 12.642 2.63912 13 2.10285L12.9994 2.10221Z" fill="#AAAAAA"/>
</svg>


                        </Link>
                    </li>
                    <li className='w-[45px] border border-[#aaa]  h-[45px]  rounded-full flex justify-center items-center'>
                        <Link href='/'>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5.75017C6.44305 5.75017 5.9089 5.97164 5.51508 6.36587C5.12125 6.76009 4.9 7.29478 4.9 7.85229C4.9 8.40981 5.12125 8.9445 5.51508 9.33872C5.9089 9.73295 6.44305 9.95442 7 9.95442C7.55695 9.95442 8.0911 9.73295 8.48492 9.33872C8.87875 8.9445 9.1 8.40981 9.1 7.85229C9.1 7.29478 8.87875 6.76009 8.48492 6.36587C8.0911 5.97164 7.55695 5.75017 7 5.75017ZM7 4.34875C7.92826 4.34876 8.8185 4.71788 9.47487 5.37492C10.1313 6.03196 10.5 6.9231 10.5 7.85229C10.5 8.78149 10.1313 9.67263 9.47487 10.3297C8.8185 10.9867 7.92826 11.3558 7 11.3558C6.07174 11.3558 5.1815 10.9867 4.52513 10.3297C3.86875 9.67263 3.5 8.78149 3.5 7.85229C3.5 6.9231 3.86875 6.03196 4.52513 5.37492C5.1815 4.71788 6.07174 4.34876 7 4.34875ZM11.55 4.17358C11.55 4.40588 11.4578 4.62866 11.2937 4.79292C11.1296 4.95718 10.9071 5.04946 10.675 5.04946C10.4429 5.04946 10.2204 4.95718 10.0563 4.79292C9.89219 4.62866 9.8 4.40588 9.8 4.17358C9.8 3.94128 9.89219 3.71849 10.0563 3.55423C10.2204 3.38997 10.4429 3.29769 10.675 3.29769C10.9071 3.29769 11.1296 3.38997 11.2937 3.55423C11.4578 3.71849 11.55 3.94128 11.55 4.17358ZM7 2.24663C5.2682 2.24663 4.9854 2.25154 4.1797 2.28727C3.6309 2.3132 3.2627 2.38677 2.9211 2.51991C2.6173 2.63763 2.3982 2.77847 2.1651 3.0125C1.946 3.2244 1.77755 3.48309 1.6723 3.76927C1.5393 4.11262 1.4658 4.48049 1.4406 5.02914C1.4042 5.80272 1.4 6.0732 1.4 7.85229C1.4 9.58585 1.4049 9.86893 1.4406 10.6754C1.4665 11.2241 1.54 11.5934 1.6723 11.9346C1.7913 12.2394 1.9313 12.4587 2.1637 12.6914C2.3996 12.9268 2.6187 13.0677 2.9197 13.184C3.2655 13.3178 3.6337 13.3921 4.1797 13.4173C4.9525 13.4538 5.2227 13.458 7 13.458C8.7318 13.458 9.0146 13.4531 9.8203 13.4173C10.3677 13.3914 10.7366 13.3178 11.0782 13.1854C11.3813 13.067 11.6018 12.9261 11.8342 12.6935C12.0701 12.4573 12.2108 12.238 12.327 11.9367C12.46 11.5913 12.5342 11.222 12.5594 10.6754C12.5958 9.90187 12.6 9.63139 12.6 7.85229C12.6 6.11874 12.5951 5.83566 12.5594 5.02914C12.5335 4.48119 12.46 4.11121 12.327 3.76927C12.2215 3.48338 12.0534 3.22479 11.8349 3.0125C11.6233 2.79308 11.3649 2.62443 11.0789 2.51921C10.7359 2.38607 10.3677 2.3125 9.8203 2.28727C9.0475 2.25084 8.7773 2.24663 7 2.24663ZM7 0.845215C8.9019 0.845215 9.1392 0.852222 9.8854 0.887257C10.6309 0.922293 11.1384 1.03931 11.585 1.21309C12.047 1.39107 12.4362 1.63211 12.8254 2.021C13.1813 2.37128 13.4568 2.795 13.6325 3.26266C13.8054 3.70901 13.923 4.21772 13.958 4.96398C13.9909 5.71093 14 5.94847 14 7.85229C14 9.75612 13.993 9.99366 13.958 10.7406C13.923 11.4869 13.8054 11.9949 13.6325 12.4419C13.4573 12.9098 13.1818 13.3337 12.8254 13.6836C12.4754 14.0398 12.0521 14.3155 11.585 14.4915C11.1391 14.6646 10.6309 14.7823 9.8854 14.8173C9.1392 14.8503 8.9019 14.8594 7 14.8594C5.0981 14.8594 4.8608 14.8524 4.1146 14.8173C3.3691 14.7823 2.8616 14.6646 2.415 14.4915C1.94763 14.316 1.52427 14.0402 1.1746 13.6836C0.818585 13.3334 0.543152 12.9096 0.3675 12.4419C0.1939 11.9956 0.077 11.4869 0.042 10.7406C0.00909996 9.99366 0 9.75612 0 7.85229C0 5.94847 0.00699996 5.71093 0.042 4.96398C0.077 4.21702 0.1939 3.70971 0.3675 3.26266C0.542665 2.79471 0.818163 2.37088 1.1746 2.021C1.52437 1.6645 1.9477 1.38877 2.415 1.21309C2.8616 1.03931 3.3684 0.922293 4.1146 0.887257C4.8608 0.854324 5.0981 0.845215 7 0.845215Z" fill="white"/>
</svg>

                        </Link>
                    </li>
                    <li className='w-[45px] h-[45px] border border-[#aaa] rounded-full flex justify-center items-center'>
                        <Link href='/'>
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.72823 2.21139C2.72805 2.57354 2.58415 2.92079 2.32821 3.17674C2.07226 3.43269 1.72522 3.57638 1.36343 3.5762C1.00165 3.57602 0.65475 3.43198 0.399057 3.17578C0.143364 2.91957 -0.000180722 2.57218 1.70761e-07 2.21003C0.000181063 1.84787 0.144073 1.50063 0.400022 1.24468C0.655971 0.988724 1.00301 0.845034 1.3648 0.845215C1.72658 0.845396 2.07348 0.989434 2.32917 1.24564C2.58486 1.50185 2.72841 1.84924 2.72823 2.21139ZM2.76915 4.58735H0.0409235V13.1353H2.76915V4.58735ZM7.07975 4.58735H4.36516V13.1353H7.05247V8.64969C7.05247 6.15084 10.3059 5.91871 10.3059 8.64969V13.1353H13V7.72116C13 3.50861 8.18468 3.66564 7.05247 5.73436L7.07975 4.58735Z" fill="#AAAAAA"/>
</svg>


                        </Link>
                    </li>
                    <li className='w-[45px] h-[45px] border border-[#aaa] rounded-full flex justify-center items-center'>
                        <Link href='/'>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3512 0.845215C12.9603 0.845215 14 1.84623 14 3.82177C14 4.96049 13.3399 6.43023 12.7884 7.28758C10.9438 10.1562 8.666 13.0739 6.4107 13.0739C3.95964 13.0739 3.32208 8.55143 3.04297 7.49149C2.76387 6.43156 2.69046 6.02837 2.26916 5.3511C2.05951 5.49675 1.76652 5.70132 1.38953 5.9668C1.24138 6.07074 1.03702 6.03631 0.931198 5.88934L0.0628108 4.68707C-0.0271364 4.56326 -0.0198612 4.39312 0.080668 4.2766C1.95038 2.11038 3.50395 1.02662 4.74205 1.02662C6.32406 1.02662 6.80819 2.89094 6.94047 3.82243C7.13888 5.22398 7.39682 6.95921 7.76322 7.70997C8.13161 7.18563 9.20502 5.79798 9.06415 5.0684C9.00198 4.74665 8.19311 5.18956 7.81613 5.12004C7.53504 5.06708 7.28306 4.8539 7.28306 4.44079C7.28306 3.57351 8.50793 0.845877 11.3512 0.845877V0.845215ZM11.3558 2.16931C9.9041 2.16931 9.20568 3.18422 8.93981 3.6311C9.76653 3.66156 10.2427 4.17266 10.3505 4.82477C10.6078 6.36734 9.08333 8.08204 8.80356 8.50906C8.54166 8.90827 6.77909 10.7123 5.99271 6.28458C5.91864 5.86816 5.74999 4.85258 5.5529 3.51326C5.44046 2.75124 4.97552 2.34607 4.73941 2.34607C4.18253 2.34607 3.46956 2.7764 2.1898 4.01112C3.44972 3.93498 3.873 5.51793 4.11837 6.41633C4.65806 8.39187 5.15739 11.7498 6.51256 11.7498C7.65475 11.7498 9.44841 9.998 11.3869 7.08897C11.5251 6.88307 12.6872 5.08694 12.6872 3.75491C12.6872 2.16931 11.7156 2.16931 11.3558 2.16931Z" fill="#AAAAAA"/>
</svg>

                        </Link>
                    </li>
                   
                </ul>
</Space>
                </Col>

                <Col span={24} md={{span:4}}>
               <Space direction='vertical' size='large'>

               <h2 className='text-[#000] font-[700] text-[20px]'>Company</h2>
                 <ul className='text-[#aaa] text-[15px] font-[500] flex flex-col gap-[10px] list-disc'>
                    <li>What We Do</li>
                    <li>vailable Services</li>
                    <li> Latest Posts</li>
                    <li>FAQs</li>
                 </ul>
               </Space>
                </Col>
                <Col span={24} md={{span:4}}>
                <Space direction='vertical' size='large'>

<h2 className='text-[#000] font-[700] text-[20px]'>Help</h2>
  <ul className='text-[#aaa] text-[15px] font-[500] flex flex-col gap-[10px] list-disc'>
     <li>Shipping & Returns</li>
     <li> Track Order </li>
     <li>  History</li>
     <li>Privacy Policy</li>
  </ul>
</Space>
                </Col>
                <Col span={24} md={{span:6}}>
                <Space direction='vertical' size='large'>
                    
                <h2 className='text-[#000] font-[700] text-[20px]'>Newsletter</h2>
            
            <p className='font-[500] text-[#aaa] text-[14px]'>Subscribe our newsletter to get our latest update & news</p
            >
            <Input className='border border-[#ddd] text-[#aaa] text-[14px] font-[500] h-[40px] w-[270px]'  placeholder='Enter your email...'/>
            <Button className='w-full bg-[#D03459] h-[40px] border-none text-[#fff] font-[700] text-[#14px]'>
            Subscribe Now
            </Button>
                    </Space>
                
                </Col>
            </Row>

           
                <p className='text-[#ccc] text-[15px] font-[500] mt-[30px] border-t-[1px] border-t-[#eee] pt-[20px] flex justify-center items-center'>
                © Copyright 2023 YbiYbi. All Rights Reserved.
                </p>
               
        

        </div>
      
    </footer>
  )
}

export default Footer
