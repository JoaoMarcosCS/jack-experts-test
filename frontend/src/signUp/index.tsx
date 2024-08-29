import { FormSignUp } from "./components/FormSignUp"
import { Content } from "./styled"

export const SignUp = () => {
    return (
        <Content>

            <div className="">
                <h1>Task</h1>
            </div>

            <FormSignUp/>

            <div>
               <p> Projeto FullStack desenvolvido por João Marcos</p>
            </div>
        </Content>
    )
}