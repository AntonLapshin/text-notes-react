import blog from "./blog";
import popover from "./popover";
import note from "./note";
import { combineReducers } from "redux";

export default combineReducers({
  blog, popover, note
});
