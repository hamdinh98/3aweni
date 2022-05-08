import * as React from "react";

export const ChartDataEXample = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export const columns = [
    { field: 'id', headerName: '', width: 110, renderCell:(params)=>{
            return(
                <div>
                    {params.row.id}
                </div>
            )}},

    { field: 'UserName', headerName: 'User', width: 200, renderCell:(params)=>{
            return(
                <div>
                    <img src={params.row.Avatar} alt="" className="WidgetLgImage"/>
                    {params.row.UserName}
                </div>
            )}
    },
    {
        field: 'Donated', headerName: 'Donated amount', type: 'number', width: 150,renderCell:(params)=>{
            return(
                <div>
                    {params.row.Donated}
                </div>
            )}
    },
];

 export const rows = [
    { id: 1, UserName: 'Snow', Avatar: '/assets/img/logo/3aweni.png', Donated: 250 },
    { id: 2, UserName: 'Lannister', Avatar: '/assets/img/logo/3aweni.png', Donated: 130 },
    { id: 3, UserName: 'FF.Gamer', Avatar: '/assets/img/logo/3aweni.png', Donated: 95 },
    { id: 4, UserName: 'Stark', Avatar: '/assets/img/logo/3aweni.png', Donated: 25 },
    { id: 5, UserName: 'TunisiaBest', Avatar: '/assets/img/logo/3aweni.png', Donated: 40 },
    { id: 6, UserName: 'Melisandre', Avatar:'/assets/img/logo/3aweni.png' , Donated: 150 },
    { id: 7, UserName: 'Clifford', Avatar: '/assets/img/logo/3aweni.png', Donated: 44 },
    { id: 8, UserName: 'Frances', Avatar: '/assets/img/logo/3aweni.png', Donated: 36 },
    { id: 9, UserName: 'Roxie', Avatar: '/assets/img/logo/3aweni.png', Donated: 65 },
];