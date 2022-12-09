import React from "react";
import PayrollTable from "../PayrollTable/PayrollTable";

const ManagerPayroll = (props) => {
  const { employees, token } = props;

  return (
    <div>
      <PayrollTable employees={employees} token={token} />
    </div>
  );
};

export default ManagerPayroll;
