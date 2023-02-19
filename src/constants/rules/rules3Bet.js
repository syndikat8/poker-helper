import { SB, CO, BTN } from '@/constants/position/itemsPosition.js'

const BTN_CO_3BET = [
    { name: 'Иногда против MP', styleClass: 'bg-green' },
    { name: 'Дугие против всех' },
]

export const RULES_3BET = (type) => {
    switch (type) {
        case SB.id:
            return [
                { name: 'Всегда против CO и BTN и если EP +17 и MP +19', styleClass: 'bg-green' },
                { name: 'Только против CO и BTN', styleClass: 'bg-indigo-300' },
                { name: 'Дугие против всех' },
            ]
        case BTN.id:
            return BTN_CO_3BET
        case CO.id:
            return BTN_CO_3BET
        default:
            return ''
    }
}