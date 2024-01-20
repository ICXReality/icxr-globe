import React from "react";
import { ICXRUniversityData } from "./ICXRGlobe";
import "./icxr-university.css";

type ICXRUniversityProps = {
  university: ICXRUniversityData;
};

const ICXRUniversity: React.FC<ICXRUniversityProps> = ({ university }) => {
  return (
    <div className="icxr-university">
      <div className="icxr-university-marker" />
      <div className="icxr-university-details-container">
        <div className="icxr-university-details">{university.name}</div>
      </div>
    </div>
  );
};

export default ICXRUniversity;
