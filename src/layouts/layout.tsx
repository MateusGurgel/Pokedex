import { ReactNode } from "react"
import Body from "./body"

interface LayoutProps {
    children : ReactNode
}

export default function Layout({ children } : LayoutProps) {
  return (
    <>
      <Body>{children}</Body>
    </>
  )
}