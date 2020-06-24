import React, { useRef, useEffect } from "react";

type HookProps = {
  isEdit: React.ComponentState;
  setIsEdit: (newValue: boolean) => void;
};

const useInputEditStatus = ({
  isEdit,
  setIsEdit,
}: HookProps): React.Ref<HTMLInputElement> => {
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const handleDocumentEscape = (e: KeyboardEvent): void => {
      e.code === `Escape` && setIsEdit(false);
    };

    ref.current?.focus();
    document.addEventListener(`keydown`, handleDocumentEscape);

    return () => {
      document.removeEventListener(`keydown`, handleDocumentEscape);
    };
  }, [isEdit, setIsEdit]);

  return ref;
};

const useTextareaEditStatus = ({
  isEdit,
  setIsEdit,
}: HookProps): React.Ref<HTMLTextAreaElement> => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    const handleDocumentEscape = (e: KeyboardEvent): void => {
      e.code === `Escape` && setIsEdit(false);
    };

    ref.current?.focus();
    document.addEventListener(`keydown`, handleDocumentEscape);

    return () => {
      document.removeEventListener(`keydown`, handleDocumentEscape);
    };
  }, [isEdit, setIsEdit]);

  return ref;
};

export { useInputEditStatus, useTextareaEditStatus };
