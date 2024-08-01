import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  //4-access data from store reducer with useSelector
  const state = useSelector((state) => state.counter);

  //5-change data in reducer with dispatch
  const dispatchcounter = useDispatch();
  return (
    <div>
      <h3>Counter: {state}</h3>
      <button onClick={() => dispatchcounter({ type: `INCREMENT` })}>
        Increment
      </button>
      <button onClick={() => dispatchcounter({ type: `DECREMENT` })}>
        Decrement
      </button>
      <button onClick={() => dispatchcounter({ type: `RESET` })}>Reset</button>
    </div>
  );
}

export default App;
