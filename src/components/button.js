import React, { memo } from "react";

import { Button } from "@chakra-ui/react";

export const BulletinButton = memo(function BulletinButton({ label, fontSize, bgImage }) {
    return (
        <Button
            m="1"
            p="6"
            w="100%"
            fontSize={fontSize}
            bgColor="gray.400"
            color="white"
        >
            {label}
        </Button>
    );
});