import { useState } from 'react';

const App = () => {
  const [color, setColor] = useState("bg-slate-800");
  
  const handleChange = (e) => {
    setColor(e.target.value)
  }
  
  return (
    <div
      className={`h-screen flex justify-center items-center ${color}`}
    >
      <select
        value={color}
        onChange={handleChange}
      >
        <option value="bg-amber-200">color A</option>
        <option value="bg-slate-800">color B</option>
        <option value="bg-blue-400">color C</option>
      </select>
    </div>
  );
}

export default App;