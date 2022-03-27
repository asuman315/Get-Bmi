import React,{useContext, useEffect} from 'react'
import './index.css'
//import { IoIosArrowBack } from 'react-icons/Io'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './App'

const Results = () => {
  
  const { height, bmi, recommendation, bmiCategory, healthyWeightRange, setWeight, setHeight, setAge, setCheckMaleGender, setCheckFemaleGender, selectedHeightUnit, selectedWeightUnit, setAlert, alert
  } = useContext(AppContext)

  useEffect(() => {
    if (bmiCategory === 'Obese' || bmiCategory === 'Over Weight') {
      setAlert({ type: 'danger' })
    } else {
      setAlert({ type: '' })
    }
  }, [])

  console.log(alert, bmiCategory);

  const backToHome = () => {
    setWeight('')
    setHeight('')
    setAge('')
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
        Your BMI is <span style={{ color: alert.type === 'danger' ? 'red' : 'hsl(125, 78%, 60%)' }} >{bmi}</span>, indicating your weight is in the <span style={{ color: alert.type === 'danger' ? 'red' : 'hsl(125, 78%, 60%)' }}>{bmiCategory}</span> category for adults of your height.
      </p>
      <p>
        For your height of <span>{height}</span> {selectedHeightUnit === 'm' ? 'meters' : 'feet'}, a normal weight range would be from <span>{healthyWeightRange[0]}</span> to <span>{healthyWeightRange[1]}</span> {selectedWeightUnit === 'Kgs' ? 'kilograms' : 'Pounds'}.
      </p>
      <p>{recommendation}</p>
      <button onClick={backToHome}>Back To Home</button>
    </div>
  )
}

export default Results