import React, {useContext, useMemo, useState} from "react";

import {AuthContext} from "./AuthProvider";
import useFirestore from "../Hooks/useFirestore";


export const AppContext = React.createContext();

function AppProvider({children}) {

    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
    const {user: {uid}} = React.useContext(AuthContext);

    const [selectedRoomId, setSelectedRoomId] = useState('');

    const roomsCondition = React.useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid
        }
    }, [uid])
    const rooms = useFirestore('rooms', roomsCondition);
    const selectedRoom = React.useMemo(
        () => rooms.find((room) => room.id === selectedRoomId) || {},
        [rooms, selectedRoomId]
    );
    const usersCondition = React.useMemo(() => {
        return {
            fieldName: 'uid',
            operator: 'in',
            compareValue: selectedRoom.members
        };
    }, [selectedRoom.members])
    const members = useFirestore('users', usersCondition)
    return (
        <AppContext.Provider value={{
            rooms, isAddRoomVisible, selectedRoomId, setSelectedRoomId, setIsAddRoomVisible, selectedRoom, members,isInviteMemberVisible,setIsInviteMemberVisible
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider