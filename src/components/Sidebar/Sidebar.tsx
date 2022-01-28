import React, { Dispatch } from 'react'
import { SetStateAction } from 'react'

type sidebarProps = {
    cartOpen: boolean;
    setCartOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.VFC<sidebarProps> = ({ cartOpen, setCartOpen }) => {
    return (
        <div className="top-0 right-0 w-[35vw] bg-green-200 p-10 pl-20 text-white fixed h-full">
            <h1>たまごたまご</h1>
        </div>
    )
}

export default Sidebar
