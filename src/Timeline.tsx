import React from "react";
import './index.css';
import Element from "./Element";

export enum State {
  checked = "CHECKED",
  unchecked = "UNCHECKED"
}

export interface EventObj {
  label: string,
  id: number,
  state: State,
}


export interface TimelineProps {
  label: string,
  eventStates: EventObj[],
  setEventStates: Function
}

let eventStatesDefaultProps: EventObj[] = [{label: "First Event", id: 1, state: State.checked}, {label: "next Event", id: 2, state: State.checked}, {label: "Add Your Own", id: 3, state: State.checked}, {label: "Events As", id: 5, state: State.checked}, {label: "Props", id: 6, state: State.checked}]

const setEventStatesDefaultProps: Function = (newEventStates: EventObj[]) => {
  console.log(newEventStates);
}

const Timeline: React.FC<TimelineProps> = (props) => {
    //const {label = "timeline"} = props;
    const { eventStates = eventStatesDefaultProps } = props;
    const { setEventStates = setEventStatesDefaultProps } = props;

  return(
      <ul className="tw-table tw-w-full">
        {eventStates.map((event) => {
          return(
            <li className="tw-table-cell tw-relative tw-cursor-pointer tw-text-sm" key={event.id}>
              <Element eventStates={eventStates} setEventStates={setEventStates} event={event} />
            </li>            )
        })}
      </ul>
  );
};
  
  export default Timeline;