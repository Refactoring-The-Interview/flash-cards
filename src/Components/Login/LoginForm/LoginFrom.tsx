import { Button, Form, FormGroup } from "react-bootstrap";
import { FormInput } from "../../AddQuestionForm/FromInput/FormInput";
import { StorageKey, useLocalStorage } from "../../LocalStorage/LocalStorage";
import { useState } from "react";

export const LoginForm = () => {
    const [, setUserInfo] = useLocalStorage(StorageKey.userInfo, {
        email: "",
        password: "",
    });
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <Form
            onSubmit={() => {
                setUserInfo({
                    email: email,
                    password: password,
                });
            }}
        >
            <FormGroup>
                <FormInput value={email} setValue={setEmail} title={"Email"} />

                <FormInput
                    value={password}
                    setValue={setPassword}
                    title={"password"}
                    type="password"
                />
            </FormGroup>

            <Button type="submit" variant="outline-primary">
                Login
            </Button>
        </Form>
    );
};
