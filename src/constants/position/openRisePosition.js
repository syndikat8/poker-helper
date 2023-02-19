import { BTN, CO, SB, EP, MP } from '@/constants/position/itemsPosition.js'

export const openRisePosition = (activeDefault) => {

    return [
        { ...EP, active: [...activeDefault] },
        { ...MP, active: [...activeDefault, 'A3s', 'ATo', 'KJo'] },
        {
            ...CO,
            active: [
                ...activeDefault, 'A3s', 'A2s', 'K7s', 'K6s', 'K5s', 'Q8s', 'J8s', 'T9s', 'T8s', '98s', '87s',
                '55', 'QJo', 'KTo', 'ATo', 'KJo'
            ]
        },
        {
            ...BTN,
            active: [
                ...activeDefault, 'A3s', 'A2s', 'K7s', 'K6s', 'K5s', 'Q8s', 'Q7s', 'J8s', 'J7s', 'T9s', 'T8s', '98s',
                '87s', 'J6s', 'Q6s', 'T7s', 'T6s', '97s', '96s', '86s', '76s', '75s', '65s', '54s', '64s', 'K4s',
                'K3s', 'K2s', 'Q5s', 'Q4s', 'Q3s', '55', '44', '33', '22', 'QJo', 'KTo', 'ATo', 'KJo', 'QTo', 'JTo',
                'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'K9o', 'Q9o', 'J9o', 'T9o'
            ]
        },
        {
            ...SB,
            active: [
                ...activeDefault, 'A3s', 'A2s', 'K7s', 'K6s', 'K5s', 'Q8s', 'Q7s', 'J8s', 'J7s', 'T9s', 'T8s', '98s',
                '87s', 'J6s', 'Q6s', 'T7s', 'T6s', '97s', '96s', '86s', '76s', '75s', '65s', '54s', '64s', 'K4s',
                'K3s', 'K2s', 'Q5s', 'Q4s', 'Q3s', '55', '44', '33', '22', 'QJo', 'KTo', 'ATo', 'KJo', 'QTo', 'JTo',
                'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'K9o', 'Q9o', 'J9o', 'T9o', 'A4o', 'Q2s', 'J5s', 'J4s', '85s'
            ]
        }
    ]
}