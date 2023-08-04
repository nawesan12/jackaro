export default function ColorSelect() {
  return (
    <div className="flex">
      <span className="mr-3">Color</span>
      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
      <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
    </div>
  );
}
