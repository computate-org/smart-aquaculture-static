Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishProcessing')?.addEventListener('change', (event) => {
    facetRangeChange('FishProcessing', event.target.value);
  });

  document.querySelector('#pageSelectSortFishProcessing_pk')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'pk', true);
  });
  document.querySelector('#pageStatsFishProcessing_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'pk', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_created')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'created', true);
  });
  document.querySelector('#pageStatsFishProcessing_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'created', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_modified')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'modified', true);
  });
  document.querySelector('#pageStatsFishProcessing_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'modified', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_archived')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'archived', true);
  });
  document.querySelector('#pageStatsFishProcessing_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'archived', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_name')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'name', true);
  });
  document.querySelector('#pageStatsFishProcessing_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'name', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_location')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'location', true);
  });
  document.querySelector('#pageStatsFishProcessing_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'location', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_description')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'description', true);
  });
  document.querySelector('#pageStatsFishProcessing_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'description', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_areaServed')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_areaServed')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'areaServed', true);
  });
  document.querySelector('#pageStatsFishProcessing_areaServed')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'areaServed', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_color')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'color', true);
  });
  document.querySelector('#pageStatsFishProcessing_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'color', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_id')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'id', true);
  });
  document.querySelector('#pageStatsFishProcessing_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'id', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsFishProcessing_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsFishProcessing_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsFishProcessing_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_ngsildData')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'ngsildData', true);
  });
  document.querySelector('#pageStatsFishProcessing_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_address')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'address', true);
  });
  document.querySelector('#pageStatsFishProcessing_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'address', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_entityShortId')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'entityShortId', true);
  });
  document.querySelector('#pageStatsFishProcessing_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'entityShortId', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsFishProcessing_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_userKey')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'userKey', true);
  });
  document.querySelector('#pageStatsFishProcessing_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'userKey', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_saves')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'saves', true);
  });
  document.querySelector('#pageStatsFishProcessing_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'saves', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_editPage')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'editPage', true);
  });
  document.querySelector('#pageStatsFishProcessing_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'editPage', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsFishProcessing_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsFishProcessing_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_sessionId')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'sessionId', true);
  });
  document.querySelector('#pageStatsFishProcessing_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_objectTitle')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'objectTitle', true);
  });
  document.querySelector('#pageStatsFishProcessing_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_displayPage')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'displayPage', true);
  });
  document.querySelector('#pageStatsFishProcessing_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_userPage')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'userPage', true);
  });
  document.querySelector('#pageStatsFishProcessing_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'userPage', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_download')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'download', true);
  });
  document.querySelector('#pageStatsFishProcessing_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'download', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsFishProcessing_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_objectText')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'objectText', true);
  });
  document.querySelector('#pageStatsFishProcessing_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'objectText', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_solrId')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'solrId', true);
  });
  document.querySelector('#pageStatsFishProcessing_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'solrId', false);
  });

  document.querySelector('#pageSelectSortFishProcessing_areaServedColors')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishProcessing_areaServedColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishProcessing', 'areaServedColors', true);
  });
  document.querySelector('#pageStatsFishProcessing_areaServedColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishProcessing', 'areaServedColors', false);
  });

  document.querySelector('#htmButton_patchFishProcessing')?.addEventListener('click', (event) => {
    document.querySelector('#patchFishProcessingDialog').open = true;
  });

  document.querySelector('#htmButton_postFishProcessing')?.addEventListener('click', (event) => {
    document.querySelector('#postFishProcessingDialog').open = true;
  });

  document.querySelector('#htmButton_deleteFishProcessing')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteFishProcessing(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportFishProcessing')?.addEventListener('click', (event) => {
    document.querySelector('#putimportFishProcessingDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageFishProcessing')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageFishProcessingDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterFishProcessing')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFishProcessing(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqFishProcessing_created')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_created')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_created')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_archived')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_name')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_name')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_name')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_location')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_location')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_location')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_description')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_description')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_description')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_areaServed')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_areaServed')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_areaServed')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_areaServed')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_color')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_color')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_color')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_color')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_color')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_color')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_id')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_id')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_id')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_address')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_address')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_address')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_address')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_address')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_entityShortId')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_entityShortId')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_entityShortId')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_entityShortId')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_entityShortId')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_entityShortId')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_editPage')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_displayPage')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_userPage')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_download')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget, facetChangeFishProcessingSuccess, facetChangeFishProcessingError);
          });
          document.querySelector('#buttonFacetFishProcessing_download')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_download')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishProcessing_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishProcessing_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishProcessing_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishProcessing', event.currentTarget);
          });
});
