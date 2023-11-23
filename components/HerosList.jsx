// import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useContext, useState, useEffect } from 'react';
import HeroContext from '../context/HeroContext';

function HeroList() {
const {data, heroFilter, filtered } = useContext(HeroContext)
const [listFiltered, setListFiltered] = useState({});

const Item = styled(Paper)(({ theme }) => ({
    color: 'rgb(232, 236, 241)',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#2a2f28',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',

}));

useEffect(() => {
  console.log(heroFilter);
  setListFiltered(
    data.filter((hero) => {
      return  hero.name.toUpperCase().includes(heroFilter)
    })
  )
  
}, [data, heroFilter]);
console.log(listFiltered);

    return (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 4}} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                filtered ? 
                listFiltered.map((hero) => (
                  <Grid item xs={2} sm={2} md={3} key={hero.slug}>
                    <Item id='hero_item'>
                        <div key={ hero.name }>
                            <img src={`${hero.images.sm}`} />             
                            <div>{hero.name}</div> 
                        </div>
                    </Item>
                  </Grid>
                ))
                :
                data.map((hero) => (
                  <Grid item xs={2} sm={2} md={3} key={hero.slug}>
                    <Item id='hero_item'>
                        <div key={ hero.name }>
                            <img src={`${hero.images.sm}`} />             
                            <div>{hero.name}</div> 
                        </div>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        }
    

export default HeroList;