import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import ShoeList from './Components/List/List.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Payment from './Components/Payment/Payment.jsx'
// import Cartcopy from './Components/Cartcopy/Cartcopy.jsx';
import { store } from './app/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<>
              <Navbar/>
              <ShoeList />
              <Cart />
            </>} />
            <Route path="/payment" element={<>
              <Navbar/>
              <Payment />
            </>} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;