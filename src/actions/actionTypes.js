import { NAME } from '../constants'

export default {
    INITIALIZE: '@INITIALIZE',
    INITIALIZED: '@INITIALIZED',
    UPDATE_URL: `${NAME}/UPDATE_URL`,
    ADD_SCREEN: `${NAME}/ADD_SCREEN`,
    SAVE_SCREEN: `${NAME}/SAVE_SCREEN`,
    UPDATE_VISIBILITY: `${NAME}/UPDATE_VISIBILITY`,
    SORT_SCREENS: `${NAME}/SORT_SCREENS`,
    ZOOM: `${NAME}/ZOOM`,
    SWITCH_VIEW_MODE: `${NAME}/SWITCH_VIEW_MODE`,
    SWITCH_SCREEN_DIRECTION: `${NAME}/SWITCH_SCREEN_DIRECTION`,

    SCROLL_TO_SCREEN: `${NAME}/SCROLL_TO_SCREEN`,
    HIGHLIGHT_SCREEN: `${NAME}/HIGHLIGHT_SCREEN`,
    UNHIGHLIGHT_SCREEN: `${NAME}/UNHIGHLIGHT_SCREEN`,
    SAVE_USER_AGENT: `${NAME}/SAVE_USER_AGENT`,

    TOGGLE_DRAWER: 'TOGGLE_DRAWER',
    TOGGLE_SCREEN_DIALOG: 'TOGGLE_SCREEN_DIALOG',
    TOGGLE_USER_AGENT_DIALOG: 'TOGGLE_USER_AGENT_DIALOG',
    TOGGLE_HELP_DIALOG: 'TOGGLE_HELP_DIALOG',
    DELETE_SCREEN: 'DELETE_SCREEN',

    APP_RESET: 'APP_RESET',
}
