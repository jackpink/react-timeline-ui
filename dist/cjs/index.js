import "./index.css";
import {jsx as $6FeVr$jsx, jsxs as $6FeVr$jsxs} from "react/jsx-runtime";
import "react";
import $6FeVr$classnames from "classnames";








function $96e13bca1d847433$var$ensure(argument, message = "This value was promised to be there.") {
    if (argument === undefined || argument === null) throw new TypeError(message);
    return argument;
}
const $96e13bca1d847433$var$updateItemStates = (eventStates, id)=>{
    // get current state
    const newEventStates = JSON.parse(JSON.stringify(eventStates));
    console.log("updateItemStates");
    console.log(id);
    const currentState = $96e13bca1d847433$var$ensure(newEventStates.find((i)=>i.id === id)).state;
    // toggle state
    if (currentState === "CHECKED") //change to unchecked
    $96e13bca1d847433$var$ensure(newEventStates.find((i)=>i.id === id)).state = (0, $70cfb7adee0823b4$export$7254cc27399e90bd).unchecked;
    else if (currentState === "UNCHECKED") //change to unchecked
    $96e13bca1d847433$var$ensure(newEventStates.find((i)=>i.id === id)).state = (0, $70cfb7adee0823b4$export$7254cc27399e90bd).checked;
    return newEventStates;
};
const $96e13bca1d847433$var$Element = (props)=>{
    const { eventStates: eventStates , setEventStates: setEventStates , event: event  } = props;
    const checked = event.state === "CHECKED";
    const onClick = ()=>{
        const newEventState = $96e13bca1d847433$var$updateItemStates(eventStates, event.id);
        console.log("set event states to ", newEventState);
        setEventStates(newEventState);
    };
    return /*#__PURE__*/ (0, $6FeVr$jsxs)("div", {
        className: "tw-flex tw-flex-wrap",
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, $6FeVr$jsx)("span", {
                className: "tw-flex-1 tw-whitespace-nowrap tw-bg-black tw-my-3"
            }),
            /*#__PURE__*/ (0, $6FeVr$jsx)("span", {
                className: (0, $6FeVr$classnames)("tw-h-8", "tw-w-8", "tw-flex-none", "tw-border-2", "tw-border-solid", "tw-border-black", "tw-rounded-2xl", "tw-whitespace-nowrap", {
                    "tw-bg-emerald-600": checked,
                    "after:tw-content-['✓']": checked
                }),
                id: "element-radio"
            }),
            /*#__PURE__*/ (0, $6FeVr$jsx)("span", {
                className: "tw-flex-1 tw-whitespace-nowrap tw-bg-black tw-my-3"
            }),
            /*#__PURE__*/ (0, $6FeVr$jsx)("span", {
                className: "tw-flex-1 tw-basis-full tw-w-0"
            }),
            /*#__PURE__*/ (0, $6FeVr$jsx)("span", {
                className: "tw-px-4 tw-cursor-pointer tw-basis-full tw-top-24",
                children: event.label
            })
        ]
    });
};
var $96e13bca1d847433$export$2e2bcd8739ae039 = $96e13bca1d847433$var$Element;


let $70cfb7adee0823b4$export$7254cc27399e90bd;
(function(State) {
    State["checked"] = "CHECKED";
    State["unchecked"] = "UNCHECKED";
})($70cfb7adee0823b4$export$7254cc27399e90bd || ($70cfb7adee0823b4$export$7254cc27399e90bd = {}));
const $70cfb7adee0823b4$var$Timeline = (props)=>{
    //const {label = "timeline"} = props;
    const { eventStates: eventStates  } = props;
    const { setEventStates: setEventStates  } = props;
    return /*#__PURE__*/ (0, $6FeVr$jsx)("ul", {
        className: "tw-table tw-w-full",
        children: eventStates.map((event)=>{
            return /*#__PURE__*/ (0, $6FeVr$jsx)("li", {
                className: "tw-table-cell tw-relative tw-cursor-pointer tw-text-sm",
                children: /*#__PURE__*/ (0, $6FeVr$jsx)((0, $96e13bca1d847433$export$2e2bcd8739ae039), {
                    eventStates: eventStates,
                    setEventStates: setEventStates,
                    event: event
                })
            }, event.id);
        })
    });
};
var $70cfb7adee0823b4$export$2e2bcd8739ae039 = $70cfb7adee0823b4$var$Timeline;




export {$70cfb7adee0823b4$export$2e2bcd8739ae039 as Timeline};
//# sourceMappingURL=index.js.map
