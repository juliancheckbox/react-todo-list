import React, { Component, Fragment } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props; //Destructuring item and event handlers from props
    return (
      <Fragment>
        <h3 className="text-capitalize text-center">Todo Input</h3>
        <div className="card card-body my-3">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text  bg-primary text-white">
                  <i className="fas fa-book" />
                </div>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="add todo item"
                value={item}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              disabled={ item ? false : true}
              className=
                  {
                    editItem
                        ? "btn btn-block btn-success mt-3 text-capitalize"
                        : "btn btn-block btn-primary mt-3 text-capitalize"
                  }

            >
              {
                editItem
                    ? "edit item"
                    : "add item"
              }
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default TodoInput;
