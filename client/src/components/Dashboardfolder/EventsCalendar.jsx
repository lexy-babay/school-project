import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function EventsCalendar() {
  return (
    <div className="w-full sm:w-2/3 lg:w-1/3 bg-white rounded-lg p-4 shadow mt-4 sm:mt-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Events</h2>
      <Calendar />
    </div>
  );
}

export default EventsCalendar;
