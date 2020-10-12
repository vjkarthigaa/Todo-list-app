import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
      isCompleted: false
    }
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id

    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()

    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });

  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2 style={{ margin: '5px' }}>My Todo App</h2>

          <br />
          <input
            type="text"
            placeholder="add a todo task here ....."
            value={this.props.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button class="addBtn"
            onClick={() => this.addItem()}
          >
            Add
    </button>
        </div>
        <br />
        
          <ul  className="theList">
            
            {this.state.list.map(item => {
              return (
              <li>
                  <input type="checkbox"
                    id={item.id}
                    value={item.value} /><label
                      for={item.id}>
                    {item.value}
                      <button className="close"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      X
                  </button>
                  </label>
              </li>
              )
            })}
          </ul>
      
      </div>

    );
  }
}

export default App;
//export default Title;