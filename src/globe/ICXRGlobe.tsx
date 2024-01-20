import React, { useCallback, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Globe from "react-globe.gl";
import "./icxr-globe.css";
import ICXRUniversity from "./ICXRUniversity";

const GlobeImageUrl =
  "https://unpkg.com/three-globe@2.30.0/example/img/earth-night.jpg";

type ICXRGlobeRenderer = (university: ICXRUniversityData) => React.ReactElement;

export type ICXRUniversityData = {
  lat: number;
  lng: number;
  name: string;
  iconUrl?: string;
};

function renderUniversityBanner(renderer: ICXRGlobeRenderer) {
  return (u: ICXRUniversityData) => {
    const el = document.createElement("div");
    el.innerHTML = renderToStaticMarkup(renderer(u));
    return el;
  };
}
type ICXRGlobeProps = {};

const ICXRGlobe: React.FC<ICXRGlobeProps> = ({}) => {
  const [universities, setUniversities] = useState<ICXRUniversityData[]>([
    {
        lat: 37.4277,
        lng: -122.1701,
        name: "StandfordXR"
    },
    {
        lat: 42.3744,
        lng: -71.1182,
        name: "HAR/VRD"
    },
    {
        lat: 42.3601,
        lng: -71.0942,
        name: "VR/AR@MIT"
    },
    {
        lat: 37.8702,
        lng: -122.2595,
        name: "XR @ Berkeley"
    },
    {
        lat: 33.7756,
        lng: -84.3963,
        name: "GTXR"
    },
    {
        lat: 42.2771,
        lng: -83.7382,
        name: "Alt Reality Initiative"
    },
    {
        lat: 52.2054,
        lng: 0.1132,
        name: "CamVAR",
    },
    {
        lat: 40.1020,
        lng: -88.2272,
        name: "VR Club at UIUC"
    },
    {
        lat: 29.6465,
        lng: -82.3533,
        name: "GatorVR"
    },
    {
        lat: 42.3399,
        lng: -71.0899,
        name: "NUVR"
    },
    {
        lat: 38.9897,
        lng: -76.9378,
        name: "XR Club"
    },
    {
        lat: 47.6546,
        lng: -122.3075,
        name: "Extended Reality Association"
    },
    {
        lat: 35.9049,
        lng: -79.0469,
        name: "Carolina AR/VR"
    },
    {
        lat: 30.6187,
        lng: -96.3365,
        name: "TAMUVR"
    },
    {
        lat: 38.9404,
        lng: -92.3277,
        name: "MUVR"
    },
    {
        lat: -36.8519,
        lng: 174.7689,
        name: "UoA VR Club"
    },
    {
        lat: 53.1669,
        lng: 8.6517,
        name: "The VR Club @ CUB"
    },
    {
        lat: 27.7123,
        lng: -97.3246,
        name: "XR Visionary Society"
    },
    {
        lat: 39.1329,
        lng: -84.5150,
        name: "UC Esports Club - VR Branch"
    },
    {
        lat: 41.8268,
        lng: -71.4025,
        name: "XR Hub"
    },
    {
        lat: 12.9915,
        lng: 80.2337,
        name: "XRIG"
    },
    {
        lat: 40.7295,
        lng: -73.9965,
        name: "SPS Metaverse Club"
    },
    {
        lat: 34.0224,
        lng: -118.2851,
        name: "XRSC"
    },
    {
        lat: 52.3676,
        lng: 4.9041,
        name: "sheru moment"
    }
  ]);

  const htmlElementRenderer = useCallback(
    renderUniversityBanner(u => <ICXRUniversity university={u} />),
    [universities]
  );

  return (
    <div className="icxr-globe">
      <Globe
        globeImageUrl={GlobeImageUrl}
        htmlElementsData={universities}
        htmlElement={htmlElementRenderer as (d: object) => HTMLElement}
      />
    </div>
  );
};

export default ICXRGlobe;
