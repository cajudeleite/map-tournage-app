import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import '../styles.css';

const Select = ({setAnnee}) => {

  const [anneeArray, setAnneeArray] = useState([]);
  const [arr, setArr] = useState([]);

  const getAnneeArray = async () => {
    try {
      const response = await axios.get('http://localhost:8000/annee');
      setAnneeArray(response.data);
    } catch (error) {
      console.log("error", error);
    };
  };

  const getArr = async () => {
    try {
      const response = await axios.get('http://localhost:8000/arrondissements');
      setArr(response.data);
      console.log("response",response.data)

    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getAnneeArray();
    getArr();
  }, [])

  return (
    <div className="select">
      <select onChange={(event) => {
        setAnnee(event.target.value);
      }} style={{ width: '190px' }}>
        <option value="" >--sélectionnez une année--</option>
        {anneeArray.map((a) => (
          <option key={a.annee_tournage} name={a.annee_tournage} value={a.annee_tournage}>{a.annee_tournage}</option>
        ))}
      </select>
      <select style={{ width: '210px' }}>
        <option value="">--sélectionnez un code postal--</option>
        {arr.map((a) => (
          <option name={a.ardt_lieu} value={a.ardt_lieu}>{a.ardt_lieu}</option>
        ))}
      </select>
    </div>
  )
}

export default Select;
