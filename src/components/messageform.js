import { VStack, Flex, Stack, Input, Textarea, Button, Tooltip, useDisclosure } from "@chakra-ui/react";

import { SuggestCertifiedCommentModal } from "./modal";

export const MessageForm = ({
    nameElement,
    titleElement,
    descriptionElement,
    handleAddMessage
}) => {
    const { isOpen, onClose } = useDisclosure();
    
    return (
        <>
            <VStack spacing={1} mt="1" p="1" w="full" borderWidth='1px' borderRadius='lg' overflow='hidden' bgColor="white">
                <Input
                    placeholder="お名前"
                    mt="2"
                    m="1"
                    ref={nameElement}
                />
                <Input
                    placeholder="状況(無事です、自宅です、避難所です など)"
                    mt="2"
                    ref={titleElement}
                />
                <Textarea
                    placeholder="伝言(元気です、〇〇がありません など)"
                    mt="2"
                    ref={descriptionElement}
                />
                <Flex pb="20">
                    <Tooltip hasArrow label='避難所のWi-Fi APから自動投稿できるアプリあります' bg='gray.50' color='black' p={3}>
                        <Stack>
                            <Button
                                mt="4"
                                p="6"
                                colorScheme="teal"
                                onClick={handleAddMessage}
                            >
                                投稿
                            </Button>
                        </Stack>
                    </Tooltip>
                </Flex>
            </VStack>
            <SuggestCertifiedCommentModal isOpen={isOpen} onClose={onClose} />
        </>
    )
};