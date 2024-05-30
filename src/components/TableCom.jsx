import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { tableData } from '../data/data';
import React from 'react';

const TableCom = () => {
  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.price);
  };

  //  // Custom template for rendering two buttons in the last column
  const actionBodyTemplate = (rowData) => {
    return (
      <div className='flex items-center py-2 space-x-4'>
        <button onClick={() => handleEditClick(rowData)} className="bg-[#F4DBC7] text-[#CC6727] font-semibold hover:text-white p-2 rounded-lg">
        Add Liquidity
        </button>
        <button onClick={() => handleDeleteClick(rowData)} className="bg-[#C65711] text-white font-bold py-2 px-4 rounded">
        Trade
        </button>
      </div>
    );
  };

  // Function to handle edit button click
  const handleEditClick = (rowData) => {
    alert(`Edit button clicked for ${rowData.name}`);
  };

  // Function to handle delete button click
  const handleDeleteClick = (rowData) => {
    alert(`Delete button clicked for ${rowData.name}`);
  };

  return (
    <div className="card bg-white rounded-3xl pb-6 overflow-x-auto">
      <DataTable
        value={tableData}
        paginator
        rows={5}
        sortField="price"
        sortOrder={-1}
        tableStyle={{ minWidth: '50rem', borderRadius: "12px" }}
        responsiveLayout="scroll"
      >
        <Column
          field="name"
          header="Name"
          sortable
          style={{ width: '16%', padding: "12px" }}
          headerClassName="yellow-header yellow-header1"
        />
        <Column
          field="liquidity"
          header="Liquidity"
          sortable
          style={{ width: '16%' }}
          headerClassName="yellow-header"
        />
        <Column
          field="volume"
          header="Volume"
          body={priceBodyTemplate}
          sortable
          style={{ width: '16%' }}
          headerClassName="yellow-header"
        />
        <Column
          field="price"
          header="Price"
          sortable
          style={{ width: '16%' }}
          headerClassName="yellow-header"
        />
        <Column
          field="pricechange"
          header="Price Change"
          sortable
          style={{ width: '16%' }}
          headerClassName="yellow-header"
        />
         <Column
          field="pricechange"
          header="Price Change"
          sortable
          style={{ width: '20%' }}
          headerClassName="yellow-header yellow-header5"
          body={actionBodyTemplate} 
        />
      </DataTable>
    </div>
  );
};

export default TableCom;
