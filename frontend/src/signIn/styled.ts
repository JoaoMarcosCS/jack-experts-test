import { AlignContentProps } from "../signUp/interfaces/align-content-props"
import styled from "styled-components"

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

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: start;
    width:100%;
    flex-direction: column;
    padding: 0 1rem;
`
