export const waterQualitySelections = [{id:'nitrogen', capital: 'Nitrogen'},
                                       {id: 'phosphorus', capital: 'Phosphorus'},
                                       {id: 'temperature', capital: 'Temperature'},
                                       {id: 'pH', capital: 'pH'},
                                       {id: 'turbidity', capital: 'Turbidity'},
                                       {id: 'salinity', capital: 'Salinity'},
                                       {id: 'dissolved oxygen', capital: 'Dissolved Oxygen'},
                                       {id: 'e. coli', capital: 'E. coli'},
                                       {id: 'enterococcus', capital: "Enterococcus"}];
export const habitatSelections = [{id:'salt marsh', capital: 'Salt Marsh'},
                                  {id: 'tidal flats', capital: 'Tidal Flats'},
                                  {id: 'eelgrass', capital: 'Eelgrass'},
                                  {id: 'diadromous fish', capital: 'Diadromous Fish'}];
export const habitatIndexSelections = ['index 1', 'index 2', 'index 3']
export const waterQualityThresholds = {
  'nitrogen': {
    value: [0.35],
    type: ['Upper'],
    units: 'mg/L',
    scale: 'linear',
    minValue: 0,
    title: 'Total Nitrogen'
  },
  'enterococcus': {
    value: [104],
    type: ['Upper'],
    units: 'cfu/100 mL',
    scale: 'logarithmic',
    minValue: 1,
    title: 'Enterococcus'
  },
  'e. coli': {
    value: [235],
    type: ['Upper'],
    units: 'cfu/100 mL',
    scale: 'logarithmic',
    minValue: 1,
    title: 'E. Coli'
  },
  'dissolved oxygen': {
    value: [6],
    type: ['Lower'], 
    units: 'mg/L',
    scale: 'linear',
    minValue: 0,
    title: 'Dissolved Oxygen'
  },
  'pH': {
    value: [7, 7.5],
    type: ['Salt Marsh Lower', 'Shellfish Lower'],
    units: 'S.U.',
    scale: 'linear',
    minValue: 6,
    title: 'pH'
  },
  'temperature': {
    value: [((77 - 32) / 1.8)],
    type: ['Upper'],
    units: '&degC',
    scale: 'linear',
    minValue: 0,
    title: 'Temperature'
  },
  'phosphorus': {
    value: [30],
    type: ['Upper'],
    units: 'ug/L',
    scale: 'linear',
    minValue: 0,
    title: 'Total Phosphorus'
  },
  'turbidity': {
    value: [5],
    type: ['Upper'],
    units: 'NTU',
    scale: 'linear',
    minValue: 0,
    title: 'Turbidity'
  },
  'salinity': {
    value: [1, 30],
    type: ['Freshwater', 'Marine'],
    units: 'ppt',
    scale: 'linear',
    minValue: 0,
    title: 'Salinity'
  }
}
export const imageLibraryHabitat = {
  'eelgrass': {
    title: 'Eelgrass',
    img: require('@/assets/imgs/eelgrass_img.jpg'),
    pic: require('@/assets/icons/eelgrass.svg'),
    learnImg: require('@/assets/imgs/eelgrass_lobster_square.jpg'),
    source: 'MassDEP',
    currentColor: '#e319a6',
    historicColor: '#eba4d5',
    mainClass: 'eelgrass-main',
    explanation: '<b>What is an eelgrass meadow?</b> Seagrass meadows are a valuable habitat made up of flowering marine plants that typically grow in wide continuous expanses across shallow, protected estuarine waters. Two species of seagrass are found in Massachusetts, <i>Zostera marina</i> (eelgrass) and <i>Ruppia maritima</i> (widgeon grass), although eelgrass is far more common.<br><br> <b>Why should I care about eelgrass?</b> Eelgrass meadows serve as critical spawning, nursery, refuge, and foraging habitats for many types of fish and invertebrates, including economically important species such as scallops, lobster, and striped bass. Like other plants, eelgrass generates energy through photosynthesis, producing oxygen and storing carbon, which helps drive important food webs. With their extensive root systems, eelgrass meadows stabilize sediment and reduce erosion. Their leaves facilitate the deposition of fine particles of sediment suspended in the water, and they also absorb some pollutants and excess nutrients, thus improving water quality.<br><br> <b>What are the threats to eelgrass?</b> Factors contributing to the loss of eelgrass are typically caused by human activity. Seagrasses are highly sensitive to changes in water quality, particularly water clarity, which is often degraded by the addition of nutrients and pollution from wastewater runoff, stormwater runoff, and dredging.',
    altText: 'lobster in eelgrass'
  },
  'salt marsh': {
    title: 'Salt Marsh',
    img: require('@/assets/imgs/salt_marsh_img.jpg'),
    pic: require('@/assets/icons/salt_marsh.svg'),
    learnImg: require('@/assets/imgs/salt_marsh_heron_square.jpg'),
    source: 'MassDEP',
    currentColor: '#255c33',
    historicColor: '#68f28d',
    mainClass: 'salt-marsh-main',
    explanation: '<b>What is a salt marsh?</b> Salt marshes are coastal wetlands that experience regular flooding with the tides. They are typically found in areas that don’t experience strong waves, usually within embayments or along protected coasts. The protected nature of salt marsh systems allows sediment to be trapped and accumulated in the vegetation, highly specialized plants that can tolerate the presence of salt. The “low marsh,” which receives abundant tidal flow twice daily, is generally dominated by salt marsh cordgrass. The “high marsh,” which receives less regular tidal influence due to its higher elevation, is home to a variety of species including salt marsh hay, black needlerush, and saltgrass.<br><br> <b>Why should I care about salt marshes?</b> Salt marshes act as nurseries for commercially and recreationally important fisheries, and provide habitat and food sources for birds and other wildlife. Salt marshes also play a role in estuarine health by aiding in the cycling of several important environmental nutrients, water filtration, and stabilizing the shoreline. If able to migrate (shift inland with the rising sea levels) and remain healthy, salt marshes capture sediment and help lessen the impacts of coastal flooding, storm surges, and erosion.<br><br> <b>What are the threats to healthy salt marshes?</b> Salt marshes are adversely impacted by invasive species that compete for space and nutrients, ditches and tide gates employed for flood and mosquito control, development on or near the salt marsh’s edge, and polluted stormwater runoff. Construction adjacent to marshes prevent the salt marsh vegetation to migrate inland as sea levels rise.',
    altText: 'heron standing in salt marsh'
  },
  'tidal flats': {
    title: 'Tidal Flats',
    img: require('@/assets/imgs/tidal_flats_img.jpg'),
    pic: require('@/assets/icons/tidal_flats.svg'),
    learnImg: require('@/assets/imgs/tidal_flats_oyster_bed_square.jpg'),
    source: 'MassDEP',
    currentColor: '#c96b12',
    historicColor: '#deb187',
    mainClass: 'tidal-flats-main',
    explanation: '<b>What is a tidal flat?</b> Tidal flats are relatively even and sparsely vegetated areas of loose sand and mud that are exposed at low tide and submerged at high tide. These flats, which provide a critical link between the terrestrial and marine systems, are typically found in areas sheltered from waves, where fine-grained sediments settle. Water quality conditions in intertidal flats are variable given the looseness of the sediment, changes in water depth and temperature, and coming and going of water with the tides. <br><br> <b>Why should I care about tidal flats?</b> These seemingly barren areas provide many benefits to aquatic organisms and people alike. Their variability supports high biodiversity, providing habitat for shellfish, crustaceans, and invertebrates like worms and sea stars. In more stable sites, algae grows on the sediment and becomes food for grazers like snails, and also produces oxygen to support life in the tidal flats. As tides rise to cover the flats, juvenile fish often swim in from the nearby shallow subtidal zone to feed. High densities of crustaceans and shellfish thrive in sheltered tidal flats, creating an excellent foraging ground for migrating and wading shorebirds. Intertidal flats also help to mitigate the impacts from storm damage. More specifically, the gradual slope of these areas helps to slow the advances of flood waters and lessens the impacts of waves. <br><br> <b>What are the threats to tidal flats?</b> Coastal development and structures including wharves or seawalls can still contribute to the erosion of tidal flats. Climate change and sea level rise will result in completely submerged tidal flats. Pollutants in tidal flats easily adhere to sand and mud and remain in the area for long periods of time due to low rates of sediment movement.',
    altText: 'man clamming on tidal flats'
  },
  'diadromous fish': {
    title: 'Diadromous Fish',
    img: require('@/assets/imgs/diadromous_img.jpg'),
    pic: require('@/assets/icons/diadromous.svg'),
    learnImg: require('@/assets/imgs/diadromous_fish_square.jpg'),
    source: 'MassBays',
    currentColor: '#000000',
    historicColor: '#ffffff',
    mainClass: 'diadromous-fish-main',
    explanation: '<b>What is diadromous fish habitat?</b> Diadromous, or migratory fish, includes two species types: anadromous and catadromous. Anadromous fish begin life in freshwater and spend the majority of their life in the ocean, returning to freshwater only to spawn and lay eggs. Catadromous fish do the opposite, starting their life in the ocean and migrating to freshwater and then returning to the ocean to spawn. Massachusetts waters host several diadromous fish, including two river herring (alewife and blueback), American eel, American shad, and rainbow smelt. Sea-run brook trout and sturgeon are more rare, but restoration efforts are underway. Intact waterways (as opposed to those blocked by dams or tide gates) with curves, variable flow, and a mix of river bottom and bank types provide habitat that supports fish migration, feeding, spawning, and general health.<br><br> <b>Why should I care about diadromous fish?</b> These species are both economically and recreationally important to Massachusetts, serving a critical role in the food web as food for larger fish and other wildlife at sea and upstream. Historically, river herring especially were a core component of indigenous peoples’ diet, and state- and federally-recognized tribal members are the only individuals allowed to take them to preserve the remaining population.<br><br> <b>What are the threats to healthy diadromous fish habitat?</b> As diadromous fish use multiple aspects of coastal and inland habitat, the threats to their habitat are varied. Physical barriers like dams, tide gates and culverts restrict passage and water flow, as can some fish ladders, which may make the fish easier targets for predators. Dredging and development close to riverbanks also change water flow and the characteristics of spawning and nursery areas. Stormwater runoff and wastewater discharges introduce pollution and change water chemistry.',
    altText: 'schooling alewife'
  }
}
export const imageLibraryHabitatGray = {
  'eelgrass': {
    title: 'Eelgrass',
    img: require('@/assets/imgs/eelgrass_img.jpg'),
    pic: require('@/assets/icons/eelgrass.svg'),
    learnImg: require('@/assets/imgs/eelgrass_lobster_square.jpg'),
    currentYear: '2015-2017',
    historicYear: '1995',
    source: 'MassDEP',
    currentColor: '#e319a6',
    historicColor: '#eba4d5',
    mainClass: 'eelgrass-main',
    explanation: '<b>What is an eelgrass meadow?</b> Seagrass meadows are a valuable habitat made up of flowering marine plants that typically grow in wide continuous expanses across shallow, protected estuarine waters. Two species of seagrass are found in Massachusetts, <i>Zostera marina</i> (eelgrass) and <i>Ruppia maritima</i> (widgeon grass), although eelgrass is far more common.<br><br> <b>Why should I care about eelgrass?</b> Eelgrass meadows serve as critical spawning, nursery, refuge, and foraging habitats for many types of fish and invertebrates, including economically important species such as scallops, lobster, and striped bass. Like other plants, eelgrass generates energy through photosynthesis, producing oxygen and storing carbon, which helps drive important food webs. With their extensive root systems, eelgrass meadows stabilize sediment and reduce erosion. Their leaves facilitate the deposition of fine particles of sediment suspended in the water, and they also absorb some pollutants and excess nutrients, thus improving water quality.<br><br> <b>What are the threats to eelgrass?</b> Factors contributing to the loss of eelgrass are typically caused by human activity. Seagrasses are highly sensitive to changes in water quality, particularly water clarity, which is often degraded by the addition of nutrients and pollution from wastewater runoff, stormwater runoff, and dredging.'
  },
  'salt marsh': {
    title: 'Salt Marsh',
    img: require('@/assets/imgs/salt_marsh_img.jpg'),
    pic: require('@/assets/icons/salt_marsh.svg'),
    learnImg: require('@/assets/imgs/salt_marsh_heron_square.jpg'),
    currentYear: '2005',
    historicYear: '1990-2000',
    source: 'MassDEP',
    currentColor: '#255c33',
    historicColor: '#68f28d',
    mainClass: 'salt-marsh-main',
    explanation: '<b>What is a salt marsh?</b> Salt marshes are coastal wetlands that experience regular flooding with the tides. They are typically found in areas that don’t experience strong waves, usually within embayments or along protected coasts. The protected nature of salt marsh systems allows sediment to be trapped and accumulated in the vegetation, highly specialized plants that can tolerate the presence of salt. The “low marsh,” which receives abundant tidal flow twice daily, is generally dominated by salt marsh cordgrass. The “high marsh,” which receives less regular tidal influence due to its higher elevation, is home to a variety of species including salt marsh hay, black needlerush, and saltgrass.<br><br> <b>Why should I care about salt marshes?</b> Salt marshes act as nurseries for commercially and recreationally important fisheries, and provide habitat and food sources for birds and other wildlife. Salt marshes also play a role in estuarine health by aiding in the cycling of several important environmental nutrients, water filtration, and stabilizing the shoreline. If able to migrate (shift inland with the rising sea levels) and remain healthy, salt marshes capture sediment and help lessen the impacts of coastal flooding, storm surges, and erosion.<br><br> <b>What are the threats to healthy salt marshes?</b> Salt marshes are adversely impacted by invasive species that compete for space and nutrients, ditches and tide gates employed for flood and mosquito control, development on or near the salt marsh’s edge, and polluted stormwater runoff. Construction adjacent to marshes prevent the salt marsh vegetation to migrate inland as sea levels rise.'
  },
  'tidal flats': {
    title: 'Tidal Flats',
    img: require('@/assets/imgs/tidal_flats_img.jpg'),
    pic: require('@/assets/icons/tidal_flats.svg'),
    learnImg: require('@/assets/imgs/tidal_flats_oyster_bed_square.jpg'),
    currentYear: '2005',
    historicYear: '1990-2000',
    source: 'MassDEP',
    currentColor: '#c96b12',
    historicColor: '#deb187',
    mainClass: 'tidal-flats-main',
    explanation: '<b>What is a tidal flat?</b> Tidal flats are relatively even and sparsely vegetated areas of loose sand and mud that are exposed at low tide and submerged at high tide. These flats, which provide a critical link between the terrestrial and marine systems, are typically found in areas sheltered from waves, where fine-grained sediments settle. Water quality conditions in intertidal flats are variable given the looseness of the sediment, changes in water depth and temperature, and coming and going of water with the tides. <br><br> <b>Why should I care about tidal flats?</b> These seemingly barren areas provide many benefits to aquatic organisms and people alike. Their variability supports high biodiversity, providing habitat for shellfish, crustaceans, and invertebrates like worms and sea stars. In more stable sites, algae grows on the sediment and becomes food for grazers like snails, and also produces oxygen to support life in the tidal flats. As tides rise to cover the flats, juvenile fish often swim in from the nearby shallow subtidal zone to feed. High densities of crustaceans and shellfish thrive in sheltered tidal flats, creating an excellent foraging ground for migrating and wading shorebirds. Intertidal flats also help to mitigate the impacts from storm damage. More specifically, the gradual slope of these areas helps to slow the advances of flood waters and lessens the impacts of waves. <br><br> <b>What are the threats to tidal flats?</b> Coastal development and structures including wharves or seawalls can still contribute to the erosion of tidal flats. Climate change and sea level rise will result in completely submerged tidal flats. Pollutants in tidal flats easily adhere to sand and mud and remain in the area for long periods of time due to low rates of sediment movement.'
  },
  'diadromous fish': {
    title: 'Diadromous Fish',
    img: require('@/assets/imgs/diadromous_img.jpg'),
    pic: require('@/assets/icons/diadromous_gray.svg'),
    learnImg: require('@/assets/imgs/diadromous_fish_square.jpg'),
    currentYear: 'TBD',
    historicYear: 'TBD',
    source: 'MassBays',
    currentColor: '#000000',
    historicColor: '#ffffff',
    mainClass: 'diadromous-fish-main',
    explanation: '<b>What is diadromous fish habitat?</b> Diadromous, or migratory fish, includes two species types: anadromous and catadromous. Anadromous fish begin life in freshwater and spend the majority of their life in the ocean, returning to freshwater only to spawn and lay eggs. Catadromous fish do the opposite, starting their life in the ocean and migrating to freshwater and then returning to the ocean to spawn. Massachusetts waters host several diadromous fish, including two river herring (alewife and blueback), American eel, American shad, and rainbow smelt. Sea-run brook trout and sturgeon are more rare, but restoration efforts are underway. Intact waterways (as opposed to those blocked by dams or tide gates) with curves, variable flow, and a mix of river bottom and bank types provide habitat that supports fish migration, feeding, spawning, and general health.<br><br> <b>Why should I care about diadromous fish?</b> These species are both economically and recreationally important to Massachusetts, serving a critical role in the food web as food for larger fish and other wildlife at sea and upstream. Historically, river herring especially were a core component of indigenous peoples’ diet, and state- and federally-recognized tribal members are the only individuals allowed to take them to preserve the remaining population.<br><br> <b>What are the threats to healthy diadromous fish habitat?</b> As diadromous fish use multiple aspects of coastal and inland habitat, the threats to their habitat are varied. Physical barriers like dams, tide gates and culverts restrict passage and water flow, as can some fish ladders, which may make the fish easier targets for predators. Dredging and development close to riverbanks also change water flow and the characteristics of spawning and nursery areas. Stormwater runoff and wastewater discharges introduce pollution and change water chemistry.'
  }
}
export const imageLibraryWaterQuality = {
  'nitrogen': {
    title: 'Total Nitrogen',
    pic: require('@/assets/icons/nitrogen.svg'),
    explanation: 'Nitrogen is a nutrient important to all living things which is found naturally in saltwater and freshwater. Nitrogen is typically the most important nutrient determining the growth of algae and aquatic plants in coastal waters. When too much nitrogen enters the water, it can fuel excessive growth of algae which blocks sunlight needed for growth of submerged aquatic vegetation and reduces oxygen for fish and other organisms as it dies and decomposes. Studies indicate that nitrogen levels exceeding 0.35 mg/L are detrimental to eelgrass health.'
  },
  'phosphorus': {
    title: 'Total Phosphorus',
    pic: require('@/assets/icons/phosphorus.svg'),
    explanation: 'Like nitrogen, phosphorus is a nutrient important to all living things which is found naturally in saltwater and freshwater. Phosphorus is typically the most important nutrient determining the growth of algae and plants in freshwater, and water quality standards for this nutrient are typically based on freshwater environments. For healthy habitat conditions in freshwater streams, researchers have determined that total phosphorus levels should be below 30 ug/L.'
  },
  'temperature': {
    title: 'Temperature',
    pic: require('@/assets/icons/temperature.svg'),
    explanation: 'Water temperature can have an important impact on eelgrass habitat, fish, and other aquatic biota within coastal habitats. Climate change has resulted in long-term warming trends that have resulted in increased summer water temperatures in Massachusetts’ bays. Studies indicate that summer water temperatures exceeding 77oF are detrimental to eelgrass health.'
  },
  'pH': {
    title: 'pH',
    pic: require('@/assets/icons/ph.svg'),
    explanation: 'pH is a measure of acidity based on the presence of hydrogen ions. A pH of 7.0 is neutral, while values below 7.0 indicate acidic conditions and values above 7.0 indicate basic conditions. Research [in Chesapeake Bay] shows that pH levels below 7.5 have negative impacts on shellfish growth and health, and pH levels below 7.0 will impact salt marsh health. The growth and wellbeing of most fish species is affected by long-term exposure to a pH less than 6.0 or over 9.5.  '
  },
  'turbidity': {
    title: 'Turbidity',
    pic: require('@/assets/icons/turbidity.svg'),
    explanation: 'Turbidity is a measure of water clarity determined by how much the material suspended in the water column (including algae and suspended particles) decreases light penetration. Stormwater runoff (contributing sediments and nutrients that fuel algal productivity), wastewater discharge, dredging, boating, and natural disturbances such as storms, wave action, and bottom feeding animals, can increase turbidity. High turbidity levels can impair coastal habitats by interfering with plant photosynthesis, smothering benthic organisms, and reducing the quality of fish habitat. Research indicates that the upper turbidity limit for healthy habitats in coastal waters is 5 NTU.'

  },
  'salinity': {
    title: 'Salinity',
    pic: require('@/assets/icons/salinity.svg'),
    explanation: 'Salinity refers to the concentration of salts in a water body. The normal range of water salinity near the shore varies considerably depending on the degree of mixing that occurs between freshwater flowing from the land and ocean water.  The U.S. Geological Survey categorizes three primary salinity zones, including freshwater (salinity less than 1 ppt), estuarine water (salinity 1 to 30 ppt), and marine (salinity greater than 30 ppt). Eelgrass beds and salt marshes are mainly found in estuarine environments. Studies indicate that eelgrass grows best in waters with salinity between 20 and 31 ppt. Under 20 ppt, eelgrass productivity can drop by 50 percent. Healthy salt marshes have salinity that varies between 18 and 35 ppt.'
  },
  'dissolved oxygen': {
    title: 'Dissolved Oxygen',
    pic: require('@/assets/icons/dissolved_oxygen.svg'),
    explanation: 'Dissolved oxygen (DO) concentration is a measure of how aerated a water body is, and is influenced by physical mixing (i.e., waves, turbulence) and photosynthesis of rooted plants and algae in the water. DO is one of the best and most immediate indicators of a system’s health and ability to support fish and other aquatic organisms. In addition to impacting the ability of fish and other creatures to respire (breathe), very low oxygen conditions facilitate release of nutrients and other pollutants from bottom sediments, contributing to additional water quality problems. EPA has established a DO level of 6.0 mg/L as the lower threshold for “good” conditions in support of aquatic life'
  },
  'e. coli': {
    title: 'E. coli',
    pic: require('@/assets/icons/e_coli.svg'),
    explanation: '<i>Escherichia coli (E. coli)</i> is a species of bacteria which is strongly correlated with the presence of harmful pathogens in freshwater due to fecal contamination.  <i>E. coli</i> is used as a representative, or “indicator” bacteria for freshwater to protect the public from harmful exposure during recreational activities in freshwater waterbodies, such as swimming and paddling.  Massachusetts has set a single-sample limit for E. coli in freshwater bathing beach water of 235 colony forming units (CFUs) per 100 ml.  '
  },
  'enterococcus': {
    title: 'Enterococcus',
    pic: require('@/assets/icons/enterococcus.svg'),
    explanation: '<i>Enterococcus</i> is a genus of bacteria which is strongly correlated with the presence of harmful pathogens in marine and freshwaters due to fecal contamination.  Enterococcus is used as a representative, or “indicator” bacteria to protect people from harmful exposure during recreational activities in coastal waterbodies, such as swimming and paddling. Massachusetts has set a single-sample limit for <i>Enterococcus</i> in bathing beach water of 100 colony forming units (CFUs) per 100 ml.'
  }
}
export const stateWideHabitatValues = {
  'eelgrass': {
    data: [
      {year: 2000, value: 5000},
      {year: 2005, value: 4000},
      {year: 2050, value: 6000}
    ],
    units: 'Acres'
  },
  'salt marsh': {
    data: [
      {year: 2000, value: 2000},
      {year: 2005, value: 3000},
      {year: 2050, value: 4000}
    ],
    units: 'Acres'
  },
  'tidal flats': {
    data: [
      {year: 2000, value: 15000},
      {year: 2005, value: 17000},
      {year: 2050, value: 14000}
    ],
    units: 'Acres'
  },
  'diadromous fish': {
    data: [
      {year: 2000, value: 600},
      {year: 2005, value: 1000},
      {year: 2050, value: 5000}
    ],
    units: 'Miles'
  }
}
export const basemaps = [
  [
    {
      name: 'ESRI Oceans Basemap',
      visible: true,
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
    },
    {
      name: 'ESRI World Imagery',
      visible: false,
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
  ],
  [
    {
      name: 'USGS Imagery',
      visible: false,
      url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}',
      attribution: '<a href="http://www.doi.gov">U.S. Department of the Interior</a> | <a href="http://www.usgs.gov">U.S. Geological Survey</a> | <a href="http://www.usgs.gov/laws/policies_notices.html">Policies</a>',
      options: {
        maxZoom: 16
      }
    },
    {
      name: 'USGS Topo',
      visible: false,
      url: 'https://basemap.nationalmap.gov/ArcGIS/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
      attribution: '<a href="http://www.doi.gov">U.S. Department of the Interior</a> | <a href="http://www.usgs.gov">U.S. Geological Survey</a> | <a href="http://www.usgs.gov/laws/policies_notices.html">Policies</a>',
      options: {
        maxZoom: 16
      }
    },
    {
      name: 'USGS Hydrography',
      visible: false,
      url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSHydroCached/MapServer/tile/{z}/{y}/{x}',
      attribution: '<a href="http://www.doi.gov">U.S. Department of the Interior</a> | <a href="http://www.usgs.gov">U.S. Geological Survey</a> | <a href="http://www.usgs.gov/laws/policies_notices.html">Policies</a>',
      options: {
        maxZoom: 16
      }
    },
    {
      name: 'OpenStreetMap',
      visible: false,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    },
    {
      name: 'No Basemap',
      visible: false,
      url: '',
      attribution: ''
    }
  ]
]
export const basemapsWms = [
  {
    url: 'https://gis.charttools.noaa.gov/arcgis/rest/services/MCS/ENCOnline/MapServer/exts/MaritimeChartService/WMSServer',
    name: 'NOAA Nautical Charts',
    visible: false,
    format: 'image/png',
    transparent: true,
    attribution: '<a href="https://nauticalcharts.noaa.gov/data/gis-data-and-services.html" _target="_blank">NOAA Maritime Chart Service</a>'
  }
]