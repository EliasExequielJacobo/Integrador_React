import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useRedirectPurchase = (redirectTo) =>{
    const {currentUser} = useSelector(state => state.user)

    const navigate = useNavigate();

    useEffect(() =>{
        if (!currentUser) {
            navigate(redirectTo);
        }
    }, [currentUser, redirectTo]);

};

export default useRedirectPurchase;