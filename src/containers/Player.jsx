/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';

import '../assets/styles/components/Player.scss';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return !hasPlaying ? <NotFound /> : (
    <div className='Player'>
      <video controls autoPlay>
        <source
          src={props.playing.source}
          type='video/mp4'
        />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => (props.history.goBack())}>
          Regresar
        </button>
      </div>
    </div>
  ); //: <Redirect to='/404/' />; //Redirect elemento de react-router-dom que permite redirección a un path que se especifique
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

Player.propTypes = {
  getVideoSource: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

