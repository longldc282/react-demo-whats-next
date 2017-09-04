import React, { Component } from 'react';

import ListEvent from './scenes/ListEvent';
import EventDetails from './scenes/EventDetails';

import './style.css';

import mockData from './../../mock/events.json';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      ...mockData,
      showEvent: undefined,
    };
    this.removeEvent = this.removeEvent.bind(this);
    this.indexOfEvent = this.indexOfEvent.bind(this);
    this.showEvent = this.showEvent.bind(this);
  }

  indexOfEvent(eventId) {
    const { events } = this.state;
    events.forEach((e, index) => {
      if (e.id === eventId) return index;
    });
    return -1;
  }

  removeEvent(eventId) {
    const { events } = this.state;
    events.splice(this.indexOfEvent(eventId), 1)
    this.setState({
      events,
      showEvent: undefined,
    });
  }

  showEvent(event) {
    this.setState({
      showEvent: event,
    })
  }

  render() {  
    const { events, showEvent } = this.state;
    return (
      <div className="events col-md-12">
        <div className="row text-right">
          <small>Total event: {events.length}</small>
        </div>
        { 
          showEvent === undefined ? (
            <ListEvent events={events} removeEvent={this.removeEvent} showDetails={this.showEvent} />
          ) : (
            <EventDetails event={showEvent} remove={this.removeEvent} />
          )
        }
        
      </div>
    );
  }
}

export default Events;