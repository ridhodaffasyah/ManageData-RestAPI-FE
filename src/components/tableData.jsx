import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Search from '../components/search';

function TableData() {

    const [data, setData] = useState([]);
    const [order, setOrder] = useState('asc');
    const [search, setSearch] = useState('');

    const getData = async () => {
        await axios.get('https://mitramas-test.herokuapp.com/customers', {
            headers: {
                Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU0NDk3NDQ2LCJleHAiOjE2NTQ1MDEwNDYsIm5iZiI6MTY1NDQ5NzQ0NiwianRpIjoiRldYY0Y2VkNoQlN6cGZXZSIsInN1YiI6MTU2LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.tBV9LBp-UHInN6xpR__csKyWa7Bg6YsbNqWHjpdkUC0'
            }
        }).then((response) => {
            setData(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const sorting = (col) => {
        if (order === 'asc') {
            const sorted = [...data].sort((a, b) =>
                a[col] > b[col] ? 1 : -1,
            )
            setData(sorted)
            setOrder('dsc')
        }
        if (order === 'dsc') {
            const sorted = [...data].sort((a, b) =>
                a[col] < b[col] ? 1 : -1,
            )
            setData(sorted)
            setOrder('asc')
        }
        return col
    }

    const querySearch = React.useMemo(() => {
        let query = data

        if (search) {
            query = query.filter((el) =>
                el.name.toLowerCase().includes(search.toLowerCase()) ||
                el.job_title.toLowerCase().includes(search.toLowerCase()) || 
                el.address.toLowerCase().includes(search.toLowerCase()) ||
                el.phone_number.toLowerCase().includes(search.toLowerCase()) ||
                el.country.toLowerCase().includes(search.toLowerCase())
            )
        }
        console.log(query)
        console.log(search)
        return query
    }, [data, search])


    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='tableData'>
            <Search onSearch={(value) => setSearch(value)} />
            <div className='top'>
                <h1>Data Customers</h1>
                <div className="tools">
                    <a href="/create" className="create" type='submit'>Create Data</a>
                    <a href="/update" className="update" type='submit'>Update Data</a>
                    <a href="/delete" className="delete" type='submit'>Delete Data</a>
                </div>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th className='name' onClick={() => sorting('name')}>Name ↑</th>
                        <th className='job'>Job Title</th>
                        <th>Phone Number</th>
                        <th className='address'>Address</th>
                        <th className='country'>Country</th>
                        <th className='status' onClick={() => sorting('status')}>Status ↑</th>
                    </tr>
                </thead>
                <tbody>
                    {querySearch.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.job_title}</td>
                                <td>{item.phone_number}</td>
                                <td>{item.address}</td>
                                <td>{item.country}</td>
                                <td>{item.status === true ? "Active" : "Inactive"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>    
        </div>
    );
}

export default TableData;