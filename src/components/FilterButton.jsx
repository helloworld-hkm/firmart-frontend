import React from "react";
import { NavLink } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";

const FilterButton = ({url,label,setShowClear}) => {
  return (
    <NavLink to={url}>
      {({ isActive}) =>
        isActive ? (
      
          <Button
            className={buttonVariants({
              variant: "primary",
              size: "sm",
            })}
          >
           {label}
          </Button>
        ) : (
          <Button
            className={buttonVariants({
              variant: "outline",
              size: "sm",
            })}
          >
            {label}
          </Button>
        )
      }
    </NavLink>
  );
};

export default FilterButton;
