"use client";
import {DndContext} from '@dnd-kit/core';
import { SortableContext } from "@dnd-kit/sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
import { getUserId } from "@/lib/user";

export default function TodoList({ isDarkMode, todos, setTodos, currentFilter }) {

  async function isChecked(id, currentValue) {
    // const newTodos = todos.map((todo) => {
    //   if (id === todo.id) {
    //     return {...todo, checked: !todo.checked};
    //   } else {
    //     return {...todo};
    //   }
    // });
    // setTodos(newTodos) 
    const res = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checked: !currentValue,
      }),
    });

    const updated = await res.json();

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? updated : todo
      )
    );
  }

  async function deleteTodo(id) {
    // const newTodos = todos.filter((todo) => id !== todo.id);

    // setTodos(newTodos);
    const userId = getUserId();
    await fetch(`/api/todos/${id}?userId=${userId}`, {
      method: "DELETE",
    });

    const res = await fetch(`/api/todos?userId=${userId}`);
    const data = await res.json();

    setTodos(data);
    console.log("DELETE ID:", id);
  }

  async function deleteCheckedTodos() {
    // const newTodos = todos.filter((todo) => !todo.checked);

    // setTodos(newTodos);
    const userId = getUserId();

    await fetch(`/api/todos/clear-completed?userId=${userId}`, {
      method: "DELETE",
    });

    const res = await fetch(`/api/todos?userId=${userId}`);
    const data = await res.json();

    setTodos(data);
    console.log("Cleared completed todos");
  }

  function getFilteredTodos() {
    switch(currentFilter) {
      case "completed":
      return todos.filter((todo) => todo.checked);

      case "active":
      return todos.filter((todo) => !todo.checked);

      case "all":
        return todos;

      default:
        return todos; // šis ir fallback
    }
  }

  const filteredTodos = getFilteredTodos();

  function handleDragEnd(e) {
    //  console.log(e.over)
    const {active, over} = e;

    if(!over) return;
    if(active.id === over.id) return;

    const oldIndex = todos.findIndex(todo => todo.id === active.id);
    const newIndex = todos.findIndex(todo => todo.id === over.id);

    const newTodos = [...todos];

    const [movedItem] = newTodos.splice(oldIndex, 1);
    newTodos.splice(newIndex, 0, movedItem);

    setTodos(newTodos);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <ul className={`rounded-md overflow-hidden w-full mb-6 ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : 'bg-[hsl(var(--gray-50))]'}`}>
        <SortableContext
          items={filteredTodos.map(todo => todo.id)}
          strategy={verticalListSortingStrategy}
        >
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isDarkMode={isDarkMode}
              isChecked={isChecked}
              deleteTodo={deleteTodo}
            />
          ))}
        </SortableContext>
        
        <TodoFooter
          isDarkMode={isDarkMode}
          deleteCheckedTodos={deleteCheckedTodos}
          filteredTodos={filteredTodos}
        />
      </ul>
    </DndContext>
  );
}