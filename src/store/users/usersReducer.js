export default function UsersReducer(users = [], action) {
  switch (action.type) {
    case "load":
      return action.payload;
    case "reset":
      return [];
    default:
      return users;
  }
}
