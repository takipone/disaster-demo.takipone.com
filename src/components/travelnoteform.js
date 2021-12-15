import React, {useState, useEffect} from 'react'
import { VStack, Flex, Stack, Heading, Input, Textarea, Button, Tooltip, useDisclosure } from "@chakra-ui/react";

import { SuggestCertifiedCommentModal } from "./modal";

export const TravelNoteForm = ({
    handleAddTravelNote
}) => {
    const [enableButton, setEnableButton] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        onOpen();
        fetch('https://koedo.cod.coralrf.app/hello')
        .then(res => {
            if(res.ok) setEnableButton(true)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },[]);
    
    return (
        <>
            <VStack spacing={1} p="1">
                <Heading as="h2" size='md' mt="16px">旅人のこえ</Heading>
                <Input
                    placeholder="お名前"
                    mt="2"
                    m="1"
                />
                <Input
                    placeholder="SNSのID"
                    mt="2"
                />
                <Textarea
                    placeholder="旅の感想を入力ください"
                    mt="2"
                />
                <Flex>
                    <Tooltip hasArrow label='現地のWi-Fi APで使えます' bg='gray.300' color='black'>
                        <Stack>
                            <Button
                                m="4"
                                mr="0"
                                colorScheme="teal"
                                isDisabled={!enableButton}
                                onClick={handleAddTravelNote}
                            >
                                お墨付き投稿
                            </Button>
                        </Stack>
                    </Tooltip>
                    <Button
                        m="4"
                        onClick={handleAddTravelNote}
                    >
                        投稿
                    </Button>
                </Flex>
            </VStack>
            <SuggestCertifiedCommentModal isOpen={isOpen} onClose={onClose} />
        </>
    )
};