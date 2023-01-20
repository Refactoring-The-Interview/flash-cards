import { useState, useEffect } from "react";
import { isEqual } from "lodash";

export enum StorageKey {
    loggedIn = "loggedIn",
    questionBank = "questionBank",
    userInfo = "userInfo",
    filteredQuestionBank = "filteredQuestionBank",
    currentQuestion = "currentQuestion",
}

function getStorageValue(key: StorageKey, defaultValue?: any) {
    const saved = localStorage.getItem(key) as any;
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

export const useLocalStorage = (key: StorageKey, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    const setStorage = (value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newValue = getStorageValue(key);

            if (!isEqual(newValue, value)) {
                setValue(newValue);
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [defaultValue, key, value]);

    return [value, setStorage];
};
