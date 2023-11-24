
import './App.css'
import SearchAppBar from '../components/SearchAppBar'
import FigthButton from '../components/FigthButton'
import HeroList from '../components/HerosList';

function App() {

  return (
    <div className='boxButtom'>
      <FigthButton />
      <HeroList />
      <SearchAppBar />
    </div>
  )
}

export default App
