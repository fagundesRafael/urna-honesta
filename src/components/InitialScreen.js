import "./InitialScreen.css"
import brasão from "../img/brasao-do-brasil-republica-1.png"

const InitialScreen = ({onclickStarter}) => {
  return (
    <div className="generalScreen">
        <img className="imgBrasão" src={brasão} alt="" />
        <h2>Justiça Eleitoral Honesta</h2>
        <h3>Confiaaaaa.... xD</h3>
        <button onClick={onclickStarter} className="start">começar</button>
    </div>
  )
}

export default InitialScreen