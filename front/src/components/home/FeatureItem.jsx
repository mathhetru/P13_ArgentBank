import PropTypes from "prop-types";

function FeatureItem(props) {
  return (
    <div className="feature-item">
      <img src={props.icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

FeatureItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default FeatureItem;
