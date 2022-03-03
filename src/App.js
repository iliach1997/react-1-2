import Welcame from './components/header/Welcame';
import {Header} from './components/header';
import { Footer } from './components/footer.js';
import './App.css';
 
function App() {
  return (
    <div className="App">
    <Header user='ilo'></Header>
    <Welcame user='ilia chapidze' age={25}/>
     <Footer>Footer</Footer>
    
    </div>
  );
}

export default App;
