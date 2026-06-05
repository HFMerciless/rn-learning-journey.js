import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {View} from "react-native";
import ThemedLoader from "../ThemedLoader";

const GuestOnly = ({ children }) => {
    const { authState } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authState === "authenticated") {
            console.log("🛡️ Guest Guard: Logged-in session detected. Routing to dashboard...");
            router.replace("/(dashboard)/books");
        }
    }, [authState]);

    if (authState === "loading" || authState === "idle") {
        return (
            <View>
                <ThemedLoader/>
            </View>
        )
    }

    return children;
};

export default GuestOnly;