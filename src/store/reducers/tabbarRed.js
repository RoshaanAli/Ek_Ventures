import colors from '../../assets/colors/colors';

const initialState = { bgColor: colors.tabbarWhite };

export default function tabbarRed(state = initialState, action) {

    switch (action.type) {
        case "BLACK":
            return { bgColor: colors.tabbarBlack };
        case "WHITE":
            return { bgColor: colors.tabbarWhite };
        default:
            return state;
    }
}
