import { UsersList } from "components/UsersList/UsersList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "redux/user/userOperations";

export const UserPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    return (
        <>
            <UsersList/>
        </>
)
    
};
