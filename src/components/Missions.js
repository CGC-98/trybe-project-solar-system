import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }) => (
          <li key={ name }>
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          </li>
        ))}
      </div>
    );
  }
}

export default Missions;
