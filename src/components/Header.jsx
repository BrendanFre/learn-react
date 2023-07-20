import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      <h1 style={headingStyle}>{props.title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "task tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;