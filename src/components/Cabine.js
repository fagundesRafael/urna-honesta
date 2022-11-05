import Buttons from "./Buttons"
import "./Cabine.css"
import InitialScreen from './InitialScreen'
import PresentationScreen from './PresentationScreen'
import ToVote from './ToVote'
import EndScreen from "./EndScreen"



import { useEffect, useState } from "react"

const Cabine = () => {
    const stages = [
      {id: 1, name: "start"},
      {id: 2, name: "presentation"},
      {id: 3, name: "tovote"},
      {id: 4, name: "votes"},
      {id: 5, name: "end"}
    ]

    const adds = [
      {id: 6, add: "bono"},
      {id: 7, add: "bonoro"},
      {id: 8, add: "lu"},
      {id: 9, add: "lula"},
      {id: 10, add: "noncandidate"},
      {id: 11, add: "confirm"},
      {id: 12, add: "empty"}
    ] 

    const empty = adds[6].add
    const bono = adds[0].add
    const bonoro = adds[1].add
    const lu = adds[2].add
    const lula = adds[3].add
    const noncandidate = adds[4].add
    const confirm = adds[5].add
    
  
      const [stage, setStage] = useState(stages[0].name)
      const [addList, setAddList] = useState(empty)
  
      const onclickStarter = (e) => {
        setStage(stages[1].name)
      }
  
      const foward = () => {
        setStage(stages[2].name)
        alert("Central única dos trabalhadores logou no sistema")
      }

      function push () {
        setStage(stages[4].name)
      }

  const [number, setNumber] = useState()

  useEffect (()=> {
    if (number === "1") {
      setAddList(lu)
    } else if (number === "13") {
      setAddList(lula)
    } else if (number === "2") {
      setAddList(bono)
    } else if (number === "22") {
      setAddList(bonoro)
    } else if (number === "0" || number === "3" || number === "4" || number === "5" || number === "6" || number === "7" || number === "8" || number === "9") {
      setAddList(noncandidate)
    } else {
      setAddList(empty)
    } 
  }, [number, empty, bono, bonoro, lu, lula, noncandidate, confirm])



  return (
    
    <div className="mainContent">
        <div className="screen">
        {stage === "start" && <InitialScreen onclickStarter={onclickStarter}/>}
        {stage === "presentation" && <PresentationScreen foward={foward}/>}
        {stage === "tovote" && <ToVote number={number} add={addList}/>}
        {stage === "end" && <EndScreen/>}
        </div>
        <div className="buttons">
        <Buttons setNumber={setNumber} push={push}/>
        </div>
    </div>
  )
}

export default Cabine