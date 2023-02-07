import React from 'react';
// import {
//   Experience,
//   Landing,
//   Projects
// } from 'sections/home';

const Home = () => {
  return (
    <React.Fragment>
      {/* <Landing /> */}
      <div className='w-full bg-cover bg-no-repeat bg-center aspect-video ' style={{
        backgroundImage: "url('/images/layered-waves-haikei.svg')"
      }} />
      <div className='bg-[#393E46] text-white'>
        {/* <Experience /> */}
      </div>
      <div className='w-full bg-cover bg-no-repeat bg-center aspect-video rotate-180' style={{
        backgroundImage: "url('/images/layered-waves-haikei.svg')"
      }} />
      {/* <Projects /> */}
    </React.Fragment>
  );
};

export default Home;
