import  { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { tableData } from '../data/data';

export default function TableCom() {
    // const [products, setProducts] = useState([]);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    // useEffect(() => {
    //     ProductService.getProductsMini().then(data => setProducts(data));
    // }, []);

    return (
        <div className="card bg-white rounded-3xl pb-6">
            <DataTable  value={tableData}  paginator rows={5} sortField="price" sortOrder={-1} tableStyle={{ minWidth: '50rem', borderRadius:"12px",}}>
                <Column field="name" header="Name" sortable style={{ width: '20%', padding:"12px",}} headerClassName="yellow-header yellow-header1"></Column>
                <Column field="liquidity" header="Liquidity" sortable style={{ width: '20%', }} headerClassName="yellow-header"></Column> 
                <Column field="volume" header="Volume" body={priceBodyTemplate} sortable style={{ width: '20%', }} headerClassName="yellow-header"></Column>
                <Column field="price" header="Price" sortable style={{ width: '20%', }} headerClassName="yellow-header"></Column>
                <Column field="pricechange" header="Price Change" sortable style={{ width: '20%', }} headerClassName="yellow-header yellow-header5"></Column>
            </DataTable>
        </div>
    );
}
 