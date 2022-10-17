function Result(props){
  return (
    <div className="result-table">
    <div className="ip-div">
      <p className="infotitle">IP ADDRESS</p>
      <p className="info">{props.ip}</p>
    </div>
    <div className="location-div">
      <p className="infotitle">LOCATION</p>
      <p className="info">{props.city},{props.region}</p>
      <p className="info">{props.postcode}</p>
    </div>
    <div className="time-div">
      <p className="infotitle">TIMEZONE</p>
      <p className="info">UTC{props.time}</p>
    </div>
    <div className="isp-div">
      <p className="infotitle">ISP</p>
      <p className="info">{props.isp}</p>
    </div>
    </div>
  )
}
export default Result