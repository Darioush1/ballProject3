import React from 'react';
import { Bar } from 'react-chartjs-2';

class Stats extends React.Component {
    data = {
        labels: ['Los Angeles Lakers', 'Houston Rockets'],
        datasets: [
            {
                label: 'Team Compare',
                backgroundColor: '#FFC200',
                borderColor: 'azure',
                borderWidth: 1,
                hoverBackgroundColor: '#51FF0D',
                hoverBorderColor: 'azure',
                data: [65, 59, 33]
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = { sourceCode: '', name1: '', name2: '' };
    }

    render() {
        return (
            <div style={{minHeight: '300px', width: '500px'}}>
                <h2>{this.props.team1} and {this.props.team2} Comparisons</h2>
                <Bar
                    data={this.data}
                    width={50}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
}

export default Stats;
