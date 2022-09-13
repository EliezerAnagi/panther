import { v4 as uuidv4 } from "uuid";

let initialState = {
  users: [
    { name: "rick", email: "rick@gmail.com", gen: 22, id: uuidv4() },
    { name: "danny", email: "danny@gmail.com", gen: 25, id: uuidv4() },
  ],
};

let UsersReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export default UsersReducers;
