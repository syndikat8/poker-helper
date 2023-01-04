const EP = { id: 1, name: 'EP' }
const MP = { id: 2, name: 'MP' }
const CO = { id: 3, name: 'CO' }
const BTN = { id: 4, name: 'BTN' }
const SB = { id: 5, name: 'SB' }
const BB = { id: 6, name: 'BB' }

const ACTIONS = {
    OR: 1,
    COLD_CALL: 2,
    THREE_BET: 3,
    VS_3_BET: 4,
    FOUR_BET: 5,
}

const activeDefault = [
    'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s',
    'A4s', 'KQs', 'KJs', 'KTs', 'QJs', 'QTs', 'JTs', 'K9s', 'K8s', 'Q9s', 'J9s', 'T9s', 'AKo', 'AQo', 'AJo', 'KQo'
]

const ACTIONS_ITEMS = [
    {
        id: ACTIONS.OR,
        name: 'OR',
        positions: [
            { ...EP, active: [...activeDefault] },
            { ...MP, active: [...activeDefault, 'A3s', 'ATo', 'KJo'] },
            {
                ...CO,
                active: [
                    ...activeDefault, 'A3s', 'A2s', 'K7s', 'K6s', 'K5s', 'Q8s', 'J8s', 'T9s', 'T8s', '98s', '87s',
                    '55', 'QJo', 'KTo', 'ATo', 'KJo'
                ]
            }
        ],
    },
    {
        id: ACTIONS.COLD_CALL,
        name: 'COLD CALL',
        positions: [SB, BB],
    },
    {
        id: ACTIONS.THREE_BET,
        name: '3 BET',
        positions: []
    },
    {
        id: ACTIONS.VS_3_BET,
        name: 'VS 3 BET',
        positions: []
    },
    {
        id: ACTIONS.FOUR_BET,
        name: '4 BET',
        positions: []
    }
]

export { ACTIONS_ITEMS, ACTIONS }