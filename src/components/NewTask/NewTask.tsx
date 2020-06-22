import React, { FC, useState } from "react";

import useEditStatus from "../../helpers/useEditStatus";

const NewTask: FC = () => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useEditStatus(isEdit, setIsEdit);

  const handleButtonClick = (): void => {
    setIsEdit(true);
  };

  return isEdit ? (
    <input ref={inputRef} />
  ) : (
    <button onClick={handleButtonClick}>Add another task</button>
  );
};

export default NewTask;
