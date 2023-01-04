import React, { useState } from "react";
import { TableCell, TableRow, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";

const PayrollTableRow = (props) => {
  const { emp, token } = props;
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [hours, setHours] = useState("");
  const [tips, setTips] = useState("");
  /* eslint-disable no-unused-vars */
  const [salary, setSalary] = useState(emp.salary);
  const [userId, setUserId] = useState(emp.id);
  let totalPay;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newEntry = {
      period_start: start,
      period_end: end,
      salary: salary,
      hours_worked: hours,
      tips_received: tips,
      user_id: userId,
      total_before_taxes: totalPay,
    };
    console.log("Entry Added!", newEntry);
    await axios
      .post("http://52.87.162.151:8000/payroll/", newEntry, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(alert("Entry Added!"));
    window.location.reload();
  };

  function total(empSalary, hours, tips) {
    if (tips === "") {
      tips = 0;
    }
    if (hours > 80) {
      const extraHours = hours - 80;
      const overTimeRate = empSalary * 1.5;
      const overTimeTotal = extraHours * overTimeRate;
      totalPay = empSalary * 80 + overTimeTotal + parseFloat(tips);
      return "$" + totalPay.toFixed(2);
    } else {
      totalPay = empSalary * hours + parseFloat(tips);
      return "$" + totalPay.toFixed(2);
    }
  }

  return (
    <TableRow
      key={emp.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>
        {" "}
        <Typography textAlign="center">
          {emp.first_name} {emp.last_name}
        </Typography>
      </TableCell>
      <TableCell>
        <TextField
          id="period_start"
          placeholder="Start Date..."
          helperText="Start Date"
          type="date"
          size="small"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          data-test="start-date"
        />
      </TableCell>
      <TableCell>
        <TextField
          id="period_end"
          placeholder="End Date"
          helperText="End Date"
          type="date"
          size="small"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          data-test="end-date"
        />
      </TableCell>
      <TableCell>
        <Typography textAlign="center">${emp.salary}</Typography>
      </TableCell>
      <TableCell>
        <TextField
          id="hours"
          label="Hours Worked"
          placeholder="Hours Worked"
          size="small"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          data-test="hours-worked"
        />
      </TableCell>
      <TableCell>
        <TextField
          id="tips"
          label="Tips Received"
          placeholder="Tips Received"
          size="small"
          value={tips}
          onChange={(e) => {
            setTips(e.target.value);
          }}
          data-test="tips"
        />
      </TableCell>
      <TableCell>
        <Typography textAlign="center">
          {total(emp.salary, hours, tips)}*
        </Typography>
      </TableCell>
      <TableCell>
        <IconButton
          variant="contained"
          onClick={handleSubmit}
          type="submit"
          size="small"
          title="Save"
        >
          <SaveIcon style={{ color: "orange" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default PayrollTableRow;
