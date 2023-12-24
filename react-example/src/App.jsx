/* eslint-disable react/prop-types */
import { useState } from "react";
import CounterButton from "./components/CounterButton";
import CounterText from "./components/CounterText";

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <>
      <CounterButton
        text="-"
        handler={() => setLikes(likes - 1 < 0 ? "Done!" : likes - 1)}
        condition={likes == "Done!"}
      />
      <CounterText text={likes} />
      <CounterButton
        text="+"
        handler={() => setLikes(likes + 1 > 10 ? "Done!" : likes + 1)}
        condition={likes == "Done!"}
      />
      <CounterButton
        text="Reset!"
        handler={() => setLikes(0)}
        condition={likes != "Done!"}
      />
    </>
  );
}

export default App;
