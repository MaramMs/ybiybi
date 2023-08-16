"use client";
import HomeCard from "@/components/HomeCard";
import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import Link from "next/link";
import { Input, Button, Row, Col, Checkbox, Select } from "antd";
import ProductCard from "@/components/ProductCard";
const { Search } = Input;
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from "react";

export default function Home() {
  const searchIcon = `
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="8.01429" cy="7.98061" rx="7.01429" ry="7.02138" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.8929 13.2288L15.6429 15.9744" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  

  `;
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };
  return (
    <>
      <HomeHeader />
      <main className="flex min-h-screen flex-col   gap-[50px]   bg-[#fff]">
        <div className="flex flex-wrap justify-between gap-3 md:px-[230px]py-[50px] px-[16px]">
          <HomeCard bgColor="#2B2B2B" />
          <HomeCard bgColor="#D03459" />
          <HomeCard bgColor="#2B2B2B" />
        </div>

        <div className="flex justify-between md:px-[230px] p-[16px]">
          <div className="flex flex-col gap-[10px]">
            <span className="font-[600] text-[14px] md:text-[16px] text-[#000]">
              KEY FEATURES
            </span>
            <p className="text-[#888888] font-[500] md:text-[28px] text-[14px] md:w-[500px]">
              The world's first platform to discovering YbiYbi influencers for
              any niche. Allowing you to find the best influencers for your
              campaigns.
            </p>

            <div className="flex flex-col gap-[10px]">
              <span className="text-[#D03459] font-[600] md:text-[14px] text-[10px]">
                01 SEARCH & FILTER
              </span>
              <span className="text-[#000] font-[600] md:text-[14px] text-[10px]">
                ANALYSES
              </span>
              <span className="text-[#000] font-[600] md:text-[14px] text-[10px]">
                SELLER & BUYER
              </span>
            </div>

            <Button className="bg-[#D03459] h-[50px] w-[170px] text-[#fff] font-[700] text-[12px] md:text-[16px]">
              Explore
            </Button>
          </div>

          <div >
            <img src="/images/product1.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-[20px] md:px-[230px] p-[16px]">
          <div className="flex flex-col md:flex-row md:flex justify-center  gap-[10px] md:justify-between">
            <h2 className="text-[#2B2B2B] font-[700] text-center text-[20px] md:text-[40px]">
              Find Your Perfect Products
            </h2>

            <div className="flex px-[16px] py-[14px] justify-between items-center  md:w-[470px] shadow-md bg-[#fff] h-[50px] rounded-[100px]">
              <Input
                prefix={
                  <span dangerouslySetInnerHTML={{ __html: searchIcon }} />
                }
                placeholder="Search productsR..."
                className="border-none bg-transparent outline-none"
              />

              <div className="bg-[#D03459] w-[40px] h-[40px] flex justify-center items-center  rounded-full">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.58691H3.625"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 12.3457H6.25"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.125 12.3457L16.75 12.3457"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.5 3.58691L16.75 3.58691"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.625 3.58688C3.625 2.77066 3.625 2.36255 3.75821 2.04063C3.93583 1.61139 4.2765 1.27037 4.7053 1.09257C5.0269 0.959229 5.4346 0.959229 6.25 0.959229C7.0654 0.959229 7.4731 0.959229 7.7947 1.09257C8.2235 1.27037 8.56417 1.61139 8.74179 2.04063C8.875 2.36255 8.875 2.77066 8.875 3.58688C8.875 4.40311 8.875 4.81122 8.74179 5.13314C8.56417 5.56237 8.2235 5.9034 7.7947 6.08119C7.4731 6.21454 7.0654 6.21454 6.25 6.21454C5.4346 6.21454 5.0269 6.21454 4.7053 6.08119C4.2765 5.9034 3.93583 5.56237 3.75821 5.13314C3.625 4.81122 3.625 4.40311 3.625 3.58688Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M8.875 12.3457C8.875 11.5295 8.875 11.1213 9.00821 10.7994C9.18583 10.3702 9.5265 10.0292 9.9553 9.85136C10.2769 9.71802 10.6846 9.71802 11.5 9.71802C12.3154 9.71802 12.7231 9.71802 13.0447 9.85136C13.4735 10.0292 13.8142 10.3702 13.9918 10.7994C14.125 11.1213 14.125 11.5295 14.125 12.3457C14.125 13.1619 14.125 13.57 13.9918 13.8919C13.8142 14.3212 13.4735 14.6622 13.0447 14.84C12.7231 14.9733 12.3154 14.9733 11.5 14.9733C10.6846 14.9733 10.2769 14.9733 9.9553 14.84C9.5265 14.6622 9.18583 14.3212 9.00821 13.8919C8.875 13.57 8.875 13.1619 8.875 12.3457Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          <Row gutter={[16, 16]}>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ProductCard />
            </Col>

            <Col xs={12} sm={12} md={6} lg={6}>
              <ProductCard />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ProductCard />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ProductCard />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ProductCard />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ProductCard />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ProductCard />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ProductCard />
            </Col>
          </Row>
        </div>


        <div className="bg-[#fff] flex flex-col gap-[32px] md:px-[230px] py-[100px] p-[16px] ">
          <h2 className="text-[#2B2B2B] font-[700] text-[40px] text-center">
            Many Happy z{" "}
          </h2>

         <div className="flex flex-wrap gap-[10px] items-center md:justify-between">
            <span className="text-[#000] font-[600] text-[14px]">
              A total of 250 account
            </span>

            <div className="flex   gap-[16px]">
              <div className="flex items-center gap-[16px] border border-[#DDDDDD] px-[6px] md:p-[16px] h-[40px]">
                <span className="font-[500] text-[14px] text-[#000]">Followers</span>
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.02563L5 1.02159L9 5.02563"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 10.0303L5 14.0343L1 10.0303"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-[16px] border border-[#DDDDDD] px-[6px] md:p-[16px] h-[40px]">
                <span className="font-[500] text-[14px] text-[#000]">Followers</span>
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.02563L5 1.02159L9 5.02563"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 10.0303L5 14.0343L1 10.0303"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-[16px] border border-[#DDDDDD] px-[6px] md:p-[16px] h-[40px]">
                <span className="font-[500] text-[14px] text-[#000]">Followers</span>
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.02563L5 1.02159L9 5.02563"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 10.0303L5 14.0343L1 10.0303"
                    stroke="#AAAAAA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <Link
              href="/"
              className="bg-[#D03459] h-[40px] w-[140px] flex justify-between items-center text-[#fff] font-[700] text-[14px] p-[16px]"
            >
              FAQ
              <svg
                width="17"
                height="10"
                viewBox="0 0 17 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9999 4.93848L1 4.93848"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0544 1.02153L16 4.95416L12.0544 8.88745"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div> 

          <Row gutter={[16,16]}>
         
            <Col span={12} md={{span:7}}>
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[20px] pt-[30px] px-[16px]  h-[242px] border border-[#DDDDDD] bg-[#fff]">
                <div className="flex items-center gap-[5px]">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.65102 0.107178H3.84806C4.76457 0.107178 5.49908 0.855445 5.49908 1.77354V3.99166C5.49908 4.91561 4.76457 5.65737 3.84806 5.65737H1.65102C0.741011 5.65737 0 4.91561 0 3.99166V1.77354C0 0.855445 0.741011 0.107178 1.65102 0.107178ZM1.65102 7.57015H3.84806C4.76457 7.57015 5.49908 8.31256 5.49908 9.23651V11.4546C5.49908 12.3721 4.76457 13.1203 3.84806 13.1203H1.65102C0.741011 13.1203 0 12.3721 0 11.4546V9.23651C0 8.31256 0.741011 7.57015 1.65102 7.57015ZM11.3492 0.107178H9.1522C8.23569 0.107178 7.50118 0.855445 7.50118 1.77354V3.99166C7.50118 4.91561 8.23569 5.65737 9.1522 5.65737H11.3492C12.2593 5.65737 13.0003 4.91561 13.0003 3.99166V1.77354C13.0003 0.855445 12.2593 0.107178 11.3492 0.107178ZM9.1522 7.57015H11.3492C12.2593 7.57015 13.0003 8.31256 13.0003 9.23651V11.4546C13.0003 12.3721 12.2593 13.1203 11.3492 13.1203H9.1522C8.23569 13.1203 7.50118 12.3721 7.50118 11.4546V9.23651C7.50118 8.31256 8.23569 7.57015 9.1522 7.57015Z"
                      fill="#D03459"
                    />
                  </svg>

                  <h3 className="text-[#000] font-[600] text-[16px]">
                    Category
                  </h3>
                </div>

                <div className="flex flex-col gap-[16px] h-full">
                  <div className="flex justify-between">
                    <span>Entrainment</span>
                    <Checkbox></Checkbox>
                  </div>

                  <div className="flex justify-between">
                    <span>Entrainment</span>
                    <Checkbox></Checkbox>
                  </div>

                  <div className="flex justify-between">
                    <span>Entrainment</span>
                    <Checkbox></Checkbox>
                  </div>
                  <div className="flex justify-between">
                    <span>Entrainment</span>
                    <Checkbox></Checkbox>
                  </div>
                </div>
              </div>

              <Select
      defaultValue="Followers"
   
      options={[
        {
          value: 'Followers',
          label: 'Followers',
        },
    
      ]}
    />

    <div className="border border-[#ddd] flex justify-between px-[16px] h-[50px]">
      <div className="flex gap-[5px] items-center">
        <span className="text-[#000] font-[600] text-[16px]">Verified</span>
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12.4531C2.68629 12.4531 0 9.76402 0 6.44699C0 3.12993 2.68629 0.440918 6 0.440918C9.31368 0.440918 12 3.12993 12 6.44699C12 9.76402 9.31368 12.4531 6 12.4531ZM5.40156 8.84941L9.64422 4.60248L8.7957 3.7531L5.40156 7.15066L3.70453 5.45184L2.85599 6.30128L5.40156 8.84941Z" fill="#D03459"/>
</svg>


      </div>
      <Checkbox></Checkbox>

    </div>
            </div>
            </Col>
            <Col span={12} md={{span:17}}>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <div className="flex  flex-col p-[16px] justify-center items-center bg-[#fff] gap-[2px] md:gap-[10px] shadow-lg">
                    <img src="/images/person-img.png" alt="" />
                    <div className="flex bg-[#D03459] rounded-[13px] h-[20px] w-[50px] items-center justify-center gap-[8px]">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.54002 5.59857C7.41734 5.71746 7.36098 5.8894 7.38892 6.05802L7.81 8.38839C7.84552 8.5859 7.76216 8.78578 7.59686 8.89993C7.43487 9.01835 7.21935 9.03256 7.04268 8.93783L4.94487 7.84369C4.87193 7.80485 4.79094 7.78401 4.70805 7.78164H4.57969C4.53516 7.78827 4.49159 7.80248 4.4518 7.82427L2.35352 8.92362C2.24979 8.97572 2.13233 8.99419 2.01723 8.97572C1.73683 8.92267 1.54973 8.65553 1.59568 8.3737L2.01723 6.04333C2.04517 5.87329 1.98881 5.70041 1.86613 5.57963L0.155773 3.92184C0.0127298 3.78306 -0.0370037 3.57466 0.0283603 3.38662C0.0918298 3.19905 0.253819 3.06216 0.449437 3.03138L2.80349 2.68987C2.98253 2.6714 3.13978 2.56246 3.22031 2.40142L4.2576 0.274718C4.28223 0.227353 4.31397 0.183777 4.35233 0.146832L4.39496 0.113677C4.41722 0.0890467 4.4428 0.0686796 4.47122 0.0521018L4.52285 0.0331557L4.60337 0H4.80278C4.98087 0.0184725 5.13765 0.125044 5.21959 0.284192L6.27063 2.40142C6.34641 2.5563 6.49372 2.66382 6.66376 2.68987L9.01781 3.03138C9.21675 3.0598 9.383 3.19715 9.44884 3.38662C9.51089 3.57655 9.45736 3.78496 9.31148 3.92184L7.54002 5.59857Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-[#fff] font-[600] text-[10px]">
                        4.5
                      </span>
                    </div>
                    <h2 className="text-[#000] font-[600] text-[12px]">
                      Emaan Applene
                    </h2>
                    <h3 className="text-[#bbb] font-[500] text-[10px]">
                      @emanapp.official
                    </h3>
                    <p className="text-[#888] md:w-[232px] text-center  font-[500] text-[8px]">
                      Hello narwhal cosby sweater McSweeney's salvia kitsch
                      before they sold out high life.
                    </p>

                    <div className="flex md:w-[100%] gap-[5px] justify-between">
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px]">
                          Followers
                        </span>
                      </div>

                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] md:text-[18px] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] md:text-[13px] text-[10px]">
                          Followers
                        </span>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]  md:text-[18px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px] md:text-[13px]">
                          Followers
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8}>
                  <div className="flex  flex-col p-[16px] justify-center items-center bg-[#fff] gap-[2px] md:gap-[10px] shadow-lg">
                    <img src="/images/person-img.png" alt="" />
                    <div className="flex bg-[#D03459] rounded-[13px] h-[20px] w-[50px] items-center justify-center gap-[8px]">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.54002 5.59857C7.41734 5.71746 7.36098 5.8894 7.38892 6.05802L7.81 8.38839C7.84552 8.5859 7.76216 8.78578 7.59686 8.89993C7.43487 9.01835 7.21935 9.03256 7.04268 8.93783L4.94487 7.84369C4.87193 7.80485 4.79094 7.78401 4.70805 7.78164H4.57969C4.53516 7.78827 4.49159 7.80248 4.4518 7.82427L2.35352 8.92362C2.24979 8.97572 2.13233 8.99419 2.01723 8.97572C1.73683 8.92267 1.54973 8.65553 1.59568 8.3737L2.01723 6.04333C2.04517 5.87329 1.98881 5.70041 1.86613 5.57963L0.155773 3.92184C0.0127298 3.78306 -0.0370037 3.57466 0.0283603 3.38662C0.0918298 3.19905 0.253819 3.06216 0.449437 3.03138L2.80349 2.68987C2.98253 2.6714 3.13978 2.56246 3.22031 2.40142L4.2576 0.274718C4.28223 0.227353 4.31397 0.183777 4.35233 0.146832L4.39496 0.113677C4.41722 0.0890467 4.4428 0.0686796 4.47122 0.0521018L4.52285 0.0331557L4.60337 0H4.80278C4.98087 0.0184725 5.13765 0.125044 5.21959 0.284192L6.27063 2.40142C6.34641 2.5563 6.49372 2.66382 6.66376 2.68987L9.01781 3.03138C9.21675 3.0598 9.383 3.19715 9.44884 3.38662C9.51089 3.57655 9.45736 3.78496 9.31148 3.92184L7.54002 5.59857Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-[#fff] font-[600] text-[10px]">
                        4.5
                      </span>
                    </div>
                    <h2 className="text-[#000] font-[600] text-[12px]">
                      Emaan Applene
                    </h2>
                    <h3 className="text-[#bbb] font-[500] text-[10px]">
                      @emanapp.official
                    </h3>
                    <p className="text-[#888] md:w-[232px] text-center  font-[500] text-[8px]">
                      Hello narwhal cosby sweater McSweeney's salvia kitsch
                      before they sold out high life.
                    </p>

                    <div className="flex md:w-[100%] gap-[5px] justify-between">
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px]">
                          Followers
                        </span>
                      </div>

                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] md:text-[18px] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] md:text-[13px] text-[10px]">
                          Followers
                        </span>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]  md:text-[18px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px] md:text-[13px]">
                          Followers
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <div className="flex  flex-col p-[16px] justify-center items-center bg-[#fff] gap-[2px] md:gap-[10px] shadow-lg">
                    <img src="/images/person-img.png" alt="" />
                    <div className="flex bg-[#D03459] rounded-[13px] h-[20px] w-[50px] items-center justify-center gap-[8px]">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.54002 5.59857C7.41734 5.71746 7.36098 5.8894 7.38892 6.05802L7.81 8.38839C7.84552 8.5859 7.76216 8.78578 7.59686 8.89993C7.43487 9.01835 7.21935 9.03256 7.04268 8.93783L4.94487 7.84369C4.87193 7.80485 4.79094 7.78401 4.70805 7.78164H4.57969C4.53516 7.78827 4.49159 7.80248 4.4518 7.82427L2.35352 8.92362C2.24979 8.97572 2.13233 8.99419 2.01723 8.97572C1.73683 8.92267 1.54973 8.65553 1.59568 8.3737L2.01723 6.04333C2.04517 5.87329 1.98881 5.70041 1.86613 5.57963L0.155773 3.92184C0.0127298 3.78306 -0.0370037 3.57466 0.0283603 3.38662C0.0918298 3.19905 0.253819 3.06216 0.449437 3.03138L2.80349 2.68987C2.98253 2.6714 3.13978 2.56246 3.22031 2.40142L4.2576 0.274718C4.28223 0.227353 4.31397 0.183777 4.35233 0.146832L4.39496 0.113677C4.41722 0.0890467 4.4428 0.0686796 4.47122 0.0521018L4.52285 0.0331557L4.60337 0H4.80278C4.98087 0.0184725 5.13765 0.125044 5.21959 0.284192L6.27063 2.40142C6.34641 2.5563 6.49372 2.66382 6.66376 2.68987L9.01781 3.03138C9.21675 3.0598 9.383 3.19715 9.44884 3.38662C9.51089 3.57655 9.45736 3.78496 9.31148 3.92184L7.54002 5.59857Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-[#fff] font-[600] text-[10px]">
                        4.5
                      </span>
                    </div>
                    <h2 className="text-[#000] font-[600] text-[12px]">
                      Emaan Applene
                    </h2>
                    <h3 className="text-[#bbb] font-[500] text-[10px]">
                      @emanapp.official
                    </h3>
                    <p className="text-[#888] md:w-[232px] text-center  font-[500] text-[8px]">
                      Hello narwhal cosby sweater McSweeney's salvia kitsch
                      before they sold out high life.
                    </p>

                    <div className="flex md:w-[100%] gap-[5px] justify-between">
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px]">
                          Followers
                        </span>
                      </div>

                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] md:text-[18px] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] md:text-[13px] text-[10px]">
                          Followers
                        </span>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]  md:text-[18px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px] md:text-[13px]">
                          Followers
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <div className="flex  flex-col p-[16px] justify-center items-center bg-[#fff] gap-[2px] md:gap-[10px] shadow-lg">
                    <img src="/images/person-img.png" alt="" />
                    <div className="flex bg-[#D03459] rounded-[13px] h-[20px] w-[50px] items-center justify-center gap-[8px]">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.54002 5.59857C7.41734 5.71746 7.36098 5.8894 7.38892 6.05802L7.81 8.38839C7.84552 8.5859 7.76216 8.78578 7.59686 8.89993C7.43487 9.01835 7.21935 9.03256 7.04268 8.93783L4.94487 7.84369C4.87193 7.80485 4.79094 7.78401 4.70805 7.78164H4.57969C4.53516 7.78827 4.49159 7.80248 4.4518 7.82427L2.35352 8.92362C2.24979 8.97572 2.13233 8.99419 2.01723 8.97572C1.73683 8.92267 1.54973 8.65553 1.59568 8.3737L2.01723 6.04333C2.04517 5.87329 1.98881 5.70041 1.86613 5.57963L0.155773 3.92184C0.0127298 3.78306 -0.0370037 3.57466 0.0283603 3.38662C0.0918298 3.19905 0.253819 3.06216 0.449437 3.03138L2.80349 2.68987C2.98253 2.6714 3.13978 2.56246 3.22031 2.40142L4.2576 0.274718C4.28223 0.227353 4.31397 0.183777 4.35233 0.146832L4.39496 0.113677C4.41722 0.0890467 4.4428 0.0686796 4.47122 0.0521018L4.52285 0.0331557L4.60337 0H4.80278C4.98087 0.0184725 5.13765 0.125044 5.21959 0.284192L6.27063 2.40142C6.34641 2.5563 6.49372 2.66382 6.66376 2.68987L9.01781 3.03138C9.21675 3.0598 9.383 3.19715 9.44884 3.38662C9.51089 3.57655 9.45736 3.78496 9.31148 3.92184L7.54002 5.59857Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-[#fff] font-[600] text-[10px]">
                        4.5
                      </span>
                    </div>
                    <h2 className="text-[#000] font-[600] text-[12px]">
                      Emaan Applene
                    </h2>
                    <h3 className="text-[#bbb] font-[500] text-[10px]">
                      @emanapp.official
                    </h3>
                    <p className="text-[#888] md:w-[232px] text-center  font-[500] text-[8px]">
                      Hello narwhal cosby sweater McSweeney's salvia kitsch
                      before they sold out high life.
                    </p>

                    <div className="flex md:w-[100%] gap-[5px] justify-between">
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px]">
                          Followers
                        </span>
                      </div>

                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] md:text-[18px] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] md:text-[13px] text-[10px]">
                          Followers
                        </span>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]  md:text-[18px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px] md:text-[13px]">
                          Followers
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <div className="flex  flex-col p-[16px] justify-center items-center bg-[#fff] gap-[2px] md:gap-[10px] shadow-lg">
                    <img src="/images/person-img.png" alt="" />
                    <div className="flex bg-[#D03459] rounded-[13px] h-[20px] w-[50px] items-center justify-center gap-[8px]">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.54002 5.59857C7.41734 5.71746 7.36098 5.8894 7.38892 6.05802L7.81 8.38839C7.84552 8.5859 7.76216 8.78578 7.59686 8.89993C7.43487 9.01835 7.21935 9.03256 7.04268 8.93783L4.94487 7.84369C4.87193 7.80485 4.79094 7.78401 4.70805 7.78164H4.57969C4.53516 7.78827 4.49159 7.80248 4.4518 7.82427L2.35352 8.92362C2.24979 8.97572 2.13233 8.99419 2.01723 8.97572C1.73683 8.92267 1.54973 8.65553 1.59568 8.3737L2.01723 6.04333C2.04517 5.87329 1.98881 5.70041 1.86613 5.57963L0.155773 3.92184C0.0127298 3.78306 -0.0370037 3.57466 0.0283603 3.38662C0.0918298 3.19905 0.253819 3.06216 0.449437 3.03138L2.80349 2.68987C2.98253 2.6714 3.13978 2.56246 3.22031 2.40142L4.2576 0.274718C4.28223 0.227353 4.31397 0.183777 4.35233 0.146832L4.39496 0.113677C4.41722 0.0890467 4.4428 0.0686796 4.47122 0.0521018L4.52285 0.0331557L4.60337 0H4.80278C4.98087 0.0184725 5.13765 0.125044 5.21959 0.284192L6.27063 2.40142C6.34641 2.5563 6.49372 2.66382 6.66376 2.68987L9.01781 3.03138C9.21675 3.0598 9.383 3.19715 9.44884 3.38662C9.51089 3.57655 9.45736 3.78496 9.31148 3.92184L7.54002 5.59857Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-[#fff] font-[600] text-[10px]">
                        4.5
                      </span>
                    </div>
                    <h2 className="text-[#000] font-[600] text-[12px]">
                      Emaan Applene
                    </h2>
                    <h3 className="text-[#bbb] font-[500] text-[10px]">
                      @emanapp.official
                    </h3>
                    <p className="text-[#888] md:w-[232px] text-center  font-[500] text-[8px]">
                      Hello narwhal cosby sweater McSweeney's salvia kitsch
                      before they sold out high life.
                    </p>

                    <div className="flex md:w-[100%] gap-[5px] justify-between">
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px]">
                          Followers
                        </span>
                      </div>

                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] md:text-[18px] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] md:text-[13px] text-[10px]">
                          Followers
                        </span>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]  md:text-[18px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px] md:text-[13px]">
                          Followers
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <div className="flex  flex-col p-[16px] justify-center items-center bg-[#fff] gap-[2px] md:gap-[10px] shadow-lg">
                    <img src="/images/person-img.png" alt="" />
                    <div className="flex bg-[#D03459] rounded-[13px] h-[20px] w-[50px] items-center justify-center gap-[8px]">
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.54002 5.59857C7.41734 5.71746 7.36098 5.8894 7.38892 6.05802L7.81 8.38839C7.84552 8.5859 7.76216 8.78578 7.59686 8.89993C7.43487 9.01835 7.21935 9.03256 7.04268 8.93783L4.94487 7.84369C4.87193 7.80485 4.79094 7.78401 4.70805 7.78164H4.57969C4.53516 7.78827 4.49159 7.80248 4.4518 7.82427L2.35352 8.92362C2.24979 8.97572 2.13233 8.99419 2.01723 8.97572C1.73683 8.92267 1.54973 8.65553 1.59568 8.3737L2.01723 6.04333C2.04517 5.87329 1.98881 5.70041 1.86613 5.57963L0.155773 3.92184C0.0127298 3.78306 -0.0370037 3.57466 0.0283603 3.38662C0.0918298 3.19905 0.253819 3.06216 0.449437 3.03138L2.80349 2.68987C2.98253 2.6714 3.13978 2.56246 3.22031 2.40142L4.2576 0.274718C4.28223 0.227353 4.31397 0.183777 4.35233 0.146832L4.39496 0.113677C4.41722 0.0890467 4.4428 0.0686796 4.47122 0.0521018L4.52285 0.0331557L4.60337 0H4.80278C4.98087 0.0184725 5.13765 0.125044 5.21959 0.284192L6.27063 2.40142C6.34641 2.5563 6.49372 2.66382 6.66376 2.68987L9.01781 3.03138C9.21675 3.0598 9.383 3.19715 9.44884 3.38662C9.51089 3.57655 9.45736 3.78496 9.31148 3.92184L7.54002 5.59857Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-[#fff] font-[600] text-[10px]">
                        4.5
                      </span>
                    </div>
                    <h2 className="text-[#000] font-[600] text-[12px]">
                      Emaan Applene
                    </h2>
                    <h3 className="text-[#bbb] font-[500] text-[10px]">
                      @emanapp.official
                    </h3>
                    <p className="text-[#888] md:w-[232px] text-center  font-[500] text-[8px]">
                      Hello narwhal cosby sweater McSweeney's salvia kitsch
                      before they sold out high life.
                    </p>

                    <div className="flex md:w-[100%] gap-[5px] justify-between">
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px]">
                          Followers
                        </span>
                      </div>

                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] md:text-[18px] text-[12px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] md:text-[13px] text-[10px]">
                          Followers
                        </span>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center">
                        <span className="text-[#000] font-[600] text-[12px]  md:text-[18px]">
                          23k
                        </span>
                        <span className="text-[#aaa] font-[500] text-[10px] md:text-[13px]">
                          Followers
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
         

          
        </div>

        <div className="flex  justify-around items-center flex-wrap bg-[#F5F5F5] px-[16px] md:px-[230px] py-[50px]">
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <img src="/images/appCount.png" alt="" />

            <div className="flex flex-col justify-center items-center">
              <h4 className="text-[50px] font-[600] text-[#000]">10K+</h4>
              <span className="text-[#aaa] font-[600] text-[20px]">
                Application of Traders
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-[20px] ">
            <img src="/images/customer.png" alt="" />

            <div className="flex flex-col justify-center items-center ">
              <h4 className="text-[50px] font-[600] text-[#000]">10K+</h4>
              <span className="text-[#aaa] font-[600] text-[20px]">
                Number of Customers
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/images/marketers.png" alt="" />

            <div className="flex flex-col justify-center items-center">
              <h4 className="text-[50px] font-[600] text-[#000]">10K+</h4>
              <span className="text-[#aaa] font-[600] text-[20px]">
                Number of Marketers
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#fff]">
  <div className="flex flex-col px-[16px] md:px-[230px] py-[50px] space-y-8">
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[#2B2B2B] font-[700] text-[20px] md:text-[40px]">
        Our Community Review
      </h2>
      <p className="text-[#aaa] font-[500] text-[14px] md:text-[16px] md:w-[600px] text-center">
        Publish the best of your client testimonials and let the world know
        what a great agent or YbiYbi influencer you are. Testimonials build trust.
      </p>
    </div>
    <div className="swiper-container">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
       
  slidesPerView={1}
  breakpoints={{
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }}}
        onSlideChange={handleSlideChange}

        onSwiper={(swiper) => console.log(swiper)}
      >
            <SwiperSlide>
              <div 
              
              className={`flex flex-col gap-[32px] h-[314px] p-[16px] ${
                activeSlide === 0 ? 'drop-shadow-lg bg-[#fff]' : ''
              }`}
              >
                <div className="rounded-full w-[80px] h-[80px]">
                  <img
                    src="/images/person-img.png"
                    alt=""
                    className="rounded-full border-[2px] border border-[#D03459]"
                  />
                </div>

                <p className="text-[#888] font-[500] text-[15px] w-[310px] break-words">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim minim"
                </p>
                <div className="flex flex-col">
                  <h3 className="text-[#000] font-[600] text-[18px]">
                    Natasha Chavez
                  </h3>
                  <span className="text-[13px] font-[500] text-[#aaa]">
                    Manager
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div   className={`flex flex-col gap-[32px] h-[314px] p-[16px] ${
                activeSlide === 1 ? 'drop-shadow-lg bg-[#fff]' : ''
              }`}>
                <div className="rounded-full w-[80px] h-[80px]">
                  <img
                    src="/images/person-img.png"
                    alt=""
                    className="rounded-full border-[2px] border border-[#D03459]"
                  />
                </div>

                <p className="text-[#888] font-[500] text-[15px] w-[310px] break-words">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim minim"
                </p>
                <div className="flex flex-col">
                  <h3 className="text-[#000] font-[600] text-[18px]">
                    Natasha Chavez
                  </h3>
                  <span className="text-[13px] font-[500] text-[#aaa]">
                    Manager
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div   className={`flex flex-col gap-[32px] h-[314px] p-[16px] ${
                activeSlide === 2 ? 'drop-shadow-lg bg-[#fff]' : ''
              }`}>
                <div className="rounded-full w-[80px] h-[80px]">
                  <img
                    src="/images/person-img.png"
                    alt=""
                    className="rounded-full border-[2px] border border-[#D03459]"
                  />
                </div>

                <p className="text-[#888] font-[500] text-[15px] w-[310px] break-words">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim minim"
                </p>
                <div className="flex flex-col">
                  <h3 className="text-[#000] font-[600] text-[18px]">
                    Natasha Chavez
                  </h3>
                  <span className="text-[13px] font-[500] text-[#aaa]">
                    Manager
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div   className={`flex flex-col gap-[32px] h-[314px] p-[16px] ${
                activeSlide === 3 ? 'drop-shadow-lg bg-[#fff]' : ''
              }`}>
                <div className="rounded-full w-[80px] h-[80px]">
                  <img
                    src="/images/person-img.png"
                    alt=""
                    className="rounded-full border-[2px] border border-[#D03459]"
                  />
                </div>

                <p className="text-[#888] font-[500] text-[15px] w-[310px] break-words">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim minim"
                </p>
                <div className="flex flex-col">
                  <h3 className="text-[#000] font-[600] text-[18px]">
                    Natasha Chavez
                  </h3>
                  <span className="text-[13px] font-[500] text-[#aaa]">
                    Manager
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div   className={`flex flex-col gap-[32px] h-[314px] p-[16px] ${
                activeSlide === 4 ? 'drop-shadow-lg bg-[#fff]' : ''
              }`}>
                <div className="rounded-full w-[80px] h-[80px]">
                  <img
                    src="/images/person-img.png"
                    alt=""
                    className="rounded-full border-[2px] border border-[#D03459]"
                  />
                </div>

                <p className="text-[#888] font-[500] text-[15px] w-[310px] break-words">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim minim"
                </p>
                <div className="flex flex-col">
                  <h3 className="text-[#000] font-[600] text-[18px]">
                    Natasha Chavez
                  </h3>
                  <span className="text-[13px] font-[500] text-[#aaa]">
                    Manager
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div   className={`flex flex-col gap-[32px] h-[314px] p-[16px] ${
                activeSlide === 5 ? 'drop-shadow-lg bg-[#fff]' : ''
              }`}>
                <div className="rounded-full w-[80px] h-[80px]">
                  <img
                    src="/images/person-img.png"
                    alt=""
                    className="rounded-full border-[2px] border border-[#D03459]"
                  />
                </div>

                <p className="text-[#888] font-[500] text-[15px] w-[310px] break-words">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim minim"
                </p>
                <div className="flex flex-col">
                  <h3 className="text-[#000] font-[600] text-[18px]">
                    Natasha Chavez
                  </h3>
                  <span className="text-[13px] font-[500] text-[#aaa]">
                    Manager
                  </span>
                </div>
              </div>
            </SwiperSlide>
      
          </Swiper>
         </div>
    
        </div>
        </div>

        <div className="bg-[#000]">
          <div className=" px-[16px] md:px-[230px] py-[50px] flex flex-col justify-center items-center gap-[16px]">

            <h2 className="md:text-[40px] text-[20px] font-[700] md:w-[720px] text-center text-[#fff]">Land the brand deals you deserve 
