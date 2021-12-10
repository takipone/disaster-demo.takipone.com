import { ListItem, Box, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const TravelNote = ({
    travelNote
}) => {
    return (
        <ListItem borderBottomWidth='1px'>
            <Box p='6'>
                <Box
                    display='flex'
                    alignItems='baseline'
                >
                    <Badge borderRadius='full' px='2' colorScheme='yellow'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        fontSize='s'
                        ml='2'
                    >
                        {travelNote.author}
                    </Box>
                    <Box
                        color='gray.500'
                        fontSize='xs'
                        ml='2'
                    >
                        @{travelNote.nickname}
                    </Box>
                    <Box ml='auto'>
                        <StarIcon color={travelNote.certified ? 'teal.300' : 'gray.100'} />
                    </Box>
                </Box>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {travelNote.title}
                </Box>
                <Box
                    mt='1'
                    lineHeight='tight'
                    fontSize='xs'
                >
                    {travelNote.description}
                </Box>
            </Box>
        </ListItem>
    )
};