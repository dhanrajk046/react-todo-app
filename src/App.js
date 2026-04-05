import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState, useEffect } from "react";
import AddTodo from "./MyComponents/AddTodo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./MyComponents/About";

// ✅ Home Page
function Home() {
  const [todos, setTodos] = useState(() => {
    let savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const ondelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    let sno =
      todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno,
      title,
      desc,
      active: true,
    };

    setTodos([...todos, myTodo]);
  };

  return (
    <div className="d-flex flex-column min-vh-100">

      <Header title="My Todos List" />

      {/* Main Content */}
      <div className="container flex-grow-1">
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} ondelete={ondelete} />
      </div>

      <Footer />

    </div>
  );
}

// ✅ About Page
function AboutPage() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Header title="About Page" />

      <div className="container flex-grow-1">
        <About />
      </div>

      <Footer />

    </div>
  );
}

// ✅ Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

// ✅ Main App
function App() {
  return <RouterProvider router={router} />;
}

export default App;