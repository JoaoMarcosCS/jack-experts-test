import styled from "styled-components"

export const Content = styled.section`
    display: flex;
    justify-content:center;
    align-items: center;
    width:100%;
    flex-direction: column;
`

export const InputField = styled.div`
    display:flex;
    flex-direction: column;
    padding:1rem 2rem;
    gap:10px;
    justify-content: start;
    margin-top: 1rem;
`

export const Label = styled.label`
    font-size: 0.9rem;
    font-weight: 500;
    color: hsl(var(--muted-foreground));
`

export const Input = styled.input`
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);;
    padding: 0.5rem;
    border: 1px solid ;
    --tw-border-opacity: 1;
    border-color: rgb(254 243 199 / var(--tw-border-opacity));
    outline: none;
    border-radius: 8px;
`

export const ButtonField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    margin-top: 2rem;
`
