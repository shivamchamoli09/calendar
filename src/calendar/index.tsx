import * as React from 'react';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getListOfYears, MONTHS } from "./constants";

export interface CalendarPropsInterface {
    type: 'date' | 'month' | 'year';
    onChange?: (value: string) => void;
}


export default function Calendar(props: CalendarPropsInterface) {
    const [calendar, setCalendar] = useState("");

    function handleChange(event: any) {
        setCalendar(event.target.value);
        if (props?.onChange)
            props?.onChange(event.target.value);
    }
    return (
        <>
            {props?.type === 'date' && (
                <TextField fullWidth type="date" value={calendar} onChange={handleChange} />
            )}
            {
                props?.type === 'month' && (
                    <FormControl fullWidth>
                        <InputLabel id="month_select">Month</InputLabel>
                        <Select
                            fullWidth
                            labelId="month_select"
                            id="month_select"
                            value={calendar}
                            label="Month"
                            onChange={handleChange}
                        >
                            {MONTHS.map((month: string, i: number) => (
                                <MenuItem key={i} value={month}>{month}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )
            }

            {
                props?.type === 'year' && (
                    <FormControl fullWidth>
                        <InputLabel id="year_select">Year</InputLabel>
                        <Select
                            fullWidth
                            labelId="year_select"
                            id="year_select"
                            value={calendar}
                            label="Year"
                            onChange={handleChange}
                        >
                            {getListOfYears().map((year: string, i: number) => (
                                <MenuItem key={i} value={year}>{year}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )
            }
        </>
    )
}