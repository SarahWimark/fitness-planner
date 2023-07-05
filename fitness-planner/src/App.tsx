import { useState } from "react";
import Calendar from "./components/calendar/Calendar";
import Activities from "./components/activity/Activities";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <>
      <div className="container mx-auto flex flex-row">
        <div className="mt-16 items-center">
          <Calendar currentDate={currentDate} onChange={setCurrentDate} />
        </div>

        <Activities />
      </div>
    </>
  );
};

export default App;
