export default function TodoFooter({ isDarkMode, deleteCheckedTodos, filteredTodos  }) {


  return (
    <div className={`flex flex-row justify-between items-center w-full bg-[hsl(var(--gray-50))] px-4 py-3 rounded-b-md text-[hsl(var(--gray-600))] ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : ''}`}>
      <p className="">{filteredTodos.length} {filteredTodos.length === 1 ? "item" : "items"} left</p>
      <button onClick={deleteCheckedTodos} className={`cursor-pointer transition-colors duration-200 ${isDarkMode ? 'hover:text-[hsl(var(--gray-50))]' : 'hover:text-[hsl(var(--navy-900))]'}`}>Clear Completed</button>
    </div>
  );
}