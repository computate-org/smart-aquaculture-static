Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishProcessing')?.addEventListener('change', (event) => {
    facetRangeChange('FishProcessing', event.target.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_pk')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_created')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_modified')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_archived')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_name')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_location')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_description')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_areaServed')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_color')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_id')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_ngsildData')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_address')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_areaServedColors')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_areaServedLinks')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_entityShortId')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_sessionId')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_userKey')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_saves')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_objectTitle')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_displayPage')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_editPage')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_userPage')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_download')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishProcessing_objectText')?.addEventListener('change', (event) => {
    sort('FishProcessing', 'objectText', event.currentTarget.value);
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
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_created')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_created')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_archived')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_name')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_name')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_name')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_location')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_location')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_location')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_description')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_description')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_description')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_areaServed')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_color')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_color')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_color')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_id')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_id')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_id')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_address')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_address')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_address')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#fqFishProcessing_displayPage')?.addEventListener('change', (event) => {
            fqChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishProcessing_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishProcessing', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishProcessing_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishProcessing', event.currentTarget);
          });
});
