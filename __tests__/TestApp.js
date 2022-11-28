import React, { useState } from "react";
import { setTextRange } from "typescript";
import Timeline from "../src/Timeline";

const TestApp = () => {
  const [ eventStates, setEventStates ] = useState([{label: "First Event", id: 1, state: State.checked}, {label: "next Event", id: 2, state: State.checked}, {label: "Add Your Own", id: 3, state: State.checked}, {label: "Events As", id: 5, state: State.checked}, {label: "Props", id: 6, state: State.checked}])
    
    

  return(
      <Timeline eventStates={eventStates} setEventStates={setEventStates} />
  );
};
  
  export default TestApp;