import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import mission from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {/* A utilização do spread passando o valores do item possibilita informar os dados sem a necessidade de endereçar (Solução proveniente Instrutor Moisés Santana) */}
        {mission.map((item) => <MissionCard key={ item.name } { ...item } />)}
      </div>
    );
  }
}

export default Missions;
