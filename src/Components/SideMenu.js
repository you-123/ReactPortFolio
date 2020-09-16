import React from 'react';

function Menu(props) {
    const  CatgoryFashion= props.Item.filter(item=>item.catgory==="fashion");
    const  CatgoryTechnology= props.Item.filter(item=>item.catgory==="technology");
    const  CatgoryArt= props.Item.filter(item=>item.catgory==="art");
    const Fashion=CatgoryFashion.map(item => {
        return (
                    <li key={item.id}>{item.name}</li>   
        );});
      
 const Technology=CatgoryTechnology.map(item => {
            return (

                        <li key={item.id}>{item.name}</li>   
            );});
    
const   Art=CatgoryArt.map(item => {
                return (
    
                            <li key={item.id}>{item.name}</li>   
                );});

    return (
        
        <div className="side-menu" id="side-menu">
       <ul>
       <li>Fashion<i className="fa fa-angle-down" aria-hidden="true"></i>
                <ul>
         {Fashion} 
         </ul>
            </li> 
        <li>Technology<i className="fa fa-angle-down" aria-hidden="true"></i>
                <ul>
         {Technology} 
         </ul>
            </li> 
            <li> Art<i className="fa fa-angle-down" aria-hidden="true"></i>
                <ul>
         { Art} 
         </ul>
            </li> 
       </ul>
        </div>
               
           
            
    
    );
}
export default Menu;  