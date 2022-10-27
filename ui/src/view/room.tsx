import { useParams } from "react-router-dom"
import { useEffect } from 'react';

export const Room = () => {

    const { roomName } = useParams()

    useEffect(() => {}, [roomName])

    return <>{roomName}</>
}