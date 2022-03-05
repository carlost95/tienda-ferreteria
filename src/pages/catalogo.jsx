import { Fragment } from "react"
import { ItemDetailContainer } from "../components/itemDetailContainer"
import { ItemList } from "../components/itemList"
import { ItemListContainer } from "../components/itemListContainer"

export const Catalogo = () => {
    return (
        <>
            <ItemListContainer greeting={"Te presentamos nuestro catalogo"} />
        </>)
}