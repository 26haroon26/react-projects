// import React from "react";  ab is ke need nahi

// import React from "react";
// // js js me `React` ka word use ho ga us ke lye (import) ke need hote he
// // const App = () => {  is trah ke function ke lye (import) ke need hot he
// //   return React.createElement('div', {} ,React.createElement('h1', {} ,'Hello World'))
// // }
// // ab jo bhi html he wo jsx he mtlb is me yahen pr javascript bhi lgaden ge
// // sara kam kse 1 main (div) ke under hota he
// //
// function App() {
//   return (
//     <>
//     <MyName /> {/*  is function ko call kraya he ese nested component bhi kehte hen */}
//       <h1>Hello World {3 + 3}</h1>
//       <p/>abcd
//     </>
//     // div ke jgah pr (React.Fragment) ya <> bhi use kr sakhte
//     // class ke lye (className) lkhna pre ga
//     // hr tag ka closing tag ya (/>) lgana pre ga

//   );
// };
// const MyName = () => {
//   // is function ke lye capatal form (MyName) zaroori he
//  return <h1>My Name : Haroon</h1>;
// };
// export default App;

import React from "react";
import Resturant  from "./components/resturants/Resturant";

 const App = () => {
  return<Resturant />;
};

export default App;
