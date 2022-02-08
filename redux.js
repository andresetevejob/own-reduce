import EventEmitter from "events";
import { itemsReducer } from "./reducer";
const emitter = new EventEmitter();

let state = {
    items:[]
}
function store(action,state = { items: [] }) {
    return {
      items: itemsReducer(action,state.items)
    };
}
export function getState(){
    return state;
}
export function dispatch(action){
  const oldState = state;
  state = store(action,state);
  emitter.emit("changed");
}
export function select(slice) {
    return state[slice];
}
export function subscribe(cb) {
    emitter.on("changed", cb);
}