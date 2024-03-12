import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { studentList } from "../utils/types"

type props = {
    item: studentList,
    index: number
}
const listItem = ({ item, index }: props) => {
    return (
        <View key={index}
            style={styles.itemContainer}>
            <Text style={styles.schoolNameTxt}>{item.first_name}</Text>
            <Text style={[styles.schoolNameTxt, styles.dbnTxt]}>{item.last_name}</Text>
        </View>
    )
}

export default listItem


const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        backgroundColor: 'lightgray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20
    },
    schoolNameTxt: { marginVertical: 5, color: 'black', fontSize: 18, fontWeight: '600' },
    dbnTxt: { fontSize: 12, fontWeight: '500' }
})