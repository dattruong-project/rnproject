import { View, FlatList } from "react-native"
import { SizedBox, TextWrapper } from "../../../../shared/components"
import { Book } from "../../../../model/book"
import React from "react"
import createHomeStyles from "../../homeScreen.style"
import { SafeAreaView } from "react-native-safe-area-context"
import useLocalizedStrings from "../../../../providers/language/useLocalizedStrings"

type BookProps = {
    data: [Book]
}

const BookLs: React.FC<BookProps> = ({ data }) => {
   const styles = createHomeStyles();
   const strings = useLocalizedStrings();

    return <>
        <SafeAreaView style={styles.container}>
            <TextWrapper style={{fontSize: 20}}>{strings["thatBook"]}</TextWrapper>
            <SizedBox dimens={20}/>
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style = {styles.item}>
                        <TextWrapper>{item.id}</TextWrapper>
                        <TextWrapper>{item.name}</TextWrapper>
                    </View>
                )}
            />
        </SafeAreaView>
    </>
}

export default BookLs;