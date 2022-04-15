import React, { useLayoutEffect, useState } from "react";
import Map from "./components/Map";
import Select from "./components/Select";

const App = () => {

    const [annee, setAnnee] = useState('');
    const [arr, setArr] = useState('');
    const [movieName, setMovieName] = useState('');
    const [producerName, setProducerName] = useState('');
    const [directorName, setDirectorName] = useState('');




    return (
        <div>
          <h1>Recherchez des Films tournés à Paris</h1>
          <Select setAnnee={setAnnee} setArr={setArr} setMovieName={setMovieName} setProducerName={setProducerName} setDirectorName={setDirectorName}/>
          <Map annee={annee} arr={arr} movieName={movieName} directorName={directorName} producerName={producerName}/>
        </div>
    );
};

export default App;
