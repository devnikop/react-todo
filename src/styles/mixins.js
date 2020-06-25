const getDefaultInput = () => `
  font-size: 20px;
  font-weight: 600;
`;

const resetButton = () => `
  padding: 0;

  color: inherit;
  font: inherit;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const resetInput = () => `
  padding: 0;

  border: none;
  background: none;
`;

const resetList = () => `
  margin: 0;
  padding: 0;
  list-style: none;
`;

const resetTextarea = () => `
  padding: 0;

  border: none;
  background: none;

  resize: none;
`;

export { getDefaultInput, resetButton, resetInput, resetList, resetTextarea };
