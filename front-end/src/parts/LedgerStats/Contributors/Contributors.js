import "./Contributors.css";
import * as React from 'react'
import { DataGrid,GridToolbar } from '@mui/x-data-grid';

import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'

//import {rows} from '../../../ChartDataTest';
//import {columns} from '../../../ChartDataTest'
import {getBackers} from "../../../redux/actions/LedgerStatsAction";



export default function Contributors ()
{
    const dispatch = useDispatch();
    const backers = useSelector(state=>state.LedgerStats)
    const [s,setS]= useState(false)
    useEffect(()=>{
        dispatch(getBackers())
        //console.log(backers.backers[0])
        setS(!s);
    },[])

    console.log(backers)

    const columns = [

        {
            field: "Backer.name",
            headerName: "User",
            width: 200,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div>
                        <img src="/assets/img/logo/3aweni.png" alt="" className="WidgetLgImage"/>
                        {params.row.Backer.name}
                    </div>

                );
            }
        },

        {
            field: "Money",
            headerName: "Donated amount",
            width: 150,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div>
                        {params.row.Money}
                    </div>

                );
            }
        },

        {
            field: "createdAt",
            headerName: "Date",
            width: 100,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div>
                        {new Date(params.row.createdAt).toISOString().slice(0,10)}
                    </div>

                );
            }
        },

    ];


    return (
        <div className="ContributorsPart" style={{ height: 400, width: '50%', margin:'30px auto' }}>
            <h1 style={{textAlign:"center"}}>Contributors</h1>


            <DataGrid
                components={{Toolbar: GridToolbar}}
                rows={backers.backers}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />

        </div>
    )
}