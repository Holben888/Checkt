import { StyleSheet } from 'react-native';
import { colors, grayscaleColors } from '../../sharedStyles';

const circleRadius = 24;
const generalStyles = StyleSheet.create({
    container: {
        backgroundColor: grayscaleColors.background,
        height: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    countContainer: {
        backgroundColor: colors.primary,
        height: circleRadius,
        width: circleRadius,
        borderRadius: circleRadius,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    countText: {
        color: colors.white,
        fontFamily: 'OpenSans-Bold',
    },
    titleTextPrimary: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 13,
        color: grayscaleColors.secondary,
    },
    titleTextSecondary: {
        fontFamily: 'OpenSans-Italic',
        paddingLeft: 5,
        fontSize: 13,
        color: grayscaleColors.secondary,
    }
});

const overdueStyles = StyleSheet.create({
    container: {
        ...StyleSheet.flatten(generalStyles.container),
        backgroundColor: colors.danger,
    },
    countContainer: {
        ...StyleSheet.flatten(generalStyles.countContainer),
        backgroundColor: colors.white,
    },
    countText: {
        ...StyleSheet.flatten(generalStyles.countText),
        color: colors.danger,
    },
    titleTextPrimary: {
        ...StyleSheet.flatten(generalStyles.titleTextPrimary),
        color: colors.white,
    },
    titleTextSecondary: {
        ...StyleSheet.flatten(generalStyles.titleTextSecondary),
        color: colors.white,
    }
});

const ongoingStyles = StyleSheet.create({
    container: {
        ...StyleSheet.flatten(generalStyles.container),
        backgroundColor: colors.warning,
    },
    countContainer: {
        ...StyleSheet.flatten(generalStyles.countContainer),
        backgroundColor: grayscaleColors.primary,
    },
    countText: {
        ...StyleSheet.flatten(generalStyles.countText),
        color: colors.warning,
    },
    titleTextPrimary: {
        ...StyleSheet.flatten(generalStyles.titleTextPrimary),
        color: grayscaleColors.primary,
    },
    titleTextSecondary: {
        ...StyleSheet.flatten(generalStyles.titleTextSecondary),
        color: grayscaleColors.primary,
    }
});

const getThemeStyles = (themeLabel) => {
    if (themeLabel === 'Overdue') {
        return overdueStyles;
    } else if (themeLabel === 'Ongoing') {
        return ongoingStyles;
    } else {
        return generalStyles;
    }
}

export default getThemeStyles;