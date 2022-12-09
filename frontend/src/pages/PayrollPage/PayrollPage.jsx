import EmployeePayroll from "../../components/Payroll/EmployeePayroll";
import PayrollTable from "../../components/PayrollTable/PayrollTable";
import DisplayPastPayroll from "../../components/DisplayPastPayroll/DisplayPastPayroll";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import React, { useState, useEffect } from "react";

const PayrollPage = (props) => {
  const [user, token] = useAuth();
  const [payroll, setPayroll] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchPayroll();
    fetchEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPayroll = async () => {
    try {
      const response = await axios.get("http://localhost:8000/payroll/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPayroll(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/auth/employees/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user.is_manager ? (
        <div>
          <PayrollTable employees={employees} token={token} />
          <DisplayPastPayroll payroll={payroll} />
        </div>
      ) : (
        <EmployeePayroll />
      )}
    </div>
  );
};

export default PayrollPage;
