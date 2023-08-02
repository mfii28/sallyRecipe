import './App.css';
import { Route ,Routes} from 'react-router-dom'; 
import Home from './pages/Home';
import Searchbar from './components/Searchbar';
import Cusinie from './pages/Cusinie';
import Category from './components/Category';
import Pages from './pages/Pages';
import Searched from './pages/Searched';
import Recipes from './pages/Recipes';

 
function App() {
  return (

<div>

<Searchbar />
<Category />
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/cusinie/:type" element={<Pages/>}/>
<Route path='/search/:search' element={<Searched/>}/>
<Route path='/recipes/:name'  element={<Recipes />} >
</Route>
</Routes>

</div>
  );
}

export default App;
