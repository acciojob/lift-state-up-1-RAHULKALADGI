
import React ,{useState} from "react";
import './../styles/App.css';

const App = ()=> {
    let [show , setShow] = useState(false);
    return (
        <div>
            <div className="parent">
                <h1>Parent Component</h1> 

            <div className="child">
                <h2>Child Component</h2>
                <button onClick={()=>setShow(true)}>Show Modal</button>
                {
                    show && (
                        <div>
                        <h3>Modal Content</h3>
                        <h4>This is the modal content</h4>
                        </div>
                        
                    )
                }
            </div>
            </div>
        </div>
    )
}

export default App
