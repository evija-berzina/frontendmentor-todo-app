export default function TodoInput({ isDarkMode, inputValue, setInputValue, todos, setTodos }) {

  function generateId() {
    return crypto.randomUUID()
  }

  function handleTodoInput(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    setTodos((prev) => [
      ...prev, 
      {
        id: generateId(),
        text: inputValue,
        checked: false
      }
    ]);

    setInputValue("");
  }

  return (
    <form className="w-full" onSubmit={handleTodoInput}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Create a new todo..."
        className={`flex items-center gap-4 w-full px-4 py-3 rounded-md placeholder:text-[hsl(var(--gray-600))] bg-[hsl(var(--gray-50))] mb-6 ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : ''}`}
      />
    </form>
  );
}