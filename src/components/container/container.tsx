import { ReactNode } from "react"
import "./container.scss"
interface ContainerProps {
children: ReactNode, 
}
export const Container =({children}: ContainerProps) => (
    <div className="container">
{children}
    </div>
) 