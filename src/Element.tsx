import React from "react";
import classNames from "classnames";
import { EventObj, State } from "./Timeline";

export interface ElementProps {
    eventStates: EventObj[],
    setEventStates: Function,
    event: EventObj
  }

function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
if (argument === undefined || argument === null) {
    throw new TypeError(message);
}

return argument;
}

const updateItemStates = (eventStates:EventObj[], id:number) => {
// get current state
const newEventStates:EventObj[] = JSON.parse(JSON.stringify(eventStates));
const currentState: State = ensure(newEventStates.find((i:EventObj) => i.id === id)).state;
// toggle state
if (currentState === "CHECKED") {
    //change to unchecked
    ensure(newEventStates.find((i:EventObj) => i.id === id)).state = State.unchecked;
} else if (currentState === "UNCHECKED") {
    //change to unchecked
    ensure(newEventStates.find((i:EventObj) => i.id === id)).state = State.checked;
}
return newEventStates;
}

const Element: React.FC<ElementProps> = (props) => {

    const { eventStates, setEventStates, event } = props;

    const checked:boolean = event.state === "CHECKED";

    const onClick = () => {
        const newEventState = updateItemStates(eventStates, event.id);
        setEventStates(newEventState);
      }

    return(
        <div className="tw-flex tw-flex-wrap" onClick={onClick}>
            <span className="tw-flex-1 tw-whitespace-nowrap tw-bg-black tw-my-3"></span>
            <span className={classNames("tw-h-8", "tw-w-8", "tw-flex-none", "tw-border-2", "tw-border-solid", "tw-border-black", "tw-rounded-2xl", "tw-whitespace-nowrap", {"tw-bg-emerald-600":checked, "after:tw-content-['✓']":checked})} id="element-radio"></span>
            <span className="tw-flex-1 tw-whitespace-nowrap tw-bg-black tw-my-3"></span>
            <span className="tw-flex-1 tw-basis-full tw-w-0"></span>
            <span className="tw-px-4 tw-cursor-pointer tw-basis-full tw-top-24">{event.label}</span>
        </div>
    )
}

export default Element;