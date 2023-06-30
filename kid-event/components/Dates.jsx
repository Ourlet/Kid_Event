import { useGlobalContext } from '../context'
import { DatePicker } from '@mui/x-date-pickers';

const Dates = () => {

  const { startDate, endDate, setStartDate, setEndDate } = useGlobalContext()

  return <section className="date-picker">
      <DatePicker label="Date de début" 
minDate={startDate} value={startDate} onChange={(newStartDate) => setStartDate(newStartDate)} />
      <DatePicker label="Date de fin" value={endDate} minDate={startDate} onChange={(newEndDate) => setEndDate(newEndDate)} />
  </section>
}

export default Dates;