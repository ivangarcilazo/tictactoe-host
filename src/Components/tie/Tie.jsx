import ".//Tie.css"

import {TURNS} from "../../Utils/Utils"

export default function TieCard(props){

    const {statusGame, states}=props

    const [setBoard,setTurn,setWinner]=states

    return(
        <div className="containerTie">
            {statusGame?<h2 className="infoGameText">{statusGame} is the Winner!</h2>:<h2 className="infoGameText">TIE!</h2>}
            <div className="containerStatusGame">
                {
                    statusGame? (
                        <div>
                            <span className="textForEnd">Congratulations {statusGame}!</span>
                        </div>
                    ):(
                        <div>
                            <span className="textForEnd">Time for a rematch!</span>
                        </div>
                    )
                }
            </div>
            <div className="playAgain">
                <div className="containerRetryButton" onClick={()=>{setBoard(Array(9).fill(null), setTurn(TURNS.X), setWinner(null))}}>
                    <img className="imgRetry" src="http://cdn.onlinewebfonts.com/svg/img_106832.png" alt="" />
                </div>
            </div>
        </div>
    )
}