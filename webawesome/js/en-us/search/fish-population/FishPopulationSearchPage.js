Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishPopulation')?.addEventListener('change', (event) => {
    facetRangeChange('FishPopulation', event.target.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_pk')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_created')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_modified')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_archived')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_name')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_location')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_areaServed')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_description')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_color')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_id')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_ngsildData')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_address')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_alternateName')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_bodyMasse')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'bodyMasse', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_culturedIn')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'culturedIn', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_dataProvider')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_dateCreated')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_dateModified')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_fishRemoved')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'fishRemoved', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_initialNumber')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'initialNumber', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_owner')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_refSpecie')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'refSpecie', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_relatedSource')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_seeAlso')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_source')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_areaServedTitles')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_areaServedLinks')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_entityShortId')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_sessionId')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_userKey')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_saves')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_objectTitle')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_displayPage')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_editPage')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_userPage')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_download')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_objectText')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFishPopulation_solrId')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchFishPopulation')?.addEventListener('click', (event) => {
    document.querySelector('#patchFishPopulationDialog').open = true;
  });

  document.querySelector('#htmButton_postFishPopulation')?.addEventListener('click', (event) => {
    document.querySelector('#postFishPopulationDialog').open = true;
  });

  document.querySelector('#htmButton_deleteFishPopulation')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteFishPopulation(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportFishPopulation')?.addEventListener('click', (event) => {
    document.querySelector('#putimportFishPopulationDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageFishPopulation')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageFishPopulationDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterFishPopulation')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFishPopulation(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqFishPopulation_created')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_created')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_created')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_archived')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_name')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_name')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_name')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_location')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_location')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_location')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_areaServed')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_description')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_description')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_description')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_color')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_color')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_color')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_id')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_id')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_id')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_address')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_address')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_address')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_alternateName')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_bodyMasse')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_bodyMasse')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_bodyMasse')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_culturedIn')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_culturedIn')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_culturedIn')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_dataProvider')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_dateCreated')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_dateModified')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_fishRemoved')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_fishRemoved')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_fishRemoved')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_initialNumber')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_initialNumber')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_initialNumber')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_owner')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_owner')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_owner')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_refSpecie')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_refSpecie')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_refSpecie')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_relatedSource')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_relatedSource')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_relatedSource')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_seeAlso')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_source')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_source')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_source')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#fqFishPopulation_displayPage')?.addEventListener('change', (event) => {
            fqChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFishPopulation_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FishPopulation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFishPopulation_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FishPopulation', event.currentTarget);
          });
});
