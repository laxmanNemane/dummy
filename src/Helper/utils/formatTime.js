// ----------------------------------------------------------------------

import moment from "moment/moment";

export function fDate(date, newFormat) {
  const dateFormat = newFormat || "dd MMM yyyy";

  return date ? moment(date).format(dateFormat) : "";
}
