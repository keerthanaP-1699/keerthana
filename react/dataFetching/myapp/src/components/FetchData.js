import React from 'react'
import { fetchUserRequest, fetchUsersSuccess, fetchUsersFailure } from '../redux/action'
import axios from 'axios'
import store from '../redux/store'
import { connect } from 'react-redux' 
import '../App.css'

function FetchData(props) {

    const fetchusers = () => {
        store.dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user)
                store.dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                store.dispatch(fetchUsersFailure(error.message))
            })
        store.subscribe(() => console.log(store.getState()))
    }

    return (
        <div className="app">
            <button className="input-btn" onClick={fetchusers}>fetched data</button>
            <ul>
                {props.UserName.map(user => <li key={user.id}> Name: {user.name}, Email: {user.email}</li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        UserName: state.users
    }
}

export default connect(mapStateToProps)(FetchData)
