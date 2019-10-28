import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             statsData:props.statsData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        graphTitle: ""
    }

            render() {
                return (
                    <div style={{minHeight: '300px', width: '1000px'}}>
                        {/* The line below is hard coded to say we're are comparing the Wizards and Rockets. Need to change it so it dynamically updates depending on which teams the user selects. */}
                        {/* <h2>{this.datasets.labels[0]} and {this.datasets.labels[1]} Comparisons</h2> */}
                        {/* <h2>Team Comparisons</h2> */}
                        <Line
                            data={this.state.statsData}
                            width={50}
                            height={50}
                            options={{
                                title: {
                                    display: this.props.displayTitle,
                                    text: this.props.graphTitle,
                                    fontSize: 25,
                                    fontColor: "#FFFFFF"
                                },
                                elements: {
                                    point: {
                                        radius: 0
                                    }
                                },
                                legend: {
                                    display: this.props.displayLegend,
                                    labels: {
                                        fontColor: '#FFFFFF',
                                        fontSize: 20
                                    }
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                },
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                );
            }
        }

        export default Stats;
