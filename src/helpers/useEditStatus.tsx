import React, { useRef, useEffect } from "react";

type HookProps = {
  isEdit: React.ComponentState;
  setIsEdit: (newValue: boolean) => void;
};

const useEditStatus = ({
  isEdit,
  setIsEdit,
}: HookProps): React.Ref<HTMLInputElement> => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const handleDocumentEscape = (e: KeyboardEvent): void => {
      e.code === `Escape` && setIsEdit(false);
    };

    inputRef.current?.focus();
    document.addEventListener(`keydown`, handleDocumentEscape);

    return () => {
      document.removeEventListener(`keydown`, handleDocumentEscape);
    };
  }, [isEdit, setIsEdit]);

  return inputRef;
};

export default useEditStatus;
