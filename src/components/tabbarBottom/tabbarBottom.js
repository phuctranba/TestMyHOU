import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {OS} from '../../utils/functions';
import {Task_Colors} from '../../utils/values';

export default class TabBar extends Component {

    render() {

        let {
            renderIcon,
            getLabelText,
            activeTintColor,
            inactiveTintColor,
            onTabPress,
            onTabLongPress,
            getAccessibilityLabel,
            navigation,
            showLabel
        } = this.props;

        let { routes, index: activeRouteIndex } = navigation.state;

        return (
            <View style={styles.tabBar}>
                {routes.map((route, routeIndex) => {
                    let isRouteActive = routeIndex === activeRouteIndex;
                    let tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

                    return (
                        <TouchableOpacity
                            key={routeIndex}
                            style={styles.tab}
                            onPress={() => {
                                onTabPress({ route });
                            }}
                            onLongPress={() => {
                                onTabLongPress({ route });
                            }}
                            accessibilityLabel={getAccessibilityLabel({ route })}
                            activeOpacity={0.7}
                        >
                            {renderIcon({ route, focused: isRouteActive, tintColor })}
                            {/*{showLabel ? <Text>{getLabelText({ route })}</Text> : null}*/}
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: scale(5),
        marginBottom:verticalScale(10),
        marginTop: verticalScale(2),
        paddingHorizontal: verticalScale(10),
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        borderRadius: moderateScale(25),
        position: 'absolute',
        left: 0,
        zIndex: 10,
        right: 0,
        bottom: 0,
        borderWidth: moderateScale(0.5),
        borderColor: Task_Colors.task_load_gray,
        height: verticalScale(46),
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
