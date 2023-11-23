import { useState, useEffect } from 'react';
import HeroContext from "./HeroContext";
import getHero from '../service/getHeros';
import propTypes from 'prop-types';


function HeroProvider({ children }) {
    const [data, setData] = useState([]);
    const [heroFilter, setHeroFilter] = useState({
        heroFilter: '',
      });
      const [filtered, setFiltered] = useState(false);
    

    useEffect(() => {
        getHero().then((response) => {
          setData(response);
        });
    }, []);



    const handleFilter = ({ target }) => {
        setHeroFilter( target.value.toUpperCase() );
        if(target.value != ''){
            setFiltered(true);
        } else setFiltered(false);
      };

    

      const context = {
        data,
        heroFilter,
        filtered,
        handleFilter
      }

    return (
        <HeroContext.Provider value={ context }>
            {children}
        </HeroContext.Provider>
    )
}

export default HeroProvider;

HeroProvider.propTypes = {
    children: propTypes.node.isRequired,
  };
  