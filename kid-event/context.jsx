import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(3, 'day'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    const url = `./api/hello?startDate=${startDate.format("DD-MM-YYYY")}&endDate=${endDate.format("DD-MM-YYYY")}`;
    console.log("Call API ", url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data)
        console.log(data)
      })
  }, [startDate, endDate])

//   useEffect(() => {
//     const url = `./api/hello_libre?startDate=${startDate.format("DD.MM.YYYY")}&endDate=${endDate.format("DD.MM.YYYY")}`;
//     console.log("Call API ", url)
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setEvents(data)
//         console.log(data)
//       })
//   }, [startDate, endDate])

  return <AppContext.Provider value={{ events, startDate, setStartDate, endDate, setEndDate, name, email, setEmail, setName }}>
    {children}
  </AppContext.Provider>

};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };