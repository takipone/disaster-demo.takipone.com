import React, { memo } from "react";

import { Heading } from "@chakra-ui/react";

export const Title = memo(function Title({ icon, title, as, fontSize, mt, mb }) {
    return (
        <Heading
            m="0"
            p="5"
            w="full"
            as={as}
            fontSize={fontSize}
            align="center"
            color="white"
//            fontFamily="Serif"
            fontWeight="medium"
            bgColor="green.400"
        >
            {icon}&nbsp;{title}
        </Heading>
    );
});