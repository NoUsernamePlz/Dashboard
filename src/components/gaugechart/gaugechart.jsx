

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Gaugechartp() {
  return (
    <div  className="progress">
<div style={{ width: 100, height: 100 }}>
  <CircularProgressbar value={66} 
  text={"66%"}
  strokeWidth={5} />
</div>

      

</div>
  )
}

export default Gaugechartp




