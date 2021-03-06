const geoserverWorkspace = 'workspace';

export const environment = {
  production: false,
  sarai_map_config: {
    geoserver: {
      workspace: geoserverWorkspace,
      wmsTileLayerUrl: `http://demo.opengeo.org/geoserver/${geoserverWorkspace}/wms?tiled=true`,
      restApiEndpoint: 'http://demo.opengeo.org/geoserver/rest'
    },
    translations: {
      static: {
        prefix: 'http://localhost:4200/assets/i18n',
        ext: '.json'
      }
    },
    suitability_maps: {
      countrLevelLayerSuffix: '_country_suffix',
      municipalLevelLayerSuffix: '_minicipal_suffix',
      propertyFilterName: 'GRIDCODE',
      cropsApiEndpoint: 'http://localhost:3000/crops/',
      cropsApiEndpointMethod: 'GET',
      imageRootPath: 'http://localhost:4200/assets/docs/crops'
    },
    ndvi_maps: {
      eeApiEndpoint: 'http://localhost:5000/ndvi',
      eeApiEndpointMethod: 'GET'
    },
    rainfall_maps: {
      eeApiEndpoint: 'http://localhost:5000/chirps',
      eeApiEndpointMethod: 'GET'
    },
    location_api: {
      region: {
        endpoint: 'http://localhost:3000/regions/',
        method: 'GET'
      },

      province: {
        endpoint: 'http://localhost:3000/provinces/',
        method: 'GET'
      }
    }
  }
};


