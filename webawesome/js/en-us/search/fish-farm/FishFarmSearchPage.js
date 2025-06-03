Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishFarm')?.addEventListener('change', (event) => {
    facetRangeChange('FishFarm', event.target.value);
  });

  document.querySelector('#pageFacetSortFishFarm_pk')?.addEventListener('change', (event) => {
    sort('FishFarm', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_created')?.addEventListener('change', (event) => {
    sort('FishFarm', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_modified')?.addEventListener('change', (event) => {
    sort('FishFarm', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_archived')?.addEventListener('change', (event) => {
    sort('FishFarm', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_name')?.addEventListener('change', (event) => {
    sort('FishFarm', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_location')?.addEventListener('change', (event) => {
    sort('FishFarm', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_description')?.addEventListener('change', (event) => {
    sort('FishFarm', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_areaServed')?.addEventListener('change', (event) => {
    sort('FishFarm', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_color')?.addEventListener('change', (event) => {
    sort('FishFarm', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_id')?.addEventListener('change', (event) => {
    sort('FishFarm', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishFarm', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishFarm', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishFarm', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_ngsildData')?.addEventListener('change', (event) => {
    sort('FishFarm', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_address')?.addEventListener('change', (event) => {
    sort('FishFarm', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_areaServedColors')?.addEventListener('change', (event) => {
    sort('FishFarm', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_areaServedTitles')?.addEventListener('change', (event) => {
    sort('FishFarm', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_areaServedLinks')?.addEventListener('change', (event) => {
    sort('FishFarm', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_entityShortId')?.addEventListener('change', (event) => {
    sort('FishFarm', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishFarm', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishFarm', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishFarm', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_sessionId')?.addEventListener('change', (event) => {
    sort('FishFarm', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_userKey')?.addEventListener('change', (event) => {
    sort('FishFarm', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_saves')?.addEventListener('change', (event) => {
    sort('FishFarm', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_objectTitle')?.addEventListener('change', (event) => {
    sort('FishFarm', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_displayPage')?.addEventListener('change', (event) => {
    sort('FishFarm', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_editPage')?.addEventListener('change', (event) => {
    sort('FishFarm', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_userPage')?.addEventListener('change', (event) => {
    sort('FishFarm', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_download')?.addEventListener('change', (event) => {
    sort('FishFarm', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishFarm', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishFarm_objectText')?.addEventListener('change', (event) => {
    sort('FishFarm', 'objectText', event.currentTarget.value);
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
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_created')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_created')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_archived')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_name')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_name')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_name')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_location')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_location')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_location')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_description')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_description')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_description')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_areaServed')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_color')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_color')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_color')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_id')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_id')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_id')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_address')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_address')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_address')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#fqFishFarm_displayPage')?.addEventListener('change', (event) => {
            fqChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishFarm_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishFarm', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishFarm_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishFarm', event.currentTarget);
          });
});
