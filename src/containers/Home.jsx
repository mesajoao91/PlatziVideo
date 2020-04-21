/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';

const Home = ({ searching, myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {searching.length > 0 && (
        <Categories title='Resultados de la búsqueda'>
          <Carousel>
            {searching.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      {searching.length <= 0 && myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      {searching.length <= 0 && (
        <Categories title='Tendencias'>
          <Carousel>
            {trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      {searching.length <= 0 && (
        <Categories title='Originales de Platzi Video'>
          <Carousel>
            {originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

// Trae los props de nuestro estado
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searching: state.searching,
  };
};

export default connect(mapStateToProps, null)(Home); // Para crear el conector se deben parar dos argumentos que serían props: mapStateToProps y action: mapDispatchToProps; luego poner a quien conecta
