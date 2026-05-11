"use client";
import Image from "next/image";
import IcoCross from "../assets/icon-cross.svg";
import IconCheck from "../assets/icon-check.svg";
import TodoFooter from "./TodoFooter";

export default function TodoList({ isDarkMode, todos, setTodos }) {

  function isChecked(id) {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {...todo, checked: !todo.checked};
      } else {
        return {...todo};
      }
    });
    setTodos(newTodos)
  }

    console.log(todos)

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => id !== todo.id);

    setTodos(newTodos);
  }

  function deleteCheckedTodos() {
    const newTodos = todos.filter((todo) =>  !todo.checked);

    setTodos(newTodos);
  }

  return (
    <ul className="rounded-md overflow-hidden w-full bg-[hsl(var(--gray-50))] mb-6">
      {todos.map((todo) => (
          <li key={todo.id} className={`flex flex-row justify-between items-center gap-4 w-full bg-[hsl(var(--gray-50))] px-4 py-3 border-b border-[hsl(var(--gray-600))] ${isDarkMode ? 'bg-[hsl(var(--navy-900))] border-[hsl(var(--purple-800))]' : ''}`}>
            <div className="flex flex-row gap-4 items-center">
              <label className="relative h-5 w-5">
                <input
                  type="checkbox"
                  onClick={() => isChecked(todo.id)}
                  className={`appearance-none border border-[hsl(var(--gray-600))] h-5 w-5 rounded-2xl bg-transparent relative ${todo.checked === true ? "bg-linear-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]" : "" } ${isDarkMode ? 'border-[hsl(var(--purple-800))]' : ''}`}
                />
                {todo.checked === true && <Image src={IconCheck} alt="Remove todo" className="w-2 h-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
              </label>
              
              <p className={todo.checked === true? "line-through text-[hsl(var(--gray-600))]" : ""}>{todo.text}</p>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => deleteTodo(todo.id)}
            >
              <Image src={IcoCross} alt="Remove todo" className="w-3 h-3" />
            </button>
          </li>
         )
      )}
      
      <li className={`flex flex-row justify-between items-center gap-4 w-full bg-[hsl(var(--gray-50))] px-4 py-3 border-b border-[hsl(var(--purple-800))] ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : ''}`}>
        <div className="flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            className="appearance-none border border-[hsl(var(--purple-700))] h-5 w-5 rounded-2xl bg-transparent"
          />
          <p className="">Read for 1 hour</p>
        </div>
        <button
          className="cursor-pointer"
        >
          <Image src={IcoCross} alt="Remove todo" className="w-3 h-3" />
        </button>
      </li>
      <TodoFooter
        isDarkMode={isDarkMode}
        todos={todos}
        deleteCheckedTodos={deleteCheckedTodos}
      />
    </ul>
  );
}