import React from "react";
import classNames from "classnames";
import { State } from "./Timeline";
function ensure(argument, message = 'This value was promised to be there.') {
    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }
    return argument;
}
const updateItemStates = (eventStates, id) => {
    // get current state
    const newEventStates = JSON.parse(JSON.stringify(eventStates));
    const currentState = ensure(newEventStates.find((i) => i.id === id)).state;
    // toggle state
    if (currentState === "CHECKED") {
        //change to unchecked
        ensure(newEventStates.find((i) => i.id === id)).state = State.unchecked;
    }
    else if (currentState === "UNCHECKED") {
        //change to unchecked
        ensure(newEventStates.find((i) => i.id === id)).state = State.checked;
    }
    return newEventStates;
};
const Element = (props) => {
    const { eventStates, setEventStates, event } = props;
    const checked = event.state === "CHECKED";
    const onClick = () => {
        const newEventState = updateItemStates(eventStates, event.id);
        setEventStates(newEventState);
    };
    return (React.createElement("div", { className: "tw-flex tw-flex-wrap", onClick: onClick },
        React.createElement("span", { className: "tw-flex-1 tw-whitespace-nowrap tw-bg-black tw-my-3" }),
        React.createElement("span", { className: classNames("tw-h-8", "tw-w-8", "tw-flex-none", "tw-border-2", "tw-border-solid", "tw-border-black", "tw-rounded-2xl", "tw-whitespace-nowrap", { "tw-bg-emerald-600": checked, "after:tw-content-['✓']": checked }), id: "element-radio" }),
        React.createElement("span", { className: "tw-flex-1 tw-whitespace-nowrap tw-bg-black tw-my-3" }),
        React.createElement("span", { className: "tw-flex-1 tw-basis-full tw-w-0" }),
        React.createElement("span", { className: "tw-px-4 tw-cursor-pointer tw-basis-full tw-top-24" }, event.label)));
};
export default Element;
//# sourceMappingURL=Element.js.map