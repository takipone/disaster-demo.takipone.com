import { ListItem, Box, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const Message = ({
    message
}) => {
    return (
        <ListItem borderBottomWidth='1px'>
            <Box p='6'>
                <Box
                    display='flex'
                    alignItems='baseline'
                >
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        fontSize='s'
                        ml='2'
                    >
                        {message.author}
                    </Box>
                    <Box
                        color='gray.500'
                        fontSize='xs'
                        ml='2'
                    >
                        @{message.date}
                    </Box>
                    <Box ml='auto'>
                        <StarIcon color={message.certified ? 'teal.300' : 'gray.100'} />
                    </Box>
                </Box>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {message.title}
                </Box>
                <Box
                    mt='1'
                    lineHeight='tight'
                    fontSize='xs'
                >
                    {message.description}
                </Box>
            </Box>
        </ListItem>
    )
};