
import React, { Component } from "react";
import Chart from "react-apexcharts";

class Areachart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-area",
          stroke: {
            curve: 'smooth',            
fill: {
    type: 'gradient',  
        opacity: 0.2
      
  }
          }
        },


        xaxis: {
          categories: ['P1','P2','P3','P4','P5','P6','P7','P8']
        },

        toolbar:{
           enabled:false,
        }
        
      },
      chart: {
        redrawOnParentResize: true
    },
      series: [
        {
          name: "Current",
          data: [30, 40, 45, 50, 39, 110, 70, 91]
        },{
            name: "Previous",
            data: [10, 40, 35, 80, 49, 60, 78, 91] 
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row"></div>
        <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              min-width="30%"
              min-height="20%"
              
            />
          </div>
        </div>
      
    );
  }
}

export default Areachart;