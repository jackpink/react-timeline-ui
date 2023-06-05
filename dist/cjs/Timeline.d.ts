import React from "react";
import './index.css';
export declare enum State {
    checked = "CHECKED",
    unchecked = "UNCHECKED"
}
export interface EventObj {
    label: string;
    id: number;
    state: State;
}
export interface TimelineProps {
    label: string;
    eventStates: EventObj[];
    setEventStates: Function;
}
declare const Timeline: React.FC<TimelineProps>;
export default Timeline;
