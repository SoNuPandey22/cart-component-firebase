import React from 'react';
import './App.css';
import Cart from './Cart.js'
import Time from './state.js'


// function App() {
//   return (
//     <div>
//       <Cart name='sonu' />
//     </div>
//   );
// };
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div>
            <Cart name='sonu'/>
            <Time />
        </div>
      );
  }
}

export default App;
