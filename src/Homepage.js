/* src/App.js */
import React, { useEffect, useState,createContext,useContext,useRef, useReducer, useCallback } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import LoginPage from "./LoginPage";
import {
  Route,
  Routes,
  BrowserRouter,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";

const initialState = { name: "", description: "" };

function Comments(){
  const[todos,setTodos]=useState(["-I like VeuveCliquort ;)"]);
  const addTodo=useCallback(()=>{
    setTodos((t)=>[...t,"New comment"]);
  },[todos]);
  console.log({todos});
 

  return(
    <>
    <h2>Comments</h2>
    {todos.map((todo,index)=>{
      return <p key={index}>{todo}</p>;
    })}
    <button onClick={addTodo}>post</button></>
    
  )
}

const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);
  const UserContext=createContext();
  const [inputValue,setInputValue]=useState("");
  const previousInputValue=useRef("");


  //   useEffect(() => {
  //     fetchTodos()
  //   }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  function FavoriteDrink() {
    const [drink, setDrink] = useState("champagne");
    return (
      <>
        <h1>what is your favorite drink?{drink}</h1>
        <button type="button" onClick={() => setDrink("sake")}>
          sake
        </button>
      </>
    );
  }

  function Order() {
    const [order, setOrder] = useState(0);
    const [menu, setMenu] = useState(0);

    useEffect(() => {
      setMenu(() => order + "h" + order * 2 + "drinks");
    }, [order]);
    return (
      <>
        <p>Order:{order}</p>
        <button onClick={() => setOrder((o) => o + 1)}>+</button>
        <p>Menu:{menu}</p>
      </>
    );
  }

  function TimeCount() {
    const [count, setCount] = useState(0);
    // useEffect(()=> {setCount((count)=>count+1);
    //    },[count]);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });
    return (
      <>
        <p>time:{count}</p>
      </>
    );
  }

  function Component1(){
    const [user,setUser]=useState("customer1");

    return(
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </UserContext.Provider>
    )
  }
 
  function Component2(){
    const user=useContext(UserContext);
    return (
      <><p>{user}:Component2-plate</p>
      <Component3 />
      </>
    )
  }

  function Component3(){
    const user=useContext(UserContext);
    return (
      <><p>{user}:Component3-dessert</p>
      </>
    )
  }

  function PreValue(){
    const[inputValue,setInputValue]=useState("");
    const previousInputValue=useRef("");
    // persist the previous value 

    useEffect(()=>{
      previousInputValue.current=inputValue;
    },[inputValue]);

    return (
      <>
      <input type="text"
             value={inputValue}
             onChange={(e)=>setInputValue(e.target.value)} />
      <p>current order:{inputValue}</p>
      <p>previous order:{previousInputValue.current}</p>
      </>
    );

    }

  function Questionnaire(){
    // useReducer keeps track of multiple pieces of state 
    const initialTodos=[
      {id:1,
       title:"reason 1",
       complete:false,
      },
      {id:2,
       title:"reason 2",
       complete:false,
      },
    ];
   
     const reducer=(state,action)=>{
      switch(action.type){
        case "COMPLETE":
           return state.map0((todo)=>{
            if(todo.id===action.id){
              return{...todo, complete:!todo.complete};
            }else{
              return todo;
            }
            });
          default:
             return state;
                    
      }
     };



      const[todos,dispatch]=useReducer(reducer,initialTodos);
      const handleComplete=(todo)=>{
        dispatch({type:"COMPLETE",id:todo.id});
      };
      
      return (
        <>
        <h2>questionnaire: what brings you here this time?</h2>
        {todos.map((todo)=>(
          <div key={todo.id}>
            <label>
              <input 
                 type="checkbox"
                 checked={todo.complete}
                 onChange={()=>handleComplete(todo)}
                 />
                 {todo.title}
            </label>
          </div>
        ))}
        </>
      );

     




  }
  
 const useFetch=(url)=>{
  const [data,setData] =useState(null);
  useEffect(()=>{
    fetch(url)
       .then((res)=>res.json())
       .then((data)=>setData(data));
  },[url]);
    return [data];
 };

  // const[data]=useFetch("https://youtu.be/B-QKpO_erUw")
  const[data]=useFetch("https://translate.google.com/");

  return (
    <>
      <div style={styles.container}>
        <div>
          <h1 style={styles.inlineBlock}>the bar</h1>
          <h2 style={styles.inlineBlock}><TimeCount /></h2>
          </div>
        <div>
          <FavoriteDrink />
        </div>
        <div>
          {data&&data.map((item)=>{
            <p key={item.id}>{item.title}</p>
            
          })}
        </div>
        <div>
          <Component1 />
        </div>
        <div>
          <Order />
        </div>
        <div>
          <PreValue />
        </div>
        <h2>the food</h2>
        <div>
          <div>
            <img width={80} height={80} src="Homepage1.jpg" />
            <p>yummy</p>
          </div>
        </div>
        <h2>the drink</h2>
        <div>
          <img width={80} height={80} src="Homepage3.jpg" />
          <p>tintin</p>
        </div>
        <div>
          <Questionnaire />
        </div>
        <div>
          <Comments />
        </div>
        <div>
          <p><caption>table</caption></p>
          <table style="border:1px 
                        solid black;
                        border-collapse:collapse;
                        text-align:left;
                        padding:5px"> 
            <tr>
              <th>Month</th>
              <th>specialty</th>
            </tr>
            <tr>
              <td>this month</td>
              <td>champagne</td>
            </tr>
            <tr>
              <td rowspan="2">next month</td>
              <td>wine</td>
              <td>wine2</td>
            </tr>
          </table>
         
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  inlineBlock: { display: 'inline-block' },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default App;
