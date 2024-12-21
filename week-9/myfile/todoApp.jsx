import "./App.css";
export default function App() {
    //define state variable(initial state variable)
    const [todos,setTodos]=useState([
    {
        title:"Go to gym",
        description:"Hit the gym regularly",
        done:false
    },
]);

    function addTodo(){
        alert("Hii");

    }
    return (
    <div>
        //define the components
        <button onClick={addTodo}>Add todo</button>
    </div>
    );

}