export default function ActionButtons({ isDarkMode, currentFilter, setCurrentFilter }) {

  function allTodos() {
    setCurrentFilter("all");
  }

  function activeTodos() {
    setCurrentFilter("active");
  }

  function checkedTodos() {
    setCurrentFilter("completed");
  }

  function getButtonStyles(filterName) {
    return `
      cursor-pointer transition-colors duration-200 
      ${
        currentFilter === filterName 
          ? "text-[hsl(var(--blue-500))]" 
          : isDarkMode 
            ? "hover:text-[hsl(var(--gray-50))]" 
            : "hover:text-[hsl(var(--navy-900))]"
      }
    `;
  }

  return (
    <div className="flex flex-col justify-between items-center w-full gap-4 mb-12 md:flex-row">
      <div className={`flex flex-row justify-center gap-4 items-center w-full bg-[hsl(var(--gray-50))] px-4 py-3 rounded-md text-[hsl(var(--gray-600))] ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : ''}`}>
        <button onClick={allTodos} className={getButtonStyles("all")}>All</button>
        <button onClick={activeTodos} className={getButtonStyles("active")}>Active</button>
        <button onClick={checkedTodos} className={getButtonStyles("completed")}>Completed</button>
      </div>
    </div>
  );
}