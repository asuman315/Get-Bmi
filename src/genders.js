import { useContext } from 'react';
import femaleIcon from './images/female-icons.svg';
import maleIcon from './images/male-icon.svg';
import { FaCheckCircle } from 'react-icons/fa';
import { AppContext } from './App'

const Genders = () => {

  const { setCheckMaleGender, setCheckFemaleGender, checkMaleGender, checkFemaleGender
  } = useContext(AppContext)

  const maleGenderClicked = () => {
     setCheckMaleGender(true)
     setCheckFemaleGender(false)
  }
  
  const femaleGenderClicked = () => {
     setCheckMaleGender(false)
     setCheckFemaleGender(true)
  }

 return (
   <>
   <p className="genders-title">gender</p>
   <div className="genders-container">
       <div className={`gender ${checkMaleGender ? 'gender-checked' : null}`} onClick={() => maleGenderClicked()}>
         <FaCheckCircle className={`circle-check ${checkMaleGender ? 'circle-checked' : null}`}/>
       <img 
         className='gender-icon' 
         src={maleIcon} 
         alt="male icon" 
       />
       <p className="name">Male</p>
     </div>
       <div className={`gender ${checkFemaleGender ? 'gender-checked' : null}`} onClick={() => femaleGenderClicked()}>
         <FaCheckCircle className={`circle-check ${checkFemaleGender ? 'circle-checked' : null}`} />
         <img 
           className='gender-icon female-icon' 
           src={femaleIcon} 
           alt="female icon" 
         />
       <p className="name">Female</p>
     </div>
  </div>
   </>
 )
}

export default Genders