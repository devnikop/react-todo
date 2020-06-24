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

export { getTaskBackgroundColor };
