import circleMinus from './images/circle-minus.svg';
import circlePlus from './images/circle-plus.svg'; 
import React, { createContext, useContext } from 'react';
import {AppContext} from './App'
import Alert from './Alert'
// import {} from 'react-icons/fa';

//const AppContext = createContext();

const Age = () => {
  
  const { ageCount, setAgeCount, weightCount, setWeightCount, heightCount, setHeightCount, handleCalculation, alert, optionValues, setOptionValues 
} = useContext(AppContext)

  //destructure optionValues
  const [Kgs, Ibs, m, ft] = optionValues
 
  return (
   <div className="age-container">
     <form action="#">
      <ul>
       <li className='age'>
          <h3>Age</h3>
          <div className="fields">
             <img 
                src={circleMinus} 
                className='circle-minus' 
                alt="circle-minus icon" 
                onClick={() => setAgeCount(ageCount - 1)} 
              />
            <input 
                type="number" 
                placeholder='e.g 28' 
                value={ageCount} 
                onChange={(e) => setAgeCount(parseInt(e.target.value))}
                min='1'
                required  
             />
            <img 
              src={circlePlus} 
              className='circle-plus'  
              alt="circle-plus icon"
                onClick={() => setAgeCount(ageCount + 1)}
            />
          </div>
       </li>
       <li className='weight'>
          <h3>Weight</h3>
          <div className="fields">
             <img 
                src={circleMinus} 
                alt="cricle plus" 
                className='circle-minus' 
                onClick={() => setWeightCount(weightCount - 1)} 
              />
             <input 
                type="number" 
                placeholder='e.g 68'
                value={weightCount}
                onChange={(e) => setWeightCount(parseInt(e.target.value))
                } 
                required 
              />
             <img 
                src={circlePlus} 
                alt="circle plus" 
                className='circle-plus' 
                onClick={() => setWeightCount(weightCount + 1)} 
              />
              <select className='units' >
                <option value={Kgs}>{Kgs}</option>
                <option value={Ibs}>{Ibs}</option>
              </select>
          </div>
       </li>
       <li className='height'>
          <h3>Height</h3>
          <div className="fields">
            <img 
              src={circleMinus} 
              className='circle-minus' 
              alt="circle minus" 
              onClick={() => setHeightCount(heightCount - 0.01)} 
              required 
            />
            <input 
              type="number"  
              placeholder='e.g 1.8' 
              value={heightCount}
              onChange={(e) => setHeightCount(parseFloat(e.target.value))}
              step='0.01'
              required 
            />
            <img 
              src={circlePlus} 
              className='circle-plus' 
              alt="circle plus" 
              onClick={() => setHeightCount(heightCount + 0.01)} 
            />
            <select className='units'>
                <option value={m}>{m}</option>
                <option value={ft}>{m}</option>
            </select>
          </div> 
       </li>
      </ul>
     </form>
     {alert.show && <Alert />}
      <div className="button-container">
        <button className='calculate-btn' onClick={handleCalculation}>Calculate Your BMI</button>
      </div>
  </div>
 )
}

export default  Age