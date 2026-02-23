Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishingBoat')?.addEventListener('change', (event) => {
    facetRangeChange('FishingBoat', event.target.value);
  });

  document.querySelector('#pageSelectSortFishingBoat_pk')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'pk', true);
  });
  document.querySelector('#pageStatsFishingBoat_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'pk', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_created')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'created', true);
  });
  document.querySelector('#pageStatsFishingBoat_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'created', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_modified')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'modified', true);
  });
  document.querySelector('#pageStatsFishingBoat_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'modified', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_archived')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'archived', true);
  });
  document.querySelector('#pageStatsFishingBoat_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'archived', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_timeZone')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'timeZone', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_timeZone')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'timeZone', true);
  });
  document.querySelector('#pageStatsFishingBoat_timeZone')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'timeZone', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_fishingDockId')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'fishingDockId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_fishingDockId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'fishingDockId', true);
  });
  document.querySelector('#pageStatsFishingBoat_fishingDockId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'fishingDockId', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_departureDate')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'departureDate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_departureDate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'departureDate', true);
  });
  document.querySelector('#pageStatsFishingBoat_departureDate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'departureDate', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_arrivalDate')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'arrivalDate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_arrivalDate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'arrivalDate', true);
  });
  document.querySelector('#pageStatsFishingBoat_arrivalDate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'arrivalDate', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_avgSpeedInMph')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'avgSpeedInMph', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_avgSpeedInMph')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'avgSpeedInMph', true);
  });
  document.querySelector('#pageStatsFishingBoat_avgSpeedInMph')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'avgSpeedInMph', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_maxSpeedInMph')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'maxSpeedInMph', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_maxSpeedInMph')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'maxSpeedInMph', true);
  });
  document.querySelector('#pageStatsFishingBoat_maxSpeedInMph')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'maxSpeedInMph', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_milesPerGallon')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'milesPerGallon', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_milesPerGallon')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'milesPerGallon', true);
  });
  document.querySelector('#pageStatsFishingBoat_milesPerGallon')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'milesPerGallon', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_gallonsOfGas')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'gallonsOfGas', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_gallonsOfGas')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'gallonsOfGas', true);
  });
  document.querySelector('#pageStatsFishingBoat_gallonsOfGas')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'gallonsOfGas', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_name')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'name', true);
  });
  document.querySelector('#pageStatsFishingBoat_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'name', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_description')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'description', true);
  });
  document.querySelector('#pageStatsFishingBoat_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'description', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_path')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'path', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_path')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'path', true);
  });
  document.querySelector('#pageStatsFishingBoat_path')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'path', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_location')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'location', true);
  });
  document.querySelector('#pageStatsFishingBoat_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'location', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_simulation')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'simulation', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_simulation')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'simulation', true);
  });
  document.querySelector('#pageStatsFishingBoat_simulation')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'simulation', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_color')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'color', true);
  });
  document.querySelector('#pageStatsFishingBoat_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'color', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_simulationDelayMillis')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'simulationDelayMillis', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_simulationDelayMillis')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'simulationDelayMillis', true);
  });
  document.querySelector('#pageStatsFishingBoat_simulationDelayMillis')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'simulationDelayMillis', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_id')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'id', true);
  });
  document.querySelector('#pageStatsFishingBoat_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'id', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsFishingBoat_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsFishingBoat_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsFishingBoat_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_ngsildData')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'ngsildData', true);
  });
  document.querySelector('#pageStatsFishingBoat_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_entityShortId')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'entityShortId', true);
  });
  document.querySelector('#pageStatsFishingBoat_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'entityShortId', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsFishingBoat_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsFishingBoat_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsFishingBoat_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_sessionId')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'sessionId', true);
  });
  document.querySelector('#pageStatsFishingBoat_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_userKey')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'userKey', true);
  });
  document.querySelector('#pageStatsFishingBoat_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'userKey', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_saves')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'saves', true);
  });
  document.querySelector('#pageStatsFishingBoat_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'saves', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_objectTitle')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'objectTitle', true);
  });
  document.querySelector('#pageStatsFishingBoat_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_displayPage')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'displayPage', true);
  });
  document.querySelector('#pageStatsFishingBoat_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_displayPageFrFR')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'displayPageFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_displayPageFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'displayPageFrFR', true);
  });
  document.querySelector('#pageStatsFishingBoat_displayPageFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'displayPageFrFR', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_editPage')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'editPage', true);
  });
  document.querySelector('#pageStatsFishingBoat_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'editPage', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_editPageFrFR')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'editPageFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_editPageFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'editPageFrFR', true);
  });
  document.querySelector('#pageStatsFishingBoat_editPageFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'editPageFrFR', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_userPage')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'userPage', true);
  });
  document.querySelector('#pageStatsFishingBoat_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'userPage', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_userPageFrFR')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'userPageFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_userPageFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'userPageFrFR', true);
  });
  document.querySelector('#pageStatsFishingBoat_userPageFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'userPageFrFR', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_download')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'download', true);
  });
  document.querySelector('#pageStatsFishingBoat_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'download', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_downloadFrFR')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'downloadFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_downloadFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'downloadFrFR', true);
  });
  document.querySelector('#pageStatsFishingBoat_downloadFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'downloadFrFR', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsFishingBoat_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_objectText')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'objectText', true);
  });
  document.querySelector('#pageStatsFishingBoat_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'objectText', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_solrId')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'solrId', true);
  });
  document.querySelector('#pageStatsFishingBoat_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'solrId', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_areaServedColors')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_areaServedColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'areaServedColors', true);
  });
  document.querySelector('#pageStatsFishingBoat_areaServedColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'areaServedColors', false);
  });

  document.querySelector('#pageSelectSortFishingBoat_areaServedTitles')?.addEventListener('change', (event) => {
    sort('FishingBoat', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingBoat_areaServedTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingBoat', 'areaServedTitles', true);
  });
  document.querySelector('#pageStatsFishingBoat_areaServedTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingBoat', 'areaServedTitles', false);
  });
          document.querySelector('#fqFishingBoat_created')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_created')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_created')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_archived')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_departureDate')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_departureDate')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_departureDate')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_departureDate')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_departureDate')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_departureDate')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_arrivalDate')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_arrivalDate')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_arrivalDate')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_arrivalDate')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_arrivalDate')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_arrivalDate')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_avgSpeedInMph')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_avgSpeedInMph')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_avgSpeedInMph')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_avgSpeedInMph')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_avgSpeedInMph')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_avgSpeedInMph')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_maxSpeedInMph')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_maxSpeedInMph')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_maxSpeedInMph')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_maxSpeedInMph')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_maxSpeedInMph')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_maxSpeedInMph')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_milesPerGallon')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_milesPerGallon')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_milesPerGallon')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_milesPerGallon')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_milesPerGallon')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_milesPerGallon')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_gallonsOfGas')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_gallonsOfGas')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_gallonsOfGas')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_gallonsOfGas')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_gallonsOfGas')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_gallonsOfGas')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_name')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_name')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_name')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_description')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_description')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_description')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_path')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_path')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_path')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_path')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_path')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_path')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_location')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_location')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_location')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_color')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_color')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_color')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_color')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_color')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_color')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_id')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_id')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_id')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_entityShortId')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_entityShortId')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_entityShortId')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_entityShortId')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_entityShortId')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_entityShortId')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_displayPage')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_displayPageFrFR')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_displayPageFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_displayPageFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_displayPageFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_displayPageFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_displayPageFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_editPage')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_editPageFrFR')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_editPageFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_editPageFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_editPageFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_editPageFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_editPageFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_userPage')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_userPageFrFR')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_userPageFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_userPageFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_userPageFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_userPageFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_userPageFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_download')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_download')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_download')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#fqFishingBoat_downloadFrFR')?.addEventListener('change', (event) => {
            fqChange('FishingBoat', event.currentTarget, facetChangeFishingBoatSuccess, facetChangeFishingBoatError);
          });
          document.querySelector('#buttonFacetFishingBoat_downloadFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingBoat_downloadFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingBoat_downloadFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingBoat_downloadFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingBoat', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingBoat_downloadFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingBoat', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteFishingBoat')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteFishingBoat(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterFishingBoat')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFishingBoat(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
