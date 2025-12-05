Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishingTrip')?.addEventListener('change', (event) => {
    facetRangeChange('FishingTrip', event.target.value);
  });

  document.querySelector('#pageSelectSortFishingTrip_pk')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'pk', true);
  });
  document.querySelector('#pageStatsFishingTrip_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'pk', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_created')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'created', true);
  });
  document.querySelector('#pageStatsFishingTrip_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'created', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_modified')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'modified', true);
  });
  document.querySelector('#pageStatsFishingTrip_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'modified', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_archived')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'archived', true);
  });
  document.querySelector('#pageStatsFishingTrip_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'archived', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_timeZone')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'timeZone', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_timeZone')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'timeZone', true);
  });
  document.querySelector('#pageStatsFishingTrip_timeZone')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'timeZone', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_departureDate')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'departureDate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_departureDate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'departureDate', true);
  });
  document.querySelector('#pageStatsFishingTrip_departureDate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'departureDate', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_arrivalDate')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'arrivalDate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_arrivalDate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'arrivalDate', true);
  });
  document.querySelector('#pageStatsFishingTrip_arrivalDate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'arrivalDate', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_name')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'name', true);
  });
  document.querySelector('#pageStatsFishingTrip_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'name', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_location')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'location', true);
  });
  document.querySelector('#pageStatsFishingTrip_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'location', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_description')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'description', true);
  });
  document.querySelector('#pageStatsFishingTrip_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'description', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_color')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'color', true);
  });
  document.querySelector('#pageStatsFishingTrip_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'color', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_id')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'id', true);
  });
  document.querySelector('#pageStatsFishingTrip_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'id', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsFishingTrip_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsFishingTrip_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsFishingTrip_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_ngsildData')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'ngsildData', true);
  });
  document.querySelector('#pageStatsFishingTrip_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsFishingTrip_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsFishingTrip_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsFishingTrip_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_sessionId')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'sessionId', true);
  });
  document.querySelector('#pageStatsFishingTrip_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_userKey')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'userKey', true);
  });
  document.querySelector('#pageStatsFishingTrip_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'userKey', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_saves')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'saves', true);
  });
  document.querySelector('#pageStatsFishingTrip_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'saves', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_objectTitle')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'objectTitle', true);
  });
  document.querySelector('#pageStatsFishingTrip_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_displayPage')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'displayPage', true);
  });
  document.querySelector('#pageStatsFishingTrip_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_editPage')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'editPage', true);
  });
  document.querySelector('#pageStatsFishingTrip_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'editPage', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_userPage')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'userPage', true);
  });
  document.querySelector('#pageStatsFishingTrip_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'userPage', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_download')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'download', true);
  });
  document.querySelector('#pageStatsFishingTrip_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'download', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsFishingTrip_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_objectText')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'objectText', true);
  });
  document.querySelector('#pageStatsFishingTrip_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'objectText', false);
  });

  document.querySelector('#pageSelectSortFishingTrip_solrId')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishingTrip_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishingTrip', 'solrId', true);
  });
  document.querySelector('#pageStatsFishingTrip_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishingTrip', 'solrId', false);
  });

  document.querySelector('#htmButton_patchFishingTrip')?.addEventListener('click', (event) => {
    document.querySelector('#patchFishingTripDialog').open = true;
  });

  document.querySelector('#htmButton_postFishingTrip')?.addEventListener('click', (event) => {
    document.querySelector('#postFishingTripDialog').open = true;
  });

  document.querySelector('#htmButton_deleteFishingTrip')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteFishingTrip(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportFishingTrip')?.addEventListener('click', (event) => {
    document.querySelector('#putimportFishingTripDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageFishingTrip')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageFishingTripDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterFishingTrip')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFishingTrip(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqFishingTrip_created')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_created')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_created')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_archived')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_departureDate')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_departureDate')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_departureDate')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_departureDate')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_departureDate')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_departureDate')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_arrivalDate')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_arrivalDate')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_arrivalDate')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_arrivalDate')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_arrivalDate')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_arrivalDate')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_name')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_name')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_name')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_location')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_location')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_location')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_description')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_description')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_description')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_color')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_color')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_color')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_color')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_color')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_color')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_id')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_id')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_id')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_displayPage')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_editPage')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_userPage')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_download')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget, facetChangeFishingTripSuccess, facetChangeFishingTripError);
          });
          document.querySelector('#buttonFacetFishingTrip_download')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_download')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFishingTrip_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFishingTrip_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFishingTrip_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('FishingTrip', event.currentTarget);
          });
});
