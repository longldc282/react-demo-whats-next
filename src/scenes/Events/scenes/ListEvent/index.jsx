import React from 'react';
import PropTypes from 'prop-types';

import Event from './../../components/Event';

const ListEvent = ({ events, removeEvent, showDetails }) => {
  return (
    <div className="row">
      {
        events.map(event => 
          <Event 
            key={event.id} 
            event={event}
            removeEvent={removeEvent}  
            showDetails= {showDetails}
          />
        )
      }
    </div>
  );
};

ListEvent.propTypes = {
  events: PropTypes.array.isRequired,
  showDetails: PropTypes.func.isRequired,
};


export default ListEvent;