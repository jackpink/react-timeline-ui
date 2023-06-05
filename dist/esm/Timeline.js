import React from "react";
import './index.css';
import Element from "./Element";
export var State;
(function (State) {
    State["checked"] = "CHECKED";
    State["unchecked"] = "UNCHECKED";
})(State || (State = {}));
let eventStatesDefaultProps = [{ label: "First Event", id: 1, state: State.checked }, { label: "next Event", id: 2, state: State.checked }, { label: "Add Your Own", id: 3, state: State.checked }, { label: "Events As", id: 5, state: State.checked }, { label: "Props", id: 6, state: State.checked }];
const setEventStatesDefaultProps = (newEventStates) => {
    console.log(newEventStates);
};
const Timeline = (props) => {
    //const {label = "timeline"} = props;
    const { eventStates = eventStatesDefaultProps } = props;
    const { setEventStates = setEventStatesDefaultProps } = props;
    return (React.createElement("ul", { className: "tw-table tw-w-full" }, eventStates.map((event) => {
        return (React.createElement("li", { className: "tw-table-cell tw-relative tw-cursor-pointer tw-text-sm", key: event.id },
            React.createElement(Element, { eventStates: eventStates, setEventStates: setEventStates, event: event })));
    })));
};
export default Timeline;
//# sourceMappingURL=Timeline.js.map