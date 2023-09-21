import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup , LayersControl} from 'react-leaflet';
import * as turf from '@turf/turf'; 
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend as BarLegend } from 'recharts';
import './analytics.css'; 
import 'leaflet/dist/leaflet.css';

const dataPie = [
  { name: 'Coconut', value: 400 },
  { name: 'Palm', value: 300 },
  { name: 'Lemon', value: 300 },
  { name: 'Gurjan', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const sampleTreeData = [
  {
    id: 1,
    species: 'Oak',
    locations: [
      { lat: 20.5937, lng: 78.9629 }, 
      { lat: 19.0760, lng: 72.8777 }, 
      { lat: 12.9716, lng: 77.5946 }, 
    ],
  },
  {
    id: 2,
    species: 'Maple',
    locations: [
      { lat: 28.6139, lng: 77.2090 }, 
      { lat: 13.0827, lng: 80.2707 }, 
      { lat: 26.9124, lng: 75.7873 }, 
    ],
  },
  {
    id: 3,
    species: 'Banyan',
    locations: [
      { lat: 18.5204, lng: 73.8567 }, // Pune, Maharashtra
      { lat: 13.0827, lng: 80.2707 }, // Chennai, Tamil Nadu
      { lat: 22.5726, lng: 88.3639 }, // Kolkata, West Bengal
    ],
  },
  {
    id: 4,
    species: 'Neem',
    locations: [
      { lat: 17.3850, lng: 78.4867 }, // Hyderabad, Telangana
      { lat: 12.9716, lng: 77.5946 }, // Bangalore, Karnataka
      { lat: 19.0760, lng: 72.8777 }, // Mumbai, Maharashtra
    ],
  },
  {
    id: 5,
    species: 'Pine',
    locations: [
      { lat: 30.7333, lng: 76.7794 }, // Chandigarh, Punjab
      { lat: 28.6139, lng: 77.2090 }, // Delhi
      { lat: 25.276987, lng: 82.991287 }, // Varanasi, Uttar Pradesh
    ],
  },
];

const dataBar = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
  { name: 'C', value: 30 },
  { name: 'D', value: 25 },
  { name: 'E', value: 50 },
  { name: 'F', value: 45 },
  { name: 'G', value: 15 }
];

// GeoJSON data for India's borders
const indiaGeoJSON = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [68.111378, 7.965534],
        [97.415008, 8.900373],
        [98.776142, 37.220678],
        [68.111378, 37.220678],
        [68.111378, 7.965534],
      ],
    ],
  },
};

const MapWithSearch = () => {
  const [filteredTrees, setFilteredTrees] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredTrees = sampleTreeData.filter((tree) =>
      tree.species.toLowerCase().includes(searchTerm) &&
      tree.locations.some((location) =>
        turf.booleanPointInPolygon([location.lng, location.lat], indiaGeoJSON.geometry)
      )
    );
    setFilteredTrees(filteredTrees);
  };

  return (
    <div className="map-container">
      <input
        type="text"
        placeholder="Search for a tree species"
        onChange={handleSearch}
        className="search-input"
      />

      <MapContainer
        center={[20.5937, 78.9629]} 
        zoom={5}
        style={{ height: '500px', width: '100%' }}
        className="leaflet-map"
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Street Map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite Imagery">
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Dark Map">
            <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Map">
            <TileLayer url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
        </LayersControl>

        {filteredTrees.map((tree) =>
          tree.locations.map((location, index) => (
            <Circle
              key={index}
              center={[location.lat, location.lng]}
              radius={20000} 
              pathOptions={{ color: 'blue' }} 
            >
              <Popup>
                Tree Species: {tree.species}
                <br />
                Location: {index + 1}
                <br />
                Latitude: {location.lat}
                <br />
                Longitude: {location.lng}
              </Popup>
            </Circle>
          ))
        )}
      </MapContainer>
    </div>
  );
};

const App = () => (
  <div className="app-container">
    <div className="chart-container">
      <div className="chart">
        <PieChart width={400} height={300}>
          <text x={155} y={150} fill="black" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold">
            Tree Distribution
          </text>
          <Pie
            dataKey="value"
            data={dataPie}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            label={renderCustomizedLabel}
          >
            {dataPie.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
        <BarChart width={400} height={250} data={dataBar}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
          <BarLegend />
        </BarChart>
      </div>
    </div>
    <MapWithSearch />
  </div>
);

export default App;
