export default function TodoFooter({ isDarkMode }) {
  return (
    <div className={`flex flex-row justify-between items-center w-full bg-[hsl(var(--gray-50))] px-4 py-3 rounded-b-md ${isDarkMode ? 'bg-[hsl(var(--navy-900))]' : ''}`}>
      <p className="">5 items left</p>
      <button className="cursor-pointer">Clear Completed</button>
    </div>
  );
}