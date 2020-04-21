import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import '../assets/styles/components/Search.scss';
import { searchRequest } from '../actions';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleInput = (event) => {
    const searching = event.target.value;
    console.log('searching', searching);
    props.searchRequest(searching);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy</h2>
      <input
        className={inputStyle}
        type='text'
        placeholder='Buscar...'
        onChange={handleInput}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchRequest,
};

export default connect(null, mapDispatchToProps)(Search);
