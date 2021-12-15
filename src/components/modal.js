import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'

export const SuggestCertifiedCommentModal = ({
    isOpen,
    onClose
}) => {
    return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>現地に行ってお墨付き投稿しよう！</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                現地にあるWi-Fiアクセスポイントに接続すると、現地限定のお墨付き(★マーク付き)投稿ができます！ぜひ現地からレポートしてみてください！
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='red' variant='outline' mr={3} onClick={onClose}>
                    閉じる
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    )
};