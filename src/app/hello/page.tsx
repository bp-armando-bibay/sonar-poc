import React from "react";

const Hello: React.FC = () => {
  const [username, setUsername] = React.useState<string>("Fake");

  const onClick = (): void => {
    setUsername("hello");
  };
  return (
    <div>
      This should reflect in Sonars
      <h1>{username}</h1>
      <button id="click-me-button" name="click-me-button" onClick={onClick}>
        Click me
      </button>
    </div>
  );
};

export default Hello;
