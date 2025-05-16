Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeeder')?.addEventListener('sl-change', (event) => {
    facetRangeChange('Feeder', event.target.value);
  });

  document.querySelector('#pageFacetSortFeeder_pk')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_created')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_modified')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_archived')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_name')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_description')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_location')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_areaServed')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_id')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_ngsildTenant')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_ngsildPath')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_ngsildContext')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_ngsildData')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_address')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_alternateName')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_dataProvider')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_dateCreated')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_dateModified')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_owner')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_relatedSource')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_seeAlso')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_source')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_classCanonicalName')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_classSimpleName')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_classCanonicalNames')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_sessionId')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_userKey')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_saves')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_objectTitle')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_displayPage')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_editPage')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_userPage')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_download')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_objectSuggest')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_objectText')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_solrId')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_areaServedColors')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_areaServedTitles')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_areaServedLinks')?.addEventListener('sl-change', (event) => {
    sort('Feeder', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeeder_entityShortId')?.addEventListener('sl-change', (event) => {
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
          document.querySelector('#fqFeeder_created')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_created')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_archived')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_name')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_name')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_description')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_description')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_location')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_location')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_location')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_areaServed')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_areaServed')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_id')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_id')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_id')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildTenant')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildTenant')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildPath')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildPath')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildContext')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildContext')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildData')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildData')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_address')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_address')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_address')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_alternateName')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_alternateName')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dataProvider')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dataProvider')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dateCreated')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dateCreated')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dateModified')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dateModified')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_owner')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_owner')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_owner')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_relatedSource')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_relatedSource')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_relatedSource')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_seeAlso')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_seeAlso')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_source')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_source')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_source')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_displayPage')?.addEventListener('sl-change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_displayPage')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
});
