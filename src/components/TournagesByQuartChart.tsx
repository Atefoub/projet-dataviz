import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 
// Import des composants de la librairie Recharts pour créer un graphique en ligne

import type { Tournage } from '../types/types'; 
// Import du type Tournage défini dans ton fichier de types (type-only import)

interface Props { 
  data: Tournage[]; // Définition des props : le composant reçoit un tableau de tournages
} 

// Fonction pour transformer les données
const getTournagesParAnnee = (tournages: Tournage[]) => { 
  const countMap = new Map<string, number>(); // Map pour compter le nombre de tournages par année

  tournages.forEach((t) => { // Parcourt chaque tournage
    if (t.annee_tournage) { // Vérifie que l’année existe
      const count = countMap.get(t.annee_tournage) || 0; // Récupère le compteur actuel ou 0
      countMap.set(t.annee_tournage, count + 1); // Incrémente le compteur pour cette année
    }
  });

  return Array.from(countMap.entries()) // Transforme la Map en tableau [année, count]
    .map(([annee, count]) => ({ annee, count })) // Convertit chaque entrée en objet { annee, count }
    .sort((a, b) => a.annee.localeCompare(b.annee)); // Trie par année croissante
}; 

export default function TournagesByQuartChart({ data }: Props) { 
  const chartData = getTournagesParAnnee(data); // Prépare les données pour le graphique

  return ( 
    <div style={{ marginBottom: '3rem' }}> 
      <h2>📈 Évolution du nombre de tournages par année</h2> 
      <ResponsiveContainer width="100%" height={400}> 
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}> 
          {/* Graphique en ligne avec marges autour */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" /> 
          <XAxis  
            dataKey="annee"  
            label={{ value: 'Année', position: 'insideBottom', offset: -10 }} 
            tick={{ fontSize: 12 }} 
          /> 
          <YAxis  
            label={{ value: 'Nombre de tournages', angle: -90, position: 'insideLeft' }} 
            tick={{ fontSize: 12 }} 
          /> 
          <Tooltip  
            contentStyle={{  
              backgroundColor: '#fff',  
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              padding: '10px' 
            }} 
            labelStyle={{ fontWeight: 'bold', marginBottom: '5px' }} 
          /> 
          <Legend  
            verticalAlign="top"  
            height={36}          
          /> 
          <Line  
            type="monotone"  
            dataKey="count"  
            name="Tournages" 
            stroke="#2563eb"  
            strokeWidth={3}  
            activeDot={{ r: 6 }} 
            dot={{ r: 3 }}       
          /> 
        </LineChart> 
      </ResponsiveContainer> 
      <p style={{  
        marginTop: '1rem',  
        color: '#666',      
        fontSize: '0.95rem',
        fontStyle: 'italic'  
      }}> 
        Ce graphique montre l'évolution du nombre de tournages autorisés à Paris depuis 2016.  
        Identifiez les années de forte activité cinématographique. 
      </p> 
    </div> 
  ); 
} // Fin du composant