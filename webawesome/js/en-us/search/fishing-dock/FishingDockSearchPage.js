Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishingDock')?.addEventListener('change', (event) => {
    facetRangeChange('FishingDock', event.target.value);
  });

  document.querySelector('#pageSelectSortFishingDock_pk')?.addEventListener('change', (event) => {
    sort('FishingDock', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'pk', true);
  });
  document.querySelector('#pageStatsFishingDock_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'pk', false);
  });

  document.querySelector('#pageSelectSortFishingDock_created')?.addEventListener('change', (event) => {
    sort('FishingDock', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'created', true);
  });
  document.querySelector('#pageStatsFishingDock_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'created', false);
  });

  document.querySelector('#pageSelectSortFishingDock_modified')?.addEventListener('change', (event) => {
    sort('FishingDock', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'modified', true);
  });
  document.querySelector('#pageStatsFishingDock_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'modified', false);
  });

  document.querySelector('#pageSelectSortFishingDock_archived')?.addEventListener('change', (event) => {
    sort('FishingDock', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'archived', true);
  });
  document.querySelector('#pageStatsFishingDock_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'archived', false);
  });

  document.querySelector('#pageSelectSortFishingDock_name')?.addEventListener('change', (event) => {
    sort('FishingDock', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'name', true);
  });
  document.querySelector('#pageStatsFishingDock_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'name', false);
  });

  document.querySelector('#pageSelectSortFishingDock_location')?.addEventListener('change', (event) => {
    sort('FishingDock', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'location', true);
  });
  document.querySelector('#pageStatsFishingDock_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'location', false);
  });

  document.querySelector('#pageSelectSortFishingDock_description')?.addEventListener('change', (event) => {
    sort('FishingDock', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'description', true);
  });
  document.querySelector('#pageStatsFishingDock_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'description', false);
  });

  document.querySelector('#pageSelectSortFishingDock_areaServed')?.addEventListener('change', (event) => {
    sort('FishingDock', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_areaServed')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'areaServed', true);
  });
  document.querySelector('#pageStatsFishingDock_areaServed')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'areaServed', false);
  });

  document.querySelector('#pageSelectSortFishingDock_color')?.addEventListener('change', (event) => {
    sort('FishingDock', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'color', true);
  });
  document.querySelector('#pageStatsFishingDock_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'color', false);
  });

  document.querySelector('#pageSelectSortFishingDock_id')?.addEventListener('change', (event) => {
    sort('FishingDock', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'id', true);
  });
  document.querySelector('#pageStatsFishingDock_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'id', false);
  });

  document.querySelector('#pageSelectSortFishingDock_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishingDock', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsFishingDock_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortFishingDock_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishingDock', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsFishingDock_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortFishingDock_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishingDock', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsFishingDock_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortFishingDock_ngsildData')?.addEventListener('change', (event) => {
    sort('FishingDock', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'ngsildData', true);
  });
  document.querySelector('#pageStatsFishingDock_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortFishingDock_address')?.addEventListener('change', (event) => {
    sort('FishingDock', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'address', true);
  });
  document.querySelector('#pageStatsFishingDock_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'address', false);
  });

  document.querySelector('#pageSelectSortFishingDock_areaServedColors')?.addEventListener('change', (event) => {
    sort('FishingDock', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_areaServedColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'areaServedColors', true);
  });
  document.querySelector('#pageStatsFishingDock_areaServedColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'areaServedColors', false);
  });

  document.querySelector('#pageSelectSortFishingDock_areaServedTitles')?.addEventListener('change', (event) => {
    sort('FishingDock', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_areaServedTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'areaServedTitles', true);
  });
  document.querySelector('#pageStatsFishingDock_areaServedTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'areaServedTitles', false);
  });

  document.querySelector('#pageSelectSortFishingDock_areaServedLinks')?.addEventListener('change', (event) => {
    sort('FishingDock', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_areaServedLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'areaServedLinks', true);
  });
  document.querySelector('#pageStatsFishingDock_areaServedLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'areaServedLinks', false);
  });

  document.querySelector('#pageSelectSortFishingDock_entityShortId')?.addEventListener('change', (event) => {
    sort('FishingDock', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'entityShortId', true);
  });
  document.querySelector('#pageStatsFishingDock_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'entityShortId', false);
  });

  document.querySelector('#pageSelectSortFishingDock_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishingDock', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsFishingDock_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortFishingDock_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishingDock', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsFishingDock_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortFishingDock_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishingDock', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsFishingDock_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortFishingDock_sessionId')?.addEventListener('change', (event) => {
    sort('FishingDock', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'sessionId', true);
  });
  document.querySelector('#pageStatsFishingDock_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortFishingDock_userKey')?.addEventListener('change', (event) => {
    sort('FishingDock', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'userKey', true);
  });
  document.querySelector('#pageStatsFishingDock_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'userKey', false);
  });

  document.querySelector('#pageSelectSortFishingDock_saves')?.addEventListener('change', (event) => {
    sort('FishingDock', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'saves', true);
  });
  document.querySelector('#pageStatsFishingDock_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'saves', false);
  });

  document.querySelector('#pageSelectSortFishingDock_objectTitle')?.addEventListener('change', (event) => {
    sort('FishingDock', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'objectTitle', true);
  });
  document.querySelector('#pageStatsFishingDock_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortFishingDock_displayPage')?.addEventListener('change', (event) => {
    sort('FishingDock', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'displayPage', true);
  });
  document.querySelector('#pageStatsFishingDock_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortFishingDock_editPage')?.addEventListener('change', (event) => {
    sort('FishingDock', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'editPage', true);
  });
  document.querySelector('#pageStatsFishingDock_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'editPage', false);
  });

  document.querySelector('#pageSelectSortFishingDock_userPage')?.addEventListener('change', (event) => {
    sort('FishingDock', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'userPage', true);
  });
  document.querySelector('#pageStatsFishingDock_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'userPage', false);
  });

  document.querySelector('#pageSelectSortFishingDock_download')?.addEventListener('change', (event) => {
    sort('FishingDock', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'download', true);
  });
  document.querySelector('#pageStatsFishingDock_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'download', false);
  });

  document.querySelector('#pageSelectSortFishingDock_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishingDock', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsFishingDock_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortFishingDock_objectText')?.addEventListener('change', (event) => {
    sort('FishingDock', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingDock_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingDock', 'objectText', true);
  });
  document.querySelector('#pageStatsFishingDock_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingDock', 'objectText', false);
  });

  document.querySelector('#htmButton_patchFishingDock')?.addEventListener('click', (event) => {
    document.querySelector('#patchFishingDockDialog').open = true;
  });

  document.querySelector('#htmButton_postFishingDock')?.addEventListener('click', (event) => {
    document.querySelector('#postFishingDockDialog').open = true;
  });

  document.querySelector('#htmButton_deleteFishingDock')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteFishingDock(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportFishingDock')?.addEventListener('click', (event) => {
    document.querySelector('#putimportFishingDockDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageFishingDock')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageFishingDockDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterFishingDock')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFishingDock(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqFishingDock_created')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_created')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_created')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_archived')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_name')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_name')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_name')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_location')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_location')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_location')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_description')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_description')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_description')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_areaServed')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_areaServed')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_color')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_color')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_color')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_color')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_id')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_id')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_id')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_address')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_address')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_address')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#fqFishingDock_displayPage')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingDock_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingDock', event.currentTarget);
          });
});
