import React from "react";
import { Card } from "react-bootstrap";
import "./RocketLaunchDetails.css";

function RocketLaunchDetails({ details }) {
  const {
    flight_number,
    mission_name,
    mission_id,
    launch_year,
    launch_success,
    links,
    rocket,
  } = details;
  const imgSrc = links.mission_patch_small;
  const land_success = rocket.first_stage.cores[0].land_success;

  return (
    <Card className="rocket-details-card">
      <div key={flight_number}>
        <div>
          <img
            src={imgSrc}
            alt="mission patch img not available on api"
            className="rocket-mission-image"
          />
        </div>
        <div className="rocket-mission-name-flight-number">
          {mission_name} #{flight_number}
        </div>
        <div className="rocket-detail-label">
          Mission Ids:{" "}
          <ul>
            {" "}
            <li className="rocket-detail-value">{mission_id}</li>
          </ul>
        </div>
        <div className="rocket-detail-label">
          Launch Year:{" "}
          <span className="rocket-detail-value">{launch_year}</span>
        </div>
        <div className="rocket-detail-label">
          Successful Launch:{" "}
          <span className="rocket-detail-value">
            {launch_success ? "true" : "false"}
          </span>
        </div>
        <div className="rocket-detail-label">
          Successful Landing:{" "}
          <span className="rocket-detail-value">
            {land_success ? "true" : "false"}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default RocketLaunchDetails;
