import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const imgTest = `Planeta ${planetName}`;
    const classImage = `img-${planetName.toLowerCase()}`;
    return (
      <div data-testid="planet-card" className="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ imgTest } className={ classImage } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  // O caminho até a imagem é string (Ajuda da Amanda Soares e Instrutor Moisés Santana)
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
