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
                left: 75 + "%",
                width: 20 + "%",
            }}>
                <h1 style={{ textAlignVertical: "center", textAlign: "center"}}>People in Clinic</h1>
                {this.state.listitems.map(listitem => (
                    <li key={listitem.clinicName} className="list-group-item list-group-item-action" >
                        {listitem.clinicName + " : " + listitem.clinicNumOfPeople}
                    </li>
                ))}<p style={{ fontWeight: 'bold', border: 'solid red'}}>Note: Currently only supported in Mississauga, Canada</p>
            </ul>
            
      </React.Fragment>
    );
  }
}
 
export default Sidebar