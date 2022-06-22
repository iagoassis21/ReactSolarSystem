import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const nomeImg = `Planeta ${planetName}`;
    return (
      <div className="planetCard" data-testid="planet-card">
        <p className="planetName" data-testid="planet-name">{planetName}</p>
        <img className="planetImage" src={ planetImage } alt={ nomeImg } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
