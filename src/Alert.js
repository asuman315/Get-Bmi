import React, { useContext, useEffect } from 'react';
import { AppContext } from './App'

const Alert = () => {
 //grab alert and setAlert from root component
 const { alert, setAlert } = useContext(AppContext)

 const { msg } = alert

 //clear alert after 3 secs
 useEffect(() => {
  const alertTimeOut = setTimeout (() => {
    setAlert({show: false})
  }, 2500)
  
  //clean up function
  return () => clearTimeout(alertTimeOut)
 }, [])

  return (
    <p className='alert'>{msg}</p>
  )
}

export default Alert