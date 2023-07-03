import { useState } from "react";
import Calendar from "./components/calendar/Calendar";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <>
      <div className="mt-16 flex flex-col items-center">
        <Calendar currentDate={currentDate} onChange={setCurrentDate} />
      </div>
    </>
  );
};

export default App;
