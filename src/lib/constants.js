export const waterQualitySelections = [{id:'nitrogen', capital: 'Nitrogen'},
                                       {id: 'phosphorus', capital: 'Phosphorus'},
                                       {id: 'temperature', capital: 'Temperature'},
                                       {id: 'pH', capital: 'PH'},
                                       {id: 'turbidity', capital: 'Turbidity'},
                                       {id: 'salinity', capital: 'Salinity'},
                                       {id: 'dissolved oxygen', capital: 'Dissolved Oxygen'},
                                       {id: 'e. coli', capital: 'E. Coli'},
                                       {id: 'enterococcus', capital: "Enterococcus"}];
export const habitatSelections = [{id:'salt marsh', capital: 'Salt Marsh'},
                                  {id: 'tidal flats', capital: 'Tidal Flats'},
                                  {id: 'eelgrass', capital: 'Eelgrass'},
                                  {id: 'diadromous fish', capital: 'Diadromous Fish'}];
export const habitatIndexSelections = ['index 1', 'index 2', 'index 3']
export const waterQualityThresholds = {'nitrogen': {value: 0.35, units: 'mg/L'},
                                       'enterococcus': {value: 104, units: 'cfu/ 100mL'},
                                        'e. coli': {value: 235, units: 'cfu/ 100 mL'},
                                        'dissolved oxygen': {value: 6, units: 'mg/L'},
                                        'pH': {value: 7, units: 'S.U.'},
                                        'temperature': {value: ((77 - 32) / 1.8), units: '&degC'},
                                        'phosphorus': {value: 30, units: 'ug/L'},
                                        'turbidity': {value: 5, units: 'NTU'},
                                        'salinity': {value: 1, units: 'mg/L'}}
export const imageLibraryHabitat = {
  'eelgrass': {
    title: 'Eelgrass',
    img: require('@/assets/imgs/eelgrass_img.jpg'),
    pic: require('@/assets/icons/eelgrass.svg'),
    currentYear: 'TBD',
    historicYear: '1995',
    source: 'MassDEP',
    currentColor: '#e319a6',
    historicColor: '#eba4d5'
  },
  'salt marsh': {
    title: 'Salt Marsh',
    img: require('@/assets/imgs/salt_marsh_img.jpg'),
    pic: require('@/assets/icons/salt_marsh.svg'),
    currentYear: '2005',
    historicYear: '1990-2000',
    source: 'MassDEP',
    currentColor: '#255c33',
    historicColor: '#68f28d'
  },
  'tidal flats': {
    title: 'Tidal Flats',
    img: require('@/assets/imgs/tidal_flats_img.jpg'),
    pic: require('@/assets/icons/tidal_flats.svg'),
    currentYear: '2005',
    historicYear: '1990-2000',
    source: 'MassDEP',
    currentColor: '#c96b12',
    historicColor: '#deb187'
  },
  'diadromous fish': {
    title: 'Diadromous Fish',
    img: require('@/assets/imgs/diadromous_img.jpg'),
    pic: require('@/assets/icons/diadromous.svg'),
    currentYear: 'TBD',
    historicYear: 'TBD',
    source: 'MassBays',
    currentColor: '#000000',
    historicColor: '#ffffff'
  }
}
export const imageLibraryWaterQuality = {
  'nitrogen': {
    title: 'nitrogen',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/nitrogen.svg')
  },
  'phosphorus': {
    title: 'phosphorus',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/phosphorus.svg')
  },
  'temperature': {
    title: 'temperature',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/temperature.svg')
  },
  'pH': {
    title: 'pH',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/ph.svg')
  },
  'turbidity': {
    title: 'turbidity',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/turbidity.svg')
  },
  'salinity': {
    title: 'salinity',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/salinity.svg')
  },
  'dissolved oxygen': {
    title: 'dissolved oxygen',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/dissolved_oxygen.svg')
  },
  'e. coli': {
    title: 'e. coli',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/e_coli.svg')
  },
  'enterococcus': {
    title: 'enterococcus',
    img: require('@/assets/imgs/white_box.jpg'),
    pic: require('@/assets/icons/enterococcus.svg')
  }
}