import { useEffect, useState } from "react"
import { baseUrl } from "../Helper/Helper";

const useUser = (email) => {
    const [currentUser, setCurrentUser] = useState([]);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`${baseUrl}/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setCurrentUser(data);
                    setUserLoading(false);
                })
        }
    }, [email])

    return [currentUser, userLoading];
}

export default useUser;