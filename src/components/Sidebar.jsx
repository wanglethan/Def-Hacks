import React, { Component } from "react";
 
class Sidebar extends Component {
    state = {
        listitems:[
            {
                id: 0,
                name: "clinic a",
                people: 3
            },
            {
                id: 1,
                name: "clinic b", 
                people: 3
            },
            {
                id: 2,
                name: "clinic c",
                people: 3
            },
            {
                id: 3,
                name: "clinic d",
                people: 4
            },
            {
                id: 4,
                name: "clinic e",
                people: 5
            }
        ]
  };
 
  render() {
    return (
      <React.Fragment>
          
            <ul class="list-group" style={{
                position: 'relative',
                left: 80 + "%",
                width: 20 + "%",
            }}>
                <h1 style={{ textAlignVertical: "center", textAlign: "center"}}>People in Clinic</h1>
                {this.state.listitems.map(listitem => (
                    <li key={listitem.id} className= "list-group-item">
                        {listitem.name + " : " + listitem.people}
                    </li>
                ))}
            </ul>
      </React.Fragment>
    );
  }
}
 
export default Sidebar