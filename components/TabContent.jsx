import React from "react";
import { Row, Col } from "antd";
import Link from "next/link";
const TabContent = ({ activeTab }) => {
  const tabContents = [
    "Introduction content",
    "Before starting content",
    "Seller Center content",
  ];

  return (
    <div className="flex flex-col gap-[32px] px-10">
      <div>
        <h2 className="text-[#000] font-[700] text-[40px]">{activeTab}</h2>
        <h3 className="text-[#000] font-[600] text-[30px]">
          Welcome to Sell on YbiYbi
        </h3>
      </div>
      <p className="text-[16px] font-[500] text-[#888]">
        destination where they can purchase a variety of goods - which is why
        sellers like you are so important. We are always looking for ways to add
        value to our customers and to be the most customer-centric company on
        earth. As an Amazon seller, you are involved in offering these customers
        better selection, better prices, and a first-rate customer experience
      </p>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <div className="border flex flex-col justify-center items-center p-[32px]">
            <img src="/images/prime.png" alt="" />
            <p className="text-[#888] font-[500] text-[14px] text-center">
              $1.5 billion in sales by third-party companies during Prime Day
              2018
            </p>
          </div>
        </Col>
        <Col span={8}>
          <div className="border flex flex-col justify-center items-center p-[32px]">
            <img src="/images/prime.png" alt="" />
            <p className="text-[#888] font-[500] text-[14px] text-center">
              $1.5 billion in sales by third-party companies during Prime Day
              2018
            </p>
          </div>
        </Col>
        <Col span={8}>
          <div className="border flex flex-col justify-center items-center p-[32px]">
            <img src="/images/prime.png" alt="" />
            <p className="text-[#888] font-[500] text-[14px] text-center">
              $1.5 billion in sales by third-party companies during Prime Day
              2018
            </p>
          </div>
        </Col>
      </Row>

      <div className="flex flex-col gap-[12px]">
        <h2 className="font-[700] text-[40px] text-[#000]">YbiYbi add-ons</h2>
        <p className="text-[#888] font-[500] text-[16px]">
          When you start selling on Amazon, you become part of a retail
          destination that is home to sellers of all kinds, from large Fortune
          500 organizations to artisanal sellers making handmade goods. They all
          sell here for a reason: to reach the hundreds of millions of customers
          who visit the YbiYbi Store to shop.
        </p>
        <div className="flex justify-between gap-[39px]">
          <p className="text-[#888] font-[500] text-[16px] break-words">
            Third-party sales on Amazon are growing 52% annually (compared to
            25% for first-party sales from Amazon)
          </p>
          <p className="text-[#888] font-[500] text-[16px]">
            Since third-party sellers joined Amazon in 1999, these companies
            have grown to make up 58% of Amazon's sales.
          </p>
        </div>
      </div>

      <div className="bg-[#161E2D] px-[30px] py-[43px] flex flex-col gap-[25px]">
        <h2 className="font-[700] text-[25px] text-[#fff]">Instructions: Is YbiYbi right for my business?</h2>
        <p className="text-[#ddd] font-[500] text-[14px]">
          The short answer is yes. The biggest home brands sell on amazon. So do
          the emerging brands that will soon be on your radar. Small and medium
          businesses thrive here, accounting for more than half of the units
          sold in our stores worldwide. Whether you're a brand owner, seller, or
          entrepreneur - whatever your business is - whatever its size - you
          have the opportunity to grow with Amazon. Prepare yourself and start
          selling today.
        </p>
      </div>

      <div className="bg-[#5FDDD2] bg-opacity-[6%]  py-[40px] px-[100px]	 flex flex-col justify-center items-center gap-[22px]">
    <h2 className="text-[#000] font-[700] text-[40px] text-center">Don't have an YbiYbi seller account yet?</h2>
<Link href='/' className="bg-[#D03459] h-[50px] w-[200px] text-[#fff] flex justify-center items-center font-[600] text-[16px]">
Register now
</Link>
<p className="text-[#000] font-[500] text-[10px]">For a limited time only, Pro accounts are now available without a monthly subscription fee</p>
      </div>

      <div></div>
    </div>
  );
};

export default TabContent;
