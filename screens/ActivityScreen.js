import React from 'react'
import { Text, View } from 'react-native'

class ActivityScreen extends React.Component {

    static navigationOptions = {
        title: 'Account Activity'
    }
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return <View>
            <Text>Hello Activity Screen</Text>
        </View>
    }
}

export default ActivityScreen