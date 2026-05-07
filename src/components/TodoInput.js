export default function TodoInput() {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="flex items-center gap-4 w-full bg-[hsl(var(--navy-900))] px-4 py-3 rounded-md placeholder:text-[hsl(var(--gray-600))]"
      />
    </div>
  );
}