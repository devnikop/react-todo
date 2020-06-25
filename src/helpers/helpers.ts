import moment from "moment";

import { Color } from "../styles/variables";

const getTaskBackgroundColor = (deadline: string): string => {
  if (moment(deadline, `D MMM`).isBefore(moment())) {
    return Color.overdue;
  }
  if (moment(deadline, `D MMM`).isBefore(moment().add(3, `d`))) {
    return Color.warning;
  }

  return Color.deadlineOk;
};

const getRandomDeadline = (): string =>
  moment()
    .add(Math.round(Math.random() * 7), `d`)
    .subtract(2, `d`)
    .format(`D MMM`);

export { getTaskBackgroundColor, getRandomDeadline };
