import React, {useState, useEffect} from 'react'
import scissors from './images/icon-scissors.svg'
import paper from './images/icon-paper.svg'
import rock from './images/icon-rock.svg'
import lizard from './images/icon-lizard.svg'
import spock from './images/icon-spock.svg'

import {showRule} from './Rule.js'

function Pentagon(props){
    const [show, setShow] = useState(true)
    const [score, setScore] = useState(0) 
    const [plus, setPlus] = useState(2) 
    const [result, setResult] = useState("")
    const [hand, setHand] = useState({myhand:-1, comhand:-1})
    useEffect(() => {
        findWinner(hand.myhand, hand.comhand)
    }, [hand]);
   
    const [SCISSORS, PAPER, ROCK, LIZARD, SPOCK] = [0,1,2,3,4];

    const hands_img = [scissors, paper, rock, lizard, spock]
    const hands_str = ["scissors", "paper", "rock", "lizard", "spock"]
    

    function setWinner(h){
        document.getElementById("choosehand").className+=" hidden";
        document.getElementById("wrapper_loading").classList.remove("hidden");
        setHand({myhand:h, comhand:Math.floor(Math.random()*10)%5});
        loading();
    }

    function loading(){
        document.getElementById("score_number").className+=(" hidden");

        setTimeout(()=>{
            document.getElementById("wrapper_loading").className+=(" hidden");
            document.getElementById("wrapper_winner").classList.remove("hidden");
            document.getElementById("score_number").classList.remove("hidden");
        }, 1500)
    }

    function setPentagon(){
        document.getElementById("wrapper_winner").className+=" hidden";
        document.getElementById("choosehand").classList.remove("hidden");
    }
      
    function findWinner(m,c){
        if (c === (hand.myhand+1)%5 || hand.comhand ===(hand.myhand+3)%5){
            if (result==="WIN") setScore(score+plus);
            else setScore(score+1);
            setResult("WIN");
            setPlus(plus+1);
            console.log(score);
          }
          else if (hand.comhand === (hand.myhand+2)%5 || hand.comhand === (hand.myhand+4)%5){
            setResult("LOSE");
            setScore(score-1);
            setPlus(1);
            console.log(score);
        
          }
          else{
            setResult("DRAW");
            setPlus(1);
            console.log(score);
        
          }
          //console.log(m,c, result);

    }
    
    return (
    <div id="wrapper_page" className="h-screen relative">

    <div id="scorepad" className="inline-block w-72 h-32 m-5 mt-12 p-5 ring-slate-500 ring-2 rounded-xl text-white">
        <div id="titleflex" className="flex w-full h-full ">
            <div id="title" className="w-full h-full text-left text-xl leading-[1.1rem]">
                ROCK<br/>
                PAPER<br/>
                SCISSORS<br/>
                LIZARD<br/>
                SPOCK
            </div>
            <div id="score" className="w-1/2 bg-white rounded-xl text-slate-700">
                SCORE<br/>
                <span id="score_number" className="text-5xl text-slate-500">{score}</span>
            </div>
        </div>
    </div>

    <div id="wrapper_pentagon" className="relative h-auto w-screen">
        <div id="choosehand" className="relative mt-24 block w-fit mx-auto">
            <div id="backgroundPentagon" className="h-48 w-48 bg-pentagon bg-contain bg-no-repeat"></div>
            <div id="scissors" onClick={()=>setWinner(SCISSORS)} className="absolute top-[-53px] left-[53px] chooseBtn">
                <div className="chooseBtn inner"><img src={scissors}/></div>
            </div>
            <div id="paper" onClick={()=>setWinner(PAPER)} className="absolute top-[23px] right-[-53px] chooseBtn">
                <div className="chooseBtn inner"><img src={paper}/></div>
            </div>
            <div id="rock" onClick={()=>setWinner(ROCK)} className="absolute bottom-[-33px] right-[-13px] chooseBtn">
                <div className="chooseBtn inner p-4"><img src={rock} className="p-1"/></div>
            </div>
            <div id="lizard" onClick={()=>setWinner(LIZARD)} className="absolute bottom-[-33px] left-[-13px] chooseBtn">
                <div className="chooseBtn inner"><img src={lizard}/></div>
            </div>
            <div id="spock" onClick={()=>setWinner(SPOCK)} className="absolute top-[23px] left-[-53px] chooseBtn">
                <div className="chooseBtn inner"><img src={spock}/></div>
            </div>
        </div>
    </div>

    <div id="wrapper_loading" className="hidden">
    <div id="win" className="flex w-72 mx-auto my-10 justify-around text-white">
        <div>
        <div id={hands_str[hand.myhand]} className="chooseBtn">
              <div className="chooseBtn inner"><img src={hands_img[hand.myhand]}/></div>
          </div>
          <div className="mt-5">YOU</div>
        </div>
        <div>
        <div id="blank" className="chooseBtn bg-[#50d71e] animate-pulse">
        </div>
        <div className="mt-5">COM</div>
        </div>
    </div>
    </div>

    <div id="wrapper_winner" className="hidden">
      <div id="win" className="flex w-72 mx-auto my-10 justify-around text-white">
        <div>
        <div id={hands_str[hand.myhand]} className="chooseBtn">
              <div className="chooseBtn inner"><img src={hands_img[hand.myhand]}/></div>
          </div>
          <div className="mt-5">YOU</div>
        </div>
        <div>
        <div id={hands_str[hand.comhand]} className="chooseBtn">
            <div className="chooseBtn inner"><img src={hands_img[hand.comhand]}/></div>
        </div>
        <div className="mt-5">COM</div>
        </div>
    </div>
    
    <div id="again" onClick={setPentagon} className="text-white">
        <div className="text-7xl m-5">{result}</div>
        <button className="w-1/3 p-2 rounded-xl text-black bg-white">Play again</button>
    </div>
    </div>


    <div id="ruleBtn" onClick={()=>{setShow(!show);showRule(show);}} className="absolute bottom-12 left-[calc(50%-3.5rem)] w-28 h-10 pt-2 ring-slate-500 ring-2 rounded-xl text-white ">RULES</div>

    </div>
  )
  
}

export default Pentagon