import { useState } from "react";

interface Props {
  initial?: boolean;
}

export function useToggle({ initial = false }: Props = {}) {
  const [value, setValue] = useState<boolean>(initial);

  function toggle() {
    setValue(!value);
  }

  return {
    value,
    setValue,
    toggle,
  };
}
