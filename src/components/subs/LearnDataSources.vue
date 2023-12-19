<template>
  <div>
    <div class="row justify-content-center">
      <h2>Data Sources</h2>
    </div>
    <b-table-simple responsive bordered>
      <colgroup><col><col></colgroup>
      <b-tbody>
        <b-tr>
          <b-td colspan="2" class="diadromous-background"><b>Habitat Extent Data</b></b-td>
        </b-tr>
        <!-- salt marsh -->
        <b-tr>
          <b-td><b>Salt Marsh</b></b-td>
          <b-td>
            <i>Most Recent:</i><br>
            2005: <a href="https://www.mass.gov/info-details/massgis-data-massdep-wetlands-2005">https://www.mass.gov/info-details/massgis-data-massdep-wetlands-2005</a><br>
            <i>Historic:</i><br>
            1990-2000: <a href="https://www.mass.gov/info-details/massgis-data-massdep-wetlands-original-112000">https://www.mass.gov/info-details/massgis-data-massdep-wetlands-original-112000</a><br>            
          </b-td>
        </b-tr>
        <!-- tidal flats -->
        <b-tr>
          <b-td><b>Tidal Flats</b></b-td>
          <b-td>
            <i>Most Recent:</i><br>
            2005: <a href="https://www.mass.gov/info-details/massgis-data-massdep-wetlands-2005">https://www.mass.gov/info-details/massgis-data-massdep-wetlands-2005</a><br>
            <i>Historic:</i><br>
            1990-2000: <a href="https://www.mass.gov/info-details/massgis-data-massdep-wetlands-original-112000">https://www.mass.gov/info-details/massgis-data-massdep-wetlands-original-112000</a><br>            
          </b-td>
        </b-tr>        
        <!-- eelgrass -->
        <b-tr>
          <b-td><b>Eelgrass</b></b-td>
          <b-td>
            <i>Most Recent:</i><br>
            2015-2017: <a href="https://www.mass.gov/info-details/massgis-data-massdep-eelgrass-2015-2017">https://www.mass.gov/info-details/massgis-data-massdep-eelgrass-2015-2017</a><br>
            <i>Historic:</i><br>
            2010-2013: <a href="https://www.mass.gov/info-details/massgis-data-massdep-eelgrass-2010-2013">https://www.mass.gov/info-details/massgis-data-massdep-eelgrass-2010-2013</a><br>
            2006-2007: <a href="https://www.mass.gov/info-details/massgis-data-massdep-eelgrass-20067">https://www.mass.gov/info-details/massgis-data-massdep-eelgrass-20067</a><br>            
            2001: <a href="https://www.mass.gov/info-details/massgis-data-massdep-eelgrass-2001">https://www.mass.gov/info-details/massgis-data-massdep-eelgrass-2001</a><br> 
            1995: <a href="https://www.mass.gov/info-details/massgis-data-massdep-eelgrass-1995">https://www.mass.gov/info-details/massgis-data-massdep-eelgrass-1995</a><br>             
          </b-td>
        </b-tr>    
        <!-- diadromous fish runs -->
        <b-tr>
          <b-td><b>Diadromous Fish Runs</b></b-td>
          <b-td>
            <i>Data pending... coming soon:</i>         
          </b-td>
        </b-tr> 
        <!-- habitat goals pending -->
        <b-tr class="diadromous-background">
          <b-th colspan="2">Habitat Goal Data</b-th>
        </b-tr>
        <b-tr><b-td colspan="2"><i>Pending from MassBays</i></b-td></b-tr>
        <b-tr><b-td colspan="2"><i>Pending from MassBays</i></b-td></b-tr>
        <b-tr><b-td colspan="2"><i>Pending from MassBays</i></b-td></b-tr>
        <b-tr class="diadromous-background">
          <b-th colspan="2">Water Quality Data</b-th>
        </b-tr>
        <b-tr>
          <b-td colspan="2">
            <p>
              Water quality data presented in the Ecohealth Tracking Tool has been acquired from the <a href="https://www.waterqualitydata.us/">Water Quality Portal (WQP)</a>, a publicly available water-quality database which stores data from the United States Geological Survey (USGS), the Environmental Protection Agency (EPA), and over 400 state, federal, tribal, and local agencies.
            </p>
            <ul>
              <li>WQP stations located within the MassBays assessment areas were screened by location type to exclude samples collected at point sources, groundwater wells, and in the atmosphere.</li>
              <li>
                Water quality samples were screened to exclude:
                <ol>
                  <li>QAQC samples (duplicates, blanks)</li>
                  <li>Samples collected at or near the bottom of the water column (i.e., depth > 1 m)</li>
                  <li>Samples labeled as rejected</li>
                  <li>Samples reported with non-standard or missing units.</li>
                </ol>
              </li>
              <li>Non-detect values were replaced with the detection quantitation limit reported in WQP.</li>
              <li>When possible, Total Nitrogen (TN) concentrations were computed as the sum of Total Kjeldahl Nitrogen (TKN) and Nitrite + Nitrate (NO2+NO3) from samples collected at the same location and time.</li>

            </ul>
          
          </b-td>
        </b-tr>

        <b-tr class="diadromous-background">
          <b-th colspan="2">Image Credits</b-th>
        </b-tr>
        <b-tr>
          <b-td><b>Website Landing Page</b></b-td>
          <b-td>
            <i>Salt Marsh: </i> Photo “Great Blue Heron in Salt Marsh” courtesy of Jack Dodson, Dodson Photo and Video<br>
            <i>Alewives: </i> Photo courtesy of John R.J. Burrows, Atlantic Salmon Federation<br>
            <i>Tidal Flat: </i> Photo courtesy of Barbara Heiss and Bob Goodwill
          </b-td>
        </b-tr>
        <b-tr>
          <b-td><b>Other</b></b-td>
          <b-td>
            <i>Eelgrass (photo above eelgrass habitat extent graphs): </i> Photo courtesy of Cornell Cooperative Extension Marine Program
          </b-td>          
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <div class="row">
      <div class="col-12">
        <b-table-simple caption-top responsive>
          <caption>Ecohealth Tracking Tool - Water Quality Parameter Thresholds</caption>
          <colgroup><col><col><col><col></colgroup>
          <colgroup><col></colgroup>
          <colgroup><col></colgroup>
          <b-thead class="diadromous-background">
            <b-tr>
              <b-th colspan="4">ETT Parameter Threshold</b-th>
              <b-th colspan="1">Reference/Rationale</b-th>
              <b-th colspan="1">Reference Link</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <!-- NITROGEN -->
            <b-tr>
              <b-td rowspan="4" variant="primary"><b>{{ waterQualityThresholds['nitrogen'].title }}</b></b-td>
              <b-td rowspan="4">{{ waterQualityThresholds['nitrogen'].value[0] }}</b-td>
              <b-td rowspan="4">{{ waterQualityThresholds['nitrogen'].units }}</b-td>
              <b-td rowspan="4">eelgrass stress threshold</b-td>
              <b-td rowspan="4">Based on MassBays guidance for protection of eelgrass , review of MA TMDLs, and literature review of eelgrass response to nitrogen levels.</b-td>
              <b-td><a href="https://www.falmouthma.gov/DocumentCenter/View/1128/Full-Waquoit-Bay-MEP-Report-PDF" target="_blank">https://www.falmouthma.gov/DocumentCenter/View/1128/Full‐Waquoit‐Bay‐MEP‐Report‐PDF</a></b-td>
            </b-tr>
            <b-tr>
              <b-td><a href="https://www.mass.gov/doc/final-nitrogen-tmdl-report-for-megansett-squeteague-harbor-estuarine-system-june-2020/download" target="_blank">https://www.mass.gov/doc/final-nitrogen-tmdl-report-for-megansett-squeteague-harbor-estuarine-system-june-2020/download</a></b-td>
            </b-tr>
            <b-tr>
              <b-td><a href="https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/r-wd-09-12.pdf" target="_blank">https://www.des.nh.gov/sites/g/files/ehbemt341/files/documents/r-wd-09-12.pdf</a></b-td>
            </b-tr>
            <b-tr>
              <b-td><a href="https://www.mass.gov/doc/final-nitrogen-tmdl-for-west-falmouth-harbor-0/download" target="_blank">https://www.mass.gov/doc/final-nitrogen-tmdl-for-west-falmouth-harbor-0/download/</a></b-td>
            </b-tr>
            <!-- PHOSPHORUS -->
            <b-tr>
              <b-td rowspan="2" variant="primary"><b>{{ waterQualityThresholds['phosphorus'].title }}</b></b-td>
              <b-td rowspan="2">{{ waterQualityThresholds['phosphorus'].value[0] }}</b-td>
              <b-td rowspan="2">{{ waterQualityThresholds['phosphorus'].units }}</b-td>
              <b-td rowspan="2">freshwater streams</b-td>   
              <b-td>Draft freshwater criteria for NH is 30 ug/L</b-td>
              <b-td>NHDES staff report that 30 ug/L is a draft riverine TP standard for NH, based on the 85th percentile of median TP values for NH rivers.</b-td>         
            </b-tr>
            <b-tr>
              <b-td>30 ug/L is Chesapeake Bay Eco Health Report Card threshold for "very good"</b-td>
              <b-td><a href="https://ecoreportcard.org/report-cards/chesapeake-bay/bay-health/" target="_blank">https://ecoreportcard.org/report-cards/chesapeake-bay/bay-health/</a></b-td>              
            </b-tr>
            <!-- TEMPERATURE -->
            <b-tr>
              <b-td rowspan="5" variant="primary"><b>{{ waterQualityThresholds['temperature'].title }}</b></b-td>
              <b-td rowspan="5">{{ waterQualityThresholds['temperature'].value[0] }}</b-td>
              <b-td rowspan="5">&deg;C</b-td>
              <b-td rowspan="5">eelgrass stress threshold</b-td> 
              <b-td>Nantucket Harbor Eel Grass Health Assessment, 2018</b-td>
              <b-td></b-td>          
            </b-tr>
            <b-tr>
              <b-td>Abe, M., A. Kurashima, and M. Maegawa (2008) Temperature requirements for seed germination and seedling growth of Zostera marina from central Japan. Fisheries Science 74.3:589‐593.</b-td>
              <b-td><a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1444-2906.2008.01562.x" target="_blank">https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1444-2906.2008.01562.x</a></b-td>
            </b-tr>
            <b-tr>
              <b-td>Beca‐Carretero P, Olesen B, Marbà N, Krause‐Jensen D (2018) Response to experimental warming in northern eelgrass populations: comparison across a range of temperature adaptations. Mar Ecol Prog Ser 589:59‐72.</b-td>
              <b-td><a href="https://doi.org/10.3354/meps12439" target="_blank">https://doi.org/10.3354/meps12439</a></b-td>
            </b-tr>
            <b-tr>
              <b-td>Reusch, T.B.H., A. Ehlers, A. Hammeril, and B. Worm (2005) Ecosystem recovery after climatic extremes enhanced by genotypic diversity. Proceedings of the National Academy of Sciences of the United States 102(8):2826(6).</b-td>
              <b-td><a href="https://www.pnas.org/doi/10.1073/pnas.0500008102" target="_blank">https://www.pnas.org/doi/10.1073/pnas.0500008102</a></b-td>
            </b-tr>
            <b-tr>
              <b-td>Orth, R.J. and K.A. Moore (1986) Seasonal and year‐to‐year variations in the growth of Zostera marina L. (eelgrass) in the lower Chesapeake Bay. Aquatic Botany 24(4):335‐341.</b-td>
              <b-td><a href="https://www.sciencedirect.com/science/article/abs/pii/0304377086901002" target="_blank">https://www.sciencedirect.com/science/article/abs/pii/0304377086901002</a></b-td>
            </b-tr>
            <!-- PH -->
            <b-tr>
              <b-td variant="primary" rowspan="2"><b>{{ waterQualityThresholds['pH'].title }}</b></b-td>
              <b-td colspan="3" rowspan="2">range of 7.5 - 8.5 for shellfish, lower limit of 7.0 for salt marsh</b-td>
              <b-td rowspan="2"> Based on guidance from MassBays for protetction of coastal habitats (shellfish and salt marsh).</b-td>
              <b-td><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5643346/" target="_blank">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5643346/</a></b-td>
            </b-tr>
            <b-tr>
              <b-td><a href="https://bioone.org/journals/journal-of-shellfish-research/volume-30/issue-3/035.030.0308/Oyster-Shell-Dissolution-Rates-in-Estuarine-Waters--Effects-of/10.2983/035.030.0308.full" target="_blank">https://bioone.org/journals/journal-of-shellfish-research/volume-30/issue-3/035.030.0308/Oyster-Shell-Dissolution-Rates-in-Estuarine-Waters--Effects-of/10.2983/035.030.0308.full</a></b-td>
            </b-tr>
            <!-- TURBIDITY -->
            <b-tr>
              <b-td variant="primary" rowspan="2"><b>{{ waterQualityThresholds['turbidity'].title }}</b></b-td>
              <b-td rowspan="2">{{ waterQualityThresholds['turbidity'].value[0] }}</b-td>
              <b-td rowspan="2">{{ waterQualityThresholds['turbidity'].units }}</b-td>
              <b-td rowspan="2">coastal waters</b-td>
              <b-td>Rhode Island Class A/SA water quality regulations</b-td>
              <b-td><a href="https://www.epa.gov/sites/default/files/2014-12/documents/riwqs.pdf" target="_blank">https://www.epa.gov/sites/default/files/2014-12/documents/riwqs.pdf</a></b-td>              
            </b-tr>
            <b-tr>
              <b-td>Chesapeake Bay Eco Health Report Cards</b-td>
              <b-td><a href="https://ecoreportcard.org/report-cards/chesapeake-bay/indicators/turbidity/" target="_blank">https://ecoreportcard.org/report-cards/chesapeake-bay/indicators/turbidity/</a></b-td>
            </b-tr>
            <!-- SALINITY -->
            <b-tr>
              <b-td variant="primary" rowspan="3"><b>{{ waterQualityThresholds['salinity'].title }}</b></b-td>
              <b-td>&#60;1</b-td>
              <b-td>{{ waterQualityThresholds['salinity'].units }}</b-td>
              <b-td>freshwater</b-td>
              <b-td rowspan="3">Based on USGS definitions</b-td>
              <b-td rowspan="3"><a href="https://www.usgs.gov/special-topics/water-science-school/science/saline-water-and-salinity" target="_blank">https://www.usgs.gov/special-topics/water-science-school/science/saline-water-and-salinity</a></b-td>
            </b-tr>
            <b-tr>
              <b-td>1-30</b-td>
              <b-td>{{ waterQualityThresholds['salinity'].units }}</b-td>
              <b-td>estuarine</b-td>
            </b-tr>
            <b-tr>
              <b-td>&#62;30</b-td>
              <b-td>{{ waterQualityThresholds['salinity'].units }}</b-td>
              <b-td>marine</b-td>
            </b-tr>
            <!-- DISSOLVED OXYGEN -->
            <b-tr>
              <b-td variant="primary"><b>{{ waterQualityThresholds['dissolved oxygen'].title }}</b></b-td>
              <b-td>{{ waterQualityThresholds['dissolved oxygen'].value[0] }}</b-td>
              <b-td>{{ waterQualityThresholds['dissolved oxygen'].units }}</b-td>
              <b-td></b-td> 
              <b-td>EPA Ambient Water Quality Criteria for Dissolved Oxygen</b-td>
              <b-td><a href="https://www.epa.gov/sites/default/files/2019-03/documents/ambient-wqc-dissolved-oxygen-1986.pdf" target="_blank">https://www.epa.gov/sites/default/files/2019-03/documents/ambient-wqc-dissolved-oxygen-1986.pdf</a></b-td>
            </b-tr>
            <!-- ENTEROCOCCUS -->
            <b-tr>
              <b-td variant="primary"><b><i>{{ waterQualityThresholds['enterococcus'].title }}</i></b></b-td>
              <b-td>{{ waterQualityThresholds['enterococcus'].value[0] }}</b-td>
              <b-td>{{ waterQualityThresholds['enterococcus'].units }}</b-td>
              <b-td>coastal, single sample</b-td> 
              <b-td>MA Minimum Standards for Bathing Beaches</b-td>
              <b-td><a href="https://www.mass.gov/doc/105-cmr-445-state-sanitary-code-chapter-vii-minimum-standards-for-bathing-beaches/download" target="_blank">https://www.mass.gov/doc/105-cmr-445-state-sanitary-code-chapter-vii-minimum-standards-for-bathing-beaches/download</a></b-td>              
            </b-tr>
            <!-- E. Coli -->
            <b-tr>
              <b-td variant="primary"><b><i>{{ waterQualityThresholds['e. coli'].title }}</i></b></b-td>
              <b-td>{{ waterQualityThresholds['e. coli'].value[0] }}</b-td>
              <b-td>{{ waterQualityThresholds['e. coli'].units }}</b-td>
              <b-td>inland, single sample</b-td> 
              <b-td>MA Minimum Standards for Bathing Beaches</b-td>
              <b-td><a href="https://www.mass.gov/doc/105-cmr-445-state-sanitary-code-chapter-vii-minimum-standards-for-bathing-beaches/download" target="_blank">https://www.mass.gov/doc/105-cmr-445-state-sanitary-code-chapter-vii-minimum-standards-for-bathing-beaches/download</a></b-td>              
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </div>
</template>

<script>
import {waterQualityThresholds } from '../../lib/constants'
export default {
  data () {
    return {
        waterQualityThresholds: waterQualityThresholds
    }
  }
}
</script>

<style scoped>

</style>
