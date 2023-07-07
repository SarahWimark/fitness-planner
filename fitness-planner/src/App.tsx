import { useState } from "react";
import Calendar from "./components/calendar/Calendar";
import Activities from "./components/activity/Activities";
import Navbar from "./components/layout/navbar/Navbar";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <>
      <Navbar />
      <div className="container mx-auto m-4">
        <div className="flex md:flex-col-2 items-center">
          <Calendar currentDate={currentDate} onChange={setCurrentDate} />
          <Activities />
        </div>
      </div>
    </>
  );
};

export default App;
