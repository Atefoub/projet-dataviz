import React, { useEffect, useState } from "react";

interface Tournage {
  nom_tournage: string;
  adresse_lieu: string;
  arrondissement?: string;
  annee_tournage?: string;
}

const Analyse: React.FC = () => {
  const [data, setData] = useState<Tournage[]>([]);

  useEffect(() => {
    fetch(
      "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records"
    )
      .then((res) => res.json())
      .then((json) => setData(json.results));
  }, []);

  return (
    <div>
      <h1>Analyse des lieux de tournage 🎥</h1>
      <ul>
        {data.slice(0, 15).map((item, index) => (
          <li key={index}>
            <strong>{item.nom_tournage}</strong> – {item.adresse_lieu} (
            {item.arrondissement})
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default Analyse;

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <h2 className="text-xl font-semibold text-center mb-4">
      Nombre de tournages par année
    </h2>
  </div>
</div>;

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "2016",
    tournage: 2660,
  },
  {
    name: "2017",
    tournage: 1743,
  },
  {
    name: "2018",
    tournage: 1579,
  },
  {
    name: "2019",
    tournage: 1760,
  },
  {
    name: "2020",
    tournage: 1177,
  },
  {
    name: "2021",
    tournage: 1847,
  },
  {
    name: "2022",
    tournage: 1499,
  },
  {
    name: "2023",
    tournage: 1478,
  },
  {
    name: "2024",
    tournage: 1017,
  },
];

// #endregion
const LineChartExample = ({ isAnimationActive = true }) => (
  <LineChart
    style={{
      width: "100%",
      maxWidth: "600px",
      maxHeight: "70vh",
      aspectRatio: 1.618,
    }}
    responsive
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="tournage"
      stroke="#8884d8"
      isAnimationActive={isAnimationActive}
      strokeWidth={4}
    />
  </LineChart>
);

export default LineChartExample;
