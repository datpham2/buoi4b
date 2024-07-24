import axios from 'axios'
import { Container, Table } from 'reactstrap';
import React, { useEffect, useState } from 'react'

export default function API1() {
    const [data, setData] = useState([])
    function fetchAPI() {
        axios.get('https://66a08cbc7053166bcabbc9a5.mockapi.io/student')
            .then(function (response) {
                setData(response.data)
            })
    }
    useEffect(() => {
        fetchAPI()
    }, [])
    return (
        <div>
            <Container>
                <Table
                >
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            data.map((item, index) => (
                                <tr key={ index }>
                                    <th>{ item.id }</th>
                                    <td>{ item.name }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
