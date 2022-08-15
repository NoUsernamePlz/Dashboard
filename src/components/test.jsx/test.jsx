import Chart from 'react-apexcharts'
function DonutchartT()
{
    return (
        <>
        <Chart width="100%" height="100%"
        type="donut"
        series={[45,65,34]}
        options={{
            labels:["Completed","Pending","Cancel"],
            // colors:["#4d4dff","#66ff66","#ffff"],

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
export default DonutchartT;