import "./Contributors.css";
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {rows} from '../../../ChartDataTest';
import {columns} from '../../../ChartDataTest'


export default function Contributors ()
{
    return (
        <div className="ContributorsPart" style={{ height: 400, width: '50%', margin:'30px auto' }}>
            <h1 style={{textAlign:"center"}}>Contributors</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />

        </div>
    )
}