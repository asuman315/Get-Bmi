import Main from './main';
import {Routes,
        Route,
      } from 'react-router-dom'
import './index.css'
import Results from './results';
import React, {useState, createContext} from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

const App = () => {
 // console.log(bmi);

  const [ageCount, setAgeCount] = useState('')
  const [weightCount, setWeightCount] = useState('')
  const [heightCount, setHeightCount] = useState('')
  const [checkMaleGender, setCheckMaleGender] = useState()
  const [checkFemaleGender, setCheckFemaleGender] = useState()

  const handleCalculation = () => {
    let bmi = weightCount / (heightCount * heightCount)
    bmi = Math.round(bmi)
    navigate('/results')
    return bmi
  }

  let navigate = useNavigate()

  //console.log(handleCalculation());
  
  return (
      <AppContext.Provider value={{ 
        ageCount, 
        setAgeCount, 
        weightCount, 
        setWeightCount, 
        heightCount, 
        setHeightCount, 
        handleCalculation,
        checkFemaleGender,
        checkMaleGender,
        setCheckFemaleGender,
        setCheckMaleGender 
      }}>
      <Routes>
          <Route path='/get-bmi' element={<Main />} />
          <Route path='/results' element={<Results />} />
      </Routes>
      </AppContext.Provider> 
  )
}

export default App;




