import React, { useState } from "react";

export type UserInputType = {
  currentSavings: number;
  yearlyContribution: number;
  expectedReturn: number;
  duration: number;
};

const initialUserInput: UserInputType = {
  currentSavings: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
};

interface UserInputProps {
  onCalculate: (userInput: UserInputType) => void;
}

const UserInput: React.FC<UserInputProps> = (props) => {
  const [userInput, setUserInput] = useState<UserInputType>(initialUserInput);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onCalculate(userInput);

  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input: keyof UserInputType, value: string) => {
    //inputChangeHandler 함수에서 입력 값을 숫자로 변환(+value)하도록 했습니다. 
    //이는 입력된 문자열 값을 숫자로 변환하여 userInput 상태에 저장합니다.
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: +value };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">현재 저축액 ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("currentSavings", event.target.value)
            }
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">연간 저축액 ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearlyContribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">예상 이자율 (연간 %)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("expectedReturn", event.target.value)
            }
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">투자 기간 (년)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            type="number"
            id="duration"
            value={userInput.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          초기화
        </button>
        <button type="submit" className="button">
          계산
        </button>
      </p>
    </form>
  );
};

export default UserInput;
