import {useEffect, useState} from "react";
import {fetchUserAttributes} from "aws-amplify/auth";
import {DataStore} from "aws-amplify/datastore";
import {User} from "../models";

function useGetCurrentUser() {
    const [cognitoUser, setCognitoUser] = useState();
    const [dbUser, setDbUser] = useState();
    const [user, setUser] = useState();
    const [isUserInDb, setIsUserInDb] = useState(true);
    const [loading, setLoading] = useState(true);

    // Get from cognito all user attributes
    useEffect(() => {
        fetchUserAttributes().then(a => {
            setCognitoUser(a)
        }).catch(() => {
            setLoading(false)
        });
    }, [])

    // Get from db current user by cognitoID
    useEffect(() => {
        const sub = cognitoUser?.sub;
        sub && DataStore.query(User, sub).then(a => {
            a ? setDbUser(a) : setIsUserInDb(false);
        })
    }, [cognitoUser])

    // Check if user exists in db, if not it should be saved to db and then returned
    useEffect(() => {
        if (cognitoUser && !isUserInDb) {
            DataStore.save(new User({
                email: cognitoUser?.email,
                cognitoID: cognitoUser?.sub,
                name: `${cognitoUser?.given_name} ${cognitoUser?.family_name}`,
                picture: cognitoUser?.picture
            })).then(a => setUser(a));
        } else if (dbUser) {
            setUser(dbUser);
        }
    }, [cognitoUser, dbUser, isUserInDb]);

    useEffect(() => {
        user && setLoading(false);
    }, [user])
    return {user: user, userLoading: loading}
}


export default useGetCurrentUser;

