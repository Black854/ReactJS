import { useParams } from 'react-router-dom';

export const withRouter = (Component) => {
    return (props) => {
        const match = {params: useParams()};
        return <Component {...props} match={match} />
    }
}