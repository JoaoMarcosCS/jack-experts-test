import { FormSignUp } from "./components/FormSignUp"
import { Content } from "./styled"

export const SignUp = () => {
    return (
        <Content>
            <div className="w-full flex justify-start pl-4 pt-4">
                <h1 className="text-5xl font-bold text-amber-400">Task</h1>
            </div>

            <FormSignUp/>

            <div className="w-full flex justify-center">
               <p> Projeto FullStack desenvolvido por João Marcos</p>
            </div>
        </Content>
    )
}