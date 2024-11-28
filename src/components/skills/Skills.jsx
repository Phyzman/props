import React, { useState } from "react";

const Skills = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <div>
        <p>{input}</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Input your name"
        />
      </div>
    </>
  );
};

export default Skills;
