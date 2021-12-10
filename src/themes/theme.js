import { extendTheme } from "@chakra-ui/react";
import { ThemeContext } from "@emotion/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "red.50",
                color: "gray.700"
            },
            p: {
                fontSize: { base: "md", md: "lg" },
                lineHeight: "tall"
            }
        }
    }
});

export default theme;