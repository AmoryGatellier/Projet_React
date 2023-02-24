import React, { useState } from "react";
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { createContext } from 'react';
import BarChart from './BarChart'
import PieChart from "./PieChart";

export const contextDashBoard = createContext("");


const LineChart = () => {
    const [label, setLabel] = useState(["January", "February", "March", "April", "May", "June"]);

    const [data, setData] = useState({
        labels: label,
        datasets: [
            {
                label: "First dataset",
                backgroundColor: ['red', 'yellow', 'blue', 'purple', 'green', 'pink'],
                borderColor: "black",
                data: [10, 1, 30, 15, 25, 20],
            },
        ],
    });
    const valeurdata = data.datasets[0].data.slice();
    let valeurLabel;
    console.log(valeurLabel);
    let valeurDataInput;

    function majchart() {
        valeurLabel = document.querySelector("#label");
        valeurDataInput = document.querySelector("#valeur");
        let recupvaleurLabel = valeurLabel.value;
        let recupData = valeurDataInput.value
        let indexlabel = label.indexOf(recupvaleurLabel);
        valeurdata[indexlabel] = recupData;
        setData({ ...data, datasets: [{ ...data.datasets[0], data: valeurdata }] });
    }

    return (
        <>
            <h3>Mise à jour des valeurs</h3>
            <label htmlFor="label">Donnez un label:</label>
            <input id="label" type="text"></input>
            <label id="labelValeur" htmlFor="valeur">Donnez sa nouvelle valeur:</label>
            <input id="valeur" type="text"></input>
            <button type="button" onClick={majchart}>Valider</button>
            <div className="dashBord">
                <Line data={data} />
                <contextDashBoard.Provider value={{ label, data }}>
                    <BarChart />
                    <PieChart/>
                </contextDashBoard.Provider>
            </div>
        </>
    );
};

export default LineChart;