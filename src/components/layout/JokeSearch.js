import React, { Component } from 'react'





class JokeSearch extends Component {
    handleSubmit = (event) => {
      event.preventDefault();
      const output = document.createElement('div');
      const data = [...event.target.elements].reduce((data, element) => {
        if (element.name && element.value) {
          data[element.name] = element.value;
        }
        return data;
      }, {});
      output.textContent = JSON.stringify(data);
      document.body.appendChild(output);
    };
    render() {
      return (
        <form className='dumbForm' 
         action="/search" 
         onSubmit={this.handleSubmit}>
          <input type="text" name="q" />
          <select name="category">
            <option value="" selected>Category</option>
            <option value="cats">Cats</option>
            <option value="dogs">Dogs</option>
          </select>
          <button className="btn pink lighten-3 z-depth-0">Find</button>
        </form>
      );
    }
  }

  export default JokeSearch
  
