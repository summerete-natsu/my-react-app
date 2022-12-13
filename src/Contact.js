/* src/App.js */
import React, { useEffect, useState } from "react";
import { createTodo, deleteTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { Link } from "react-router-dom";
const initialState = { name: "", description: "" };

const About = ({ signOut, user }) => {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState, date: new Date().toISOString() };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <div>
      <div style={styles.container}>
        <h2>お問い合わせ：</h2>
        <input
          onChange={(event) => setInput("name", event.target.value)}
          style={styles.input}
          value={formState.name}
          placeholder="名前"
        />
        <input
          onChange={(event) => setInput("email", event.target.value)}
          style={styles.input}
          value={formState.title}
          placeholder="メールアドレス"
        />
        <input
          onChange={(event) => setInput("tel", event.target.value)}
          style={styles.input}
          value={formState.tel}
          placeholder="電話番号"
        />
        <input
          onChange={(event) => setInput("description", event.target.value)}
          style={styles.input}
          value={formState.description}
          placeholder="お問い合わせ内容"
        />

        <button style={styles.button} onClick={addTodo}>
          送信する
        </button>
      </div>
      <div className="contact-area">
        <div className="contact">
          <div>
            〒143-0016 東京都大田区大森北６丁目３０−１６平和島駅前
            <div>☎: 090-0638-1941</div>
          </div>
          <div className="contact-img">
            <img src="map.jpg" />
            <img src="map-detail.jpg" />
          </div>
        </div>
      </div>
    </div>
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

export default About;
    