import * as React from 'react';
import { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function getListOfYears() {
    let years = [];
    const currentYear = new Date().getFullYear();
    for (let i = 1960; i <= currentYear; i++) {
        years.push(`${i}`);
    }
    return years;
}

function Calendar(props) {
    const [calendar, setCalendar] = useState("");
    function handleChange(event) {
        setCalendar(event.target.value);
        if (props === null || props === void 0 ? void 0 : props.onChange)
            props === null || props === void 0 ? void 0 : props.onChange(event.target.value);
    }
    return (React.createElement(React.Fragment, null,
        (props === null || props === void 0 ? void 0 : props.type) === 'date' && (React.createElement(TextField, { fullWidth: true, type: "date", value: calendar, onChange: handleChange })),
        (props === null || props === void 0 ? void 0 : props.type) === 'month' && (React.createElement(FormControl, { fullWidth: true },
            React.createElement(InputLabel, { id: "month_select" }, "Month"),
            React.createElement(Select, { fullWidth: true, labelId: "month_select", id: "month_select", value: calendar, label: "Month", onChange: handleChange }, MONTHS.map((month, i) => (React.createElement(MenuItem, { key: i, value: month }, month)))))),
        (props === null || props === void 0 ? void 0 : props.type) === 'year' && (React.createElement(FormControl, { fullWidth: true },
            React.createElement(InputLabel, { id: "year_select" }, "Year"),
            React.createElement(Select, { fullWidth: true, labelId: "year_select", id: "year_select", value: calendar, label: "Year", onChange: handleChange }, getListOfYears().map((year, i) => (React.createElement(MenuItem, { key: i, value: year }, year))))))));
}

export { Calendar as default };
