import "./overview.css"

function Overview() {
  return (
    <>
    Overview
    <div className="months">
        <div className="monfo">
            This Month
            <div className="monprice">
                $1,345
            </div>
        </div>
        <div className="smallinfo">
            +2%
        </div>

    </div>
    <div className="odersales">
        <div className="ordersO">
            <div className="Otext">
              Orders
            </div>
            <div className="Onum">
             7,654
            </div>

        </div>
        <div className="salesO">
            <div className="Stext">
             Sales 
            </div>
            <div className="Snum">
            16.01%
            </div>

        </div>
    </div>


    <div className="odersales">
        <div className="ordersO">
            <div className="Otext">
              Order Value
            </div>
            <div className="Onum">
             7,654
            </div>

        </div>
        <div className="salesO">
            <div className="Stext">
             Customers
            </div>
            <div className="Snum">
            18,145
            </div>

        </div>
    </div>


    <div className="odersales">
        <div className="ordersO">
            <div className="Otext">
              Income
            </div>
            <div className="Onum">
             $47,654
            </div>

        </div>
        <div className="salesO">
            <div className="Stext">
             Expenses
            </div>
            <div className="Snum">
            $36,345
            </div>

        </div>
    </div>


    

    </>
  )
}

export default Overview