import React from 'react';

import '../assets/styles/components/NotFound.scss';
import warning from '../assets/static/error.svg';

const NotFound = () => (
  <section className='not-found'>
    <img className='not-found__text--img' src={warning} width='256px' alt='error' />
    <div className='not-found__container'>
      <div className='not-found__text animated pulse'>404</div>
      <p className='not-found__text--p'>Not Found</p>
    </div>
  </section>
);

export default NotFound;
