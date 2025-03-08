import axiosInstance from "../config/axiosInstance"
import Auth from "../utils/Auth";

const APIAuth = {
    login: async ({email, password}) => {
        try {
            const res = await axiosInstance.post("/user/login", {
                email,
                password,
            });
            Auth.storeUserInfoToCookies(res.data.accessToken);
            return res.data;
        }  catch (error) {
            throw new Error(error);
        }
    },
};

export default APIAuth;