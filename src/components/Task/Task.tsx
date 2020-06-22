import React from "react";
import styled from "styled-components";

export interface TaskType {
  title: string;
  description: string;
  deadline: string;
}

type Props = TaskType;

const StyledTask = styled.article`
  padding: 10px;

  background-color: #ffffff;
  border-radius: 3px;

  h3 {
    margin: 0;
    margin-bottom: 20px;
  }

  p {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const Task: React.FC<Props> = ({ title, description, deadline }) => {
  return (
    <StyledTask>
      <h3>{title}</h3>
      <p>{description}</p>
      <time dateTime={deadline}>{deadline}</time>
    </StyledTask>
  );
};

export default Task;
