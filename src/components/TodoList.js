"use client";
import {DndContext} from '@dnd-kit/core';
import { SortableContext } from "@dnd-kit/sortable";
import { verticalListSortingStrategy } from "@dnd-kit/sortable";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

export default function TodoList({ isDarkMode, todos, setTodos, currentFilter }) {

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

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => id !== todo.id);

    setTodos(newTodos);
  }

  function deleteCheckedTodos() {
    const newTodos = todos.filter((todo) => !todo.checked);

    setTodos(newTodos);
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
      <ul className="rounded-md overflow-hidden w-full bg-[hsl(var(--gray-50))] mb-6">
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