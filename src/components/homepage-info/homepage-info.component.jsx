import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faCheckSquare,
  faEnvelope,
  faHourglassHalf
} from "@fortawesome/free-solid-svg-icons";

import "./homepage-info.styles.scss";

const HomepageInfo = () => (
  <div className="info-container">
    <div className="info-container_item">
      <div className="info-container_item_icon">
        <FontAwesomeIcon icon={faPencilAlt} size="4x" />
      </div>
      <div className="info-container_item_text">
        <span>Wprowadź dane</span>
      </div>
    </div>
    <div className="info-container_item">
      <div className="info-container_item_icon">
        <FontAwesomeIcon icon={faCheckSquare} size="4x" />
      </div>
      <div className="info-container_item_text">
        <span>Wybierz restaurację</span>
      </div>
    </div>
    <div className="info-container_item">
      <div className="info-container_item_icon">
        <FontAwesomeIcon icon={faEnvelope} size="4x" />
      </div>
      <div className="info-container_item_text">
        <span>Wyślij zamówienie</span>
      </div>
    </div>
    <div className="info-container_item">
      <div className="info-container_item_icon">
        <FontAwesomeIcon icon={faHourglassHalf} size="4x" />
      </div>
      <div className="info-container_item_text">
        <span>Poczekaj na potwierdzenie.</span>
      </div>
    </div>
  </div>
);

export default HomepageInfo;
