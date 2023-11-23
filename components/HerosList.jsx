// import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';import { useContext } from 'react';
import HeroContext from '../context/HeroContext';

function HeroList() {
const {data} = useContext(HeroContext)
console.log(data);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
    return (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 4}} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map((hero) => (
                  <Grid item xs={2} sm={2} md={3} key={hero.name}>
                    <Item className='hero_item'>
                        <tr key={ hero.name }>
                            <img src={`${hero.images.sm}`} />             
                            <td>{hero.name}</td> 
                        </tr>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        }
    

export default HeroList;