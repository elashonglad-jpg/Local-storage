const input =document.querySelector("#input")
const btnAdd =document.querySelector("#add")
const btnRemove =document.querySelector("#remove")
const displayArea =document.querySelector("#dsplay-area")
const list =document.querySelector("#list")


//Add a todo to local storage
btnAdd.addEventListener('click', (event)=>{
    event.preventDefault();
    let todoItem = input.value.trim();
    if (todoItem === "") return
    localStorage.setItem("todo",todoItem)
    let storedTodo = localStorage.getItem("todo")// wake up
    console.log ("I want to " , storedTodo)
})

btnRemove.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.removeItem("todo")
})
//JSON format
const products = [
    {
        "name": "Elashon",
        "prize": 1234,
        "isSold": false,
        "description": "black"

    },
    {
        "name": "Elashon",
        "prize": 1234,
        "isSold": false,
        "description": "black"

    }
]