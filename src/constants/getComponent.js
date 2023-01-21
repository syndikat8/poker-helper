import OpenRaiseDialog from '@/components/dialogs/OpenRaiseDialog/OpenRaiseDialog.vue'
import ThreeBetDialog from '@/components/dialogs/ThreeBetDialog/ThreeBetDialog.vue'

import { ACTIONS } from '@/constants/itemsPosition.js'

const GET_COMPONENT = (type) => {
    const { OR, THREE_BET } = ACTIONS
    switch (type) {
        case OR:
            return OpenRaiseDialog
        case THREE_BET:
           return ThreeBetDialog
        default:
           return ''
    }
}

export { GET_COMPONENT }