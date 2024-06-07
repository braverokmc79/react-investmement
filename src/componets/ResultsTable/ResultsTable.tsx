import React from "react";
import {formatterKR}   from "../../utils/Currency";

interface YearlyData {
  year: number;
  yearlyInterest: number;
  savingsEndOfYear: number;
  yearlyContribution: number;
}

interface ResultsTableProps {
  data: YearlyData[];
  initialInvestment:number
}

const ResultsTable: React.FC<ResultsTableProps> = (props) => {


 
  return (
    <table className="result">
      <thead>
        <tr>
          <th>년도</th>
          <th>총 저축액</th>
          <th>이자 (연간)</th>
          <th>총 이자</th>
          <th>투자한 자본</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatterKR.format(yearData.savingsEndOfYear)}</td>
            <td>{formatterKR.format(yearData.yearlyInterest)}</td>
            <td>{formatterKR.format(yearData.savingsEndOfYear - 
                props.initialInvestment -
                yearData.yearlyContribution*yearData.year)}</td>
            <td>{formatterKR.format(props.initialInvestment  + yearData.yearlyContribution*yearData.year)} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
