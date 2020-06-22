import React, { useState, useRef, useEffect } from "react";

type Props = {};

const NewTask: React.FC<Props> = () => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<any>();

  useEffect(() => {
    const { current } = inputRef;

    const handleInputBlur = () => setIsEdit(false);
    const handleDocumentEscape = (e: KeyboardEvent) =>
      e.code === `Escape` && setIsEdit(false);

    current?.addEventListener(`blur`, handleInputBlur);
    document.addEventListener(`keydown`, handleDocumentEscape);
    current?.focus();

    return () => {
      current?.removeEventListener(`blur`, handleInputBlur);
      document.removeEventListener(`keydown`, handleDocumentEscape);
    };
  }, [isEdit]);

  const handleButtonClick = () => {
    setIsEdit(true);
  };

  return isEdit === true ? (
    <input ref={inputRef} />
  ) : (
    <button onClick={handleButtonClick}>Add another task</button>
  );
};

export default NewTask;
