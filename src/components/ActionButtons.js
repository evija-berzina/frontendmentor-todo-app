export default function ActionButtons({ isDarkMode, setCurrentFilter }) {

  function allTodos() {
    setCurrentFilter("all");
  }

  function activeTodos() {
    setCurrentFilter("active");
  }

  function checkedTodos() {
    setCurrentFilter("completed");
  }

  return (
    <div className="flex flex-col justify-between items-center w-full gap-4 mb-12 md:flex-row">
      <div className={`flex flex-row justify-center gap-4 items-center w-full bg-[hsl(var(--gray-50))] px-4 py-3 rounded-md ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : ''}`}>
        <button onClick={allTodos} className="cursor-pointer">All</button>
        <button onClick={activeTodos} className="cursor-pointer">Active</button>
        <button onClick={checkedTodos} className="cursor-pointer">Completed</button>
      </div>
    </div>
  );
}