import { useState } from "react"


export default function LudoBoard(){
    let[moves,setMoves]= useState({blue:0,red:0,orange:0,green:0});
    let[arr,setArr] = useState(["no moves"]);

    let updateBlue =()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,blue:prevMoves.blue+1}
        });

        // setArr((prevArr)=>{
        //     return[...prevArr,"blue moves"];
        // });
        // console.log(arr);
    };

    let updateRed =()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,red:prevMoves.red+1}
        });
    };

    let updateGreen =()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,green:prevMoves.green+1}
        });
    };

    let updateOrange =()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,orange:prevMoves.orange+1}
        });
    };

    return(
        <div>
            <p style={{color:"white"}}> {arr}</p>
            <p style={{color:"white"}}>Game Begins!</p>
            <div className="board">  
            <p style={{color:"white"}}>Blue moves ={moves.blue} </p>
            <button style={{backgroundColor:"blue" ,color:"white"}} onClick={updateBlue}>+1</button>
            </div>

            <div className="board">  
            <p style={{color:"white"}}>Red moves ={moves.red} </p>
            <button style={{backgroundColor:"Red" ,color:"white"}} onClick={updateRed}>+1</button>
            </div>

            <div className="board">  
            <p style={{color:"white"}}>Green moves ={moves.green} </p>
            <button style={{backgroundColor:"green" ,color:"white"}} onClick={updateGreen}>+1</button>
            </div>

            <div className="board">  
            <p style={{color:"white"}}>Orange moves ={moves.orange} </p>
            <button style={{backgroundColor:"orange" ,color:"white"}} onClick={updateOrange}>+1</button>
            </div>
        </div>
        
    )
}