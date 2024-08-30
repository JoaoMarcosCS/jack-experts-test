import { FormSignUp } from "./components/FormSignUp"
import {  Section } from "./styled"

export const SignUp = () => {
    return (
        <Section>
            <div className="w-full flex justify-start pl-4 pt-4 mb-10">
                <h1 className="text-5xl font-bold text-amber-400">Task</h1>
            </div>

            <FormSignUp/>
        </Section>
    )
}