import React,{useState} from 'react'


function Home() {
    const [result,setResult] =useState("");
    const handleClick=(e)=>{
        setResult(result.concat(e.target.name));
    }
    const clear=()=>{
        setResult("")
    };
    const backspace=()=>{
        setResult(result.slice(0,result.length-1));
    };
    const calcu=()=>{
        try{
            setResult(eval(result).toString());
        }catch(err){
            setResult("error")
        }
        
    }
    return (
        <container className="Apps">
            <form >
                <input type="text" value={result} />
            </form>
            <div className="keypad" >
                <button className="highlight"onClick={clear} id="clear" >Clear</button>
                <button onClick={backspace} id="backspace">C</button>
              
                <button onClick={handleClick} name="/">&divide;</button>
                
                <button onClick={handleClick} name="7">7</button>
                <button onClick={handleClick} name="8">8</button>
                <button onClick={handleClick} name="9">9</button>
              
                <button onClick={handleClick} name="*">&times;</button>
                <button onClick={handleClick} name="4">4</button>
                <button onClick={handleClick} name="5">5</button>
                <button onClick={handleClick} name="6">6</button>
               
                <button onClick={handleClick} name="-">&ndash;</button>
                <button onClick={handleClick} name="1">1</button>
                <button onClick={handleClick} name="2">2</button>
                <button onClick={handleClick} name="3">3</button>
               
                <button onClick={handleClick} name="+">+</button>
                
                <button onClick={handleClick} name=".">.</button>
                <button onClick={handleClick} name="0">0</button>
                <button onClick={calcu} name="=" id="detail">=</button>
               
            </div>
        </container>
    )
}

export default Home
