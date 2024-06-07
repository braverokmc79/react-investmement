import React, { useState } from 'react'
import ResultsTable from '../../componets/ResultsTable/ResultsTable';
import UserInput, { UserInputType } from '../../componets/UserInput/UserInput';

const InvetMentCalculate:React.FC =() => {
    const [userInput, setUserInput] = useState<UserInputType|null>(null);

    const calculateHandler = (userInput: UserInputType) => {
      setUserInput(userInput);
    };
  
    // 사용자 입력 폼이 제출되었을 때 호출됩니다.
    // 직접 폼의 제출 이벤트에 바인딩하지 않아도 됩니다.
  
    const yearlyData = []; // 연간 결과
  
    if (userInput) {
      let currentSavings = userInput.currentSavings; // 입력 객체의 형태를 변경해도 괜찮습니다!
      const yearlyContribution = userInput.yearlyContribution; // 위에서 언급했듯이 형태를 변경해도 괜찮습니다.
      const expectedReturn = userInput.expectedReturn / 100;
      const duration = userInput.duration;
  
      // 아래 코드는 연간 결과 (총 저축, 이자 등)를 계산합니다.
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // 배열에 푸시되는 데이터의 형태를 변경해도 괜찮습니다!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
    }
  
  return (
    <div>

      <UserInput onCalculate={calculateHandler} />

      {!userInput && <p className="text-center">투자 계산기 값이 없습니다.</p>}
      {userInput && (
        <ResultsTable
          data={yearlyData}
          initialInvestment={userInput.currentSavings}
        />
      )}
    </div>
  )
}

export default InvetMentCalculate;