import React from "react";

export interface TimelineProps {
    label: string;
  }
  
  const Button = (props: TimelineProps) => {
      const {label = "timeline"} = props;

    return(
        <p>{label}</p>
    );
  };
  
  export default Button;