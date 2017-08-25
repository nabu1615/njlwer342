import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      newItems: ["Sacar la ropa", "Hacer la cama", "Leer un rato"]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.newItems.map((item, index) => 
              <li key={index} >{item}</li>
            )}
          </ul>
           <form onSubmit={this.createTask.bind(this)}>
             <input type="text" value={this.state.value} onChange={this.updateTask.bind(this)} id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }

  updateTask(e) {
    this.setState({
      value: e.target.value
    })
  }

  createTask(e) {
      e.preventDefault();
      this.setState({
        newItems: this.state.newItems.concat(this.state.value),
        value: ''
      })
  }
}


export default App;
