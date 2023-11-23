
import './App.css'
import SearchAppBar from '../components/SearchAppBar'
import ButtonAppBar from '../components/ButtonAppBar'
import HeroList from '../components/HerosList';

function App() {

  return (
    <div className='teste'>
      <ButtonAppBar />
      <HeroList />
      <SearchAppBar />
    </div>
  )
}

export default App
