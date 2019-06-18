import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux'
import { Loading } from './Loading';
import { Store } from '../Store'
import { storeUsers, storeUserInfo } from '../Redux/Actions';

const { dispatch } = Store

class Main extends Component {
    constructor() {
        super();
        this.state = {
            users: '',
            getdata: false,
            loading: true,
        }
    }

    componentDidMount() {
        Axios('https://api.github.com/users')
            .then(res =>{
                Store.dispatch(storeUsers(res.data))
                this.setState({
                    users: res.data,
                    getdata: true,
                    loading: false
                })
            }
                
            )
            .catch(err => console.log(err))
    }

    handleUserInfo = (e, user) => {
        e.preventDefault();
        console.log(user, 'user name', e)
        dispatch(storeUserInfo(user))
        this.props.history.push(`/profile/${user.login}`)
    }


    render() {
        const { getdata, loading } = this.state
        const { users } = this.props

        if(loading) {
            return <Loading />
        }
        return (
            <div className="p-5 overflow-hidden">
                {getdata ? <div className="container">
                    {users.map(user => (
                        <div className="userimg" key={user.id} onClick={(e) => this.handleUserInfo(e, user)}>
                            <div className="user-profile">
                                <img src={user.avatar_url} alt="user_profile" width="100%" />
                            </div>
                            <h5>{user.login}</h5>
                        </div>
                    ))}
                </div> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state
    }
    
}

export default connect(mapStateToProps) (Main)
