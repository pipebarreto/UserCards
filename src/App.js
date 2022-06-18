import Home from './Components/Home';
import './App.css';
import MoreInfo from './Components/MoreInfo';
import {  BrowserRouter,  Routes,  Route} from"react-router-dom";


function App() {

  return (

<BrowserRouter>
<Routes>
<Route path="/"element={<Home />} />

<Route path="/user/id/:id" element={<MoreInfo />} />

</Routes>
</BrowserRouter>


  );
}

export default App;