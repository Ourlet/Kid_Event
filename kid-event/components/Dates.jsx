import { useGlobalContext } from '../context'
import { DatePicker } from '@mui/x-date-pickers';

const Dates = () => {

  const { startDate, endDate, setStartDate, setEndDate } = useGlobalContext()

  const datePickerStyle = {
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
  };

  return <section className="date-picker">
      <DatePicker label="Date de début"
minDate={startDate} value={startDate} onChange={(newStartDate) => setStartDate(newStartDate)} 
sx={datePickerStyle}
/>
      <DatePicker label="Date de fin" value={endDate} minDate={startDate} onChange={(newEndDate) => setEndDate(newEndDate)} sx={datePickerStyle}/>
  </section>
}

export default Dates;