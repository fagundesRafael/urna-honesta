import './Buttons.css'
import logocolor from "../img/brasao-da-republica-federativa-do-brasil-logo-8DFAF80118-seeklogo.com.png"
import moraes2 from "../img/moraes-sabatina-sorriso.webp"

import { useState } from 'react'


const Buttons = ({setNumber, push}) => {

    const [chosenNumber, setChosenNumber] = useState(0)
    const [oldNumber, setOldNumber] = useState(0)

    function inputNumber (e) {
      var num = e.target.value
      if (chosenNumber === 0) {
        setChosenNumber(num)
        setNumber(num)
        setOldNumber(num)
      } else {
        setNumber(oldNumber + num)
        setChosenNumber(oldNumber + num)
      }
    }

    function clear () {
      setChosenNumber(0)
      setNumber("")
    }

    function branco () {
      setChosenNumber(13)
      setNumber("")
    }

    function confirma (e) {
      e.preventDefault()
      if(chosenNumber === "13") {
        alert("Lula, o pai dos pobres ganha mais um voto ")
        push()
      } else if (chosenNumber === "22") {
        alert("Para o bem da Democracia, seu voto será computado como nulo!")
        push()
      } else {
        alert("Candidato não encontrado \n Para a segurança da nossa democracia, escolha um candidato válido (preferencialmente o Lula paz e amor)")
      }
    }


  return (
    <div className="mainContainerButtons">
      <section className="headerTitle">
        <img src={logocolor} alt="" />
        <img src={moraes2} alt="" />
        <p><span>in</span>JUSTIÇA<br></br>ELEITORAL</p>
      </section>
      <div className="area">
        <div className="buttons">
          <div>
            <button onClick={inputNumber} value={1}>1</button>
            <button onClick={inputNumber} value={2}>2</button>
            <button onClick={inputNumber} value={3}>3</button>
            <button onClick={inputNumber} value={4}>4</button>
            <button onClick={inputNumber} value={5}>5</button>
            <button onClick={inputNumber} value={6}>6</button>
            <button onClick={inputNumber} value={7}>7</button>
            <button onClick={inputNumber} value={8}>8</button>
            <button onClick={inputNumber} value={9}>9</button>
            <button onClick={inputNumber} value={0} className="zero">0</button>
              <div className="sbuttons">
                  <button className="bbranco" onClick={branco}>BRANCO</button>
                  <button className="bcorrige" onClick={clear}>CORRIGE</button>
                    <form onSubmit={confirma}>
                      <input type="submit" className="bconfirm" value="CONFIRMA" />
                    </form>
              </div>      
        </div>
        </div>

      </div>
        
    </div>
  )
}

export default Buttons