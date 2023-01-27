import { FetchMethods } from "./types";

export const get = async (url: string, options?: RequestInit) => {
    const requestOptions = {
        method: FetchMethods.get,
        headers: { "Content-Type": "application/json" },
        ...options,
    };

    return fetch(url, requestOptions).then((res) => res.json());
};

export const post = async (url: string, body: any, options?: RequestInit) => {
    const requestOptions = {
        method: FetchMethods.post,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        ...options,
    };

    return await fetch(url, requestOptions).then((res) => res.json());
};

export const deleteItem = async (
    url: string,
    body: any,
    options?: RequestInit
) => {
    const requestOptions = {
        method: FetchMethods.delete,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        ...options,
    };

    return await fetch(url, requestOptions).then((res) => res.json());
};
