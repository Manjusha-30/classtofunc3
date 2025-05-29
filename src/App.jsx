import React from 'react';
import Counter from './components/Counter';
import Timer from './components/Timer';
import CounterClass from './components/CounterClass';
import TimerClass from './components/TimerClass';
function App() {
  return (
    <div>
      <Counter/>
      <Timer/>
      <CounterClass />
      <TimerClass/>
    </div>
  );
}

export default App;
