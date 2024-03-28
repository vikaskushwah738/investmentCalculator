import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
  return ( 
    <table className="text-white border-collapse w-[600px] mt-6 mx-auto">
      <thead>
        <tr>
          <th className="border border-white py-2 px-4">Year</th>
          <th className="border border-white py-2 px-4">Investment Value</th>
          <th className="border border-white py-2 px-4">Interest (Year)</th>
          <th className="border border-white py-2 px-4">Total Interest</th>
          <th className="border border-white py-2 px-4">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td className="border border-white py-2 px-4">{yearData.year}</td>
              <td className="border border-white py-2 px-4">{formatter.format(yearData.valueEndOfYear)}</td>
              <td className="border border-white py-2 px-4">{formatter.format(yearData.interest)}</td>
              <td className="border border-white py-2 px-4">{formatter.format(totalInterest)}</td>
              <td className="border border-white py-2 px-4">{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
