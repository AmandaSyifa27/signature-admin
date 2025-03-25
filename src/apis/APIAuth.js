// import axios from "axios";

// const APIAuth = {
//     login: async (email, password) => {  
//         var loginUrl = "http://103.175.221.36:8000/user/login";
//         const params = new URLSearchParams();
//         params.append("email", email);
//         params.append("password", password);

//         try {
//             const response = await axios.post(loginUrl, params, {
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                 },
//             });

//             console.log("Login Berhasil:", response.data);
//             return response.data;
//         } catch (error) {
//             console.error("Login Gagal:", error);
//             throw error;
//         }
//     }
// };

// export default APIAuth;

// import axiosInstance from "../config/axiosInstance"
// import Auth from "../utils/Auth";

// const APIAuth = {
//   login: async ({ email, password }) => {
//     try {
//       const res = await axiosInstance.post("/auth/login", {
//         email,
//         password,
//       });
//       Auth.storeUserInfoToCookies(res.data.accessToken);
//       return res.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },
// };

// export default APIAuth;

import axios from "axios";

const APIAuth = {
    login: async () => {    
        var loginUrl = "http://103.175.221.36:8000/user/login";
        // const params = new URLSearchParams();
        // params.append("email", "secretary1@antam.com");
        // params.append("password", "password");
        const params = new URLSearchParams({
            email: "secretary1@antam.com",
            password: "password"
        }).toString();

        try {
            const response = await axios.post(loginUrl, params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            console.log("Login Berhasil:", response.data);
            return response.data;
        } catch (error) {
            console.error("Login Gagal:", error);
        }
    }
};

export default APIAuth;
