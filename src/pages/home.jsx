import React from 'react'
import Areachart from '../components/areachart/areachart'
import CircleIcon from '@mui/icons-material/Circle';

import Charts from '../components/chart/charts'
import Donutchart from '../components/donut/donutchart'
// import Charts from '../components/chart/charts'
import Featuredinfo from '../components/featuredInfo/featuredinfo'
import Rightprofile from '../components/rightprofile/rightprofile'

import "./home.css"
import { fontSize, fontWeight } from '@mui/system';
import DonutchartT from '../components/gaugechart/gaugechart';
import Prdoductinfo from '../components/productinfo/pdoductinfo';
import Overview from '../components/overview/overview';
// import Donut from '../components/test.jsx/test';
import Navbar from '../components/navbar/navbar';


function Home() {
  return (
    < div className='home'>
      <Navbar />
        <div className="Hcontainer">
          <div className="homeleft">
          <Featuredinfo/>
          <div className="infocontainer">

            <div className="infocontainerL">
              <Overview/>
            </div>

            <div className="infocontainerR">
            <Charts/>
            </div>
            
          </div>
          <div className="bottominfo">
            <div className="areachatsection">
              <span className="areachartlabel">
                User Activity<br></br>
                </span>
                <span style={{color: "#555"}}>This Month</span><br></br>
                
                16,432
                <div className="areachart">
                <Areachart/>
                  </div>  
             
            </div>
            <div className="donutchartsection">
            <div className="donutchartlabel">
               Other Activities
                </div>
                <div className="donutchart">
                <Donutchart/>
                </div>
                
            {/* <Donutchart/> */}
            
        
            </div>
            <div className="productinfosection">
              <Prdoductinfo/>
             
            </div>
          </div>
          

          </div>

          <div className="homeright">
          
          <Rightprofile/>
          </div>

            {/* <div className="hcontainert">
            <Featuredinfo/>
         <Rightprofile/>  
            </div>
        <div className="hcontainerb">
        <Charts/></div>
         </div> */}
    </div>
    </div>
  )
}

export default Home