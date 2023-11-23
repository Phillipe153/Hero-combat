import { useContext } from "react";
import HeroContext from "../context/HeroContext";


export default function Combat() {
    const {firstHero, secondHero} = useContext(HeroContext)

    const fisrtHeroScore = Object.values(firstHero.powerstats)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

    const secondHeroScore = Object.values(secondHero.powerstats)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

    const winner = fisrtHeroScore > secondHeroScore ? firstHero.name : secondHero.name;
    
    console.log(winner);
}

