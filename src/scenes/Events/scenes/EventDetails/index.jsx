import React from 'react';

import './style.css';

const EventDetails = ({ event, remove }) => {
  const details = object => Object.keys(object).map(key => 
    object[key] instanceof Object ? (
      <div className="well" key={key} >
        {key} : {details(object[key])}
      </div>
    ) : (
      <div className="event__detail well" key={key} >
        <span>{key}</span>
        <span>{object[key]}</span>
      </div>
    )
  );
  const removeEvent = () => remove(event.id);
  return (
    <div className="row event">
      <div className="col-md-2" />
      <div className="col-md-8">
        <h2 className="text-center">{event.title}</h2>
        <div className="row">
          { details(event) }
        </div>
        <button className="btn btn-danger button--right" onClick={removeEvent}>
          Delete
        </button>
      </div>
      <div className="col-md-2" />
   </div>
  );
};

export default EventDetails;