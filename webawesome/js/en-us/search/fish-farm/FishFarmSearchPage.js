Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishFarm')?.addEventListener('change', (event) => {
    facetRangeChange('FishFarm', event.target.value);
  });

  document.querySelector('#pageSelectSortFishFarm_pk')?.addEventListener('change', (event) => {
    sort('FishFarm', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'pk', true);
  });
  document.querySelector('#pageStatsFishFarm_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'pk', false);
  });

  document.querySelector('#pageSelectSortFishFarm_created')?.addEventListener('change', (event) => {
    sort('FishFarm', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'created', true);
  });
  document.querySelector('#pageStatsFishFarm_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'created', false);
  });

  document.querySelector('#pageSelectSortFishFarm_modified')?.addEventListener('change', (event) => {
    sort('FishFarm', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'modified', true);
  });
  document.querySelector('#pageStatsFishFarm_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'modified', false);
  });

  document.querySelector('#pageSelectSortFishFarm_archived')?.addEventListener('change', (event) => {
    sort('FishFarm', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'archived', true);
  });
  document.querySelector('#pageStatsFishFarm_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'archived', false);
  });

  document.querySelector('#pageSelectSortFishFarm_name')?.addEventListener('change', (event) => {
    sort('FishFarm', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'name', true);
  });
  document.querySelector('#pageStatsFishFarm_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'name', false);
  });

  document.querySelector('#pageSelectSortFishFarm_location')?.addEventListener('change', (event) => {
    sort('FishFarm', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'location', true);
  });
  document.querySelector('#pageStatsFishFarm_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'location', false);
  });

  document.querySelector('#pageSelectSortFishFarm_description')?.addEventListener('change', (event) => {
    sort('FishFarm', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'description', true);
  });
  document.querySelector('#pageStatsFishFarm_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'description', false);
  });

  document.querySelector('#pageSelectSortFishFarm_areaServed')?.addEventListener('change', (event) => {
    sort('FishFarm', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_areaServed')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'areaServed', true);
  });
  document.querySelector('#pageStatsFishFarm_areaServed')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'areaServed', false);
  });

  document.querySelector('#pageSelectSortFishFarm_color')?.addEventListener('change', (event) => {
    sort('FishFarm', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'color', true);
  });
  document.querySelector('#pageStatsFishFarm_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'color', false);
  });

  document.querySelector('#pageSelectSortFishFarm_id')?.addEventListener('change', (event) => {
    sort('FishFarm', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'id', true);
  });
  document.querySelector('#pageStatsFishFarm_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'id', false);
  });

  document.querySelector('#pageSelectSortFishFarm_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishFarm', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsFishFarm_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortFishFarm_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishFarm', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsFishFarm_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortFishFarm_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishFarm', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsFishFarm_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortFishFarm_ngsildData')?.addEventListener('change', (event) => {
    sort('FishFarm', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'ngsildData', true);
  });
  document.querySelector('#pageStatsFishFarm_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortFishFarm_address')?.addEventListener('change', (event) => {
    sort('FishFarm', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'address', true);
  });
  document.querySelector('#pageStatsFishFarm_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'address', false);
  });

  document.querySelector('#pageSelectSortFishFarm_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishFarm', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsFishFarm_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortFishFarm_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishFarm', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsFishFarm_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortFishFarm_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishFarm', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsFishFarm_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortFishFarm_sessionId')?.addEventListener('change', (event) => {
    sort('FishFarm', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'sessionId', true);
  });
  document.querySelector('#pageStatsFishFarm_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortFishFarm_userKey')?.addEventListener('change', (event) => {
    sort('FishFarm', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'userKey', true);
  });
  document.querySelector('#pageStatsFishFarm_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'userKey', false);
  });

  document.querySelector('#pageSelectSortFishFarm_saves')?.addEventListener('change', (event) => {
    sort('FishFarm', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'saves', true);
  });
  document.querySelector('#pageStatsFishFarm_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'saves', false);
  });

  document.querySelector('#pageSelectSortFishFarm_objectTitle')?.addEventListener('change', (event) => {
    sort('FishFarm', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'objectTitle', true);
  });
  document.querySelector('#pageStatsFishFarm_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortFishFarm_displayPage')?.addEventListener('change', (event) => {
    sort('FishFarm', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'displayPage', true);
  });
  document.querySelector('#pageStatsFishFarm_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortFishFarm_editPage')?.addEventListener('change', (event) => {
    sort('FishFarm', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'editPage', true);
  });
  document.querySelector('#pageStatsFishFarm_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'editPage', false);
  });

  document.querySelector('#pageSelectSortFishFarm_userPage')?.addEventListener('change', (event) => {
    sort('FishFarm', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'userPage', true);
  });
  document.querySelector('#pageStatsFishFarm_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'userPage', false);
  });

  document.querySelector('#pageSelectSortFishFarm_download')?.addEventListener('change', (event) => {
    sort('FishFarm', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'download', true);
  });
  document.querySelector('#pageStatsFishFarm_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'download', false);
  });

  document.querySelector('#pageSelectSortFishFarm_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishFarm', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsFishFarm_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortFishFarm_objectText')?.addEventListener('change', (event) => {
    sort('FishFarm', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'objectText', true);
  });
  document.querySelector('#pageStatsFishFarm_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'objectText', false);
  });

  document.querySelector('#pageSelectSortFishFarm_solrId')?.addEventListener('change', (event) => {
    sort('FishFarm', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'solrId', true);
  });
  document.querySelector('#pageStatsFishFarm_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'solrId', false);
  });

  document.querySelector('#pageSelectSortFishFarm_entityShortId')?.addEventListener('change', (event) => {
    sort('FishFarm', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'entityShortId', true);
  });
  document.querySelector('#pageStatsFishFarm_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'entityShortId', false);
  });

  document.querySelector('#pageSelectSortFishFarm_areaServedColors')?.addEventListener('change', (event) => {
    sort('FishFarm', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_areaServedColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'areaServedColors', true);
  });
  document.querySelector('#pageStatsFishFarm_areaServedColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'areaServedColors', false);
  });

  document.querySelector('#pageSelectSortFishFarm_areaServedTitles')?.addEventListener('change', (event) => {
    sort('FishFarm', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishFarm_areaServedTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishFarm', 'areaServedTitles', true);
  });
  document.querySelector('#pageStatsFishFarm_areaServedTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishFarm', 'areaServedTitles', false);
  });

  document.querySelector('#htmButton_patchFishFarm')?.addEventListener('click', (event) => {
    document.querySelector('#patchFishFarmDialog').open = true;
  });

  document.querySelector('#htmButton_postFishFarm')?.addEventListener('click', (event) => {
    document.querySelector('#postFishFarmDialog').open = true;
  });

  document.querySelector('#htmButton_deleteFishFarm')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteFishFarm(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportFishFarm')?.addEventListener('click', (event) => {
    document.querySelector('#putimportFishFarmDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageFishFarm')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageFishFarmDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterFishFarm')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFishFarm(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqFishFarm_created')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_created')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_created')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_archived')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_name')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_name')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_name')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_location')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_location')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_location')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_description')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_description')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_description')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_areaServed')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_areaServed')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_areaServed')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_areaServed')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_color')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_color')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_color')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_color')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_color')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_color')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_id')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_id')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_id')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_address')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_address')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_address')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_address')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_address')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_displayPage')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_editPage')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_userPage')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_download')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_download')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_download')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_entityShortId')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget, facetChangeFishFarmSuccess, facetChangeFishFarmError);
          });
          document.querySelector('#buttonFacetFishFarm_entityShortId')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_entityShortId')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishFarm_entityShortId')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishFarm_entityShortId')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishFarm_entityShortId')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishFarm', event.currentTarget);
          });
});
