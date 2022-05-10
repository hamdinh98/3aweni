import React,{Component, useState,useEffect} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:5000/getPayement/624b0ed9f6b79446ac5f3639"


});

class BackerList extends Component {


    state = {
        donations:[]
    }

constructor(){
    super();
    api.get('/').then(res => {
        console.log(res.data)
        this.setState({ donations: res.data})
    })
}

render() {
    return (
        <div className="mx-5 my-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Donate Amount</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.donations.map(donations => <tr>
                                        <td>SaifFF</td>
                                        <td>{donations.Money}</td>
                                        <td>{donations.createdAt}</td>
                                    </tr>)}
                   
                </tbody>
            </table>
        </div>

    )
                    }}


export default BackerList