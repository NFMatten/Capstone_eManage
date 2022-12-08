import EmployeePayroll from "../../components/Payroll/EmployeePayroll";
import ManagerPayroll from "../../components/Payroll/ManagerPayroll";
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

  const addToPayroll = async (newEntry) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/payroll/",
        newEntry,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 201) fetchPayroll();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user.is_manager ? (
        <ManagerPayroll
          employees={employees}
          fetchPayroll={fetchPayroll}
          token={token}
        />
      ) : (
        <EmployeePayroll />
      )}
    </div>
  );
};

export default PayrollPage;
