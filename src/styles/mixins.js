const resetButton = () => `
  padding: 0;

  color: inherit;
  font: inherit;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const resetList = () => `
  margin: 0;
  padding: 0;
  list-style: none;
`;

const resetInput = () => `
  padding: 0;

  border: none;
  background: none;
`;

const resetTextarea = () => `
  padding: 0;

  border: none;
  background: none;

  resize: none;
`;

const getDefaultInput = () => `
  font-size: 20px;
  font-weight: 600;
`;

export {
  resetButton,
  resetList,
  resetInput,
  resetTextarea,
  getDefaultInput,
};
