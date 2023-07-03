import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  startOfMonth,
  sub,
} from "date-fns";
import Cell from "./Cell";

const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface Props {
  currentDate?: Date;
  onChange?: (value: Date) => void;
}

const Calendar: React.FC<Props> = ({ currentDate = new Date(), onChange }) => {
  const startDateOfMonth = startOfMonth(currentDate);
  const endDateOfMonth = endOfMonth(currentDate);
  const numDaysInMonth = differenceInDays(endDateOfMonth, startDateOfMonth) + 1;
  const prefixDays = startDateOfMonth.getDay() - 1;
  const suffixDays = 7 - endDateOfMonth.getDay();

  const getPreviousMonth = () =>
    onChange && onChange(sub(currentDate, { months: 1 }));

  const getNextMonth = () =>
    onChange && onChange(add(currentDate, { months: 1 }));

  const getPreviousYear = () =>
    onChange && onChange(sub(currentDate, { years: 1 }));

  const getNextYear = () =>
    onChange && onChange(add(currentDate, { years: 1 }));

  return (
    <div className="w-[400px] h-16 ">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell onClick={getPreviousYear}>{"<<"}</Cell>
        <Cell onClick={getPreviousMonth}>{"<"}</Cell>
        <Cell className="col-span-3">{format(currentDate, "LLLL yyyy")}</Cell>
        <Cell onClick={getNextMonth}>{">"}</Cell>
        <Cell onClick={getNextYear}>{">>"}</Cell>
        {daysOfTheWeek.map((day) => (
          <Cell key={day} className="text-sm">
            {day}
          </Cell>
        ))}

        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}

        {Array.from({ length: numDaysInMonth }).map((_, index) => {
          const day = index + 1;

          return <Cell key={day}>{day}</Cell>;
        })}

        {Array.from({ length: suffixDays }).map((_, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
