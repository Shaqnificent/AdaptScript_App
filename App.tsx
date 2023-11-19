import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from "./app/screen/login";
import Menu from "./app/Editor/Menu";
import Editor from "./app/Editor/Editor";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { AUTH } from "./FirebaseConfig";
import Compiler from "./app/Editor/compiler/Compiler";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
 
function InsideLayout() {
    return (
        <InsideStack.Navigator initialRouteName="Menu">
            <InsideStack.Screen name="Editor" component={Editor}/>
            <InsideStack.Screen name="Menu" component={Menu}/>
            <InsideStack.Screen name="Compiler" component={Compiler}/>
        </InsideStack.Navigator>
    )
}

export default function App() {
    const [user, setUser] = useState<User | null> (null)

    useEffect(()=> {
        onAuthStateChanged(AUTH, (user)=> {
            console.log('user', user);
            setUser(user)
        });
    }, [])
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
            {user? (
                <Stack.Screen name="Inside" component={InsideLayout}options={{headerShown: false}} />
            ): (
                <Stack.Screen name="Login" component={Login}options={{headerShown: false}} />
            )}
            
        </Stack.Navigator>
       </NavigationContainer>
    )
}