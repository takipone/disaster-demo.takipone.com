import React, { memo } from "react";

import { Button } from "@chakra-ui/react";

export const KoedoButton = memo(function KoedoButton({ label, fontSize, bgImage }) {
    return (
        <Button
            m="1"
            p="10"
            isFullWidth="true"
            align="center"
            fontSize={fontSize}
            bgImage={bgImage}
            bgSize="cover"
            bgPosition="center"
            color="white"
            _hover={{ opacity: 0.7 }}
        >
            {label}
        </Button>
    );
});