import { useState } from 'react';

const App = () => {

  const [light, setLight] = useState(true);
  
  const changeColor = light ? 'bg-pink-200' : 'bg-cyan-300'

  console.log({ light })

  return (
    <div className={ light ? 'h-screen bg-pink-200' : 'h-screen bg-cyan-300' }>
      <button 
        className="border-2 border-neutral-300 px-2 py-5"
        onClick={() => setLight(!light)}
        >
         Toggle Light Switch
        </button>
    </div>
  );
}

export default App;


{/* <div className={`h-screen bg-slate-100 ${changeColor}`}> */ }