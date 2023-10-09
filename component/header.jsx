import React,{useState} from "react";
import '../src/index.css'

const Header = () => {
    const [task, setTask]=useState("")
    const [disc, setDisc]=useState("")
    const [show, setShow]=useState([])


   const submitheandly=(e)=>{
        e.preventDefault()
        setShow([...show,{task,disc}] )
        console.log(show)  
        
        setTask("")
        setDisc("")
   }
   const deletehander=(i)=>{
    const copytask=[...show]
    copytask.splice(i,1)
    setShow(copytask) 

   }
    let redertask=<h2>'No task avilable'</h2>


    if(show.length>0){
        redertask= show.map((t,i)=>{
            return (
            <li key={i}>
            <div className="container">
            <div className="showdata">
                 <h5>{t.task}</h5>
                 <h6>{t.disc}</h6>
            </div>
            <button className="del" onClick={()=>{
                deletehander(i)
            } } >Delete</button>
            </div>
            </li>
         ) })
    }
   
   



    return (
        <>
            <div>
                <h1 className="header">ToDo-project</h1>
            </div>
            <form onSubmit={submitheandly}>
                <div className="form">
                    <input className="task" type="text" placeholder="Enter your task" value={task} onChange={(e)=>{setTask(e.target.value)}}></input>
                    <input className="disc" type="text" placeholder="Enter your discription" value={disc} onChange={(e)=>{setDisc(e.target.value)}}></input>
                    <button>Add Task</button>
                </div>
            </form>
            <hr/>
            <div className="detail">
                <ul> {redertask}</ul>
           

            </div>
            
        </>

    )
}
export default Header