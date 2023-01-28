import { useEffect, useState } from 'react';

function MyPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <h1>The current date is: {currentDate.toString()}</h1>;
}

export default MyPage;
