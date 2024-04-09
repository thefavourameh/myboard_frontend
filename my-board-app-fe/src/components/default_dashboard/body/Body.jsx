import React from 'react';
import { Link } from 'react-router-dom';
import image from '/Users/decagon/myboard_fe/myboard_fe/my-board-app-fe/src/assets/images/image 2.png';
import image1 from '/Users/decagon/myboard_fe/myboard_fe/my-board-app-fe/src/assets/images/add1.png';

const Body = () => (
  <div className='pt-[13rem] w-[1215px]'>
    <div className='flex justify-center items-center '>
      <img className=' bg-[50%_50%] bg-cover bg-no-repeat w-[27.9rem] h-[25.8rem] mx-auto ' src={image} alt="" />
    </div>
    <p className='text-center font-lato font-bold text-2xl leading-7 text-[#475467] mt-6'>A fresh list, let's get started</p>
    <div className='flex items-end flex-col pt-[5rem]'>
      <Link to='/dashboard' className=' mr-[6.4rem]'><img src={image1} alt="" /></Link>
      <Link to='/dashboard' className=' mr-[5rem] mt-1 text-10px leading-11px text-#101828'>Create a task</Link>
    </div>
  </div>
);

export default Body;