import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

// PlanetCard.propTypes = {
//   planetName: PropTypes.string.isRequired,
//   planetImage: PropTypes.string.isRequired, // O caminho até a imagem é string (Ajuda da Amanda Soares e Instrutor Moisés Santana)
// };

export default MissionCard;
