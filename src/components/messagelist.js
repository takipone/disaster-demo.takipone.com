import { List } from "@chakra-ui/react";
import { Message } from "./message";

export const MessageList = ({
    messageList,
}) => {
    return (
        <>
            {messageList.length !== 0 &&(
                <List w="full" borderWidth='1px' borderRadius='lg' overflow='hidden' bgColor="white">
                    {messageList.map((message,i) => (
                        <Message key={i}
                            message={message}
                        />
                    ))};
                </List>
            )}
        </>
    )
}