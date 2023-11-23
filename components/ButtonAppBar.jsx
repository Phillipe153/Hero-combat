// import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useContext } from "react";
import HeroContext from "../context/HeroContext";
import ModalCombatResult from './ModalCombatResult';



export default function ButtonAppBar() {
  //  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const {firstHero, secondHero, open, setOpen} = useContext(HeroContext)
  // const handleClose = () => setOpen(false);

  const Item = styled(Paper)(({ theme }) => ({
    color: 'rgb(232, 236, 241)',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#2a2f28',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  margin:'10px',

}));
  const handleclick= () => {

    const fisrtHeroScore = Object.values(firstHero.powerstats)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log('fisrtHeroScore ', fisrtHeroScore);
    const secondHeroScore = Object.values(secondHero.powerstats)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log('secondHeroScore ', secondHeroScore);
    const winner = fisrtHeroScore > secondHeroScore ? firstHero.name : secondHero.name;
    
    console.log(winner);

    setOpen(true)
    
   
  };



  return (
    <Box sx={{ flexGrow: 1 }}  height ='150px'>
      {firstHero && 
      <Grid item xs={2} sm={2} md={3} key={firstHero.slug}>
        <lablel>
          <Item>
            <img  src={`${firstHero.images.sm}`} />             
            <div>{firstHero.name}</div> 
          </Item>
        </lablel>
      </Grid>}
      {(firstHero && secondHero ) && <h1 color='#fff'>VS</h1>}
      {secondHero &&
      <Grid item xs={2} sm={2} md={3} key={secondHero.slug}>
      <lablel  >
          <Item>
            <img  src={`${secondHero.images.sm}`} />             
            <div>{secondHero.name}</div> 
          </Item>
        </lablel>
      </Grid>}
      <AppBar position="static" borderRadius='10px'>
        <Toolbar>
        <Button color="inherit" type='button'  onClick={handleclick}>Figth</Button>
          {open && <ModalCombatResult />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}