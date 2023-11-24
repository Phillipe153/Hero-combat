import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useContext } from "react";
import HeroContext from "../context/HeroContext";
import ModalCombatResult from './ModalCombatResult';

export default function FigthButton() {
  const {firstHero, secondHero,open, setOpen, setHeroFilter} = useContext(HeroContext)

  const Item = styled(Paper)(({ theme }) => ({
    color: 'rgb(232, 236, 241)',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#2a2f28',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  margin:'10px',

}));
  const handleclickFigthButtom= () => {
    setHeroFilter('');
    (firstHero !== null && secondHero !== null) &&  setOpen(true);
  
  };

  return (
    <Box sx={{ flexGrow: 1 }} id='comabatants'>
      {firstHero && 
      <Grid item xs={2} sm={2} md={3} key={firstHero.slug}>
        <div>
          <Item>
            <img  src={`${firstHero.images.sm}`} />             
            <div>{firstHero.name}</div> 
          </Item>
        </div>
      </Grid>}
      {(firstHero && secondHero ) && <h1>VS</h1>}
      {secondHero &&
      <Grid item xs={2} sm={2} md={3} key={secondHero.slug}>
      <div  >
          <Item>
            <img  src={`${secondHero.images.sm}`} />             
            <div>{secondHero.name}</div> 
          </Item>
        </div>
      </Grid>}
        <Button id='figthButton' color="inherit" type='button'  onClick={handleclickFigthButtom}>Figth</Button>
          {open && <ModalCombatResult />}
    </Box>
  );
}