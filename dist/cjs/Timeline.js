"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const react_1 = __importDefault(require("react"));
require("./index.css");
const Element_1 = __importDefault(require("./Element"));
var State;
(function (State) {
    State["checked"] = "CHECKED";
    State["unchecked"] = "UNCHECKED";
})(State = exports.State || (exports.State = {}));
let eventStatesDefaultProps = [{ label: "First Event", id: 1, state: State.checked }, { label: "next Event", id: 2, state: State.checked }, { label: "Add Your Own", id: 3, state: State.checked }, { label: "Events As", id: 5, state: State.checked }, { label: "Props", id: 6, state: State.checked }];
const setEventStatesDefaultProps = (newEventStates) => {
    console.log(newEventStates);
};
const Timeline = (props) => {
    //const {label = "timeline"} = props;
    const { eventStates = eventStatesDefaultProps } = props;
    const { setEventStates = setEventStatesDefaultProps } = props;
    return (react_1.default.createElement("ul", { className: "tw-table tw-w-full" }, eventStates.map((event) => {
        return (react_1.default.createElement("li", { className: "tw-table-cell tw-relative tw-cursor-pointer tw-text-sm", key: event.id },
            react_1.default.createElement(Element_1.default, { eventStates: eventStates, setEventStates: setEventStates, event: event })));
    })));
};
exports.default = Timeline;
//# sourceMappingURL=Timeline.js.map