"use client";
import { useState } from "react";
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

  return (
    <div className={`w-full px-8 py-16 min-h-screen ${isDarkMode ? "dark-mode" : "light-mode"}`}>
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
        setCurrentFilter={setCurrentFilter}
      />
      <Footer />
    </div>
  );
}
