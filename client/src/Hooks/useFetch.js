import { useEffect, useState } from "react";
import loginApi from "../Api/LoginAPI";

export const useFetch = () => {
    //render value

    const userLogin = async () => {

    };

    useEffect(() => {
        try {
            userLogin()
        } catch (e) {
            console.log(e);
        }
    }, []);

    return {

    };
};
