import './App.css'
import {useState} from "react"

function App() {

  let [res, setRes] = useState(0)
  let [screenValue, setScreenValue] = useState(0)
  let [plusSymb, setPlusSymb] = useState(false)
  let [minusSymb, setMinusSymb] = useState(false)
  let [multiplySymb, setMultiplySymb] = useState(false)
  let [divideSymb, setDivideSymb] = useState(false)

  const zero = () =>{
    if(screenValue < 99999999) {
      setScreenValue(screenValue*10)
    }
  }
  const one = () =>{
    if(screenValue < 99999999) {
      setScreenValue(screenValue*10+1)
    }
  }
  const two = () =>{
    if(screenValue < 99999999) {
      setScreenValue(screenValue*10+2)
    }
  }
  const three = () =>{
    if(screenValue < 99999999) {
      setScreenValue(screenValue*10+3)
    }
  }
  const four = () =>{
    if(screenValue < 99999999) {
      setScreenValue(screenValue*10+4)
    }
  }
  const five = () =>{
    if(screenValue < 99999999) {
      setScreenValue(screenValue*10+5)
    }
  }
  const six = () =>{
    if(screenValue < 99999999) {
      setScreenValue(screenValue*10+6)
    }
  }
  const seven = () =>{
    if(screenValue < 99999999) {
      setScreenValue(screenValue*10+7)
    }
  }
  const eight = () =>{
    if(screenValue < 99999999) {
      setScreenValue(screenValue*10+8)
    }
  }
  const nine = () =>{
    if(screenValue < 99999999) {
      setScreenValue(screenValue*10+9)
    }
  }
  const plus = () =>{
    setPlusSymb(true)
    setRes(screenValue)
    setScreenValue(0)
  }
  const minus = () =>{
    setMinusSymb(true)
    setRes(screenValue)
    setScreenValue(0)
  }
  const multiply = () =>{
    setMultiplySymb(true)
    setRes(screenValue)
    setScreenValue(0)
  }
  const divide = () =>{
    setDivideSymb(true)
    setRes(screenValue)
    setScreenValue(0)
  }
  const clear = () =>{
    setRes(0)
    setScreenValue(0)

    setPlusSymb(false)
    setMinusSymb(false)
    setMultiplySymb(false)
    setDivideSymb(false)
  }
  const equals = () =>{
    if(plusSymb) setScreenValue(Math.round(res + screenValue))
    if(minusSymb) setScreenValue(Math.round(res - screenValue))
    if(multiplySymb) setScreenValue(Math.round(res * screenValue))
    if(divideSymb) setScreenValue(Math.round(res / screenValue))

    setPlusSymb(false)
    setMinusSymb(false)
    setMultiplySymb(false)
    setDivideSymb(false)
  }

  return (
    <div className="App">
      <div className="calculatorWrapperAll">
        <div className="calculator">
          <div className="display">
            <span className="resultScreen">
              {screenValue}
            </span>
          </div>
          <div className="buttons">
            <div className="buttonsWrapper">
              <button className="zero" onClick={zero}>0</button>
              <button className="one" onClick={one}>1</button>
              <button className="two" onClick={two}>2</button>
              <button className="three" onClick={three}>3</button>
              <button className="four" onClick={four}>4</button>
              <button className="five" onClick={five}>5</button>
              <button className="six" onClick={six}>6</button>
              <button className="seven" onClick={seven}>7</button>
              <button className="eight" onClick={eight}>8</button>
              <button className="nine" onClick={nine}>9</button>
              <button className="plus" onClick={plus}>+</button>
              <button className="minus" onClick={minus}>-</button>
              <button className="multiply" onClick={multiply}>*</button>
              <button className="divide" onClick={divide}>/</button>
              <button className="equals" onClick={equals}>=</button>
              <button className="clear" onClick={clear}>C</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
