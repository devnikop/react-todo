import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";

import { useInputEditStatus } from "../../helpers/useEditStatus";

type Props = {
  value: string;
  onValueChange: (newValue: string) => void;
};

const InputDate: React.FC<Props> = ({ value, onValueChange }) => {
  const [isEdit, setIsEdit] = useState<boolean>(!value);
  const ref = useInputEditStatus({
    isEdit,
    setIsEdit,
  });

  const handleDateBlur = (): void => {
    setIsEdit(false);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onValueChange(moment(e.target.value, `YYYY-MM-DD`).format(`D MMM`));
  };

  const handleDateClick = (): void => {
    setIsEdit(true);
  };

  const handleDateFocus = (): void => {
    setIsEdit(true);
  };

  return (
    <>
      {isEdit ? (
        <DateEdit
          ref={ref}
          value={moment(value, `D MMM`).format(`YYYY-MM-DD`)}
          onBlur={handleDateBlur}
          onChange={handleDateChange}
        />
      ) : (
        <DatePresentation
          defaultValue={moment(value, `D MMM`).format(`YYYY-MM-DD`)}
          onClick={handleDateClick}
          onFocus={handleDateFocus}
        />
      )}
    </>
  );
};

const DateEdit = styled.input.attrs(() => ({
  type: "date",
}))``;

const DatePresentation = styled.input.attrs(() => ({
  type: "date",
}))`
  background: none;
  border: none;
  appearance: none;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export default InputDate;
