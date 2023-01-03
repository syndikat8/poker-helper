const EP = { id: 1, name: 'EP' }
const MP = { id: 2, name: 'MP' }
const CO = { id: 3, name: 'CO' }
const BTN = { id: 4, name: 'BTN' }
const SB = { id: 5, name: 'SB' }
const BB = { id: 6, name: 'BB' }

const positions = [
    EP,
    MP,
    CO,
    BTN,
    SB,
    BB,
]

const ACTIONS = {
    OR: 1,
    COLD_CALL: 2,
    THREE_BET: 3,
    VS_3_BET: 4,
    FOUR_BET: 5,
}

const ACTIONS_ITEMS = [
    {
        id: ACTIONS.OR,
        name: 'OR',
        positions
    },
    {
        id: ACTIONS.COLD_CALL,
        name: 'COLD CALL',
        positions: [SB, BB]
    },
    {
        id: ACTIONS.THREE_BET,
        name: '3 BET',
        positions
    },
    {
        id: ACTIONS.VS_3_BET,
        name: 'VS 3 BET',
        positions
    },
    {
        id: ACTIONS.FOUR_BET,
        name: '4 BET',
        positions
    }
]

export { ACTIONS_ITEMS, ACTIONS }