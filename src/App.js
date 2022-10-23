import { useState } from 'react';
import { Initial } from './components/Initial';

function App() {

  const[off , setOff] = useState(false);
 

  return (
    <div>
      <Initial off={off} setOff={setOff} />
    </div>
  );
}

export default App;
