/*
Trent Blair
2/4/22
Purpose of this is to make the drop down for fruits and vegetables
*/

import React, { Component } from 'react';
import { DropdownButton, Dropdown, onSelect } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            type: "",
        };
    }
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        

        if(item.type == this.state.type) {
            return item.name;
        } else if (this.state.type == ""){
            return item.name;
        }

    }
    
    button = (eventKey, event) => {

        if(eventKey == "All"){
            this.setState({type:""});
        }else{
            this.setState({type: eventKey });
            console.log(this.state);

        }
    }
    render() {
        return (
            <div className="filter-list">
                <h1>Produce Search</h1>
                
                <DropdownButton
                    id="dropdown-basic-button"
                    title={"Type"}
                    onSelect ={this.button}
                >
                  <Dropdown.Item eventKey="All">All</Dropdown.Item>
                  <Dropdown.Item eventKey="Fruit">Fruits</Dropdown.Item>
                  <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
                </DropdownButton>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <List items={this.props.items.filter(this.filterItem)} />
            </div>


        );
    }
}
export default FilteredList;