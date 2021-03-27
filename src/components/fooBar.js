/**************************************************************
 * Given a positive intiger input this function will conditionally
 * return different strings. If input is divisible by 2, foo is
 * displayed; if input is divisible by 7, bar is printed; if input
 * is divisible by both 2 and 7 aka 14 then it will print foobar
 * ***************************************************************/

import React, { useState, useEffect } from "react";

function FooBar() {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (input && Number(input) > 0) {
      let temp = Number(input);
      if (temp % 14 === 0) {
        setOutput("foobar");
      } else if (temp % 7 === 0) {
        setOutput("bar");
      } else if (temp % 2 === 0) {
        setOutput("foo");
      } else {
        setOutput(input);
      }
    } else {
      setOutput("");
    }
  }, [input]);
  return (
    <div>
      <h3>Enter a number</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Output: {output}</h3>
    </div>
  );
}

export default FooBar;
