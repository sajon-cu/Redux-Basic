// import store from './store';
// import * as actions from './actionTypes';
// import {bugAdded, bugRemoved, bugResolved} from './actionCreator'


// store.subscribe(()=>{
//   console.log("State changed: ", store.getState());
// })

// one way
/*
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug 1'
  }
});

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: '1'
  }
});

store.dispatch({
  type: actions.BUG_RESOLVED,
  payload: {
    id: '1'
  }
});

*/

// another way of using actionCreator

// store.dispatch(bugAdded('Bug 1'));
// store.dispatch(bugAdded('Bug 2'));
// store.dispatch(bugAdded('Bug 3'));
// store.dispatch(bugAdded('Bug 4'));

//store.dispatch(bugRemoved(1));
// store.dispatch(bugResolved(1))
// store.dispatch(bugResolved(4))


// console.log(store.getState());

import configureStore from './store/configureStore';
import {
  bugAdded, 
  bugRemoved, 
  bugResolved, 
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser
} from './store/bugs';
import {projectAdded} from './store/projects';
import { userAdded } from './store/users';

//import {bugAdded, bugRemoved, bugResolved} from './actionCreator'
//import store from "./customStore";

const store = configureStore();

store.subscribe(() => {
  console.log('Changed State')
});

// store.dispatch(actions.bugAdded("New bug"));
// store.dispatch(actions.bugAdded("Another bug"));
// store.dispatch(actions.bugAdded("Push notification not working"));

// Add Some user
store.dispatch(userAdded({name: "Saiful Islam Sajon"}));
store.dispatch(userAdded({name: "Sohan Khan"}));

store.dispatch(bugAdded({ description: "New bug" }));
store.dispatch(bugAdded({ description: "Another bug" }));
store.dispatch(bugAdded({ description: "Push notification not working" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugResolved({ id: 2 }));
store.dispatch(bugAssignedToUser({
  bugId: 1,
  userId: 1
}));
store.dispatch(projectAdded({name: 'Project 1'}));

// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// console.log(store.getState());
const bugs = getBugsByUser(2)(store.getState());
console.log(bugs);

function App() {
  return (
    <div className="App">
      <p>Hello react developer!</p>
      <p>Hello react developer!</p>
    </div>
  );
}

export default App;
