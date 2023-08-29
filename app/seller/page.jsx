'use client'
import React, { useState } from 'react'
import {Row,Col} from 'antd'
import Link from 'next/link'
import TabsSeller from '@/components/TabsSeller';
import TabContent from '@/components/TabContent';

const Seller = () => {



const tabs =[
  'Introduction',
  'Before starting',
  'Seller Center',
  'Product details',
  'Product details',
  'Product details',
  'Product details',
  'Product details',
  'Product details',
]
const [activeTab, setActiveTab] = useState(0);

const handleTabChange = (key) => {
  setActiveTab(key);
};

  return (
    <>
      <header className='bg-[#5FDDD2] bg-opacity-[6%] h-[400px] px-[230px] py-[50px]'>
        <Row>
            <Col span={24} md={{span:12}} className='flex flex-col gap-[32px]'>
                <h1 className='text-[#000] font-[700] text-[50px]'>A beginner's guide to
selling on YbiYbi</h1>
                <p className='text-[#888] font-[500] text-[20px]'>Some things to consider before you start selling</p>
                <div className='flex items-center gap-[16px] '>
                    <Link href='/' className='w-[230px] h-[50px] bg-[#D03459] flex justify-around items-center text-[#fff] font-[600] text-[16px]'>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11L9 1M9 11C8.29977 11 6.99153 9.0057 6.5 8.5M9 11C9.70023 11 11.0085 9.0057 11.5 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 13C17 15.482 16.482 16 14 16H4C1.518 16 1 15.482 1 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    Download App
                    </Link>

                    <span className='text-[#888] font-[500] text-[16px]'>Do you prefer to read on your own?</span>
                </div>
            </Col>
            <Col span={24} md={{span:12}}>
            <img src="/images/seller-header.png" alt="" />

            </Col>
        </Row>

      </header>

      <main>
    <div className='px-[230px] py-[50px]'>
      <Row gutter={16}>
        <Col span={24} md={{ span: 7 }}>
          <TabsSeller tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
        </Col>
        <Col span={24} md={{ span: 17 }}>
          <TabContent activeTab={activeTab} />
        </Col>
      </Row>
    </div>

      </main>
    </>
  )
}

export default Seller
