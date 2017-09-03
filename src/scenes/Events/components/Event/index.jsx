import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ event, removeEvent }) => {
  const onButtonClick = () => removeEvent(event.id);
  return (
    <div className="events__event col-md-4 well">
      <button className="btn btn-xs btn-default button--right" onClick={onButtonClick}>
        x
      </button>
      <h3 className="text-center">{event.title}</h3>
      <div className="text-right">
        <i>{event.startAt}</i>
      </div>
    </div>
  );
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  removeEvent: PropTypes.func.isRequired,
};

export default Event;