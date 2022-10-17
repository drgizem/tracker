import { useState,useEffect } from "react"
import Result from "./Result"
import Map from "./Map"


function InputArea(){
  const [address,setAddress]=useState("")
  const [location,setLocation]=useState({})
  const apikey="at_iUDDwVbxGk8UIXyGEtyaFOy5Fmt8a"
  const url=`https://geo.ipify.org/api/v2/country,city?apiKey=${apikey}&ipAddress=${address}`

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(onSuccess,onError)
    }
    function onError(err){
      console.log(err)
    }
    function onSuccess(position){
      fetch(url)
      .then(response=>response.json())
      .then(result=>{
        setLocation(result)
        setAddress("")
    })
      }
  }, [])


  function onSearch(){
    fetch(url)
    .then(response=>response.json())
    .then(result=>{
      setLocation(result)
      setAddress("")
  })
    }
 

  return (<>
  <div className="inputarea">
    <input
    className="input"
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
    placeholder="Search for any IP address"
    name="IP"/>
    <button className="button" onClick={onSearch}><img src="/images/icon-arrow.svg" alt="arrowicon"/></button>
    </div>
    {location.ip !==undefined ? 
    <>
    <Result 
    ip={location.ip}
    city={location.location.city}
    region={location.location.region}
    postcode={location.location.postalcode}
    time={location.location.timezone}
    isp={location.isp}
    />
    <Map
    lat={location.location.lat.toFixed(3)}
    lng={location.location.lng.toFixed(3)} />
    </>: null}
    </>)
}

export default InputArea