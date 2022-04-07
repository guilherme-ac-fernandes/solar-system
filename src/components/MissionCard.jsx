import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    // const nameChange1 = name.replace('(', '');
    // const nameChange2 = nameChange1.replace(')', '');
    // const replaceName = nameChange2.replace('/', '-');
    // const nameTransform = replaceName.toLowerCase().split(' ').join('-');
    return (
      <div data-testid="mission-card" className="mission-item">
        <p data-testid="mission-name">{name}</p>
        <span>_________________________</span>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
