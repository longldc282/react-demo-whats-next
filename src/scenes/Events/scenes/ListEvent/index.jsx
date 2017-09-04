import React from 'react';
import PropTypes from 'prop-types';

import Event from './../../components/Event';

const ListEvent = ({ events }) => {
  return (
    <div className="row">
      {
        events.map(event => 
          <Event 
            key={event.id} 
            event={event}
            removeEvent={this.removeEvent}  
          />
        )
      }
    </div>
  );
};

Event.propTypes = {
  events: PropTypes.array.isRequired,
};


export default ListEvent;