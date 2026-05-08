export default function TodoInput({ isDarkMode }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Create a new todo..."
        className={`flex items-center gap-4 w-full px-4 py-3 rounded-md placeholder:text-[hsl(var(--gray-600))] bg-[hsl(var(--gray-50))] mb-6 ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : ''}`}
      />
    </div>
  );
}