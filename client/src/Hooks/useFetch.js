import { useEffect, useState } from "react";

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
