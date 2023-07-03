import Cell from "./Cell";

const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = () => {
  return (
    <div className="w-[400px] h-16 ">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell>{"<<"}</Cell>
        <Cell>{"<"}</Cell>
        <Cell className="col-span-3">Aug 2022</Cell>
        <Cell>{">"}</Cell>
        <Cell>{">>"}</Cell>
        {daysOfTheWeek.map((day) => (
          <Cell className="text-sm">{day}</Cell>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
