import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const withRouter = (Component) => {
    return (props) => {
        const match = {params: useParams(), location: useLocation(), navigate: useNavigate()}
        return <Component {...props} match={match} />
    }
}