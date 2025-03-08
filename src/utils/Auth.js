import Cookies from "js-cookie";

const Auth = {
    isAuthorization: () => {
        const token = Cookies.get("token");
        if (token) return true;
        return null;
    },
    getAccessToken: () => {
        return Cookies.get("token");
    },
    // logOut: ()
};

export default Auth;