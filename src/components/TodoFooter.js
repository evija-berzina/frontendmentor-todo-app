export default function TodoFooter() {
  return (
    <div className="flex flex-row justify-between items-center w-full bg-[hsl(var(--navy-900))] px-4 py-3 rounded-b-md">
      <p className="">5 items left</p>
      <button className="cursor-pointer">Clear Completed</button>
    </div>
  );
}