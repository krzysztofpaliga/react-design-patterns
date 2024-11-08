import React, { useState, useEffect } from "react";
import axios from "axios";

function ResourceLoader({ getDataFunc = () => {}, resourceName, children }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  );
}

export default ResourceLoader;
