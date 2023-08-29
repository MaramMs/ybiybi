'use client'
import React, { useState } from "react";
import { Tabs } from "antd";
import TabContent from "./TabContent";

const { TabPane } = Tabs;

const TabsSeller = ({ tabs, activeTab, onTabChange }) => {
// const tabs =[
//   'Introduction',
//   'Before starting',
//   'Seller Center',
//   'Product details',
//   'Product details',
//   'Product details',
//   'Product details',
//   'Product details',
//   'Product details',
// ]
// const [activeTab, setActiveTab] = useState(0);

// const handleTabChange = (key) => {
//   setActiveTab(key);
// };

  return (
    <div className="w-[270px]  border border-[#ddd]">
    <ul className="flex flex-col gap-[16px]">
      {tabs.map((tab, index) => (
     
        <li
          key={index}
          className={`flex items-center h-[40px] px-[16px] cursor-pointer border-b border-[#ddd] text-[#888] font-[500] text-[16px] ${activeTab === index ? 'bg-[#D03459] text-[#fff] font-[600] text-[22px] h-[60px]' : ''} ${index === tabs.length - 1 ? 'border-b-0' : 'border-b border-[#ddd]'}`}
          onClick={() => onTabChange(index)}
        >
          {tab}
        </li>
      ))}
    </ul>
  </div>
 
  );
};

export default TabsSeller;
