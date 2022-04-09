import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import  RowGroupingModule  from 'ag-grid-community ' 
import Gridpopup from './App';
import '../../App.css'; 
function Grid() {
  const [gridApi,setGridApi]=useState()
  const columnDefs = [
    { headerName: "ID", field: "id",  checkboxSelection:true,headerCheckboxSelection:true,}, 
    { headerName: "Floor", field: "name",},
    { headerName: "Group", field: "email", },
    { headerName: "Camera", field: "body" },
    { headerName: "Button", field: "id" },
    
  ]  

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1, filter: true,
    floatingFilter: true, 
  }

  const onGridReady = (params) => {
    setGridApi(params)
    fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json())
      .then(resp => {
        params.api.applyTransaction({ add: resp }) //adding API data to grid
        params.api.paginationGoToPage(10)
        console.log(resp)
      })
     
  }
 const onPaginationChange=(pageSize)=>{
   gridApi.api.paginationSetPageSize(Number(pageSize))
 }
  return (
    <div className="App">
      <h1 align="center">Fraction Analytics Dashboard</h1>
      <h3>Video summarization details</h3>
      <select onChange={(e)=>onPaginationChange(e.target.value)}>
        <option value='24'>One day</option>
        <option value='48'>Two days</option>
        <option value='168'>one week </option>
        <option value='720'>One month</option>
      </select>
      <div className="ag-theme-alpine" style={{ height: '1180px'  }}>
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={24}
          // paginationAutoPageSize={true}
          >
        </AgGridReact>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <Gridpopup/>
      </div>
    </div>
  );
}

export default Grid;