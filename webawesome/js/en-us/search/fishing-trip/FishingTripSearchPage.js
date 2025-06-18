Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishingTrip')?.addEventListener('change', (event) => {
    facetRangeChange('FishingTrip', event.target.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_pk')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_created')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_modified')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_archived')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_timeZone')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'timeZone', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_departureDate')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'departureDate', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_arrivalDate')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'arrivalDate', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_name')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_location')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_areaServed')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_description')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_color')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_id')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_ngsildData')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_areaServedTitles')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_areaServedLinks')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_entityShortId')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_sessionId')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_userKey')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_saves')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_objectTitle')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_displayPage')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_editPage')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_userPage')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_download')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_objectText')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_solrId')?.addEventListener('change', (event) => {
    sort('FishingTrip', 'solrId', event.currentTarget.value);
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
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_created')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_created')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_archived')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_departureDate')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_departureDate')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_departureDate')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_arrivalDate')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_arrivalDate')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_arrivalDate')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_name')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_name')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_name')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_location')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_location')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_location')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_areaServed')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_description')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_description')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_description')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_color')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_color')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_color')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_id')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_id')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_id')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_displayPage')?.addEventListener('change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
});
