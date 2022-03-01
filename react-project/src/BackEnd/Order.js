import React from 'react';
import useGet from '../Hook/useGet';

const Order = () => {

    const [isi] = useGet('/order');


    let no = 1;

    return (
        <div>
            <div className="row">
                <div>
                    <h2>Data Order</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div></div>
            </div>
            <div className="row">
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th><h6>No.</h6></th>
                                <th><h6>Pelanggan</h6></th>
                                <th><h6>Tgl. Order</h6></th>
                                <th><h6>Total</h6></th>
                                <th><h6>Bayar</h6></th>
                                <th><h6>Kembali</h6></th>
                                <th><h6>Status</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            {isi.map((val,index) => (
                                <tr key={index}>
                                    <td>{no++}</td>
                                    <td>{val.pelanggan}</td>
                                    <td>{val.tglorder}</td>
                                    <td>{val.total}</td>
                                    <td>{val.bayar}</td>
                                    <td>{val.kembali}</td>
                                    <td>
                                        {
                                            val.status === 0 ? (
                                                <button className='btn btn-primary'>Bayar</button>
                                            ) : (
                                                <h5>Lunas</h5>
                                            )
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Order;
