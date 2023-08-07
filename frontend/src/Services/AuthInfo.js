export function isLoggedIn() {
    if (localStorage.getItem("token" === null)) {
        localStorage.clear();
        return false;
    }
    if (localStorage.getItem("expiration") < Date.now()) {
        localStorage.clear();
        return false;
    }
    return true;
}

export function config() {
    return {
        headers: {
            authorization: "Bearer " + localStorage.getItem("token")
        }
    }
}