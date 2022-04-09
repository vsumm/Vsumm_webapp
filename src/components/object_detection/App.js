import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Fraction() {
  const columnDefs= [
    { headerName: "CAMERA_1", field: "cam1" },
    { headerName: "CAMERA_2", field: "cam2" }, 
    {headerName: "DATE",field: "date",},

    ]
  // const rowData= [
  //   { name: "Rahul", age: 19, phoneNumber: 9876543210, birthYear:2001}, 
  //   { name: "David", age: 17, phoneNumber: 9827654310,birthYear:2003}, 
  //   { name: "Dan", age: 25, phoneNumber: 9765438210,birthYear:1995 }]

const defaultColDef={
  sortable:true,
  editable:true,
  flex:1,filter:true,
  floatingFilter:true
}

const onGridReady=(params)=>{
  console.log("grid is ready")
  fetch("https://vsumm.github.io/jsonapi/yolo_freezer.json").then(resp=>resp.json())
  .then(resp=>{console.log(resp)
    params.api.applyTransaction({add:resp})})
}
  return (
    <div className="App">
      <h1 align="center">Human Activity/ Object Detection </h1>
      <h3>Camera details</h3>
      <div className="ag-theme-alpine" style={ {height: '400px'} }>
        <AgGridReact
            columnDefs={columnDefs}
            // rowData={rowData}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default Fraction;