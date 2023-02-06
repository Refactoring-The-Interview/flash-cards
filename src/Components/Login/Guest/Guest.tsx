import { Button } from "react-bootstrap";
import { StorageKey, useLocalStorage } from "../../LocalStorage/LocalStorage";

export const Guest = () => {
    const [, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });

    return (
        <Button
            variant="outline-primary"
            onClick={() => {
                setUserInfo({
                    email: "GuestUser@FlashCards.com",
                    password: "GuestPass",
                });
            }}
        >
            Continue as Guest
        </Button>
    );
};
