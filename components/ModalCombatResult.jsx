import {useContext} from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HeroContext from "../context/HeroContext";


const style = {
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
function Combat() {
  const {firstHero, secondHero} = useContext(HeroContext)

  const fisrtHeroScore = Object.values(firstHero.powerstats)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

  const secondHeroScore = Object.values(secondHero.powerstats)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

  const winner = fisrtHeroScore > secondHeroScore ? firstHero.name : secondHero.name;
  
  return winner;
}
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
  
  console.log(powerStats);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1>{winner}</h1>
        <div  >
            <img  src={`${firstHero.images.sm}`} />             
            <div>{secondHero.name}</div> 
        </div>
          {
            powerStats.map((stats) => (
              <div key={stats}>
                <div key={stats} color='#fffff'>{firstHero.powerstats[stats]}</div>
                 <div key={stats} color='#fffff'>{stats}</div>
                 <div key={stats} color='#fffff'>{secondHero.powerstats[stats]}</div>
              </div>

            ))
          }
        <div  >
            <img  src={`${secondHero.images.sm}`} />             
            <div color='#fff'>{secondHero.name}</div> 
        </div>
        </Box>
      </Modal>
    </div>
  );
}