import React, {useState} from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import ReactMapGl from 'react-map-gl'

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 22.8046,
  longitude: 86.2029,
  width: "100vw",
  height: "100vh",
  zoom: 12
  })
  return(
    <div>
      <ReactMapGl {...viewport} mapboxApiAccessToken={""} //add your mapbox token
        mapStyle="mapbox://styles/gauravtushar7/ckb3kfzj00za81imvvmpx5yc1"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      <div className="App">
        <PathfindingVisualizer />
      </div>
      </ReactMapGl>
    </div>
  )
}

export default App;