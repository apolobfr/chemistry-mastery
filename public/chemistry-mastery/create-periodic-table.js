export default function createPeriodicTable() {
    const types = {
        'other-nonmetal': {
            color: 'limegreen',
        },
        'alkali-metal': {
            color: 'darkgreen'
        },
        'alkaline-earth-metal': {
            color: 'navy'
        },
        'transition-metal': {
            color: 'indigo'
        },
        'other-metal': {
            color: 'gold'
        },
        'unknown': {
            color: 'greenyellow'
        },
        'metalloid': {
            color: 'dodgerblue'
        },
        'halogen': {
            color: 'burlywood'
        },
        'noble-gas': {
            color: 'red'
        },
        'lanthanide': {
            color: 'deeppink'
        },
        'actinide': {
            color: 'violet'
        }
    }

    const elements = [
        {
            symbol: 'H',
            type: 'other-nonmetal',
            group: '1',
            period: '1'
        },
        {
            symbol: 'He',
            type: 'noble-gas',
            group: '18',
            period: '1'
        },
        {
            symbol: 'Li',
            type: 'alkali-metal',
            group: '1',
            period: '2'
        },
        {
            symbol: 'Be',
            type: 'alkaline-earth-metal',
            group: '2',
            period: '2'
        },
        {
            symbol: 'B',
            type: 'metalloid',
            group: '13',
            period: '2'
        },
        {
            symbol: 'C',
            type: 'other-nonmetal',
            group: '14',
            period: '2'
        },
        {
            symbol: 'N',
            type: 'other-nonmetal',
            group: '15',
            period: '2'
        },
        {
            symbol: 'O',
            type: 'other-nonmetal',
            group: '16',
            period: '2'
        },
        {
            symbol: 'F',
            type: 'halogen',
            group: '17',
            period: '2'
        },
        {
            symbol: 'Ne',
            type: 'noble-gas',
            group: '18',
            period: '2'
        },
        {
            symbol: 'Na',
            type: 'alkali-metal',
            group: '1',
            period: '3'
        },
        {
            symbol: 'Mg',
            type: 'alkaline-earth-metal',
            group: '2',
            period: '3'
        },
        {
            symbol: 'Al',
            type: 'other-metal',
            group: '13',
            period: '3'
        },
        {
            symbol: 'Si',
            type: 'metalloid',
            group: '14',
            period: '3'
        },
        {
            symbol: 'P',
            type: 'other-nonmetal',
            group: '15',
            period: '3'
        },
        {
            symbol: 'S',
            type: 'other-nonmetal',
            group: '16',
            period: '3'
        },
        {
            symbol: 'Cl',
            type: 'halogen',
            group: '17',
            period: '3'
        },
        {
            symbol: 'Ar',
            type: 'noble-gas',
            group: '17',
            period: '3'
        },
        {
            symbol: 'K',
            type: 'alkali-metal',
            group: '1',
            period: '4'
        },
        {
            symbol: 'Ca',
            type: 'alkaline-earth-metal',
            group: '2',
            period: '4'
        },
        {
            symbol: 'Sc',
            type: 'transition-metal',
            group: '3',
            period: '4'
        },
        {
            symbol: 'Ti',
            type: 'transition-metal',
            group: '4',
            period: '4'
        },
        {
            symbol: 'V',
            type: 'transition-metal',
            group: '5',
            period: '4'
        },
        {
            symbol: 'Cr',
            type: 'transition-metal',
            group: '6',
            period: '4'
        },
        {
            symbol: 'Mn',
            type: 'transition-metal',
            group: '7',
            period: '4'
        },
        {
            symbol: 'Fe',
            type: 'transition-metal',
            group: '8',
            period: '4'
        },
        {
            symbol: 'Co',
            type: 'transition-metal',
            group: '9',
            period: '4'
        },
        {
            symbol: 'Ni',
            type: 'transition-metal',
            group: '10',
            period: '4'
        },
        {
            symbol: 'Cu',
            type: 'transition-metal',
            group: '11',
            period: '4'
        },
        {
            symbol: 'Zn',
            type: 'transition-metal',
            group: '12',
            period: '4'
        },
        {
            symbol: 'Ga',
            type: 'other-metal',
            group: '13',
            period: '4'
        },
        {
            symbol: 'Ge',
            type: 'metalloid',
            group: '14',
            period: '4'
        },
        {
            symbol: 'As',
            type: 'metalloid',
            group: '15',
            period: '4'
        },
        {
            symbol: 'Se',
            type: 'other-nonmetal',
            group: '16',
            period: '4'
        },
        {
            symbol: 'Br',
            type: 'halogen',
            group: '17',
            period: '4'
        },
        {
            symbol: 'Kr',
            type: 'noble-gas',
            group: '18',
            period: '4'
        },
        {
            symbol: 'Rb',
            type: 'alkali-metal',
            group: '1',
            period: '5'
        },
        {
            symbol: 'Sr',
            type: 'alkaline-earth-metal',
            group: '2',
            period: '5'
        },
        {
            symbol: 'Y',
            type: 'transition-metal',
            group: '3',
            period: '5'
        },
        {
            symbol: 'Zr',
            type: 'transition-metal',
            group: '4',
            period: '5'
        },
        {
            symbol: 'Nb',
            type: 'transition-metal',
            group: '5',
            period: '5'
        },
        {
            symbol: 'Mo',
            type: 'transition-metal',
            group: '6',
            period: '5'
        },
        {
            symbol: 'Tc',
            type: 'transition-metal',
            group: '7',
            period: '5'
        },
        {
            symbol: 'Ru',
            type: 'transition-metal',
            group: '8',
            period: '5'
        },
        {
            symbol: 'Rh',
            type: 'transition-metal',
            group: '9',
            period: '5'
        },
        {
            symbol: 'Pd',
            type: 'transition-metal',
            group: '10',
            period: '5'
        },
        {
            symbol: 'Ag',
            type: 'transition-metal',
            group: '11',
            period: '5'
        },
        {
            symbol: 'Cd',
            type: 'transition-metal',
            group: '12',
            period: '5'
        },
        {
            symbol: 'In',
            type: 'other-metal',
            group: '13',
            period: '5'
        },
        {
            symbol: 'Sn',
            type: 'other-metal',
            group: '14',
            period: '5'
        },
        {
            symbol: 'Sb',
            type: 'metalloid',
            group: '15',
            period: '5'
        },
        {
            symbol: 'Te',
            type: 'metalloid',
            group: '16',
            period: '5'
        },
        {
            symbol: 'I',
            type: 'halogen',
            group: '17',
            period: '5'
        },
        {
            symbol: 'Xe',
            type: 'noble-gas',
            group: '18',
            period: '5'
        },
        {
            symbol: 'Cs',
            type: 'alkali-metal',
            group: '1',
            period: '6'
        },
        {
            symbol: 'Ba',
            type: 'alkaline-earth-metal',
            group: '2',
            period: '6'
        },
        {
            symbol: 'La',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Ce',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Pr',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Nd',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Pm',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Sm',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Eu',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Gd',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Tb',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Dy',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Ho',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Er',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Tm',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Yb',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Lu',
            type: 'lanthanide',
            group: '3',
            period: '6'
        },
        {
            symbol: 'Hf',
            type: 'transition-metal',
            group: '4',
            period: '6'
        },
        {
            symbol: 'Ta',
            type: 'transition-metal',
            group: '5',
            period: '6'
        },
        {
            symbol: 'W',
            type: 'transition-metal',
            group: '6',
            period: '6'
        },
        {
            symbol: 'Re',
            type: 'transition-metal',
            group: '7',
            period: '6'
        },
        {
            symbol: 'Os',
            type: 'transition-metal',
            group: '8',
            period: '6'
        },
        {
            symbol: 'Ir',
            type: 'transition-metal',
            group: '9',
            period: '6'
        },
        {
            symbol: 'Pt',
            type: 'transition-metal',
            group: '10',
            period: '6'
        },
        {
            symbol: 'Au',
            type: 'transition-metal',
            group: '11',
            period: '6'
        },
        {
            symbol: 'Hg',
            type: 'transition-metal',
            group: '12',
            period: '6'
        },
        {
            symbol: 'Tl',
            type: 'other-metal',
            group: '13',
            period: '6'
        },
        {
            symbol: 'Pb',
            type: 'other-metal',
            group: '14',
            period: '6'
        },
        {
            symbol: 'Bi',
            type: 'other-metal',
            group: '15',
            period: '6'
        },
        {
            symbol: 'Po',
            type: 'metalloid',
            group: '16',
            period: '6'
        },
        {
            symbol: 'At',
            type: 'halogen',
            group: '17',
            period: '6'
        },
        {
            symbol: 'Rn',
            type: 'noble-gas',
            group: '18',
            period: '6'
        },
        {
            symbol: 'Fr',
            type: 'alkali-metal',
            group: '1',
            period: '7'
        },
        {
            symbol: 'Ra',
            type: 'alkaline-earth-metal',
            group: '2',
            period: '7'
        },
        {
            symbol: 'Ac',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Th',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Pa',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'U',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Np',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Pu',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Am',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Cm',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Bk',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Cf',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Es',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Fm',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Md',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'No',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Lr',
            type: 'actinide',
            group: '3',
            period: '7'
        },
        {
            symbol: 'Rf',
            type: 'transition-metal',
            group: '4',
            period: '7'
        },
        {
            symbol: 'Db',
            type: 'transition-metal',
            group: '5',
            period: '7'
        },
        {
            symbol: 'Sg',
            type: 'transition-metal',
            group: '6',
            period: '7'
        },
        {
            symbol: 'Bh',
            type: 'transition-metal',
            group: '7',
            period: '7'
        },
        {
            symbol: 'Hs',
            type: 'transition-metal',
            group: '8',
            period: '7'
        },
        {
            symbol: 'Mt',
            type: 'transition-metal',
            group: '9',
            period: '7'
        },
        {
            symbol: 'Ds',
            type: 'transition-metal',
            group: '10',
            period: '7'
        },
        {
            symbol: 'Rg',
            type: 'transition-metal',
            group: '11',
            period: '7'
        },
        {
            symbol: 'Cn',
            type: 'transition-metal',
            group: '12',
            period: '7'
        },
        {
            symbol: 'Nh',
            type: 'other-metal',
            group: '13',
            period: '7'
        },
        {
            symbol: 'Fl',
            type: 'other-metal',
            group: '14',
            period: '7'
        },
        {
            symbol: 'Mc',
            type: 'other-metal',
            group: '15',
            period: '7'
        },
        {
            symbol: 'Lv',
            type: 'other-metal',
            group: '16',
            period: '7'
        },
        {
            symbol: 'Ts',
            type: 'halogen',
            group: '17',
            period: '7'
        },
        {
            symbol: 'Og',
            type: 'noble-gas',
            group: '18',
            period: '7'
        }
    ]
    return {
        types,
        elements
    }
}