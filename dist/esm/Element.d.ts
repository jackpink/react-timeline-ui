import React from "react";
import { EventObj } from "./Timeline";
export interface ElementProps {
    eventStates: EventObj[];
    setEventStates: Function;
    event: EventObj;
}
declare const Element: React.FC<ElementProps>;
export default Element;
