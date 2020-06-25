import React, { useState } from "react";
import styled from "styled-components";

import { getDefaultInput, resetInput } from "../../styles/mixins";
import { useInputEditStatus } from "../../helpers/useEditStatus";

type Props = {
  value: string;
  onValueChange: (newValue: string) => void;
};

const InputTitle: React.FC<Props> = ({ value, onValueChange }) => {
  const [isEdit, setIsEdit] = useState<boolean>(!value);
  const ref = useInputEditStatus({
    isEdit,
    setIsEdit,
  });

  const handleTitleBlur = (): void => {
    setIsEdit(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onValueChange(e.target.value);
  };

  const handleTitleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    e.key === `Enter` && setIsEdit(false);
  };

  const handleTitleClick = (): void => {
    setIsEdit(true);
  };

  const handleTitleFocus = (): void => {
    setIsEdit(true);
  };

  return (
    <>
      {isEdit ? (
        <TitleEdit
          ref={ref}
          value={value}
          onBlur={handleTitleBlur}
          onChange={handleTitleChange}
          onKeyDown={handleTitleEnter}
        />
      ) : (
        <TitlePresentation
          defaultValue={value}
          placeholder="Add task title"
          onClick={handleTitleClick}
          onFocus={handleTitleFocus}
        />
      )}
    </>
  );
};

const TitleEdit = styled.input`
  ${getDefaultInput()}
`;

const TitlePresentation = styled.input`
  ${resetInput()}
  ${getDefaultInput()}
`;

export default InputTitle;
