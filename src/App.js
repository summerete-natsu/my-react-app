/* src/App.js */
import React, { useEffect, useState } from "react";
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
import Homepage from "./Homepage";

function Layout() {
  const pathname = useLocation().pathname;
  // const match = useMatch({ path: resolved.pathname, end: true });
  console.log(pathname);
  return (
    <div className="top-header">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li className={pathname === "/" && "active"}>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

const initialState = { name: "", description: "" };

const App = () => {
  // const [formState, setFormState] = useState(initialState)
  // const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   fetchTodos()
  // }, [])

  // function setInput(key, value) {
  //   setFormState({ ...formState, [key]: value })
  // }

  // async function fetchTodos() {
  //   try {
  //     const todoData = await API.graphql(graphqlOperation(listTodos))
  //     const todos = todoData.data.listTodos.items
  //     setTodos(todos)
  //   } catch (err) { console.log('error fetching todos') }
  // }

  // async function addTodo() {
  //   try {
  //     if (!formState.name || !formState.description) return
  //     const todo = { ...formState }
  //     setTodos([...todos, todo])
  //     setFormState(initialState)
  //     await API.graphql(graphqlOperation(createTodo, {input: todo}))
  //   } catch (err) {
  //     console.log('error creating todo:', err)
  //   }
  // }

  return (
    <>
      <div>
        {" "}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="home" element={<Homepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      <div style={styles.container}>
        {/* <Heading level={1}>Hello {user.username}</Heading> */}
        {/* <Button onClick={signOut}>Sign out</Button> */}
        <h2>Amplify Todos</h2>

        {/* <div style={styles.container}>
      <h2>Amplify Todos</h2> */}
        {/* <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      } */}
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
