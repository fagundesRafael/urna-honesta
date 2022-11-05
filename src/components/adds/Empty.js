import './Empty.css'

import cut from '../../img/cut.png'

const Empty = () => {
  return (
    <div className="empty_container">
        <p>A Urna Eletrônica é completamente segura!</p>
        <p>Nem hacker da NASA consegue hackear aqui!</p>
        <img src={cut} alt="cut" />
        
    </div>
  )
}

export default Empty