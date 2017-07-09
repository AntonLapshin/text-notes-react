import React from "react";
import "./Note.scss";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  noteActivate,
  noteDeactivate,
  noteRemove,
  noteAppendRecord
} from "../../actions";
// const moment = require("moment");
import moment from "moment";

class Note extends React.Component {
  static getPreloadedState() {
    return {
      active: -1,
      items: [] // TODO: Load from Storage
    };
  }
  note = PropTypes.object.isRequired;

  toggleNote = e => {
    const el = e.target;
    if (el && el.matches(".note")) {
      e.stopPropagation();
      if (el.classList.contains("active")) {
        this.props.dispatch(noteDeactivate());
      } else {
        this.props.dispatch(noteActivate(el));
      }
    }
  };

  componentDidMount() {
    window.document.addEventListener("click", this.toggleNote);
  }

  componentWillUnmount() {
    window.document.removeEventListener("click", this.toggleNote);
  }

  addRecord() {
    const { note, dispatch } = this.props;
    dispatch(noteAppendRecord(note.active, this.refs.input.value));
    this.refs.input.value = "";
  }

  remove() {
    const { note, dispatch } = this.props;
    dispatch(noteRemove(note.active));
  }

  render() {
    const { note } = this.props;
    const visible = note.active > -1;
    const className = `note-card card hoverable ${visible ? "active" : ""}`;
    let recordsUl;
    if (visible) {
      const activeNote = note.items.find(i => i.id === +note.active);
      const records = activeNote.records;
      if (records.length > 0) {
        recordsUl = (
          <div className="card-content">
            <ul>
              {records.map(r => {
                return (
                  <li key={r.date.getTime()}>
                    <b>
                      {moment(r.date).format("YYYY-MM-DD HH:mm:ss")}
                    </b>
                    <span> You wrote:</span>
                    <br />
                    <p>
                      {r.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }
    return (
      <div className={className}>
        <div className="card-action">
          <h7>Private Notes</h7>
        </div>
        {recordsUl}
        <div className="card-action">
          <input ref="input" placeholder="Type text" type="text" />
          <a
            className="waves-effect waves-light btn blue lighten-1"
            onClick={e => this.addRecord()}
          >
            Add
          </a>
          <span> </span>
          <a
            className="waves-effect waves-teal btn-flat"
            onClick={e => this.remove()}
          >
            Delete
          </a>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Note);
