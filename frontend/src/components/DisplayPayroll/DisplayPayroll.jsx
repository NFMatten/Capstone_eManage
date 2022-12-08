import DisplayEmployees from "../DisplayEmployees/DisplayEmployees";

const DisplayPayroll = (props) => {
  return (
    <div>
      <DisplayEmployees payroll={true} />
    </div>
  );
};

export default DisplayPayroll;
