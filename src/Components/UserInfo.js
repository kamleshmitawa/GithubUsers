import React from 'react';
import { Loading } from './Loading';
import { Store } from '../Store';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const { dispatch } = Store

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }


    render() {
        const { loading } = this.state
        const { user } = this.props
        const { id, organizations_url, repos_url, url, subscriptions_url, starred_url, site_admin, avatar_url, events_url, followers_url, following_url, gists_url } = user
        console.log(user, 'user info.....')

        if (loading) {
            return <Loading />
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <h5> Full Description</h5>
                        <p>{id}</p>
                        <img src={avatar_url} className="rounded-circle" width="150px" />
                    </div>
                    <div className="col-lg-6">
                        <h5>My Organizations</h5>
                        <a href={organizations_url}><i className="fa fa-sitemap" aria-hidden="true"></i></a>
                        <p>My Repository</p>
                        <a href={repos_url}>repo</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    console.log(store, 'store user')
    return {
        user: store
    }
}

export default connect(mapStateToProps)(UserInfo)