import React from 'react';
import { Bar } from 'react-chartjs-2';

class Stats extends React.Component {
    data = {
        labels: ['Los Angeles Lakers', 'Houston Rockets'],
        datasets: [
            {
                label: 'Team Compare',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
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