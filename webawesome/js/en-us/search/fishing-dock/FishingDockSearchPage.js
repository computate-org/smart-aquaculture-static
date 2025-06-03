Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishingDock')?.addEventListener('change', (event) => {
    facetRangeChange('FishingDock', event.target.value);
  });

  document.querySelector('#pageFacetSortFishingDock_pk')?.addEventListener('change', (event) => {
    sort('FishingDock', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_created')?.addEventListener('change', (event) => {
    sort('FishingDock', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_modified')?.addEventListener('change', (event) => {
    sort('FishingDock', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_archived')?.addEventListener('change', (event) => {
    sort('FishingDock', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_name')?.addEventListener('change', (event) => {
    sort('FishingDock', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_location')?.addEventListener('change', (event) => {
    sort('FishingDock', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_description')?.addEventListener('change', (event) => {
    sort('FishingDock', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_areaServed')?.addEventListener('change', (event) => {
    sort('FishingDock', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_color')?.addEventListener('change', (event) => {
    sort('FishingDock', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_id')?.addEventListener('change', (event) => {
    sort('FishingDock', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishingDock', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishingDock', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishingDock', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_ngsildData')?.addEventListener('change', (event) => {
    sort('FishingDock', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_address')?.addEventListener('change', (event) => {
    sort('FishingDock', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_areaServedColors')?.addEventListener('change', (event) => {
    sort('FishingDock', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_areaServedTitles')?.addEventListener('change', (event) => {
    sort('FishingDock', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_areaServedLinks')?.addEventListener('change', (event) => {
    sort('FishingDock', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_entityShortId')?.addEventListener('change', (event) => {
    sort('FishingDock', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishingDock', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishingDock', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishingDock', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_sessionId')?.addEventListener('change', (event) => {
    sort('FishingDock', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_userKey')?.addEventListener('change', (event) => {
    sort('FishingDock', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_saves')?.addEventListener('change', (event) => {
    sort('FishingDock', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_objectTitle')?.addEventListener('change', (event) => {
    sort('FishingDock', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_displayPage')?.addEventListener('change', (event) => {
    sort('FishingDock', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_editPage')?.addEventListener('change', (event) => {
    sort('FishingDock', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_userPage')?.addEventListener('change', (event) => {
    sort('FishingDock', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_download')?.addEventListener('change', (event) => {
    sort('FishingDock', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishingDock', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishingDock_objectText')?.addEventListener('change', (event) => {
    sort('FishingDock', 'objectText', event.currentTarget.value);
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
          document.querySelector('#fqFishingDock_archived')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
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
          document.querySelector('#fqFishingDock_location')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_location')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_location')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
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
          document.querySelector('#fqFishingDock_areaServed')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
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
          document.querySelector('#fqFishingDock_id')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_id')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_id')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
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
          document.querySelector('#fqFishingDock_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
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
          document.querySelector('#fqFishingDock_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
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
          document.querySelector('#fqFishingDock_displayPage')?.addEventListener('change', (event) => {
            fqChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishingDock_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishingDock', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishingDock_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishingDock', event.currentTarget);
          });
});
