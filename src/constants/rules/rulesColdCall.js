import { BBvsSB } from '@/constants/position/itemsPosition.js'


export const RULES_COLD_CALL = (type) => {
    switch (type) {
        case BBvsSB.id:
            return [
                { name: '50/50 против OR 3bb', styleClass: 'bg-indigo-300' },
            ]
        default:
            return ''
    }
}