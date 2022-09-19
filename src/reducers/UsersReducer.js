import { v4 as uuidv4 } from "uuid";

let initialState = {
  users: [
    { name: "Terry", email: "terry@gmail.com", gen: 22, id: uuidv4() },
    { name: "Ash", email: "ash@gmail.com", gen: 25, id: uuidv4() },
  ],
};

let UsersReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "DELETE_USER":
      const UserDel = state.users.filter((user) => user.id !== action.payload);
      return { ...state, users: UserDel };
    case "EDIT_USER":
      const Edit = state.users.map((user) => {
        if (user.id === action.payload.info.id) {
          return action.payload.info;
        } else {
          return user;
        }
      });
      return { ...state, users: Edit };
    default:
      return state;
  }
};

export default UsersReducers;
