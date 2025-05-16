Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishingTrip')?.addEventListener('sl-change', (event) => {
    facetRangeChange('FishingTrip', event.target.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_pk')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_created')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_modified')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_archived')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_timeZone')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'timeZone', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_departureDate')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'departureDate', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_arrivalDate')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'arrivalDate', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_name')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_description')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_classCanonicalName')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_classSimpleName')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_classCanonicalNames')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_sessionId')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_userKey')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_saves')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_objectTitle')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_displayPage')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_editPage')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_userPage')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_download')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_objectSuggest')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingTrip_objectText')?.addEventListener('sl-change', (event) => {
    sort('FishingTrip', 'objectText', event.currentTarget.value);
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
      var pk =  event.currentTarget.getAttribute('data-pk');
      deleteFishingTrip(
          event.currentTarget
          , pk
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
          document.querySelector('#fqFishingTrip_created')?.addEventListener('sl-change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_created')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_archived')?.addEventListener('sl-change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_timeZone')?.addEventListener('sl-change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_timeZone')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_timeZone')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_departureDate')?.addEventListener('sl-change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_departureDate')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_departureDate')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_arrivalDate')?.addEventListener('sl-change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_arrivalDate')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_arrivalDate')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_name')?.addEventListener('sl-change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_name')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_description')?.addEventListener('sl-change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_description')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#fqFishingTrip_displayPage')?.addEventListener('sl-change', (event) => {
            fqChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingTrip_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishingTrip', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingTrip_displayPage')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FishingTrip', event.currentTarget);
          });
});
