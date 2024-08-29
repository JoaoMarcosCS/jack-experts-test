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
`

export const Label = styled.label`
    font-size: 0.9rem;
    font-weight: 500;
    color: hsl(var(--muted-foreground));
`