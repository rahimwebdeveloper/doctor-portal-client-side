import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedData, setSelectedData}) => {
  
  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm lg:ml-20 rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <DayPicker
            className="shadow-xl rounded-md p-3"
            mode="single"
            selected={selectedData}
            onSelect={setSelectedData}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
