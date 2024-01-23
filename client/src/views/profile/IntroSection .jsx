import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faHome,
  faLocationDot,
  faPhone,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";

const IntroSection = ({city, country, address, telephone, gender, birthday}) => {
  return (
    <div className="intro-section">
      <h2>Intro</h2>
      {country && (
        <p>
          <>
            <FontAwesomeIcon icon={faHome} />
            <strong>Location:</strong>{" "}
            <span className="text-muted">
              {country}, {city}
            </span>
          </>
        </p>
      )}
      {address && (
        <p>
          <>
            <FontAwesomeIcon icon={faLocationDot} />
            <strong>Address:</strong>{" "}
            <span className="text-muted"> {address}</span>
          </>
        </p>
      )}
      {telephone && (
        <p>
          <>
            <FontAwesomeIcon icon={faPhone} />
            <strong>Telephone:</strong>{" "}
            <span className="text-muted"> {telephone}</span>
          </>
        </p>
      )}
      {gender && (
        <p>
          <>
            <FontAwesomeIcon icon={faVenusMars} />
            <strong>Gender:</strong>{" "}
            <span className="text-muted"> {gender}</span>
          </>
        </p>
      )}
      {birthday && (
        <p>
          <>
            <FontAwesomeIcon icon={faCakeCandles} />
            <strong>Birthday:</strong>{" "}
            <span className="text-muted"> {birthday}</span>
          </>
        </p>
      )}
    </div>
  );
};

export default IntroSection;
