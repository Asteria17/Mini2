import React from 'react';
import  ImgAbout  from '../assets/images/HEROMP2.png';
import  ImgAbout2  from '../assets/images/AboutUs.png';

export const About = () => {
  return (
    <main>
      {' '}
      <div className="container mx-auto p-8">
        <div className="About bg-gray-300 rounded-lg p-8 shadow-md">
          <h1 className="text-5xl font-bold mb-4 text-primary text-center p-2 mb-8 ">
            Welcome to Shopaholic-U
          </h1>
          <div className='grid grid-cols-2 gap-4'> 
             <img src={ImgAbout} alt="About Image" className='container border-double border-4 border-pink-700 rounded-full'/>
          <p className=" text-black-700 text-lg leading-7 inline-block align-middle ">
            Shopaholic-U is your ultimate destination for a wide array of
            high-quality products. Founded by the dedicated team of Shirley
            Calaunan Macaraeg-Estronilo and Mark Lorenze Borleo, we bring you a meticulously curated
            collection of items, including the latest trends in men's and
            women's clothing, exquisite jewelry, cutting-edge electronics, high quality makeups and
            so much more.</p>
          </div>
          <div className=" grid grid-cols-2 gap-4">
          <p className="text-black-700 mt-6 text-lg leading-7">
            Our mission is to provide our valued customers with nothing but the
            best – from exceptional products and top-notch customer service to a
            seamless shopping experience. At Shopaholic-U, we are committed to
            offering you the latest trends, ensuring top-quality, and providing
            affordability to ensure you find the perfect items to match your
            unique style and meet your every need.
          </p> 
          <img src={ImgAbout2} alt="About Image" className='container border-double border-4 border-sky-700 rounded-full'/>
          </div>
          <p className="text-gray-700 mt-6 text-lg leading-7">
            Thank you for choosing Shopaholic-U as your preferred online
            shopping destination. We eagerly look forward to serving you and
            becoming your go-to shop for all your shopping needs. If you have
            any questions, feedback, or inquiries, please don't hesitate to
            contact us. Your satisfaction is our top priority. Happy shopping!
          </p>
        </div>
      </div>
    </main>
  );
};
