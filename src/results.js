import React,{useContext} from 'react'
import './index.css'
//import { IoIosArrowBack } from 'react-icons/Io'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './App'

const Results = () => {
  
  const { ageCount, setAgeCount, weightCount, setWeightCount, heightCount, setHeightCount, handleCalculation
  } = useContext(AppContext)


  const navigate = useNavigate()
  return (
    <div className="results-container">
     <h2>Result</h2>
     <p>
        For your height of <span>{heightCount}</span>, weight of <span>{weightCount}</span> and age of <span>{ageCount}</span>,  a normal weight range would be from x to y kilograms.
     </p>
     <p>
       Your BMI is , indicating your weight is in the z category for adults of your height.
     </p>
     <p>
       Mantaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.
     </p>
      <button onClick={() => navigate('/get-bmi')} >Back To Home</button>
    </div>
  )
}

export default Results