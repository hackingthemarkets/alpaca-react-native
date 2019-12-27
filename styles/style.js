import { StyleSheet }  from 'react-native';

export const colors = {
    green: '#2e6a49',
    red: 'red'
}

export const dashboardStyle = StyleSheet.create({
    account: {
        margin: 15
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 20,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    scoreboardItem: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 110,
        borderRadius: 10,
     },
    up: {
        backgroundColor: colors.green
    },
    down: {
        backgroundColor: colors.red
    },
    scoreboardText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#404040',
        marginTop: 5
    },
    value: {
        fontSize: 16,
        paddingTop: 5
    },
    scoreboard: {},
    positions: {
        margin: 0
    },
    row: {
        elevation      : 1,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#f1f1f1',
        borderColor: 'green',
        flex           : 1,
        flexDirection  : 'row',  // main axis
        justifyContent : 'flex-start', // main axis
        alignItems     : 'center', // cross axis
        paddingTop     : 10,
        paddingBottom  : 10,
        paddingLeft    : 18,
        paddingRight   : 16,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    rowLeftCell: {
        flex: 4
    },
    rowRightCell: {
        flex: 1,
    },
    rowSymbolCell: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#404040'
    },
    rowSymbolSubtitleCell: {
        color: '#404040'
    },
    rowPriceCell: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
    },
    rowChangeCell: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowChangePercent: {
        color: 'green',
        marginLeft: 5,
        fontSize: 16
    },
    container   : {
        marginTop: 14,
        alignSelf: "stretch",
    },
});