import { useState } from 'react';
import Header from './components/Header'
import Userinput from './components/Userinput'
import Result from './components/Result';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputISValid=userInput.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  };
  
  return (
    <>
      
        <Header/>
        <Userinput userInput={userInput} onChange={handleChange}/>
        {!inputISValid && <p className='bg-center'>Please enter a duration greater than zero</p>}
        {inputISValid && <Result input={userInput}/> } 
    </>
  )
}

export default App
