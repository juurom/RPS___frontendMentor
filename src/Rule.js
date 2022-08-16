import React, {useState} from 'react'
import scissors from './images/icon-scissors.svg'
import paper from './images/icon-paper.svg'
import rock from './images/icon-rock.svg'
import lizard from './images/icon-lizard.svg'
import spock from './images/icon-spock.svg'


function Rule() {
    const [show, setShow] = useState(true);

  return (
    <div id="wrapper_rule">
        <div className="absolute z-10 w-screen h-screen bg-white">
        <div id="scorepad" className="inline-block w-4/5 h-32 m-5 p-5 text-3xl text-slate-500">
            <div id="titleflex" className="flex">
                <div id="title" className="w-full leading-4">
                    <br/><br/><br/>RULES<br/>
                </div>

            </div>
        </div>

        <div id="choosehand_rule" className="relative h-[280px] w-screen mt-10 inline-block bg-rule bg-contain bg-no-repeat bg-center">
        </div>
        

        <div id="ruleBtn" onClick={()=>{setShow(!show);showRule(show);}} className="absolute bottom-12 left-[calc(50%-10px)] text-slate-500 text-3xl">X</div>

        </div>
    </div>
  )
}

function showRule(show){
    if (show===true){
        document.getElementById("wrapper_rule").className='hidden';
    }
    else{
        document.getElementById("wrapper_rule").className="block";
    }
}

export {Rule as default, showRule}