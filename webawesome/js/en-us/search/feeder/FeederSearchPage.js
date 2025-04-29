Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeeder')?.addEventListener('change', (event) => {
    facetRangeChange('Feeder', event.target.value);
  });

  document.querySelector('#pageFacetSortFeeder_pk')?.addEventListener('change', (event) => {
    sort('Feeder', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_created')?.addEventListener('change', (event) => {
    sort('Feeder', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_modified')?.addEventListener('change', (event) => {
    sort('Feeder', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_archived')?.addEventListener('change', (event) => {
    sort('Feeder', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_name')?.addEventListener('change', (event) => {
    sort('Feeder', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_description')?.addEventListener('change', (event) => {
    sort('Feeder', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_location')?.addEventListener('change', (event) => {
    sort('Feeder', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_areaServed')?.addEventListener('change', (event) => {
    sort('Feeder', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_id')?.addEventListener('change', (event) => {
    sort('Feeder', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_ngsildTenant')?.addEventListener('change', (event) => {
    sort('Feeder', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_ngsildPath')?.addEventListener('change', (event) => {
    sort('Feeder', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_ngsildContext')?.addEventListener('change', (event) => {
    sort('Feeder', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_ngsildData')?.addEventListener('change', (event) => {
    sort('Feeder', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_address')?.addEventListener('change', (event) => {
    sort('Feeder', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_alternateName')?.addEventListener('change', (event) => {
    sort('Feeder', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_dataProvider')?.addEventListener('change', (event) => {
    sort('Feeder', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_dateCreated')?.addEventListener('change', (event) => {
    sort('Feeder', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_dateModified')?.addEventListener('change', (event) => {
    sort('Feeder', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_owner')?.addEventListener('change', (event) => {
    sort('Feeder', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_relatedSource')?.addEventListener('change', (event) => {
    sort('Feeder', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_seeAlso')?.addEventListener('change', (event) => {
    sort('Feeder', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_source')?.addEventListener('change', (event) => {
    sort('Feeder', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Feeder', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_classSimpleName')?.addEventListener('change', (event) => {
    sort('Feeder', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Feeder', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_sessionId')?.addEventListener('change', (event) => {
    sort('Feeder', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_userKey')?.addEventListener('change', (event) => {
    sort('Feeder', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_saves')?.addEventListener('change', (event) => {
    sort('Feeder', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_objectTitle')?.addEventListener('change', (event) => {
    sort('Feeder', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_displayPage')?.addEventListener('change', (event) => {
    sort('Feeder', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_editPage')?.addEventListener('change', (event) => {
    sort('Feeder', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_userPage')?.addEventListener('change', (event) => {
    sort('Feeder', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_download')?.addEventListener('change', (event) => {
    sort('Feeder', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_objectSuggest')?.addEventListener('change', (event) => {
    sort('Feeder', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_objectText')?.addEventListener('change', (event) => {
    sort('Feeder', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_solrId')?.addEventListener('change', (event) => {
    sort('Feeder', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_areaServedColors')?.addEventListener('change', (event) => {
    sort('Feeder', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_areaServedTitles')?.addEventListener('change', (event) => {
    sort('Feeder', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_areaServedLinks')?.addEventListener('change', (event) => {
    sort('Feeder', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_entityShortId')?.addEventListener('change', (event) => {
    sort('Feeder', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchFeeder')?.addEventListener('click', (event) => {
    document.querySelector('#patchFeederDialog').open = true;
  });

  document.querySelector('#htmButton_postFeeder')?.addEventListener('click', (event) => {
    document.querySelector('#postFeederDialog').open = true;
  });

  document.querySelector('#htmButton_deleteFeeder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteFeeder(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportFeeder')?.addEventListener('click', (event) => {
    document.querySelector('#putimportFeederDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageFeeder')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageFeederDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterFeeder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFeeder(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqFeeder_created')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_created')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_created')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_archived')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_name')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_name')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_name')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_description')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_description')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_description')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_location')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_location')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_location')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_areaServed')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_id')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_id')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_id')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildData')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_address')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_address')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_address')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_alternateName')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dataProvider')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dateCreated')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dateModified')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_owner')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_owner')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_owner')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_relatedSource')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_relatedSource')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_relatedSource')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_seeAlso')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_source')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_source')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_source')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_displayPage')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
});