with Cratchits</h2>

<p className="text-[#fff] font-[500] text-[14px] md:text-[16px] md:w-[630px] text-center">

Wow brands with your custom media kit, complate with transparent, accurate data. free foevere
</p>

<div className="bg-[#fff] flex justify-between items-center rounded-[100px] border-none md:w-[439px] h-[50px] px-[16px]">
  <Input className='border-none bg-transparent' placeholder='Enter your mail...'/>

  <Button className='rounded-[50px] w-[160px] h-[34px] bg-[#D03459] border-none text-[#fff] font-[600] text-[14px]'>
  Start for free
  </Button>

</div>


<div className="flex justify-between md:w-[682px]">
  <div className="flex gap-[10px] items-center ">
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 15.4942C3.35786 15.4942 0 12.1329 0 7.98659C0 3.84026 3.35786 0.479004 7.5 0.479004C11.6421 0.479004 15 3.84026 15 7.98659C15 12.1329 11.6421 15.4942 7.5 15.4942ZM6.75195 10.9896L12.0553 5.68096L10.9946 4.61923L6.75195 8.86618L4.63066 6.74266L3.56999 7.80446L6.75195 10.9896Z" fill="white"/>
</svg>

    <span className="text-[#fff] font-[500] text-[14px]">Connect with brands</span>

  </div>

  <div className="flex gap-[10px] items-center ">
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 15.4942C3.35786 15.4942 0 12.1329 0 7.98659C0 3.84026 3.35786 0.479004 7.5 0.479004C11.6421 0.479004 15 3.84026 15 7.98659C15 12.1329 11.6421 15.4942 7.5 15.4942ZM6.75195 10.9896L12.0553 5.68096L10.9946 4.61923L6.75195 8.86618L4.63066 6.74266L3.56999 7.80446L6.75195 10.9896Z" fill="white"/>
</svg>

    <span className="text-[#fff] font-[500] text-[14px]">Updated automatically</span>

  </div>

  <div className="flex gap-[10px] items-center ">
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 15.4942C3.35786 15.4942 0 12.1329 0 7.98659C0 3.84026 3.35786 0.479004 7.5 0.479004C11.6421 0.479004 15 3.84026 15 7.98659C15 12.1329 11.6421 15.4942 7.5 15.4942ZM6.75195 10.9896L12.0553 5.68096L10.9946 4.61923L6.75195 8.86618L4.63066 6.74266L3.56999 7.80446L6.75195 10.9896Z" fill="white"/>
</svg>

    <span className="text-[#fff] font-[500] text-[14px]">Trusted by over 25.000 creators</span>

  </div>

</div>
          </div>

        </div>


        
      </main>
    </>
  );
}
