import React, { Component } from 'react';

import ListEvent from './scenes/ListEvent';

import './style.css';

import mockData from './../../mock/events.json';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { ...mockData };
    this.removeEvent = this.removeEvent.bind(this);
    this.findEventById = this.findEventById.bind(this);
  }

  findEventById(eventID) {
    const { events } = this.state;
    events.forEach((e, index) => {
      if (e.id === eventID) return index;
    });
    return -1;
  }

  removeEvent(eventID) {
    const { events } = this.state;
    events.splice(this.findEventById(eventID), 1)
    this.setState({
      events,
    });
  }

  render() {  
    const { events } = this.state;
    return (
      <div className="events col-md-12">
        <div className="row text-right">
          <small>Total event: {events.length}</small>
        </div>
        <ListEvent events={events} />
      </div>
    );
  }
}

export default Events;