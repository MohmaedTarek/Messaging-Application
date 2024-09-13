export const login = (req, res) => {
    console.log("LoginUser");
}


export const logout = (req, res) => {
    console.log("Logout");
}

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;
    } catch (error) {

    }
}