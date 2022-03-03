import './header.css'

 export const Header=(props)=>{
     return(
         <header>
             <h2 className="header-title ">Heeader {props.user}</h2>
         </header>
     
);
};