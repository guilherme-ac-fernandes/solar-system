import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planet from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="container-planet-card">
          { planet.map((item) => {
            const { name, image } = item;
            return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
          })}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
