import { ChangeEvent, useState, useCallback, FormEvent } from 'react';
import './App.css';

const costOption = ["무료 회차", "유료 회차", "멤버십 회차"];
const timeOption = ["즉시 업로드", "예약 업로드"];


const App =() => {
  const [costOptionCheckList, setCostOptionCheckList] = useState<string[]>([]);
  const [timeOptionCheckList, setTimeOptionCheckList] = useState<string[]>([]);
  const [payPrice, setPayPrice] = useState<string>('');
  const [reservationTime, setReservationTime] = useState<string>('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedCostOption = (value: string, ischecked: boolean) => {
      if (ischecked) {
          setCostOptionCheckList((prev) => [value]);
          return;
      }
      if (!ischecked && costOptionCheckList.includes(value)) {
          setCostOptionCheckList(costOptionCheckList.filter((item) => item !== value));
          if (value == '유료 회차') {
            setPayPrice('');
          }
          return;
      }
      return;
  };
  const handleCheckedTimeOption = (value: string, ischecked: boolean) => {
    if (ischecked) {
        setTimeOptionCheckList((prev) => [value]);
        return;
    }
    if (!ischecked && timeOptionCheckList.includes(value)) {
        setTimeOptionCheckList(timeOptionCheckList.filter((item) => item !== value));
        if (value == '예약 업로드') {
          setReservationTime('');
        }
        return;
    }
    return;
};

  const handleOnChangeCheckCostOption =
  (e: ChangeEvent<HTMLInputElement>, value: string) => {
      setIsChecked(!isChecked);
      handleCheckedCostOption(value, e.target.checked);
  }
  const handleOnChangeCheckTimeOption =
  (e: ChangeEvent<HTMLInputElement>, value: string) => {
      setIsChecked(!isChecked);
      handleCheckedTimeOption(value, e.target.checked);
  }
  const handleOnPayPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value;
    setPayPrice(price);
  };
  const handleOnReservationTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    setReservationTime(time);
  };

  const handleOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  }, [costOptionCheckList, timeOptionCheckList, payPrice, reservationTime]
  );
  return(
    <>
    {
      <form onSubmit={handleOnSubmit}>
        <div>
          <div className='option'>
            회차별 가격 설정
            {costOption.map(costOption => 
              <label key={costOption} htmlFor='costOption'>
                <input type='checkbox' id='costOption' 
                  checked={costOptionCheckList.includes(costOption)}
                  onChange={(e) => handleOnChangeCheckCostOption(e, costOption)} />
                {costOption}
              </label>
            )}
            {costOptionCheckList.includes('유료 회차') && (
              <div className='payPrice'>
                <input
                  className='payPriceInput'
                  type='string'
                  value={payPrice ?? ''}
                  onChange={handleOnPayPriceChange}
                  required />
                <span className='XLP'>XLP</span>
              </div>
            )}
          </div>
          
          <div className='option'>
            업로드 시간
            {timeOption.map(timeOption => 
              <label key={timeOption} htmlFor='timeOption'>
                <input type='checkbox' id='timeOption' 
                  checked={timeOptionCheckList.includes(timeOption)}
                  onChange={(e) => handleOnChangeCheckTimeOption(e, timeOption)} />
                {timeOption}
              </label>
            )}
            {timeOptionCheckList.includes('예약 업로드') && (
              <div className='reservationTime'>
                <input
                  className='reservationTimeInput'
                  type='datetime-local'
                  value={reservationTime ?? ''}
                  onChange={handleOnReservationTimeChange}
                  required />
              </div>
            )}
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    }
    </>
  )
  
}

export default App;
