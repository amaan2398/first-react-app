import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modelIsOpen, setModelIsOpen] = useState(false);
    function deleteHandler() {
        setModelIsOpen(true);
    }
    function closeHandler(){
        setModelIsOpen(false);
    }
    return (
        <div className="card">
            <h2 className="space">
                {props.text} {props.num + 1}
            </h2>
            <div className="space">
                <button onClick={deleteHandler}> Delete</button>
            </div>
            {modelIsOpen && <Backdrop onClick = {closeHandler}/>}
            {modelIsOpen && <Modal onClick = {closeHandler}/>}
        </div>
        
    );
}

export default Todo;
