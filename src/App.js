
import {Header} from './components/header';
import {Footer} from './components/footer';
//import { Home } from './pages/home';
import {Products} from './pages/home/products';
import './App.css';
 
function App() {
  return (
    <div className="App container">


    <Header></Header>
         <Products/>
     <Footer>Footer</Footer>
    
    </div> 
  );
}

export default App;
