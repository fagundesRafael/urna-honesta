import './Bono.css'

import moraes1 from '../../img/moraesdeception.jpg'

const Bono = () => {
  return (
    <div className='bono_container'>
      <img src={moraes1} alt="moraes1" />
      <p>Tem certeza que você vai votar nesse candidato?</p>
    </div>
  )
}

export default Bono