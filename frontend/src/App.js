// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Hello World......
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('/api')
  //     .then((response) => response.json())
  //     .then((data) => setMessage(data.message))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>Hello from the frontend!</p>
    //     <p>{message}</p>
    //   </header>
    // </div>
     <div align='center'>
     <RegistrationForm />
   </div>
  );
}

export default App;
