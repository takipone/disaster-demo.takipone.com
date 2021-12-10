import { List } from "@chakra-ui/react";
import { TravelNote } from "./travelnote";
import { TravelNoteForm } from "./travelnoteform";

export const TravelNoteList = ({
    travelNoteList,
}) => {
    return (
        <>
            {travelNoteList.length !== 0 &&(
                <List w="full" borderWidth='1px' borderRadius='lg' overflow='hidden' bgColor="white">
                    {travelNoteList.map((travelNote) => (
                        <TravelNote
                            travelNote={travelNote}
                        />
                    ))};
                    <TravelNoteForm />
                </List>
            )}
        </>
    )
}