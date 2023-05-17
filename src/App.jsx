import { useState } from "react"
import "./App.css"
import SquareTurn from "./Components/Square"
import TieCard from "./Components/tie/Tie"

import { TURNS } from "./Utils/Utils"
import { GAME_COMBOS } from "./Utils/Utils"



function App() {
  const [board, setBoard]=useState(Array(9).fill(null))
  const [TURN, setTurn]=useState(TURNS.X)
  const [winner, setWinner]=useState(null)


  const clickHandler=(index)=>{  

    setTurn(TURNS.X===TURN?TURNS.O:TURNS.X)
    
    updateBoard(index)
    
  }

  const updateBoard=(index)=>{

    if (board[index]||winner){
      setTurn(TURNS.X===TURN?TURNS.X:TURNS.O)
      return //tener en cuenta que se puede usar un return 
    }

    const newBoard=[...board]
    newBoard[index]=TURN

    winnerUpdate(newBoard, index)

    setBoard(newBoard)

  }

  const winnerUpdate=(board,index)=>{
    const TURN=board[index]
  
     GAME_COMBOS.map((combos)=>{
        const [a,b,c]=combos
        if( board[a]===TURN){
          if(board[b]===TURN){
            if(board[c]===TURN){
              setWinner(TURN)
            }
          }
        }
        
     })
      
     
  }

  return (
    <div className="App">

      <div className="containerTicTacToe">

        <h1>TIC TAC TOE</h1>

        <div className="containerTic">
            {
              board.map((turn, index)=>{
                return(
                  <div
                  className="square" 
                  key={index} 
                  onClick={()=>{clickHandler(index)}}
                   >
                    {turn}
                  </div>
                )
              })
            }
        </div>

        <div className="containerTurnInfo">
          <label>Turn for:</label>
          <SquareTurn  isSelected={TURN==='X'}>X</SquareTurn>
          <SquareTurn  isSelected={TURN==='O'}>O</SquareTurn>
        </div>

      </div>  
        
      <div className="tieCardContainer">
        {(!board.includes(null)||winner)&&<TieCard statusGame={winner} states={[setBoard, setTurn, setWinner]}></TieCard>}
      </div>
    </div>
  );
}

export default App;
