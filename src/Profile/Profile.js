// import React from "react";


// const Profile = (props) => {
//   return (
//     <React.Fragment>
// {props.Data.map(x=> <div>{x.firstName} </div>)}  
//   </React.Fragment>
//   );
// };
// export default Profile;

import React from "react";
import Student from "../StudentCard/Student";

const Profile = ({Data, info}) => {
  return (

    <React.Fragment>
<div style={{display:'flex',textAlign:"center", margin:'50px 10%', justifyContent:'space-between'}}>
  {Data.map(x=> <Student  User={x} info={info} />)} 
</div>  
  </React.Fragment>
  );
};
export default Profile;

