import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faWindowClose, faCheckSquare, faUndo } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
      completed: {},
      // strikeThrough: []

    };

    this.handleCheck = this.handleCheck.bind(this);
    //this.undoCrossLine = this.undoCrossLine(this);
  }


  updateInput(key, value) {
    //e.preventDefault();
    // update react state
    this.setState({ [key]: value });
    // e.target.reset();


  }

  addItem() {
    // create a new item with unique id
    //document.getElementById("addtodobtn").disabled = false;

    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()

    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    if (newItem) {
      if (document.getElementById('todoinput').value !== '') {
        this.setState({
          list,
          newItem: ""
        });
      }
    }
    document.getElementById('todoinput').value = ''
    if (document.getElementById('todoinput').value === '') {
      document.getElementById("addtodobtn").disabled = true;

    }
    document.getElementById("addtodobtn").disabled = false;


  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  // crossLine = event => {
  //       const element = event.target;
  //       element.classList.toggle("crossed-line");
  //   };

  handleCheck(id, event) {
    // code to create line through completed item
    this.setState(state => ({
      completed: { ...state.completed, [id]: !state.completed[id] }

    }));
    //hide chckbtn
    //document.getElementById("checkbtn").style.display = "none";

    //show undobtn 
    //document.getElementById("undobtn").style.display = "block";

    //document.getElementById('closebtn').style.visibility = 'hidden';
  }


  undoCrossLine(id, event) {
    this.setState(state => ({
      completed: { ...state.completed, [id]: !state.completed[id] }
    }));
    document.getElementById("listtext").style.textDecoration = "none";

    //hide undobtn 
    //document.getElementById("undobtn").style.display = "none";

    //show chckbtn
    //document.getElementById("checkbtn").style.display = "block";

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
            id="todoinput"
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button id="addtodobtn" class="addBtn"
            onClick={() => this.addItem()}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <br />
        {/* <ul class="flex-container nowrap">  */}

        {this.state.list.map(item => {
          return (
            <li id="listtext" class="list-group-item text-capitalize d-flex justify-content-between my-2"
              style={{
                textDecoration: this.state.completed[item.id]
                  ? "line-through"
                  : ""
              }}
              key={item.id}>
              {/* <input type="checkbox"
                    id={item.id}
                    value={item.value} /> */}
              {/* <label
                      for={item.id}> */}
              <h6>{item.value}</h6>
              <div className="todoIcon">
                <button id="checkbtn" className="check"
                  // onClick={this.crossLine}
                  onClick={event => this.handleCheck(item.id, event)}
                >
                  <span className="mx-2 fa-lg" >
                    <FontAwesomeIcon icon={faCheckSquare} />
                  </span>
                </button>
                <button id="undobtn"
                  className="undo"
                  //style={{display:"none"}}
                  onClick={event => this.undoCrossLine(item.id, event)}

                >
                  <span className="mx-2 fa-lg" >
                    <FontAwesomeIcon icon={faUndo} />
                  </span>
                </button>


                <button className="close"
                  onClick={() => this.deleteItem(item.id)}
                >
                  <span className="mx-2 fa-lg">
                    <FontAwesomeIcon icon={faWindowClose} />
                  </span>
                </button>
              </div>
              {/* </label> */}
            </li>
          )
        })}
        {/* </ul> */}
      </div>

    );
  }
}

export default App;
//export default Title;