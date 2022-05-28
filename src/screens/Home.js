import React from 'react'
import {View} from 'react-native'
import Form from '../components/Form'
import User from '../components/User'
import ReposList from '../components/ReposList'

const Home = () => {
  return (
    <View>
        <Form />
        <User />
        <ReposList />
    </View>
  )
}

export default Home