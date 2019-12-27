import React from 'react'
import { FlatList, Text, View } from 'react-native'
import alpacaApi from '../services/alpaca'
import polygonApi from '../services/polygon'
import { dashboardStyle } from '../styles/style'
import { Ionicons } from '@expo/vector-icons'
import NumberFormat from 'react-number-format'

class DashboardScreen extends React.Component {

    static navigationOptions = {
        title: 'Dashboard',
        headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#2F95D6',
          },
          headerTitleStyle: {
            fontSize: 18,
          },
    }

    constructor(props) {
        super(props)

        this.state = {
            buying_power: 0,
            cash: 0,
            long_market_value: 0,
            portfolio_value: 0,
            positions: []
        }
    }

    componentDidMount() {
        console.log('fetch data from alpaca')

        const polygon = polygonApi()

        const indices = ['DIA', 'SPY', 'QQQ', 'IWM']
        
        indices.map((symbol) => {
            polygon.getQuote(symbol).then((response) => {
                console.log(response)
                const newState = {}

                newState[symbol] = response.data.ticker.lastTrade.p.toFixed(2)
                this.setState(newState)
            })
        })


        const alpaca = alpacaApi()

        alpaca.getAccount().then((accountResponse) => {
            console.log(accountResponse)

            if (accountResponse.ok) {
                alpaca.getPositions().then((positionsResponse) => {
                    console.log(positionsResponse)
        
                    if (positionsResponse.ok) {
                        this.setState({
                            buying_power: accountResponse.data.buying_power,
                            long_market_value: accountResponse.data.long_market_value,
                            portfolio_value: accountResponse.data.portfolio_value,
                            cash: accountResponse.data.cash,
                            positions: positionsResponse.data
                        })
                    }
                })
            }
            
        })
    }

    renderRow = ({item, sectionId, rowId}) => {
        return (
            <View key={item.asset_id} style={dashboardStyle.row} >
                <View style={dashboardStyle.rowLeftCell}>
                    <Text style={dashboardStyle.rowSymbolCell}>{item.symbol}</Text>
                    <Text style={dashboardStyle.rowSymbolSubtitleCell}>{item.qty} @ {item.avg_entry_price}</Text>
                </View>

                <View style={dashboardStyle.rowRightCell}>
                    <Text style={dashboardStyle.rowPriceCell}>{item.current_price}</Text>
                    <View style={dashboardStyle.rowChangeCell}>
                        <Ionicons name="md-arrow-dropup" size={32} color="green" />
                        <Text style={dashboardStyle.rowChangePercent}>{parseFloat(item.change_today * 100).toFixed(2)}%</Text>
                    </View>

                </View>
            </View>
        )
    }

    render() {
        return <View style={{flex: 1, flexDirection: 'column'}}>

            <Text style={dashboardStyle.heading}>Account</Text>

            <View style={[{flex: 2, flexDirection: 'row'}, dashboardStyle.account]}>
                <View style={{flex: 1}}>
                    <Text style={dashboardStyle.label}>
                        Buying Power
                    </Text>
                    <Text style={dashboardStyle.value}>
                        {this.state.buying_power}
                    </Text>
                    <Text style={dashboardStyle.label}>
                        Market Value
                    </Text>
                    <Text style={dashboardStyle.value}>
                        {this.state.long_market_value}
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={dashboardStyle.label}>
                        Portfolio Value
                    </Text>
                    <Text style={dashboardStyle.value}>
                        {this.state.portfolio_value}
                    </Text>
                    <Text style={dashboardStyle.label}>Cash</Text>
                    <Text style={dashboardStyle.value}>
                        {this.state.cash}
                    </Text>
                </View>
            </View>


            <Text style={dashboardStyle.heading}>Market</Text>

            <View style={{flex: 3}}>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={[dashboardStyle.scoreboardItem, dashboardStyle.up]}>
                        <Text style={dashboardStyle.scoreboardText}>DIA</Text>
                        <Ionicons name="md-arrow-dropup" size={32} color="white" />
                        <Text style={dashboardStyle.scoreboardText}>{this.state.DIA}</Text>
                    </View>
                    <View style={[dashboardStyle.scoreboardItem, dashboardStyle.up]}>
                        <Text style={dashboardStyle.scoreboardText}>SPY</Text>
                        <Ionicons name="md-arrow-dropup" size={32} color="white" />
                        <Text style={dashboardStyle.scoreboardText}>{this.state.SPY}</Text>
                    </View>
                    <View style={[dashboardStyle.scoreboardItem, dashboardStyle.up]}>
                        <Text style={dashboardStyle.scoreboardText}>QQQ</Text>
                        <Ionicons name="md-arrow-dropup" size={32} color="white" />
                        <Text style={dashboardStyle.scoreboardText}>{this.state.QQQ}</Text>
                    </View>
                    <View style={[dashboardStyle.scoreboardItem, dashboardStyle.down]}>
                        <Text style={dashboardStyle.scoreboardText}>IWM</Text>
                        <Ionicons name="md-arrow-dropdown" size={32} color="white" />
                        <Text style={dashboardStyle.scoreboardText}>{this.state.IWM}</Text>
                    </View>
                </View>
            </View>


            <View style={{flex: 6}}>
                <Text key={'positions'} style={dashboardStyle.heading}>Positions</Text>

                <FlatList key={'list'} style={dashboardStyle.positions}
                    data={this.state.positions}
                    renderItem={this.renderRow} 
                    keyExtractor={item => item.asset_id} />
            </View>
            
        </View>
        
    }   
}

export default DashboardScreen