import { useState, useEffect } from 'react';
import HeroContext from "./HeroContext";
import getHero from '../service/getHeros';
import propTypes from 'prop-types';


function HeroProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getHero().then((response) => {
          setData(response);
        });
    }, []);

    return (
        <HeroContext.Provider value={ {data} }>
            {children}
        </HeroContext.Provider>
    )
}

export default HeroProvider;

HeroProvider.propTypes = {
    children: propTypes.node.isRequired,
  };
  