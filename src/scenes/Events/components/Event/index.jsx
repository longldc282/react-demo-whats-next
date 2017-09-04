import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ event, removeEvent, showDetails }) => (
  <div className="events__event col-md-4 well">
    <button className="btn btn-xs btn-info" onClick={() => showDetails(event)}>
      Details
    </button>
    <button className="btn btn-xs btn-default button--right" onClick={() => removeEvent(event.id)}>
      x
    </button>
    <h3 className="text-center">{event.title}</h3>
    <div className="text-right">
      <i>{event.startAt}</i>
    </div>
  </div>
);

Event.propTypes = {
  event: PropTypes.object.isRequired,
  removeEvent: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
};

export default Event;