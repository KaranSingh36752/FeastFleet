import { createContext } from "react";

const UserContext = createContext({
    user : {
        name: "Ishpreet Singh",
        email: "hello@gmail.com",
    }
});

export default UserContext;