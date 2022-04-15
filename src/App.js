import Main from './main';
import {
  Routes,
  Route,
} from 'react-router-dom'
import './index.css'
import Results from './results';
import React, { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
//require('./age')

export const AppContext = createContext();

const App = () => {

  const [age, setAge] = useState(0)
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [checkMaleGender, setCheckMaleGender] = useState()
  const [checkFemaleGender, setCheckFemaleGender] = useState()
  const [selectedWeightUnit, setSelectedWeightUnit] = useState('Kgs')
  const [selectedHeightUnit, setSelectedHeightUnit] = useState('m')
  const [alert, setAlert] = useState({ show: false, msg: '', type: ''})

  
 
 // Handling Healthy Weight Ranges and Bmi
  let convertedBmi = ''
  let convertedHealthyWeightOne = ''
  let convertedHealthyWeightTwo = ''
  const healthyBmiOne = 18.5;
  const healthyBmiTwo = 24.9;
  
  //else if won't work if two conditions (like if a == 2 && b === 3) are incorporated statements with one condition (like if a === 2). All must be two if two conditions are to be used and vise varsa.
  if (selectedWeightUnit === 'Ibs' && selectedHeightUnit === 'm') {
    //console.log('Pounds and meters have been selected')
    convertedBmi = (weight * 0.4536) / (height * height)
    
    convertedHealthyWeightOne = (height * height) * healthyBmiOne/0.4536
    
    convertedHealthyWeightTwo = (height * height) * healthyBmiTwo/0.4536

  } else if (selectedHeightUnit === 'ft' && selectedWeightUnit === 'Kgs' ) {
    //console.log('Feet and Kilos have been selected')
    convertedBmi = weight / (height * height * 0.093)

    convertedHealthyWeightOne = healthyBmiOne * (height * height * 0.093)
    
    convertedHealthyWeightTwo = healthyBmiTwo * (height * height * 0.093)

  } else if (selectedWeightUnit === 'Ibs' && selectedHeightUnit === 'ft') {
    //console.log('Pounds and Feet have been selected');
    convertedBmi = (weight * 0.4536) / (height * height * 0.093)

    convertedHealthyWeightOne = healthyBmiOne * (height * height * 0.093)/0.4536

    convertedHealthyWeightTwo = healthyBmiTwo * (height * height * 0.093) / 0.4536

  } else {
    //console.log('Default Values (Kgs and m) have been selected')
    convertedBmi = weight / (height * height)
    
    convertedHealthyWeightOne = healthyBmiOne * (height * height)
    
    convertedHealthyWeightTwo = healthyBmiTwo * (height * height)

  } 

  const bmi = Math.round((convertedBmi) * 10) / 10;
  const healthyWeightOne = Math.round(convertedHealthyWeightOne);
  const healthyWeightTwo = Math.round(convertedHealthyWeightTwo);
  const healthyWeightRange = [healthyWeightOne, healthyWeightTwo]
  //console.log(bmi, healthyWeightRange);
  
  
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
  

    let navigate = useNavigate()

  const handleCalculation = () => {
    
    //handle validations
    if (height <= 0 || isNaN(height) || weight <= 0 || isNaN(weight) || age <= 0 || isNaN(age)) {
      setAlert({show: true, msg: 'Please, make sure you entered the right Age, Weight and Height!'})
      return
    }

    if (!checkFemaleGender && !checkMaleGender) {
      setAlert({ show: true, msg: 'Please, you need to select a gender!' })
      return
    }

    if (age < 18) {
      setAlert({ 
        show: true,
        msg: 'Sorry!! Bmi is not used for children below 18 years'
      })
      return
    }

    if (age > 65) {
        setAlert({
          show: true,
          msg: 'Sorry!! Bmi is not used for the elderly above 65 years'
      })
      return
    }

   // console.log(weightCount);
    navigate('/results')
  }
  return (
    <AppContext.Provider value={{
      age,
      setAge,
      weight,
      setWeight,
      height,
      setHeight,
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
      selectedHeightUnit,
      selectedWeightUnit,
      setSelectedHeightUnit,
      setSelectedWeightUnit
    }}>
      <Routes>
        <Route path='/get-bmi' element={<Main />} />
        <Route path='/results' element={<Results />} />
      </Routes>
      <Footer />
    </AppContext.Provider>
  )
}

export default App;




