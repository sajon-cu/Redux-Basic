import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// Action Types
// const BUG_ADDED = 'bugAdded';
// const BUG_REMOVED = 'bugRemoved';
// const BUG_RESOLVED = 'bugResolved';


// Action Creators
/*
export function bugAdded(description) {
    return {
        type: BUG_ADDED,
        payload: {
            description
        }
    }
}

export function bugRemoved(id) {
    return {
        type: BUG_REMOVED,
        payload: {
          id
        }
    };
}
*/

// we can simplify above code as following
/*export const bugAdded = description => ({
    type: BUG_ADDED,
    payload: {
        description
    }
});*/
//export const bugAdded = createAction('bugAdded');

/*export const bugRemoved = id => ({
    type: BUG_REMOVED,
    payload: {
        id
    }
});*/
//export const bugRemoved = createAction('bugRemoved');

/*export const bugResolved = id => ({
    type: BUG_RESOLVED,
    payload: {
        id
    }
});
*/
//export const bugResolved = createAction('bugResolved');


// Reducer
// []
let lastId = 0;

// One way
/*
export default function reducer(state = [], action) {
    if(action.type === 'bugAdded') {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    } else if(action.type === 'bugRemoved') {
        return state.filter(bug => bug.id != action.payload.id);
    }

    return state;
}
*/

// Another way
/*export default function reducer(state = [], action) {
    switch(action.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        
        case BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});

        default:
            return state;
    }
}*/

// another way
/*export default function reducer(state = [], action) {
    switch(action.type) {
        case bugAdded.type:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case bugRemoved.type:
            return state.filter(bug => bug.id !== action.payload.id);
        
        case bugResolved.type:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});

        default:
            return state;
    }
}
*/

// immer
// produce(initialState, draftState => {
//     draftState.description = "..."
// })

// Another way of using createReducer of redux toolking
/*export default createReducer([], {
    // key: value
    // action: functions (even => event handler)
    [bugAdded.type]: (bugs, action) => {
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        });
    },

    [bugRemoved.type]: (bugs, action) => {
        // const index = bugs.findIndex(bug => bug.id === action.payload.id);
        // bugs.slice(index, 1);
        bugs.slice(action.payload.id)
    },

    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex(bug => bug.id === action.payload.id);
        bugs[index].resolved = true;
    }
});
*/

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        // actions => action handler
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },

        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },

        bugRemoved: (bugs, action) => {
            // const index = bugs.findIndex(bug => bug.id === action.payload.id);
            // bugs.slice(index, 1);
            bugs.slice(action.payload.id)
        }
    }
});

export const {bugAdded, bugResolved, bugRemoved} = slice.actions;
export default slice.reducer;