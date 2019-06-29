export const signIn = (credentials) => {
    return (displatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatchEvent({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatchEvent({ type: 'LOGIN_ERROR', err });
        })
    }
}