import React from 'react';
import {
  Experience,
  Landing,
  Projects
} from '@/sections/home';

const Home = () => {
  return (
    <React.Fragment>
      <Landing />
      {/* <Experience /> */}
      <Projects />
    </React.Fragment>
  );
};

export default Home;
