import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {

    const [homes, setHomes] = useState([]);
    const [pagination, setPagination] = useState();
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/products?page=${page}&search=${search}`).then(res => {
            console.log(res)
            setHomes(res.data.data);
            setPagination(res.data);
        });

    }, [page,search])


    const handlePage = (p) => {
        if (p === '&laquo; Previous' || p === 'Next &raquo;') {
            setPage(prev => p === '&laquo; Previous' ? prev - 1 : prev + 1);
            return;
        }
        setPage(p);
    }

    var homeDetails = '';
    homeDetails = homes.map((item, index) => {
        return (
            <tr key={index}>
                <td style={{ width: '20%', wordBreak: 'break-all' }}>{item.type}</td>
                <td style={{ width: '25%', wordBreak: 'break-all' }}>{item.name}</td>
                <td style={{ width: '45%', wordBreak: 'break-all' }}>{item.description}</td>
                <td>${item.price}</td>
            </tr>
        )
    });

    const Filter = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className="container mt-5 p-3 mb-2">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0">
                        <div className="card-header bg-info">
                            <h4>Stuff List</h4>
                        </div>
                        <div className="card-body bg-info">
                            <input type="text" className="form-control mb-3 bg-dark border-0 float-end text-info" onChange={Filter} placeholder="Search"/>
                            <table className="table table-stiped">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="table-dark">
                                    {homeDetails}
                                </tbody>
                            </table>
                            {pagination?.links.length > 0 && (
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination d-flex justify-content-center gap-1">
                                        {pagination?.links.map((item, i) => (
                                            <li key={i} className={`page-item`}>
                                                <button onClick={() => handlePage(item.label)} style={{fontSize:'14px' ,width:'35px', height:'35px'}} className={`bg-info ${item.active ? 'bg-dark text-info' : 'text-dark' } rounded-circle border border-0`}>{`${item.label === '&laquo; Previous' ? '<' : item.label === 'Next &raquo;' ? '>' : item.label}`}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;