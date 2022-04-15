import React, { useLayoutEffect, useState } from "react";
import Map from "./components/Map";
import Select from "./components/Select";

const App = () => {

    const [annee, setAnnee] = useState('');

    return (
        <div>
          <h1>Recherchez des Films tournés à Paris</h1>
          <Select setAnnee={setAnnee} />
          <h2>Annee: {annee}</h2>
          <Map annee={annee} />
        </div>
    );
};

export default App;
