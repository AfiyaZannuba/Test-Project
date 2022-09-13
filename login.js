function login(name, password) {
    if(name === "naveen" && password === "123") {
        return "Logged In"
    }
    else {
        return "Invalid Credentials"

    }
}

console.log(login("naveen", "123"))