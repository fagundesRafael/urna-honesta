import './NonCandidate.css'

import traficantes from "../../img/traficantes.webp"

const NonCandidate = () => {
  return (
    <div className='err_container'>
        <img src={traficantes} alt="lulavermelho" />
      <p>Vota direito aí vacilão! Tem esse candidato aí não! Aperta corrige e vota logo no 13 pra não ter treta! </p>
    </div>
  )
}

export default NonCandidate