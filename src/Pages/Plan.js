import React from 'react';
import { View, TextInput, Text, StyleSheet, Button, Alert, StatusBar, Pressable, TouchableWithoutFeedback } from 'react-native';
// import Thankyou from './Thankyou';
const Plan = () => {
    const [IsSelected, setIsSelected] = React.useState(false)
    const [packages, setPackages] = React.useState([
        { name: 'Monthly', amount: '5000', selected: false },
        { name: 'Quarterly', amount: '20,000', selected: false },
        { name: 'Half Yearly', amount: '30,000', selected: false },
        { name: 'Annually', amount: '20,000', selected: false },
    ])
    const [list, setList] = React.useState(['Lorem ipsum is simply dummy', 'printing and typesetting industry', 'Lorem Ipsum has been the industry', 'Industries standard dummy text ever since'])
    function onSelectPackage(index) {
        packages[index].selected = true;
        setPackages((prevState) => ([
            ...prevState
        ]))
    }
    return (
        <View style={style.outer}>
            <StatusBar backgroundColor="#ffc40c" barStyle="dark-content" />

            <Text style={style.package}>Sliver</Text>

            <View style={style.container}>
                {packages.map((data, index) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => onSelectPackage(index)}>
                            <View style={[style.packageType, data.selected ? { borderColor: "#ffc40c", borderWidth: 2 } : { backgroundColor: '#F8F8F8' }]}>
                                <Text style={style.duration}>{data.name}</Text>
                                <Text style={style.amount}>{'\u20B9'}{data.amount}</Text>
                            </View>
                        </TouchableWithoutFeedback>)
                })}
            </View>

            <View style={style.para} >
                {list.map((data,index) => {
                    return (
                        <View style={style.ul} key={index}>
                            <View style={style.bullet}></View>
                            <Text style={style.li}>{data}</Text>
                        </View>
                    )
                })}
            </View>

            <View style={{ height: '40%', justifyContent: 'center' }}>
                <Text style={style.cash}>{'\u20B9'} 5,000</Text>
            </View>


            <Pressable style={style.button} onPress={() => { test() }}>
                <Text style={style.btnText}>PAYMENT</Text>
            </Pressable>
        </View>
    );
};

const style = StyleSheet.create({
    outer: {
        backgroundColor: 'white',
        height: '100%',
        padding:18
    },
    package: {
        fontWeight: 'bold',
        fontSize: 25,
        // padding: 10,
        color: "black",
        height: '10%',
    },
    packageType: {
        backgroundColor: 'white',
        width: '23%',
        height: 100,
        alignItems: 'center',
        fontWeight: 'bold',
        borderRadius: 6,
        justifyContent: 'center'
    },
    duration: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    amount: {
        color: "#ffc40c",
        padding: 6,
        fontWeight: 'bold'
    },
    cash: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 6,
        fontSize: 30,
        fontWeight: "bold",
        height: '15%',
    },
    para: {
        height: '25%',
        padding: 5,
    },
    ul: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2
    },
    bullet: {
        height: 12,
        width: 12,
        borderRadius: 50,
        backgroundColor: '#ffc40c'
    },
    li: {
        textAlign: 'center',
        paddingLeft: 10,
        fontSize: 17
    },
    button: {
        // justifyContent: 'center',
        width: "100%",
        height: '7%',
        backgroundColor: '#ffc40c',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3%'
    },
    btnText:{ 
        color: 'white', 
        fontSize: 22, 
        fontWeight: 'bold' 
    }
});

export default Plan;
