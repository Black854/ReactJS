import React from "react"
import s from "./Paginator.module.css"
import { Pagination } from "antd"
import { useDispatch } from "react-redux"
import { getUsersTC, usersActions } from "../../../redux/users-reducer"

type PropsType = {
    updateCurrentPage: (p: number) => void
    pageNumber: number
    totalCount: number
    pageSize: number
}

const Paginator: React.FC<PropsType> = ({updateCurrentPage, totalCount, pageSize}) => {
    let dispatch = useDispatch()
    return (
        <Pagination
            total={totalCount}
            showSizeChanger={(true)}
            defaultPageSize={pageSize}
            onShowSizeChange={(number, size) => {
                dispatch(usersActions.setPageSize(size))
                //@ts-ignore
                dispatch(getUsersTC(pageSize, number))
                console.log('Обновили state:' + size)
            }}
            showQuickJumper
            showTotal={(total) => `Всего ${total} человек`}
            onChange={(p) => updateCurrentPage(p)}
        />
    )
}

export default Paginator