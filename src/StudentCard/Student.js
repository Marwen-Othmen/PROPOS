import React from "react";



const Student= ({User:{firstName,profession,BIO,img},info}) => {
   // const f=()=>info(firstName,profession,BIO)
     return(
        <React.Fragment>
           
<div style={{border:'1px solid black',margin:'20px', position:'relative',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
   <div>
         <h1 style={{color:'red'}}> {firstName}  </h1>
         <h3> {profession}   </h3>
            <h3> {BIO}   </h3>
   </div>
<img style={{width:'300px'}} src={img}/>
<button onClick={()=>info(firstName,profession,BIO)}> click </button> 
{/* {f} */}
</div>
       </React.Fragment>
     )
}
export default Student ;