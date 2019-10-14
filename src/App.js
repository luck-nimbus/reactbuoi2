import React from 'react';
import Headers from './Components/Header'; // mặc định chạy index trong thư mục
import Carousel from './Components/Carousel';
import SmartPhoneList from './Components/SmartPhoneList';



function App() {
  return (
    <div className="App">
      <Headers />
      <Carousel />
      <SmartPhoneList />
    </div>  
  );
}

export default App;
