import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,MaterialIcons,Entypo  } from '@expo/vector-icons';
import Chats from '../screens/main/chats/Chats';
import Calls from '../screens/main/calls/Calls';
import NewMsg from '../screens/main/new-message/NewMsg';
import Contacts from '../screens/main/contacts/Contacts';
import Settings from '../screens/main/settings/Settings';




const Tab = createBottomTabNavigator();

const MainRoutes = () => {
  return (
    <Tab.Navigator 
    //   initialRouteName="Feed"
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: '#FFB81A',
        tabBarInactiveTintColor: '#273253',
        tabBarLabelStyle:{marginBottom: 0},
        tabBarStyle:{backgroundColor:'#060A16',
        height:"7%",
    },
      }}
    >
      <Tab.Screen 
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-sharp" size={24} color={color} />
            )
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" size={24} color={color} />
            )
        }}
      />
      
      <Tab.Screen
        name=" "
        component={NewMsg}
        options={{
            
            // tabBarStyle:{
            //     backgroundColor:"yellow",
            //     padding:20
            // },
            tabBarIconStyle:{
                backgroundColor: '#FFB81A',
                height: 60,
                width: 60,
                borderRadius:100,
                position: 'absolute',
                top: -20
               
            },
            tabBarIcon: ({ color, size }) => (
                <Entypo name="new-message" size={20} color='#273253' />
            )
        }}
      />

      
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({ color, size }) => (
              
            <MaterialIcons name="contacts" size={24} color={color} />
            )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={24} color={color} />
            )
        }}
      />
    </Tab.Navigator>
  );
} 

export default MainRoutes;