
import {Header} from './components/header';
import {Footer} from './components/footer';
import { Home } from './pages/home';
import './App.css';
 
function App() {
  return (
    <div className="App container">


    <Header></Header>
         <Home></Home>
     <Footer>Footer</Footer>
    
    </div> 
  );
}

export default App;
