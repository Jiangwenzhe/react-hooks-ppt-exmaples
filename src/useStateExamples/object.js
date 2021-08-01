import React from "react";
import { useState } from "react";

const ObjectExamples = () => {
  const [messageObj, setMessage] = useState({ message: "" });
  return (
    <div>
      <input
        type="text"
        value={messageObj.message}
        placeholder="为啥 onChange 不好使"
        onChange={(e) => {
          messageObj.message = e.target.value;
          console.log(messageObj)
          setMessage(messageObj);
        }}
      />
    </div>
  );
};

export default ObjectExamples;
