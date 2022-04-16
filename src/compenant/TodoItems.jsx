
const TodoItems=({todosend,handleChange})=>{
    return (
        <div  className="container">
            {/* {todosend.title}-{todosend.status ? "Done" : "Not Done"}{" "}; */}
            <span className={todosend.status ? "green" : "red"}>{todosend.title}</span>
            <input type="radio" onClick={()=>
                handleChange(todosend.id)
            }/>
            {/* <button onClick={()=>
                handleChange(todosend.id)
            }>Toggle</button> */}
        </div>
    )
}

export {TodoItems}