
# generate a buffer
'''
import geopandas as gpd

direction = "both"
width = 500
gdf = gpd.read_file('public/data/migratory_habs.geojson')

gdf = gdf.to_crs(3857)

if direction == "left":
    gdf['geometry'] = gdf['geometry'].buffer(width, single_sided=True)
elif direction == "right":
    gdf['geometry'] = gdf['geometry'].buffer(-width, single_sided=True)
else:
    gdf['geometry'] = gdf['geometry'].buffer(width)
gdf = gdf.to_crs(4326)  # reproject back to 4326

# save output in new GeoJSON file
gdf.to_file('buff500.geojson', driver="GeoJSON")

'''

# create new dataset for the diadromous fish chart
import pandas as pd

df = pd.read_csv('public/data/df_to_delete.csv')
store_df = pd.DataFrame(columns=['Name', 'Accessible_Len', 'N_Accessible_Len', 'Total_Len'])

# get all same name ones and add their lengths

unique = df.NAME.unique()

for i in unique:
    temp = df[df['NAME'] == i]
    n_temp = temp[temp['ACCESSIBLE'] == 'N']
    y_temp = temp[temp['ACCESSIBLE'] == 'Y']

    n_len = n_temp['Lengthmile'].sum()
    y_len = y_temp['Lengthmile'].sum()
    total_len = n_len + y_len

    store_df = pd.concat([store_df, pd.DataFrame([{'Name':i, 'Accessible_Len':y_len, 'N_Accessible_Len':n_len, 'Total_Len':total_len}])], ignore_index=True)

for i in store_df.index:
    nam = store_df.loc[i].Name
    n = nam.replace(" ", "").replace("/", "").replace("'","")
    store_df.loc[i].to_json("public/data/df/row_{}.json".format(n))

# store_df.to_json('mig_habs_data.json')