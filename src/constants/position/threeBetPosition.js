import { BTN, CO, SB } from '@/constants/position/itemsPosition.js'

export const threeBetPosition = () => {

    return [
        { ...CO,
            active: ['AA', 'KK', 'QQ', 'JJ', 'TT', 'AKs', 'AQs', 'AJs', 'ATs', 'KQs', 'KJs', 'KTs', 'A5s', 'AKo', 'QJs', 'QTs', 'JTs', 'AQo', '99'],
            vsStillAndEarlyPosItems: ['KQo', 'AJo'],
        },
        { ...BTN,
            active: ['AA', 'KK', 'QQ', 'JJ', 'TT', 'AKs', 'AQs', 'AJs', 'ATs', 'KQs', 'KJs', 'KTs', 'A5s', 'AKo', 'QJs', 'QTs', 'JTs', 'AQo', '99'],
            vsStillAndEarlyPosItems: ['KQo', 'AJo'],
        },
        { ...SB,
            active: ['AA', 'KK', 'QQ', 'JJ', 'TT', 'AKs', 'AQs', 'AJs', 'ATs', 'KQs', 'KJs', 'KTs', 'A5s', 'AKo',  'KQo'],
            vsStillAndEarlyPosItems: ['QJs', 'QTs', 'JTs', 'AQo', '99'],
            onlyStillItems: ['88', 'A9s', 'A4s', 'AJo']
        }
    ]
}