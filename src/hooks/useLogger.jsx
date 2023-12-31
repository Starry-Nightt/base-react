import { useEffect } from "react";

function useLogger(value) {
  useEffect(() => {
    if (value instanceof Array) console.table(value);
    else console.log(value)
  }, [value]);
}

export default useLogger;
