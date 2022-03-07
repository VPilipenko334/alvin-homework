import { useState } from 'react';

const App = () => {

  const [light, setLight] = useState(false);

  console.log({ light })

  return (
    <div className="h-screen bg-slate-100">
      <button className="border-2 border-neutral-300 px-2 py-5">Toggle Light Switch</button>
    </div>
  );
}

export default App;