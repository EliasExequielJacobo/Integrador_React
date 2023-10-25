import axios from "axios";
import { BASE_URL } from "../Data/constants";

export const verifyUser = async (email, code) =>{

    try {
        const res = await axios.patch(`${BASE_URL}auth/verify`,{
            email,
            code,
        });

        return res.data;
    } catch (error) {
        // console.log(error);
        return alert(error.response.data.msg)
    }


}