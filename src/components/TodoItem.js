import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import IcoCross from "../assets/icon-cross.svg";
import IconCheck from "../assets/icon-check.svg";

export default function TodoItem({todo, isDarkMode, isChecked, deleteTodo}) {

  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
    id: todo.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      key={todo.id}
      ref={setNodeRef}
      style={style}
      className={`flex flex-row justify-between items-center gap-4 w-full bg-[hsl(var(--gray-50))] px-4 py-3 border-b border-[hsl(var(--gray-600))] ${isDarkMode ? 'bg-[hsl(var(--navy-900))] border-[hsl(var(--purple-800))]' : ''}`}>
      <div className="flex flex-row gap-4 items-center">
        <label className="relative h-5 w-5">
          <input
            type="checkbox"
            onClick={() => isChecked(todo.id)}
            className={`appearance-none border border-[hsl(var(--gray-600))] h-5 w-5 rounded-2xl bg-transparent relative ${todo.checked === true ? "bg-linear-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]" : "" } ${isDarkMode ? 'border-[hsl(var(--purple-800))]' : ''}`}
          />
          {todo.checked === true && <Image src={IconCheck} alt="Remove todo" className="w-2 h-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
        </label>
        
        <p className={`cursor-pointer ${todo.checked ? "line-through text-[hsl(var(--gray-600))]" : ""}`} {...attributes} {...listeners}>{todo.text}</p>
      </div>
      <button
        className="cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      >
        <Image src={IcoCross} alt="Remove todo" className="w-3 h-3" />
      </button>
    </li>
  )
}