import React,{useState} from "react";
import "./App.css";

import Board from "./Components/Board/Board";

const App = () => {
    // To Display the the 9 grid boxes
    const [board, setBoard] = useState(Array(9).fill(null));

    const[xPlaying,setXPlaying]=useState(true)

    const handleBoxClick = (boxIdx) => {
        // To Update the board
        const updateBoard = board.map((value, idx) => {
            if (idx == boxIdx) {
                return xPlaying==true?"X":"O"
            } else {
                return value;
            }  
        })
        setBoard(updateBoard)
        setXPlaying(!xPlaying)
    }
    
  return (
      <div className="App">
          <Board board={board} onClick={handleBoxClick} />
        
      </div>
    
  );
};

export default App;
