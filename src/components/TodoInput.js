export default function TodoInput({ isDarkMode, inputValue, setInputValue, todos, setTodos }) {

  function generateId() {
    return crypto.randomUUID()
  }

  async function handleTodoInput(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // setTodos((prev) => [
    //   ...prev, 
    //   {
    //     id: generateId(),
    //     text: inputValue,
    //     checked: false
    //   }
    // ]);

    await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: inputValue,
      }),
    });

    const res = await fetch("/api/todos");
    const data = await res.json();

    setTodos(data);
    setInputValue("");
  }

  return (
    <form className="w-full" onSubmit={handleTodoInput}>
      <input
        type="text"
        value={inputValue}
        maxLength="50"
        onChange={e => setInputValue(e.target.value)}
        placeholder="Create a new todo..."
        className={`flex items-center gap-4 w-full px-4 py-3 rounded-md placeholder:text-[hsl(var(--gray-600))] bg-[hsl(var(--gray-50))] mb-6 ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : ''}`}
      />
    </form>
  );
}