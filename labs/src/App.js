
import './App.css';
import WorldClock from './Components/WorldClock/WorldClock'
import React from 'react';
import ContinuousSlider from './Components/Slider/Slider';
import CurencyConvertor from './Components/CurencyConvertor/CurencyConvertor'
import RandomNumber from './Components/RandomNumber/RandomNumber';
import Gallery from './Components/Gallery/Gallery'


const arr=[
  {
    TenThanhPho: 'India',
    MuiGio: '+5'
  },

  {
    TenThanhPho: 'Clifonia',
    MuiGio: '-8'
  },

  {
    TenThanhPho: 'NewYork',
    MuiGio: '+2'
  },

  {
    TenThanhPho: 'London',
    MuiGio: '+10'
  },

  {
    TenThanhPho: 'Sydney',
    MuiGio: '+6'
  },

  {
    TenThanhPho: 'China',
    MuiGio: '+9'
  },

  {
    TenThanhPho: 'Tokyo',
    MuiGio: '+1'
  },

  {
    TenThanhPho: 'Berlin',
    MuiGio: '+5'
  }
]


function App() {

  return (
    <div className="App" id='app'>
      {/* <div className='WorldClock'>
        {arr.map(function(a,index){
        const {TenThanhPho,MuiGio }= a
        return(<WorldClock key={index}TenThanhPho={TenThanhPho}MuiGio={MuiGio}/>)
        })}
      </div> */}
      
      
      {/* <ContinuousSlider/> */}
      
      <CurencyConvertor/>

      {/* <RandomNumber/> */}

      {/* <Gallery/> */}
      
    </div>
  );
}

export default App;
