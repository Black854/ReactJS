import React from "react"
import s from "./Paginator.module.css"

type PropsType = {
    updateCurrentPage: (p: number) => void
    pageNumber: number
    totalCount: number
    pageSize: number
}

const Paginator: React.FC<PropsType> = ({updateCurrentPage, pageNumber, totalCount, pageSize}) => {
    let pages = []
    let totalPagesCount = Math.ceil(totalCount / pageSize)
    for (let i=1; i<= totalPagesCount; i++) {
        pages.push(i)
    }
    let curP = pageNumber
    let curPF = ((curP-5) < 0 ) ? 0 : curP - 5
    let curPL = curP +5
    let slicedPages = pages.slice (curPF, curPL)
    return (
        <div className={s.pagesNavigation}>
            { slicedPages.map( p => {
                return <span key={p} onClick={() => {updateCurrentPage(p) }} className={pageNumber === p ? s.activeNumber : ''}>{p}</span>
            }) }
        </div>
    )
}

export default Paginator