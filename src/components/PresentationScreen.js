import "./PresentationScreen.css"
import ministros from "../img/MINISTROS.jpg"

const PresentationScreen = ({foward}) => {

    // setTimeout (function() {
    //     alert("CUT entrou on line no sistema!")
    // }, 1500)



  return (
    <div className="presentationScreen">
        <img className="imgMinistros" src={ministros} alt="" />
        <p> Aqui o seu voto <span>não</span> pode ser auditado, 
            mas não se preocupe pois os <span>heróis</span> verdade absoluta
            estão aqui para garantir a integridade e segurança do seu voto. Vote 13, ops! Vote consciente e com total tranquilidade! xD</p>
            <h4>SISTEMA 100% SEGURO.</h4>
            <button className="foward" onClick={foward}>votar</button>
    </div>
  )
}

export default PresentationScreen