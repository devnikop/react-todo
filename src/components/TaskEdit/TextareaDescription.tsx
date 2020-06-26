import React from "react";
import styled from "styled-components";

import { resetTextarea } from "../../styles/mixins";
import { useTextareaEditStatus } from "../../helpers/useEditStatus";

type Props = {
  value: string;
  isEdit: boolean;
  setIsEdit: (newValue: boolean) => void;
  onValueChange: (newValue: string) => void;
};

const TextareaDescription: React.FC<Props> = ({
  value,
  isEdit,
  setIsEdit,
  onValueChange,
}) => {
  const ref = useTextareaEditStatus({
    isEdit,
    setIsEdit,
  });

  const handleDescriptionBlur = (): void => {
    setIsEdit(false);
  };

  const handleDesriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    onValueChange(e.target.value);
  };

  const handleDescriptionEnter = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    e.key === `Enter` && setIsEdit(false);
  };

  const handleDescriptionClick = (): void => {
    setIsEdit(true);
  };

  const handleDescriptionFocus = (): void => {
    setIsEdit(true);
  };

  return (
    <>
      {isEdit ? (
        <DescriptionEdit
          ref={ref}
          value={value}
          placeholder="Add a more detailed description..."
          onBlur={handleDescriptionBlur}
          onChange={handleDesriptionChange}
          onKeyDown={handleDescriptionEnter}
        />
      ) : (
        <DescriptionPresentation
          defaultValue={value}
          placeholder="Add a more detailed description..."
          onClick={handleDescriptionClick}
          onFocus={handleDescriptionFocus}
        />
      )}
    </>
  );
};

const DescriptionEdit = styled.textarea`
  resize: vertical;
`;

const DescriptionPresentation = styled.textarea`
  ${resetTextarea()}
`;

export default TextareaDescription;
