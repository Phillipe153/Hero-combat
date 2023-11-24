import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useContext, useState, useEffect } from 'react';
import HeroContext from '../context/HeroContext';


export default function HeroList() {
const {data, heroFilter, filtered,handleclickSelectHero, firstHero,secondHero } = useContext(HeroContext)
const [listFiltered, setListFiltered] = useState({});

const Item = styled(Paper)(({ theme }) => ({
    color: 'rgb(232, 236, 241)',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#2a2f28',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',

}));

useEffect(() => {
 

  setListFiltered(
    data.filter((hero) => {
      return  hero.name.toUpperCase().includes(heroFilter)
    })
  )
  
}, [data, heroFilter, firstHero, secondHero]);

    return (
            <Box sx={{ flexGrow: 1 }}>
              <Grid id='outsideBox' container spacing={{ xs: 2, md: 4}} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                filtered ? 
                listFiltered.map((hero) => (
                  <Grid   id='insideBox' item xs={2} sm={2} md={3} key={hero.slug}>
                    <div  onClick={handleclickSelectHero.bind(null,hero) } key={ hero.name } >
                      <Item  id='hero_item'>
                        <img  src={`${hero.images.sm}`} />             
                        <div>{hero.name}</div> 
                     </Item>
                    </div>
                  </Grid>
                ))
                :
                data.map((hero) => (
                  <Grid  item xs={2} sm={2} md={3} key={hero.slug}>
                    <div onClick={handleclickSelectHero.bind(null,hero) } key={ hero.name } >
                      <Item  id='hero_item'>
                        <img  src={`${hero.images.sm}`} />             
                        <div>{hero.name}</div> 
                     </Item>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        }