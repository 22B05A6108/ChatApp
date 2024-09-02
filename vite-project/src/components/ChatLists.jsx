import React from 'react'

const ChatLists = () => {
    function SenderChat () {
        return (
        <div>
            <img src="https://picsum.photos/id/237/200/300 " alt="" />
            <p>
                <strong>Priya</strong>
                message
            </p> 
        </div>
        )
    }
    function RecieverChat () {
        return (
        <div>
            <img src="https://picsum.photos/id/237/200/300np " alt="" />
            <p>
                <strong>Manvitha</strong>
                message
            </p> 
        </div>
        )
    }
    return (
    <div>
        <SenderChat />
        <RecieverChat />
    </div>
    )
}
export default ChatLists