import React, { useRef, useLayoutEffect } from "react";

type Hook = (
  isEdit: React.ComponentState,
  setIsEdit: (newValue: boolean) => void
) => React.Ref<HTMLInputElement>;

const useEditStatus: Hook = (isEdit, setIsEdit) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useLayoutEffect(() => {
    const { current: inputEl } = inputRef;

    const handleInputBlur = (): void => {
      setIsEdit(false);
    };
    const handleDocumentEscape = (e: KeyboardEvent): void => {
      e.code === `Escape` && setIsEdit(false);
    };

    document.addEventListener(`keydown`, handleDocumentEscape);
    inputEl?.addEventListener(`blur`, handleInputBlur);
    inputEl?.focus();

    return () => {
      document.removeEventListener(`keydown`, handleDocumentEscape);
      inputEl?.removeEventListener(`blur`, handleInputBlur);
    };
  }, [isEdit, setIsEdit]);

  return inputRef;
};

export default useEditStatus;
