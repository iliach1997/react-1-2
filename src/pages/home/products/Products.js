import productsData from '../../../prodact.json'

export const ProdactsItem=({prodact})=>{
    return(
        <div>
            <h4>{prodact.name}, wirebuleba -${prodact.price}</h4>
            <h5>maragshia:{prodact.stoke ? 'maragshia':' ar aris maragshi'}, categori -{prodact.categori}</h5>
        </div>
    )
}


export const Products=()=>{

    
   // const renderProducts=()=>{
    //    const rows=[];
    //    let lastCategory=null;
     //   productsData.forEach(products=>{
      //      if(products.categori !== lastCategory){
    //         }     })  }
   
  
   
    return(
        <div className="row shadow-sm my-3 p-3">

            <h3>Prodacrs</h3>
            <button className='btn'>margshia</button>
            <hr/>
            {productsData.map((item, index)=> {
             return<ProdactsItem prodact={item} key={index}/>
            })}

        </div>
    )
}