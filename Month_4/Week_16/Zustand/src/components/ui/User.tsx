import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {UserIcon} from "lucide-react";
import {useStore} from "@/store/store.ts";
import {useShallow} from "zustand/react/shallow";
import type {Store} from "@/types/store.ts";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useEffect} from "react";

export function User() {
    const { setAddress, address, fullName, userName, fetchUser } = useStore(
        useShallow((state: Store) => ({
            setAddress: state.setAddress,
            address: state.address,
            fullName: state.fullName,
            userName: state.userName,
            fetchUser: state.fetchUser
        }))
    )

    useEffect(() => {
        async function fetchData() {
            await fetchUser();
        }
        fetchData();
    }, [fetchUser]);

    return (
        <Popover>
            <PopoverTrigger>
                <Button variant="secondary" size="icon">
                    <UserIcon/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="overflow-y-scroll space-y-2 w-96">
                <div className="flex items-center gap-2">
                    <p>{fullName}</p>
                    <p className="text-sm">{userName}</p>
                </div>

                <Label htmlFor="address">Your Address: </Label>
                <Input
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

            </PopoverContent>
        </Popover>
    );
}