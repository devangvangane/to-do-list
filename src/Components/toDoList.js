import React, { useState } from 'react'

function ToDoList() {
    let [activity,setActivity] = useState("");
    let [listData,setListData] = useState([]);
    function addActivity(){
        setListData((setListData)=>{
            const updatedList = [...setListData,activity]
            setActivity('');
            return updatedList;
        })
    }

    function removeActivity(i){
        let updatedListData = listData.filter((elem,id)=>{
            return i!=id;
        })
        setListData(updatedListData);
    }

    function removeAll(){
        setListData([]);
    }

  return (
    <>
        <div className='container'>
            <div className='header'>
                TO DO LIST
            </div>
            <div className='addTask'>
                <input
                type='text'
                placeholder='Add Task'
                value={activity}
                onChange={(e)=>setActivity(e.target.value)}></input>
                <button onClick={addActivity} className='addButton'>ADD</button>
            </div>
            <p className='list-heading'>
                {listData.length>0?"Your ":"No "}To Do Tasks
            </p>
            <div className='listDiv'>
                {listData!==[] && listData.map((data,i)=>{
                    return(
                        <>
                            <p key={i}>
                                <div className='ListData'>
                                    {data}
                                    <div className='button-position'>
                                        <button className='remButton'
                                        onClick={()=>removeActivity(i)}>Remove Task</button>
                                    </div>
                                </div>
                            </p>
                        </>
                    )
                })}
                {listData.length>=1 && 
                <button className='i' onClick={removeAll}>Remove All</button>}
            </div>
        </div>
    </>
  )
}

export default ToDoList