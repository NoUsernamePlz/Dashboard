import { color } from "@mui/system"
import Gaugechartp from "../gaugechart/gaugechart"
import Recentactivity from "../recentactivity/recentactivity"
// import Gaugechart from "../gaugechart/gaugechart"
import "./rightprofile.css"

function Rightprofile() {
  return (
    <div className="rightprofile">
      {/* <div className="rightprofilecontainer">
            <div className="Profilewrapper">
            <img src="/img/banner.jpg" alt="" className="profilebanner" />
            </div>
            <img src="/img/pp1.jpg" alt="" className="profilepicright"  />
            <div className="filldiv">
              .
            </div>
            <span className="pname">
              Jennifer Bennett
            </span>
            <span className="poccupation">
             Product Designer
            </span>
            

            <div className="pinfo">
             <div className="products">
              Products
             </div>
             <div className="followers">
              Followers
             </div>

            </div>
        </div> */}

      <div className="userInfo">
        <div className="ppwraper">
          <img src="/img/banner.jpg" alt="" className="profilebanner" />
          <img src="/img/pp1.jpg" alt="" className="profilepicright" />
        </div>
        <div className="filldiv">
          .
        </div>
        <div className="ppinfo">

          <div className="username">
            Jennifer Bennett
          </div>
          <div className="userjob">
            Product Designer
          </div>

          <div className="pinfobase">
            <div className="pproduct">
             <div className="pnum">
              1,269
             </div>
             <div className="pfollowers"> 5.2k</div>
            </div>
            <div className="pfollower">
            <div className="pproducts">
              Products
             </div>
             <div className="pfollowers">Followers</div>
            </div>
           
          </div>
        </div>


      </div>
      <div className="userEarning">
        <div className="earningsp">Earnings</div>
        <div className="progresschart">
        <Gaugechartp/>
        </div>
        
        <div className="earningnum">
           $26,256
           <div className="etext">
            Earning this Month
           </div>
        </div>
        <div className="otherinfoE">
        <div className="epercentage">
          +2.65%
        </div>
        <div  className="textE">
          From previous period
        </div>
        </div>
        

      </div>
      <div className="recentActivity">
        Recent Activity
        <Recentactivity/>
      </div>


    </div>
  )
}

export default Rightprofile