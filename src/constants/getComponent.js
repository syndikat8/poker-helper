import OpenRaiseDialog from '@/components/dialogs/OpenRaiseDialog/OpenRaiseDialog.vue'
import ColdCallDialog from '@/components/dialogs/ColdCallDialog/ColdCallDialog.vue'
import ThreeBetDialog from '@/components/dialogs/ThreeBetDialog/ThreeBetDialog.vue'

import { ACTIONS } from '@/constants/position/itemsPosition.js'

const GET_COMPONENT = (type) => {
    const { OR, COLD_CALL, THREE_BET } = ACTIONS
    switch (type) {
        case OR:
            return OpenRaiseDialog
        case COLD_CALL:
           return ColdCallDialog
        case THREE_BET:
           return ThreeBetDialog
        default:
           return ''
    }
}

export { GET_COMPONENT }