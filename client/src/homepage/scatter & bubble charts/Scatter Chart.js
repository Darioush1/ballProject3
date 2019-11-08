import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import api from '../../utils/API';
import axios from "axios";
import { string, number } from 'prop-types';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 

// console.log(allPlayers);
class ScatterChart extends Component {
    
    constructor(){
        super();
        this.state = {
             nbastats: [`Player`, `Year`, `Season`, `Team`, `GP`, `Min`, `PPG`, `Oreb`, `Dreb`, `Reb`, `Ast`, `Stl`, `Blk`, `TO`, `PF`, `FGM`, `FGA`, `FG%`, `3PTM`, `3PTA`, `3PT%`, `FTM`, `FTA`, `FT%`
            ]
                            
        };
        
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/player1/').then(response => response.json())
            .then(data => { 
                this.setState({
                    nbastats: data
                })
            })  
    }

// console.log(allPlayers);
    render() {
        
        let nbadata = this.state.nbastats;

        console.log(nbadata[0].Player, nbadata[0].Year)

        const options = {
            theme: "dark2",
            animationEnabled: true,
            zoomEnabled: true,
            title:{
                text: "NBA Player Rebounding"
            },
            axisX: {
                title:"Dreb",
                suffix: "",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY:{
                title: "Oreb",
                includeZero: false,
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            data: [{
                type: "scatter",
                markerSize: 15,
                
                dataPoints: [
                    { x:  nbadata[0].Oreb, y: nbadata[0].Dreb, toolTipContent: nbadata[0].Player},
                    { x:  nbadata[10].Oreb, y: nbadata[10].Dreb, toolTipContent: nbadata[10].Player},
                    { x:  nbadata[17].Oreb, y: nbadata[17].Dreb, toolTipContent: nbadata[17].Player},
                    { x:  nbadata[20].Oreb, y: nbadata[20].Dreb, toolTipContent: nbadata[20].Player},



                    
                
                ]
            }]
        }
        
        return (
            <div>
                <CanvasJSChart options = {options} 
                     onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
            );
        }
    // componentDidMount(){
    //  var chart = this.chart;
    //  fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
    //  .then(function(response) {
    //      return response.json();
    //  })
    //  .then(function(data) {
    //      for (var i = 0; i < data.length; i++) {
    //          dataPoints.push({
    //              x: new Date(data[i].x),
    //              y: data[i].y
    //          });
    //      }
    //      chart.render();
    //  });
    // }
}

export default ScatterChart;