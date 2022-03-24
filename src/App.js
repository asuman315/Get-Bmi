import Main from './main';
import {
  Routes,
  Route,
} from 'react-router-dom'
import './index.css'
import Results from './results';
import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

const App = () => {

  const [ageCount, setAgeCount] = useState(28)
  const [weightCount, setWeightCount] = useState(68)
  const [heightCount, setHeightCount] = useState(1.8)
  const [checkMaleGender, setCheckMaleGender] = useState()
  const [checkFemaleGender, setCheckFemaleGender] = useState()
  const [optionValues, setOptionValue] = useState(['Kgs', 'Ibs', 'm', 'ft'])
  const [alert, setAlert] = useState({ show: false, msg: '', type: ''})

  // if (select.value === 'Ibs') {

  // }

  //calculate bmi
  let bmi = weightCount / (heightCount * heightCount)
  bmi = Math.round(bmi)
  // console.log(bmi);

  let normalWeightOne = 18.5 * (heightCount * heightCount)
  normalWeightOne = Math.round(normalWeightOne)
  
  let normalWeightTwo = 24.9 * (heightCount * heightCount)
  normalWeightTwo = Math.round(normalWeightTwo)

  const normalWeightRanges = [normalWeightOne, normalWeightTwo]
  
  let bmiCategory = '';
  let recommendation = '';


  if(bmi < 18.5) {
    bmiCategory = 'Under Weight'
    recommendation = 'Mantaining a healthy weight  may reduce the risk of chronic diseases associated with overweight and obesity'
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = 'Normal weight'
    recommendation = 'Mantaining a healthy weight  may reduce the risk of chronic diseases associated with overweight, underweight and obesity.'
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = 'Over Weight'
    recommendation = 'Common treatments for overweight include losing weight through healthy eating and being more physically active. Mantaining a healthy weight may reduce the risk of chronic diseases associated with overweight.'
  } else {
    bmiCategory = 'Obese'
    recommendation = 'Common treatments for obesity include losing weight through healthy eating and being more physically active. Mantaining a healthy weight may reduce the risk of chronic diseases associated with obesity.'
  }

    //console.log(handleCalculation());

  let navigate = useNavigate()

  const handleCalculation = () => {

    //handle validations
    if (heightCount === '' || weightCount === '' || ageCount === '') {
      setAlert({show: true, msg: 'Please, you need to provide your Weight, Age and Height!'})
      return
    }

    if (!checkFemaleGender && !checkMaleGender) {
      setAlert({ show: true, msg: 'Please, you need to select a gender!' })
      return
    }
    navigate('/results')
  }


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
      setCheckMaleGender,
      bmi,
      recommendation,
      bmiCategory,
      normalWeightRanges,
      alert,
      setAlert,
      optionValues,
      setOptionValue
    }}>
      <Routes>
        <Route path='/get-bmi' element={<Main />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </AppContext.Provider>
  )
}

export default App;




