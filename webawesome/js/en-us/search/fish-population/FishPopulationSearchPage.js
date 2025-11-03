Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFishPopulation')?.addEventListener('change', (event) => {
    facetRangeChange('FishPopulation', event.target.value);
  });

  document.querySelector('#pageSelectSortFishPopulation_pk')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'pk', true);
  });
  document.querySelector('#pageStatsFishPopulation_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'pk', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_created')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'created', true);
  });
  document.querySelector('#pageStatsFishPopulation_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'created', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_modified')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'modified', true);
  });
  document.querySelector('#pageStatsFishPopulation_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'modified', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_archived')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'archived', true);
  });
  document.querySelector('#pageStatsFishPopulation_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'archived', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_name')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'name', true);
  });
  document.querySelector('#pageStatsFishPopulation_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'name', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_location')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'location', true);
  });
  document.querySelector('#pageStatsFishPopulation_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'location', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_description')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'description', true);
  });
  document.querySelector('#pageStatsFishPopulation_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'description', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_areaServed')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_areaServed')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'areaServed', true);
  });
  document.querySelector('#pageStatsFishPopulation_areaServed')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'areaServed', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_color')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'color', true);
  });
  document.querySelector('#pageStatsFishPopulation_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'color', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_id')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'id', true);
  });
  document.querySelector('#pageStatsFishPopulation_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'id', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsFishPopulation_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_ngsildPath')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsFishPopulation_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_ngsildContext')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsFishPopulation_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_ngsildData')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'ngsildData', true);
  });
  document.querySelector('#pageStatsFishPopulation_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_address')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'address', true);
  });
  document.querySelector('#pageStatsFishPopulation_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'address', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_alternateName')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_alternateName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'alternateName', true);
  });
  document.querySelector('#pageStatsFishPopulation_alternateName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'alternateName', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_bodyMasse')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'bodyMasse', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_bodyMasse')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'bodyMasse', true);
  });
  document.querySelector('#pageStatsFishPopulation_bodyMasse')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'bodyMasse', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_culturedIn')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'culturedIn', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_culturedIn')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'culturedIn', true);
  });
  document.querySelector('#pageStatsFishPopulation_culturedIn')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'culturedIn', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_dataProvider')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_dataProvider')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'dataProvider', true);
  });
  document.querySelector('#pageStatsFishPopulation_dataProvider')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'dataProvider', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_dateCreated')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_dateCreated')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'dateCreated', true);
  });
  document.querySelector('#pageStatsFishPopulation_dateCreated')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'dateCreated', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_dateModified')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_dateModified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'dateModified', true);
  });
  document.querySelector('#pageStatsFishPopulation_dateModified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'dateModified', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_fishRemoved')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'fishRemoved', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_fishRemoved')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'fishRemoved', true);
  });
  document.querySelector('#pageStatsFishPopulation_fishRemoved')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'fishRemoved', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_initialNumber')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'initialNumber', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_initialNumber')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'initialNumber', true);
  });
  document.querySelector('#pageStatsFishPopulation_initialNumber')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'initialNumber', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_owner')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_owner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'owner', true);
  });
  document.querySelector('#pageStatsFishPopulation_owner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'owner', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_refSpecie')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'refSpecie', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_refSpecie')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'refSpecie', true);
  });
  document.querySelector('#pageStatsFishPopulation_refSpecie')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'refSpecie', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_relatedSource')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_relatedSource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'relatedSource', true);
  });
  document.querySelector('#pageStatsFishPopulation_relatedSource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'relatedSource', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_seeAlso')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_seeAlso')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'seeAlso', true);
  });
  document.querySelector('#pageStatsFishPopulation_seeAlso')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'seeAlso', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_source')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_source')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'source', true);
  });
  document.querySelector('#pageStatsFishPopulation_source')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'source', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_areaServedColors')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_areaServedColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'areaServedColors', true);
  });
  document.querySelector('#pageStatsFishPopulation_areaServedColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'areaServedColors', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_areaServedTitles')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_areaServedTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'areaServedTitles', true);
  });
  document.querySelector('#pageStatsFishPopulation_areaServedTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'areaServedTitles', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_areaServedLinks')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_areaServedLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'areaServedLinks', true);
  });
  document.querySelector('#pageStatsFishPopulation_areaServedLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'areaServedLinks', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_entityShortId')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'entityShortId', true);
  });
  document.querySelector('#pageStatsFishPopulation_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'entityShortId', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsFishPopulation_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_classSimpleName')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsFishPopulation_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsFishPopulation_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_sessionId')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'sessionId', true);
  });
  document.querySelector('#pageStatsFishPopulation_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_userKey')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'userKey', true);
  });
  document.querySelector('#pageStatsFishPopulation_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'userKey', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_saves')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'saves', true);
  });
  document.querySelector('#pageStatsFishPopulation_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'saves', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_objectTitle')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'objectTitle', true);
  });
  document.querySelector('#pageStatsFishPopulation_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_displayPage')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'displayPage', true);
  });
  document.querySelector('#pageStatsFishPopulation_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_editPage')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'editPage', true);
  });
  document.querySelector('#pageStatsFishPopulation_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'editPage', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_userPage')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'userPage', true);
  });
  document.querySelector('#pageStatsFishPopulation_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'userPage', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_download')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'download', true);
  });
  document.querySelector('#pageStatsFishPopulation_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'download', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_objectSuggest')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsFishPopulation_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortFishPopulation_objectText')?.addEventListener('change', (event) => {
    sort('FishPopulation', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFishPopulation_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FishPopulation', 'objectText', true);
  });
  document.querySelector('#pageStatsFishPopulation_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FishPopulation', 'objectText', false);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_areaServed')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_color')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_alternateName')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_bodyMasse')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_culturedIn')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_dataProvider')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_dateCreated')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_dateModified')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_fishRemoved')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_initialNumber')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_owner')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_refSpecie')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_relatedSource')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_seeAlso')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_source')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFishPopulation_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FishPopulation', event.currentTarget);
          });
});
