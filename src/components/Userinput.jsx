const Userinput = ({onChange, userInput}) => {

  return (
    <section className="mx-auto mt-10 bg-orange-700 p-7 rounded-lg w-[500px] text-white">
      <div className="mb-4 flex ">
        <p className="bg-orange-700">
          <label htmlFor="initialInvestment" className="bg-orange-700">Initial Investment</label>
          <input
            type="number"
            className="border p-2 bg-orange-700"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange('initialInvestment', event.target.value)}
          />
        </p>
        <p  className="bg-orange-700">
          <label htmlFor="annualInvestment"  className="bg-orange-700">Annual Investment</label>
          <input 
             type="number" 
             required 
             className="border p-2 bg-orange-700"
             value={userInput.annualInvestment}
             onChange={(event) =>
               onChange('annualInvestment', event.target.value)}
           />
        </p>
      </div>
      <div className="mb-4 flex">
        <p  className="bg-orange-700">
          <label htmlFor="expectedReturn"  className="bg-orange-700">Expected Return</label>
          <input 
          type="number" 
          required 
          className="border p-2  bg-orange-700"
          value={userInput.expectedReturn}
          onChange={(event) =>
            onChange('expectedReturn', event.target.value)}
        />
        </p>
        <p  className="bg-orange-700">
          <label htmlFor="duration"  className="bg-orange-700">Duration</label>
          <input 
          type="number" 
          required 
          className="border p-2 bg-orange-700"
          value={userInput.duration}
          onChange={(event) =>
            onChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default Userinput;
