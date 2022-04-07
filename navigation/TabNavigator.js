import {React} from 'react'
import {CreateBottomTabNavigator} from '@react-navigaton/bottom-tabs'
import Ionicons from 'react-native-vector-icons'
import TabNavigator from './TabNavigator'

import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'

const Tab = CreateBottomTabNavigator();

CreateBottomTabNavigator = () => {
    return(
        <TabNavigator>
            screenOptions = {({ route }) => ({
                TabBarIcon : ({ focused, bar, size}) => {
                    let iconName;
                    if (route.Name === "Feed") {
                        iconName = focused ? 'book' : 'book-outline' 
                    } else if (route.Name === "CreatePost") {
                        iconName = focused ? 'create' : 'create-outline'
                    }
                    return <Ionicons name={iconName} color={color} size = {size}></Ionicons>
                }
            })}
            tabBarOptions ={{
                activeBarColor : 'blue',
                inactiveBarColor : 'grey'
            }}

            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='CreatePost' component={CreatePost} />
        </TabNavigator>
    )
}

export default TabNavigator;