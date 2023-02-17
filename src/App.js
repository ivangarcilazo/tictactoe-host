import { useState } from "react"
import "./App.css"


const TURNS={
  X:'X',
  O:'O'
}


const GAME_COMBOS=[]


function App() {
  const [board, setBoard]=useState(Array(9).fill(null))

  const[TURN, SetTurn]=useState(TURNS.X)

  const clickHandler=(index)=>{  
    updateBoard(index)
    SetTurn(TURNS.X===TURN?TURNS.O:TURNS.X)

  }
  const updateBoard=(index)=>{
    const newBoard=[...board]
    newBoard[index]=TURN

    setBoard(newBoard)
  }
  return (
    <div className="App">

        <h1>TIC TAC TOE</h1>

        <div className="containerTic">
            {
              board.map((turn, index)=>{
                return(
                  <div key={index} className="square" onClick={()=>clickHandler(index)}>
                    {turn}
                  </div>
                )
              })
            }
        </div>
        <div className="containerTurnInfo">
          <label>Turn for:</label>
          <div className="turnInfo" isSelected={TURN==='X'}>X</div>
          <div className="turnInfo" isSelected={TURN==='O'}>O</div>

        </div>
    </div>
  );
}

export default App;
