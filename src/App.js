import { useState } from 'react';
import './App.css';

function App() {
  const [boops, setBoops] = useState(0);
  const [bips, setBips] = useState(0);
  const [threshold, setThreshold] = useState(10);
  const [total, setTotal] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleThreshold = (num) =>{
    let newThreshold = num === ""?0:num;
    setThreshold(newThreshold);
  }

  const addBoops = () => {
    let newBoops = boops+1;
    if(total+1 <= threshold){
      if(total+1 === threshold){
        setOpacity(1)
      }
      setBoops(newBoops);
      setTotal(newBoops+bips)
    }
  }
  const addBips = () => {
    let newBips = bips+1;
    if(total+1 <= threshold){
      if(total+1 === threshold){
        setOpacity(1)
      }
      setBips(newBips);
      setTotal(newBips+boops)
    }
  }

  return (
    <div className="App">
      <div className="header"> 
        <p>I'VE CLICKED {total} TOTAL TIMES:)</p>
      </div>
      <div className="upper-content">
            <label>Threshold: </label>
            <input 
            id="threshold-input" 
            type="number" 
            defaultValue="10"
            onChange={(e)=>handleThreshold(e.target.value)}
            value={threshold} 
            />
      </div>

      <div className="chunk-container">
        <div className="left-Col">
           <label className="boops-label">Boops: {boops} </label>
           <button 
            className="boops-btn btn"
            onClick={()=>addBoops()}>Boop</button>
        </div>
        <div className="mid-Col" >
          <img 
          src='/panda.png' 
          alt=""
          style={{opacity:opacity}}
          /> 
        </div>
        <div className="right-Col">
          <label className="bips-label">Bips: {bips}</label>
          <button 
              className="bips-btn btn"
              onClick={()=>addBips()}>Bip</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
