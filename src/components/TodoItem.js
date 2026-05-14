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
      className={`flex flex-row justify-between items-center gap-4 w-full px-4 py-3 border-b border-[hsl(var(--gray-600))] bg-transparent last:border-b-0 ${isDarkMode ? 'bg-[hsl(var(--navy-900))] border-[hsl(var(--purple-800))]' : ''}`}>
      <div className="flex flex-row gap-4 items-center">
        <label className="relative h-6 w-6 cursor-pointer">
          <input
            type="checkbox"
            onClick={() => isChecked(todo.id, todo.checked)}
            className={`appearance-none border border-[hsl(var(--gray-600))] h-6 w-6 rounded-2xl bg-transparent relative cursor-pointer transition-colors duration-200 hover:border hover:border-[hsl(var(--blue-800))] ${todo.checked === true ? "bg-linear-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] border-none" : "" } ${isDarkMode ? 'border-[hsl(var(--purple-800))]' : ''}`}
          />
          {todo.checked && <Image src={IconCheck} alt="Remove todo" className="w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
        </label>
        
        <p className={`cursor-pointer ${todo.checked ? "line-through text-[hsl(var(--gray-600))]" : ""}`} {...attributes} {...listeners}>{todo.text}</p>
      </div>
      <button
        className="cursor-pointer w-3 h-3"
        onClick={() => deleteTodo(todo.id)}
      >
        <Image src={IcoCross} alt="Remove todo" className="w-3 h-3" />
      </button>
    </li>
  )
}