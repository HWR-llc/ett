export const waterQualitySelections = ['all', 'nitrogen', 'phosphorus', 'temperature', 'pH', 'clarity', 'salinity', 'dissolved oxygen', 'e. coli', 'enterococcus'];
export const habitatSelections = ['salt marsh', 'tidal flats', 'eelgrass', 'diadromous fish'];
export const habitatIndexSelections = ['index 1', 'index 2', 'index 3']
export const imageLibraryHabitat = {
  'eelgrass': {
    title: 'Eelgrass',
    img: require('@/assets/imgs/eelgrass_img.jpg'),
    pic: require('@/assets/icons/eelgrass_pic.png'),
    currentYear: '**2017',
    historicYear: '**1992',
    source: 'MassDEP'
  },
  'salt marsh': {
    title: 'Salt Marsh',
    img: require('@/assets/imgs/salt_marsh_img.jpg'),
    pic: require('@/assets/icons/salt_marsh_pic.png'),
    currentYear: '**2005',
    historicYear: '**1995',
    source: 'MassDEP'
  },
  'tidal flats': {
    title: 'Tidal Flats',
    img: require('@/assets/imgs/tidal_flats_img.jpg'),
    pic: require('@/assets/icons/tidal_flats_pic.png'),
    currentYear: '**2005',
    historicYear: '**1995',
    source: 'MassDEP'
  },
  'diadromous': {
    title: 'Diadromous Fish',
    img: require('@/assets/imgs/diadromous_img.jpg'),
    pic: require('@/assets/icons/diadromous_pic.png'),
    currentYear: '**2012',
    historicYear: '**2012',
    source: 'MassBays'
  }
}
export const imageLibraryWaterQuality = {
  'all': {
    title: 'all',
    img: require('@/assets/imgs/gray_box.jpg'),
    pic: require('@/assets/icons/all.png'),
    currentYear: '**2017',
    historicYear: '**1992',
    source: 'MassDEP'
  },
  'nitrogen': {
    title: 'nitrogen',
    img: require('@/assets/imgs/gray_box.jpg'),
    pic: require('@/assets/icons/salt_marsh_pic.png'),
    currentYear: '**2005',
    historicYear: '**1995',
    source: 'MassDEP'
  },
  'phosphorus': {
    title: 'phosphorus',
    img: require('@/assets/imgs/gray_box.jpg'),
    pic: require('@/assets/icons/tidal_flats_pic.png'),
    currentYear: '**2005',
    historicYear: '**1995',
    source: 'MassDEP'
  },
  'temperature': {
    title: 'temperature',
    img: require('@/assets/imgs/gray_box.jpg'),
    pic: require('@/assets/icons/diadromous_pic.png'),
    currentYear: '**2012',
    historicYear: '**2012',
    source: 'MassBays'
  },
  'pH': {
    title: 'pH',
    img: require('@/assets/imgs/gray_box.jpg'),
    pic: require('@/assets/icons/eelgrass_pic.png'),
    currentYear: '**2017',
    historicYear: '**1992',
    source: 'MassDEP'
  },
  'clarity': {
    title: 'clarity',
    img: require('@/assets/imgs/gray_box.jpg'),
    pic: require('@/assets/icons/salt_marsh_pic.png'),
    currentYear: '**2005',
    historicYear: '**1995',
    source: 'MassDEP'
  },
  'salinity': {
    title: 'salinity',
    img: require('@/assets/imgs/gray_box.jpg'),
    pic: require('@/assets/icons/tidal_flats_pic.png'),
    currentYear: '**2005',
    historicYear: '**1995',
    source: 'MassDEP'
  },
  'dissolved oxygen': {
    title: 'dissolved oxygen',
    img: require('@/assets/imgs/gray_box.jpg'),
    pic: require('@/assets/icons/diadromous_pic.png'),
    currentYear: '**2012',
    historicYear: '**2012',
    source: 'MassBays'
  },
  'e. coli': {
    title: 'e. coli',
    img: require('@/assets/imgs/gray_box.jpg'),
    pic: require('@/assets/icons/diadromous_pic.png'),
    currentYear: '**2012',
    historicYear: '**2012',
    source: 'MassBays'
  }
}