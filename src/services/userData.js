class LoginHandler {
    userData = null;
    state = null;
    setUser(userPromise) {
        userPromise.then(data => { 
            this.userData = data.user;
            console.log(data.user);
            this.updateState();
        });
    }
    getUser() {
        return this.userData;
    }
    updateState() {
        this.state.forceUpdate()
    }
}

export default LoginHandler;