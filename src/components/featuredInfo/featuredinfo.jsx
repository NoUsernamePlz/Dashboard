import "./feacturedinfo.css";
import React from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';


function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredinfoItem">
                <div className="iconcontainer">
                <DonutSmallIcon className="featuredIconb"/>  </div>
                <div className="featuredboxleft">
                <span className="featuredTitle">Revenue</span> 
                <div className="featuredMoneyContainer">
                    <div className="featuredMoney">
                        $2,415
                    </div>
                    <div className="featuredMoneyRate positive">
                        +2.65%
                    </div></div>
                </div>
                
            </div>


            <div className="featuredinfoItem">
                <div className="iconcontainer">
                <LocalMallIcon className="featuredIconb"/></div>
                <div className="featuredboxleft">
                <span className="featuredTitle">Orders</span> 
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        5,643
                    </span>
                    <span className="featuredMoneyRate negative">
                        -0.82%
                    </span></div>
                </div>
                
            </div>


            <div className="featuredinfoItem">
                <div className="iconcontainer">
                <PeopleAltIcon className="featuredIconb"/></div>
                <div className="featuredboxleft">
                <span className="featuredTitle">Customers</span> 
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                    42,254
                    </span>
                    <span className="featuredMoneyRate negative">
                    -1.04%
                    </span></div>
                </div>
                
            </div> 

                                 
        </div>
    )
}

export default Featuredinfo