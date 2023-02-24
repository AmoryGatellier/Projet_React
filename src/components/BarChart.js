import React, { useState, useContext } from 'react';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2'
import {contextDashBoard} from './LineChart'

const BarChart = () => {
    const value = useContext(contextDashBoard);
        
    const valeurdata = value.data.datasets[0].data;
    
    const labels = value.label;
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Second dataset",
          backgroundColor: ['red','yellow','blue','purple','green','pink'],
          borderColor: "black",
          data: valeurdata,
        },
      ],
    };
    return (
      <>
      
      <div>
        <Bar data={data} />
      </div>
      </>
    );

   
};

export default BarChart;