import Main from './main';
import {
  Routes,
  Route,
} from 'react-router-dom'
import './index.css'
import Results from './results';
import React, { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//require('./age')

export const AppContext = createContext();

const App = () => {

  const [ageCount, setAgeCount] = useState('')
  const [weightCount, setWeightCount] = useState('')
  const [heightCount, setHeightCount] = useState('')
  const [checkMaleGender, setCheckMaleGender] = useState()
  const [checkFemaleGender, setCheckFemaleGender] = useState()
  const [optionWeightValue, setOptionWeightValue] = useState('Kgs')
  const [optionHeightValue, setOptionHeightValue] = useState('m')
  const [alert, setAlert] = useState({ show: false, msg: '', type: ''})

  
 
 // Handling Healthy Weight Ranges and Bmi
  let convertedBmi = ''
  let convertedHealthyWeightOne = ''
  let convertedHealthyWeightTwo = ''
  const healthyBmiOne = 18.5;
  const healthyBmiTwo = 24.9;
  
  //else if won't work if two conditions (like if a == 2 && b === 3) are incorporated statements with one condition (like if a === 2). All must be two if two conditions are to be used and vise varsa.
  if (optionWeightValue === 'Ibs' && optionHeightValue === 'm') {
    //console.log('Pounds and meters have been selected')
    convertedBmi = (weightCount * 0.4536) / (heightCount * heightCount)
    
    convertedHealthyWeightOne = (heightCount * heightCount) * healthyBmiOne/0.4536
    
    convertedHealthyWeightTwo = (heightCount * heightCount) * healthyBmiTwo/0.4536

  } else if (optionHeightValue === 'ft' && optionWeightValue === 'Kgs' ) {
    //console.log('Feet and Kilos have been selected')
    convertedBmi = weightCount / (heightCount * heightCount * 0.093)

    convertedHealthyWeightOne = healthyBmiOne * (heightCount * heightCount * 0.093)
    
    convertedHealthyWeightTwo = healthyBmiTwo * (heightCount * heightCount * 0.093)

  } else if (optionWeightValue === 'Ibs' && optionHeightValue === 'ft') {
    //console.log('Pounds and Feet have been selected');
    convertedBmi = (weightCount * 0.4536) / (heightCount * heightCount * 0.093)

    convertedHealthyWeightOne = healthyBmiOne * (heightCount * heightCount * 0.093)/0.4536

    convertedHealthyWeightTwo = healthyBmiTwo * (heightCount * heightCount * 0.093) / 0.4536

  } else {
    //console.log('Default Values (Kgs and m) have been selected')
    convertedBmi = weightCount / (heightCount * heightCount)
    
    convertedHealthyWeightOne = healthyBmiOne * (heightCount * heightCount)
    
    convertedHealthyWeightTwo = healthyBmiTwo * (heightCount * heightCount)

  } 

  const bmi = Math.round((convertedBmi) * 10) / 10;
  const healthyWeightOne = Math.round(convertedHealthyWeightOne);
  const healthyWeightTwo = Math.round(convertedHealthyWeightTwo);
  const healthyWeightRange = [healthyWeightOne, healthyWeightTwo]
  console.log(bmi, healthyWeightRange);
  
  
  //Handling Bmi categories
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
    console.log(optionWeightValue, weightCount);
    //handle validations
    if (heightCount === '' || weightCount === '' || ageCount === '') {
      setAlert({show: true, msg: 'Please, you need to provide your Weight, Age and Height!'})
      return
    }
    if (!checkFemaleGender && !checkMaleGender) {
      setAlert({ show: true, msg: 'Please, you need to select a gender!' })
      return
    }
   // console.log(weightCount);
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
      healthyWeightRange,
      alert,
      setAlert,
      optionHeightValue,
      optionWeightValue,
      setOptionHeightValue,
      setOptionWeightValue

    }}>
      <Routes>
        <Route path='/get-bmi' element={<Main />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </AppContext.Provider>
  )
}

export default App;




