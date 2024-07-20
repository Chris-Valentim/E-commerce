'use client'
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho"

const Layout = (props: any) => {
  return (
    <ProvedorCarrinho>
      {props.children}
    </ProvedorCarrinho>
  )
}

export default Layout