/*

Question 2:

Create a profile form that will take in 4 fields.
1. Name - No numbers
2. Age - Only numbers
3. DOB - Must be valid date in the past
4. Description - Required field, no limitation other than must be required

I want these fields to be intuitive and to use semantic HTML. When you submit these they should console log if all the fields pass validation, otherwise display error messages.

start: 2:55
end: 3:40

googles: semantic html

*/

import { ProfileForm } from "./ProfileForm";

export const SelfInterviewTwo = () => {
    return (
        <main>
            <header>
                <h3>Profile From</h3>
            </header>
            <article>
                <ProfileForm />
            </article>
        </main>
    );
};
