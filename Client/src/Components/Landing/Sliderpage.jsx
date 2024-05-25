import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const interval = 2000;
const Categories=[
  {
   id:0,
   image:'assets/man-u home.webp',
   desc:'Manchester United Home Kit'
  },
  {
    id:1,
    image:'assets/GHANA home kit.webp',
    desc:'Ghana Home kit'
   },
   {
    id:2,
    image:'assets/psg.webp',
    desc:'Psg Home kit'
   },
   {
    id:3,
    image:'assets/arsenal-2324home-2.webp',
    desc:'Arsenal Home Kit'
   },
   {
    id:4,
    image:'assets/JUVE.webp',
    desc:'Arsenal Home Kit'
   },
  
]
export default function Sliderpage() {
 
  return (
    <>
    <div className='w-full mt-[2%] item-center'>
    <Carousel 
    autoPlay infiniteLoop 
    interval={interval}
     showArrows={true} 
     showStatus={false}
      showThumbs={false}
      style={{ width: "100%", height: "90vh" }}
       className='w-[100%]'>
    {Categories.slice(0,4).map((product, index) => (
      <div key={index} className="w-[100%] h-[70vh] block items-center justify-center ">
        <section className="">
        <img src={product.image} alt={product.desk} className="object-cover md:w-[100vw] h-[100vh] border  border-opacity-50 z-0" />
        <p className="absolute text-2xl font-bold m-3 bottom-0 left-0  bg-black bg-opacity-100 text-white text-center py-3 w-[70%]">{product.desc}</p>
        </section>

       
      </div>
      
    ))}
  </Carousel>
  </div>
  </>
  );
}
