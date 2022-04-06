import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
// import planet from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetName="Mercurio" planetImage="endereço" />
      </div>
    );
  }
}

export default SolarSystem;
