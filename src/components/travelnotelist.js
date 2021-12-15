import { List } from "@chakra-ui/react";
import { TravelNote } from "./travelnote";

export const TravelNoteList = ({
    travelNoteList,
}) => {
    return (
        <>
            {travelNoteList.length !== 0 &&(
                <List w="full" borderWidth='1px' borderRadius='lg' overflow='hidden' bgColor="white">
                    {travelNoteList.map((travelNote,i) => (
                        <TravelNote key={i}
                            travelNote={travelNote}
                        />
                    ))};
                </List>
            )}
        </>
    )
}