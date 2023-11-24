import {useContext} from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { green } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import HeroContext from "../context/HeroContext";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';





const style = {
  color: '#fff',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'rgb(26, 28, 26)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 12,
};
export default function ModalCombatResult() {
const {firstHero, secondHero,open, setOpen,setFirstHero,setSecondHero} = useContext(HeroContext)
  const handleClose = () => {
    setFirstHero(null);
    setSecondHero(null);
    setOpen(false);
  };
  const powerStats = Object.keys(firstHero.powerstats);

  const fisrtHeroScore = Object.values(firstHero.powerstats)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

  const secondHeroScore = Object.values(secondHero.powerstats)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

  const winner = fisrtHeroScore > secondHeroScore ? firstHero.name : secondHero.name;
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <h2><font color='green'> Winner </font> {winner}</h2>   
        <div className='BoxStats'>
        <div  >
            <img  src={`${firstHero.images.sm}`} />             
            <div>{firstHero.name}</div> 
        </div>
        <div>
          {
            powerStats.map((stats) => (
              <div className='stats' key={stats}>
                <div className='stastValue'>
                  {firstHero.powerstats[stats]}
                  <div id='setaFirstHero'>
                    {
                      firstHero.powerstats[stats] === secondHero.powerstats[stats]
                      ?
                      <RemoveSharpIcon className='setaVerde' />  
                      : firstHero.powerstats[stats] > secondHero.powerstats[stats] 
                      ? <ArrowBackSharpIcon className='setaVerde' /> 
                      : <ArrowForwardSharpIcon className='setaVermelha' />
                    }
                  </div>
                </div>
                 <div >{stats}</div>
                 <div className='stastValue'>
                  <div id='setaSecondHero'>
                    {
                      firstHero.powerstats[stats] === secondHero.powerstats[stats]
                      ?
                      <RemoveSharpIcon className='setaVerde' />
                      : firstHero.powerstats[stats] > secondHero.powerstats[stats] 
                      ? <ArrowBackSharpIcon className='setaVermelha' />
                      : <ArrowForwardSharpIcon className='setaVerde' />
                    }
                  </div>
                    {secondHero.powerstats[stats]}
                  </div>
              </div>

            ))
          }

        </div>
        <div  >
            <img  src={`${secondHero.images.sm}`} />             
            <div color='#fff'>{secondHero.name}</div> 
        </div>

        </div>
        </Box>
      </Modal>
    </div>
  );
}