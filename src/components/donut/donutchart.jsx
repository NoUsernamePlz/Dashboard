
import Chart from 'react-apexcharts'
function Donutchart()
{
    return (
        <>
        <Chart width="100%" height="100%"
        type="donut"
        series={[45,65,34]}
        options={{
            labels:["Completed","Pending","Cancel"],

            legend:{
             position:'bottom',
            },
           
            plotOptions:{
                pie:{
                    donut:{
                        labels:{
                            show:true,
                           
                            
                        }
                    }
                }
            },
            dataLabels:{
                enabled:false,
            },
            fill:{
                width:20,
            }

        }} ></Chart>
        </>
    )
}
export default Donutchart;
