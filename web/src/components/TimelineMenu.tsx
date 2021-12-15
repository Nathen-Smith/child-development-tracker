import { useState } from "react";

interface TimelineMenuProps {
  updateFunc(months: number): any;
}

export const TimelineMenu: React.FC<TimelineMenuProps> = ({ updateFunc }) => {
  const [selection, setSelection] = useState<number>(2);
  const choices: Array<number> = [2, 4, 6, 9, 12, 18, 24, 36, 48, 60];

  return (
    <select
      value={selection}
      onChange={(event) => {
        updateFunc(parseInt(event.target.value));
        setSelection(parseInt(event.target.value));
      }}
    >
      {choices.map((num) => (
        <option key={num} value={num}>
          {num} Months
        </option>
      ))}
    </select>
  );
};
