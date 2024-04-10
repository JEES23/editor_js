import { ChangeEvent, useState, useCallback, FormEvent } from 'react';
import './App.css';

const costOption = ["무료 회차", "유료 회차", "멤버십 회차"];
const timeOption = ["즉시 업로드", "예약 업로드"];

const App2 =() => {
  const [selectedCostOption, setSelectedCostOption] = useState<string>('');
  const [selectedTimeOption, setSelectedTimeOption] = useState<string>('');
  const [payPrice, setPayPrice] = useState<string>('');
  const [reservationTime, setReservationTime] = useState<string>('');

  const handleSelectCostOption = (option: string) => {
    setSelectedCostOption(option);
    if (option === '유료 회차') {
      setPayPrice('');
    }
  };

  const handleSelectTimeOption = (option: string) => {
    setSelectedTimeOption(option);
    if (option === '예약 업로드') {
      setReservationTime('');
    }
  };

  const handleOnPayPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPayPrice(e.target.value);
  };

  const handleOnReservationTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReservationTime(e.target.value);
  };

  const handleOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, [selectedCostOption, selectedTimeOption, payPrice, reservationTime]);

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <div className='option'>
          회차별 가격 설정
          {costOption.map(option => (
            <label key={option}>
              <input
                type='radio'
                value={option}
                checked={selectedCostOption === option}
                onChange={() => handleSelectCostOption(option)}
              />
              {option}
            </label>
          ))}
          {selectedCostOption === '유료 회차' && (
            <div className='payPrice'>
              <input
                className='payPriceInput'
                type='string'
                value={payPrice ?? ''}
                onChange={handleOnPayPriceChange}
                required
              />
              <span className='XLP'>XLP</span>
            </div>
          )}
        </div>
        
        <div className='option'>
          업로드 시간
          {timeOption.map(option => (
            <label key={option}>
              <input
                type='radio'
                value={option}
                checked={selectedTimeOption === option}
                onChange={() => handleSelectTimeOption(option)}
              />
              {option}
            </label>
          ))}
          {selectedTimeOption === '예약 업로드' && (
            <div className='reservationTime'>
              <input
                className='reservationTimeInput'
                type='datetime-local'
                value={reservationTime ?? ''}
                onChange={handleOnReservationTimeChange}
                required
              />
            </div>
          )}
        </div>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App2;
