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
    const [firstHero, setFirstHero] = useState(null);
    const [secondHero, setSecondHero] = useState(null);
    const [open, setOpen] = useState(false);

    

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

      const handleclick= ( hero) => {
        console.log('hero ',hero);
        if(firstHero === null){
            setFirstHero(hero);
        } 
        if(firstHero !== null && secondHero === null){
            setSecondHero(hero);
        } 
      };

    

      const context = {
        data,
        heroFilter,
        filtered,
        firstHero,
        secondHero,
        open,
        setOpen,
        setFirstHero,
        setSecondHero,
        handleFilter,
        handleclick
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
  