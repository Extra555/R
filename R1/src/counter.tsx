import {useState} from "react";
export default function Counter(){
    const[mean, SetAction] = useState(0);

    async function Plus(){
        SetAction( mean + 1);
    }

    async function Minus(){
        SetAction(mean -1);
    }

    return (
        <form>
        <div className="text-lg">
            Hello, lets count! Your value rn is {mean}.
            
        </div>

        <div>
            <ul>
                <li><button type="button" onClick={()=>Plus()}/> Прибавить</li>
                <li><button type="button" onClick={()=>Minus()}/>Отнять</li>
                
            </ul>
        </div>
        </form>
    );
}