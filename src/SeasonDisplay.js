import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: `It's summer`,
    iconName: 'sun'
  },
  winter: {
    text: `It's winter`,
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  // summer
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    // winter
    return lat < 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  console.log(props.lat);

  const season = getSeason(props.lat, new Date().getMonth());
  // const text = season === 'winter' ? `it's cold` : `it's hot`;
  // const icon = season === 'winter' ? 'snowflake' : 'sun';
  const { text, iconName } = seasonConfig[season];


  // return current season new Date().getMonth()
  return(
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`}></i>
      <h2>{text}</h2>
    </div>
  )
};

export default SeasonDisplay;
