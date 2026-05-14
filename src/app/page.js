"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import ActionButtons from "../components/ActionButtons";
import Footer from "../components/Footer";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([]);

  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch("/api/todos");
      const data = await res.json();
      setTodos(data);
    }

    fetchTodos();
  }, []);

  return (
    <div className={`w-full px-8 py-16 min-h-screen ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="w-full max-w-100 mx-auto">
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <TodoInput 
          isDarkMode={isDarkMode}
          inputValue={inputValue}
          setInputValue={setInputValue}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          isDarkMode={isDarkMode}
          todos={todos}
          setTodos={setTodos}
          currentFilter={currentFilter}
        />
        <ActionButtons
          isDarkMode={isDarkMode}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
        <Footer />
      </div>
    </div>
  );
}
