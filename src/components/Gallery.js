import React from "react";
import { useState } from "react";

import Header from "./Header";
import Dogs from "./Dogs";
import People from "./People";
import Horses from "./Horses";
import National from "./National";
import Wild from "./Wild";
import Farm from "./Farm"
import Cats from "./Cats"
import Acrylics from "./Acrylics";
import Mural from "./Mural";



export default function Galley() {

  const [ national, setNational ] = useState(false);
  const [ dogs, setDogs ] = useState(true);
  const [ portrait, setPortrait ] = useState(false);
  const [ wildAnimals, setWildAnimals ] = useState(false);
  const [ horses, setHorses ] = useState(false);
  const [ farm, setFarm ] = useState(false)
  const [ cats, setCats] = useState(false);
  const [ acrylics, setAcrylics] = useState(false);
  const [ mural, setMural] = useState(false);

  const handleClick = (gallery) => {

    if (gallery === "dogs") {
      setDogs(true);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "portrait") {
      setDogs(false);
      setPortrait(true);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "horses") {
      setDogs(false);
      setPortrait(false);
      setHorses(true);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "national") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(true);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "wild") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(true);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "farm") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(true);
      setCats(false);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "cats") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(true);
      setAcrylics(false);
      setMural(false);
    }

    if (gallery === "acrylics") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(true);
      setMural(false);
    }

    if (gallery === "mural") {
      setDogs(false);
      setPortrait(false);
      setHorses(false);
      setNational(false);
      setWildAnimals(false);
      setFarm(false);
      setCats(false);
      setAcrylics(false);
      setMural(true);
    }

  }
  
  return (
    <div>
      <Header />
      {/* <div>
        <h1 className="">GALLERIES</h1>
      </div> */}
      <div className="gallery-text-wrapper">
        <h3 className="gallery-text-title">Gallery</h3>
        </div>
      <div className="button-wrapper">
        <p className="button-break">|</p>
        <button  className={national ? 'gallery-button-active' : 'gallery-button'} onClick={() => handleClick("national")}>National Exhibitions</button>
        <p className="button-break">|</p>
        <button className={dogs ? 'gallery-button-active' : 'gallery-button'} onClick={() => handleClick("dogs")}>Dogs</button>
        <p className="button-break">|</p>
        <button className={portrait ? 'gallery-button-active' : 'gallery-button'} onClick={() => handleClick("portrait")}>Portraits</button>
        <p className="button-break">|</p>
        <button className={wildAnimals ? 'gallery-button-active' : 'gallery-button'} onClick={() => handleClick("wild")}>Wild animals</button>
        <p className="button-break">|</p>
        <button className={horses ? 'gallery-button-active' : 'gallery-button'} onClick={() => handleClick("horses")}> Horses</button>
        <p className="button-break">|</p>
        <button className={farm ? 'gallery-button-active' : 'gallery-button'} onClick={() => handleClick("farm")}>Farm</button>
        <p className="button-break">|</p>
        <button className={cats ? 'gallery-button-active' : 'gallery-button'} onClick={() => handleClick("cats")}>Cats</button>
        <p className="button-break">|</p>
        <button className={acrylics ? 'gallery-button-active' : 'gallery-button'} onClick={() => handleClick("acrylics")}>Acrylics</button>
        <p className="button-break">|</p>
        <button className={mural ? 'gallery-button-active' : 'gallery-button'} onClick={() => handleClick("mural")}>Mural</button>
        <p className="button-break">|</p>
      </div>
      <div className="artwork-background">
      <div className="artwork-wrapper">
      {dogs === false ? (null) : (<Dogs/>)}  
      {portrait === false ? (null) : (<People/>)}
      {horses === false ? (null) : (<Horses/>)}
      {national === false ? (null) : (<National/>)}
      {wildAnimals === false ? (null) : (<Wild/>)}           
      {farm === false ? (null) : (<Farm/>)}
      {cats === false ? (null) : (<Cats/>)}
      {acrylics === false ? (null) : (<Acrylics/>)}        
      {mural === false ? (null) : (<Mural/>)}
      </div>
    </div>
    </div>
  );
}

