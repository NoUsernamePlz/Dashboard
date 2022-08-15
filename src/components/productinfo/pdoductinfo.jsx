import React from 'react';
import "./productinfo.css"

function Prdoductinfo() {
  return (
    <div>


<div className="product">
                <div className="productname">
                   
                   Product
                </div>
                <div className="quantity">

                  Quantity

                </div>
              </div>
          <div className="product">
                <div className="productname">
                   <div className="index">
                    #1
                   </div>
                   <div className="pname">
                    <span>PoloTshirts</span>
                    <span className="price">
                     <br/> $25.6
                    </span>
                   </div>
                </div>
                <div className="quantity">

                  34k

                </div>
              </div>


            


              <div className="product">
                <div className="productname">
                   <div className="index">
                    #2
                   </div>
                   <div className="pname">
                    <span>Men'sJacket</span>
                    <span className="price">
                     <br/> $55.6
                    </span>
                   </div>
                </div>
                <div className="quantity">

                  14k

                </div>
              </div>


              <div className="product">
                <div className="productname">
                   <div className="index">
                    #3
                   </div>
                   <div className="pname">
                    <span>BlueSweater</span>
                    <span className="price">
                     <br/> $105.6
                    </span>
                   </div>
                </div>
                <div className="quantity">

                  54k

                </div>
              </div>


             
    </div>
  )
}

export default Prdoductinfo