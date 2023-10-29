"use client";
import { useState } from "react"
import { Grid } from '@mui/material';

export interface SampleStateProps {
    defaultYesNo:boolean
}

export default (props: SampleStateProps) => {
    const [yesNo, setYesNo] = useState<boolean>(props.defaultYesNo)
    return (
        <form>
            <Grid container display="flex" justifyContent="center" alignItems="center">
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                        <span>今夜は{yesNo ? "YES" :"NO"}</span>
                        <input type="checkbox" checked={yesNo} onChange={() => {
                            setYesNo(!yesNo)
                        }}/>
                </Grid>
            </Grid>
        </form>
    )
}