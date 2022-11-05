import "./ToVote.css"

import Empty from './adds/Empty'
import Bono from "./adds/Bono"
import Bonoro from "./adds/Bonoro"
import Lu from "./adds/Lu"
import Lula from "./adds/Lula"
import NonCandidate from "./adds/NonCandidate"

const ToVote = ({number, add}) => {

  return (
    <div>
      <h1>Presidente da República</h1>
        <div  className="tovoteScreen">
        <h2 className="squareNumber">{number}</h2>
        <div className="adds">
        {add === "empty" && <Empty/>}
        {add === "bono" && <Bono/>}
        {add === "bonoro" && <Bonoro/>}
        {add === "lu" && <Lu/>}
        {add === "lula" && <Lula/>}
        {add === "noncandidate" && <NonCandidate/>}
        </div>
        </div>
    </div>
  )
}

export default ToVote