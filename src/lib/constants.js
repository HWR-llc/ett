export const waterQualitySelections = ['all', 'nitrogen', 'phosphorus', 'temperature', 'chlorophyll-a', 'salinity', 'pH', 'bacteria', 'dissolved oxygen'];
export const habitatSelections = ['salt marsh', 'tidal flats', 'eelgrass', 'anadromous fish'];
export const habitatIndexSelections = ['index 1', 'index 2', 'index 3']
export const imageLibraryHabitat = {
  'eelgrass': {
    title: 'Eelgrass',
    img: require('@/assets/imgs/eelgrass_img.png'),
    pic: require('@/assets/icons/eelgrass_pic.png')
  },
  'salt marsh': {
    title: 'Salt Marsh',
    img: require('@/assets/imgs/salt_marsh_img.png'),
    pic: require('@/assets/icons/salt_marsh_pic.png')
  },
  'tidal flats': {
    title: 'Tidal Flats',
    img: require('@/assets/imgs/tidal_flats_img.png'),
    pic: require('@/assets/icons/tidal_flats_pic.png')
  },
  'diadromous': {
    title: 'Diadromous',
    img: require('@/assets/imgs/diadromous_img.png'),
    pic: require('@/assets/icons/diadromous_pic.png')
  }
}