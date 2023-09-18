import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import LocationIcon from '../../pics/TreeIcon.png';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend as BarLegend } from 'recharts';
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
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const customIcon = L.icon({
  iconUrl: LocationIcon,
  iconSize: [50, 50],
  iconAnchor: [12.5, 12.5],
});

const trees = [
  { type: 'Coconut', lat: 12.9716, lon: 77.5946 },
  { type: 'Palm', lat: 19.0760, lon: 72.8777 },
  { type: 'Gurjan', lat: 26.9124, lon: 75.7873 },
];

const dataBar = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
  { name: 'C', value: 30 },
  { name: 'D', value: 25 },
  { name: 'E', value: 50 },
  { name: 'F', value: 45 }
  // Add more data points as needed
];

const CombinedChart = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection:'column' }}>
    <div>
    <div style={{ flex: 1, marginRight: '20px' }}>
      <PieChart width={400} height={400}>
        <text x={155} y={200} fill="black" textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="bold">
          Tree Distribution
        </text>
        <Pie
          dataKey="value"
          data={dataPie}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          label={renderCustomizedLabel}
        >
          {dataPie.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
      <BarChart width={400} height={200} data={dataBar}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
        <BarLegend />
      </BarChart>
    </div>
    <div style={{ flex: 1 }}>
      <MapContainer center={[20.5937, 78.9629]} zoom={4.5} style={{ height: '700px', width: '650px' }}>
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
        {trees.map((tree, index) => (
          <Marker key={index} position={[tree.lat, tree.lon]} icon={customIcon}>
            <Popup>
              Tree : {tree.type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  </div>
  </div>
);

export default CombinedChart;