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
  
  const Timeline: React.FC<TimelineProps> = (props) => {
      //const {label = "timeline"} = props;
      const { eventStates } = props;
      const { setEventStates } = props;

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