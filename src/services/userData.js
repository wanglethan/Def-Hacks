class LoginHandler {
    userData = null;
    state = null;
    setUser(userPromise) {
        userPromise.then(data => {
            if (data != null) {
                this.userData = data.user;
                console.log(this.userData);
                this.updateState();
            }
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