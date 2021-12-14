import React, {useState, useEffect} from 'react'
import { VStack, Flex, Heading, Input, Textarea, Button } from "@chakra-ui/react";



export const TravelNoteForm = ({
    handleAddTravelNote
}) => {
    const [enableButton, setEnableButton] = useState(false);

    useEffect(() => {
        fetch('https://koedo.cod.coralrf.app/hello')
        .then(res => res.json())
        .then(data => {
            if(data) setEnableButton(true)
        })
    },[]);
    
    return (
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
                <Button
                    m="4"
                    mr="0"
                    colorScheme="teal"
                    isDisabled={!enableButton}
                    onClick={handleAddTravelNote}
                >
                    お墨付き投稿
                </Button>
                <Button
                    m="4"
                    onClick={handleAddTravelNote}
                >
                    投稿
                </Button>
            </Flex>
        </VStack>
    )
};