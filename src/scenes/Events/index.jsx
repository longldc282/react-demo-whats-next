import React, { Component } from 'react';
import Event from './components/Event';

import './style.css';

class Events extends Component {
  constructor(props) {
    super(props);
    const { events } = props;
    this.state = { events };
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
          <small>total event: {events.length}</small>
        </div>
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
      </div>
    );
  }
}

export default Events;