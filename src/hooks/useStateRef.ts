import { MutableRefObject, useRef, useState } from "react";

type SetStateAction<T> = T | ((prevState: T) => T);

export const useStateRef = <T = any>(
  defaultValue: T
): [T, (state: SetStateAction<T>) => void, MutableRefObject<T>] => {
  const [_state, _setState] = useState(defaultValue);
  const stateRef = useRef(_state);

  const setState = (state: SetStateAction<T>) => {
    if (state instanceof Function) {
      stateRef.current = state(stateRef.current);
    } else {
      stateRef.current = state;
    }
    _setState(state);
  };

  return [_state, setState, stateRef];
};
