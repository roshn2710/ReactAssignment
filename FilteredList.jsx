import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    // The state is just a list of key/value pair (like a hashmap)
    this.state = {
      search: "",
      selectedType: "all", // Added state for the selected type
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  }

  // Handles the selection in the DropdownButton
  handleSelect = (eventKey) => {
    this.setState({ selectedType: eventKey });
  }

  filterItem = (item) => {
    // Checks if the current search term is contained in this item
    const searchMatch = item.name.toLowerCase().search(this.state.search) !== -1;

    // Checks if the selectedType is "all" or matches the category of the item
    const typeMatch = this.state.selectedType === "all" || this.state.selectedType === item.category;

    return searchMatch && typeMatch;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.handleSelect}>
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />

        {/* Pass the filtered produce into the List component */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
