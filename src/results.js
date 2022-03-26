import React,{useContext} from 'react'
import './index.css'
//import { IoIosArrowBack } from 'react-icons/Io'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './App'

const Results = () => {
  
  const { ageCount, weightCount, heightCount, bmi, recommendation, bmiCategory, healthyWeightRange, setWeightCount, setHeightCount, setAgeCount, setCheckMaleGender, setCheckFemaleGender
  } = useContext(AppContext)

  const backToHome = () => {
    setWeightCount('')
    setHeightCount('')
    setAgeCount('')
    setCheckMaleGender('')
    setCheckFemaleGender('')
    navigate('/get-bmi')
  }


  const navigate = useNavigate()
    // Mantaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.
  return (
    <div className="results-container">
      <h2>Result</h2>
      <p>
        Your BMI is <span>{bmi}</span>, indicating your weight is in the <span>{bmiCategory}</span> category for adults of your height.
      </p>
      <p>
        For your height of <span>{heightCount}</span>, a normal weight range would be from <span>{healthyWeightRange[0]}</span> to <span>{healthyWeightRange[1]}</span> kilograms.
      </p>
      <p>{recommendation}</p>
      <button onClick={backToHome}>Back To Home</button>
    </div>
  )
}

export default Results