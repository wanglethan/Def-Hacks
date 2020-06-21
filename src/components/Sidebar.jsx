import React, { Component } from "react";
 
class Sidebar extends Component {
    state = {
        /*
        clinic = {
        clinicName: name,
        clinicLocation: location,
        clinicOfficeHours: officeHours,
        clinicNumOfPeople: numOfPeople
    }
        */
        listitems:[
            {
                clinicName: "clinic a",
                clinicNumOfPeople: 3
            },
            {
                clinicName: "clinic b", 
                clinicNumOfPeople: 3
            },
            {
                clinicName: "clinic c",
                clinicNumOfPeople: 3
            },
            {
                clinicName: "clinic d",
                clinicNumOfPeople: 4
            },
            {
                clinicName: "clinic e",
                clinicNumOfPeople: 5
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
                        {listitem.clinicName + " : " + listitem.clinicNumOfPeople}
                    </li>
                ))}
            </ul>
      </React.Fragment>
    );
  }
}
 
export default Sidebar