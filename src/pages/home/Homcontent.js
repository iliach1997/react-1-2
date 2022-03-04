import { useState } from "react";
import Welcame from '../../components/header/Welcame'

 const Homecontent=()=>{
    const [showWelcome, setshowWelcome] = useState(false);
   
             const rendercontent=()=>{
             
                let content;
               if(showWelcome){
               content=<Welcame user='ilia'age={25}/>
                              }
               else{
               content="ilo"
                   }
               return content
       } 
             const hendclik=()=>{
               console.log('__showWelcome__ ',showWelcome);
               setshowWelcome(!showWelcome);
               
       }
       return(
           <div>
               <button className='btn btn-outline-primary' onClick={hendclik}>sabmit</button>
   
              <hr/>
           {rendercontent()}
           </div>
       )
    };
    export default Homecontent;