import React, { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import listItem from '../components/listItem';
import { getStudentList } from '../api';
import { studentList } from '../utils/types';
const { height } = Dimensions.get('window');

const ListView = () => {
    const [loader, setLoader] = useState<boolean>(false);
    const [studentData, setStudentData] = useState<studentList[]>([]);
    let pageRef = useRef<number>(1);
    useEffect(() => {
        setLoader(true);
        // API call
        getStudentList(pageRef.current).then(response => {
            setLoader(false);
            setStudentData(response); // Data store in state for the disaply
        });
    }, []);
    return (
        <>
        <StatusBar/>
        <SafeAreaView style={styles.center}>
            {!loader && studentData.length > 0 ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ width: '100%',marginTop:10 }}
                    data={studentData}
                    renderItem={listItem}
                />
            ) : (
                <View
                    style={styles.loaderContainer}>
                    <ActivityIndicator size={20} color={'white'}></ActivityIndicator>
                </View>
            )}
        </SafeAreaView></>
    );
};

const styles = StyleSheet.create({
    center: {
        width: '100%',
        height: height,
        paddingHorizontal: 20,
    },
    loaderContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ListView;
