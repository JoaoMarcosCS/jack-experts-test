import styled from "styled-components"
import { AlignContentProps } from "./interfaces/align-content-props"

export const Section = styled.section`
    display: flex;
    justify-content:center;
    align-items: center;
    width:100%;
    flex-direction: column;
`
export const Content = styled.div<AlignContentProps>`
    display: flex;
    justify-content: center;
    align-items: ${props => props.align || "left"};
    width:100%;
    flex-direction: column;
    padding: 2rem 1rem;
`
export const Form = styled.form`
    border-radius: 12px;
    padding: 2rem 4rem;
    @media (max-width: 440px) {
        box-shadow: none;
    }

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

export const TextMuted = styled.p`
    font-weight: 600;
    color: hsl(var(--muted-foreground));
`

export const LabelError = styled.p`
    color: #f87171;
    font-size: 0.8;
    font-weight: 600;
`
export const Title = styled.h1`
    font-size: 1.5rem;
    line-height: 2rem ;
    font-weight: 700;
`

export const SecondaryText = styled.p`
    font-weight: 500;
    font-size: 0.8rem;
`