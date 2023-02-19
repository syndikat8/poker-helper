import { openRisePosition } from '@/constants/position/openRisePosition.js'
import { threeBetPosition } from '@/constants/position/threeBetPosition.js'
import { coldCallPosition } from '@/constants/position/coldCallPosition.js'

const EP = { id: 1, name: 'EP' }
const MP = { id: 2, name: 'MP' }
const CO = { id: 3, name: 'CO' }
const BTN = { id: 4, name: 'BTN' }
const SB = { id: 5, name: 'SB' }
const BB = { id: 6, name: 'BB' }
const BBvsSB = { id: 6, name: 'BB vs SB', width: 'max-w-max' }

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
        positions: openRisePosition(activeDefault),
    },
    {
        id: ACTIONS.COLD_CALL,
        name: 'COLD CALL',
        positions: coldCallPosition(activeDefault),
    },
    {
        id: ACTIONS.THREE_BET,
        name: '3 BET',
        positions: threeBetPosition()
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

export {
    ACTIONS_ITEMS,
    ACTIONS,
    SB,
    CO,
    BTN,
    EP,
    MP,
    BB,
    BBvsSB
}