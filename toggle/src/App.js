import { useState } from 'react';

const App = () => {

  const [light, setLight] = useState(true);
  
  const changeColor = light ? 'bg-violet-200' : 'bg-emerald-200'

  console.log({ light })

  return (
    <div className={`h-screen bg-slate-100 flex justify-center items-center ${changeColor}`}> 
      <button 
        className="border-2 border-neutral-300 px-2 py-2 rounded-full bg-indigo-50 font-light text-small"
        onClick={() => setLight(!light)}
        >
         Toggle Light Switch
        </button>
    </div>
  );
}

export default App;


{/* <div className={light ? 'h-screen bg-pink-200' : 'h-screen bg-cyan-300'}> */}