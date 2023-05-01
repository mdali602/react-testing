import React from "react";

type GreetProps = { name?: string };

const Greet = (props: GreetProps) => {
  const { name } = props;
  return <div>Hello {name} </div>;
};

export default Greet;
