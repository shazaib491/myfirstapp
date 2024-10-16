// import React, { Fragment } from "react";

// export default function Home() {
//   let array = [
//     {
//       id: 1,
//       name: "admin",
//       email: "admin@example.com",
//       password: "password",
//     },
//     {
//       id: 2,
//       name: "admin2",
//       email: "admin@2example.com",
//       password: "password",
//     },
//     {
//       id: 3,
//       name: "admin3",
//       email: "admin3@example.com",
//       password: "password",
//     },
//   ];

//   // let arr=[<div>Home</div>,<div>About</div>,<div>Service</div>]
//   // props={item:item,index:index}
//   const DedicatedComponent = ({item}) => {
//     return (
//       <>
//         <h2>{item.name}</h2>
//         <h3>{item.email}</h3>
//         <h4>{item.password}</h4>
//       </>
//     );
//   }

//   return (
//     <>
//       {/* {arr} */}
//       {/* {transformArray} */}
//       {
//         array.map((item,index)=>{
//           return <DedicatedComponent key ={index} item={item} index={index} />
//         })
//       }
//     </>
//   );
// }


import React, { Fragment } from "react";

export default function Home() {
  let array = [
    {
      id: 1,
      name: "admin",
      email: "admin@example.com",
      password: "password",
    },
    {
      id: 2,
      name: "admin2",
      email: "admin@2example.com",
      password: "password",
    },
    {
      id: 3,
      name: "admin3",
      email: "admin3@example.com",
      password: "password",
    },
  ];

  // let arr=[<div>Home</div>,<div>About</div>,<div>Service</div>]
  // props={item:item,index:index}
  const DedicatedComponent = ({item}) => (
      <>
        <h2>{item.name}</h2>
        <h3>{item.email}</h3>
        <h4>{item.password}</h4>
      </>
    );
  

  return (
    <>
      {/* {arr} */}
      {/* {transformArray} */}
      {
        array.map((item,index)=>{
          return <DedicatedComponent key ={index} item={item} index={index} />
        })
      }
    </>
  );
}
