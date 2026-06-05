import {useUser} from "../../hooks/useUser";
import {useRouter} from "expo-router";
import {useEffect} from "react";
import {View} from "react-native";
import ThemedLoader from "../ThemedLoader";

const UserOnly = ({children}) => {
    const {user, authState} = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authState === "unauthenticated") {
            router.replace("/(auth)/login")
        }
    },
    [user, authState])

    if (authState === "loading")
        return (
            <View>
                <ThemedLoader/>
            </View>
        );

    return children
}
export default UserOnly