import circleMinus from './images/circle-minus.svg';
import circlePlus from './images/circle-plus.svg'; 
import React, { createContext, useContext } from 'react';
import {AppContext} from './App'
import Alert from './Alert'

const Age = () => {
  
  const { age, setAge, weight, setWeight, height, setHeight, handleCalculation, alert, selectedHeightUnit, setSelectedWeightUnit, selectedWeightUnit, setSelectedHeightUnit
} = useContext(AppContext)
 
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
                onClick={() => setAge(age - 1)} 
              />
            <input 
                type="number" 
                placeholder='e.g 28' 
                value={age} 
                onChange={(e) => setAge(parseInt(e.target.value))}
                min='1'
                required  
             />
            <img 
              src={circlePlus} 
              className='circle-plus'  
              alt="circle-plus icon"
                onClick={() => setAge(age + 1)}
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
                onClick={() => setWeight(weight - 1)} 
              />
             <input 
                type="number" 
                placeholder='e.g 68'
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value))
                } 
                required 
              />
             <img 
                src={circlePlus} 
                alt="circle plus" 
                className='circle-plus' 
                onClick={() => setWeight(weight + 1)} 
              />
              <select 
                className='units'
                value={selectedWeightUnit}
                onChange={(e) => setSelectedWeightUnit(e.target.value)} 
              >
                <option value='Kgs'>Kgs</option>
                <option value='Ibs'>Ibs</option>
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
                onClick={() => setHeight( Math.round( ( height - 0.1 ) * 10 ) / 10 )} 
              required 
            />
            <input 
              type="number"  
              placeholder='e.g 1.8' 
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value)) }
              step='0.1'
              required 
            />
            <img 
              src={circlePlus} 
              className='circle-plus' 
              alt="circle plus" 
              onClick={() => setHeight(Math.round((height + 0.1) * 10)/10)} 
            />
            <select 
              className='units'
              value={selectedHeightUnit}
              onChange={(e) => setSelectedHeightUnit(e.target.value)}
            >
              <option value='m'>m</option>
              <option value='ft'>ft</option>
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