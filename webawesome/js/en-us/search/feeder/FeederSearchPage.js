Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeeder')?.addEventListener('change', (event) => {
    facetRangeChange('Feeder', event.target.value);
  });

  document.querySelector('#pageSelectSortFeeder_pk')?.addEventListener('change', (event) => {
    sort('Feeder', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'pk', true);
  });
  document.querySelector('#pageStatsFeeder_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'pk', false);
  });

  document.querySelector('#pageSelectSortFeeder_created')?.addEventListener('change', (event) => {
    sort('Feeder', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'created', true);
  });
  document.querySelector('#pageStatsFeeder_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'created', false);
  });

  document.querySelector('#pageSelectSortFeeder_modified')?.addEventListener('change', (event) => {
    sort('Feeder', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'modified', true);
  });
  document.querySelector('#pageStatsFeeder_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'modified', false);
  });

  document.querySelector('#pageSelectSortFeeder_archived')?.addEventListener('change', (event) => {
    sort('Feeder', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'archived', true);
  });
  document.querySelector('#pageStatsFeeder_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'archived', false);
  });

  document.querySelector('#pageSelectSortFeeder_name')?.addEventListener('change', (event) => {
    sort('Feeder', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'name', true);
  });
  document.querySelector('#pageStatsFeeder_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'name', false);
  });

  document.querySelector('#pageSelectSortFeeder_description')?.addEventListener('change', (event) => {
    sort('Feeder', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'description', true);
  });
  document.querySelector('#pageStatsFeeder_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'description', false);
  });

  document.querySelector('#pageSelectSortFeeder_location')?.addEventListener('change', (event) => {
    sort('Feeder', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'location', true);
  });
  document.querySelector('#pageStatsFeeder_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'location', false);
  });

  document.querySelector('#pageSelectSortFeeder_areaServed')?.addEventListener('change', (event) => {
    sort('Feeder', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_areaServed')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'areaServed', true);
  });
  document.querySelector('#pageStatsFeeder_areaServed')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'areaServed', false);
  });

  document.querySelector('#pageSelectSortFeeder_id')?.addEventListener('change', (event) => {
    sort('Feeder', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'id', true);
  });
  document.querySelector('#pageStatsFeeder_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'id', false);
  });

  document.querySelector('#pageSelectSortFeeder_ngsildTenant')?.addEventListener('change', (event) => {
    sort('Feeder', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsFeeder_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortFeeder_ngsildPath')?.addEventListener('change', (event) => {
    sort('Feeder', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsFeeder_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortFeeder_ngsildContext')?.addEventListener('change', (event) => {
    sort('Feeder', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsFeeder_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortFeeder_ngsildData')?.addEventListener('change', (event) => {
    sort('Feeder', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'ngsildData', true);
  });
  document.querySelector('#pageStatsFeeder_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortFeeder_address')?.addEventListener('change', (event) => {
    sort('Feeder', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'address', true);
  });
  document.querySelector('#pageStatsFeeder_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'address', false);
  });

  document.querySelector('#pageSelectSortFeeder_alternateName')?.addEventListener('change', (event) => {
    sort('Feeder', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_alternateName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'alternateName', true);
  });
  document.querySelector('#pageStatsFeeder_alternateName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'alternateName', false);
  });

  document.querySelector('#pageSelectSortFeeder_dataProvider')?.addEventListener('change', (event) => {
    sort('Feeder', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_dataProvider')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'dataProvider', true);
  });
  document.querySelector('#pageStatsFeeder_dataProvider')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'dataProvider', false);
  });

  document.querySelector('#pageSelectSortFeeder_dateCreated')?.addEventListener('change', (event) => {
    sort('Feeder', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_dateCreated')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'dateCreated', true);
  });
  document.querySelector('#pageStatsFeeder_dateCreated')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'dateCreated', false);
  });

  document.querySelector('#pageSelectSortFeeder_dateModified')?.addEventListener('change', (event) => {
    sort('Feeder', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_dateModified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'dateModified', true);
  });
  document.querySelector('#pageStatsFeeder_dateModified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'dateModified', false);
  });

  document.querySelector('#pageSelectSortFeeder_owner')?.addEventListener('change', (event) => {
    sort('Feeder', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_owner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'owner', true);
  });
  document.querySelector('#pageStatsFeeder_owner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'owner', false);
  });

  document.querySelector('#pageSelectSortFeeder_relatedSource')?.addEventListener('change', (event) => {
    sort('Feeder', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_relatedSource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'relatedSource', true);
  });
  document.querySelector('#pageStatsFeeder_relatedSource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'relatedSource', false);
  });

  document.querySelector('#pageSelectSortFeeder_seeAlso')?.addEventListener('change', (event) => {
    sort('Feeder', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_seeAlso')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'seeAlso', true);
  });
  document.querySelector('#pageStatsFeeder_seeAlso')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'seeAlso', false);
  });

  document.querySelector('#pageSelectSortFeeder_source')?.addEventListener('change', (event) => {
    sort('Feeder', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_source')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'source', true);
  });
  document.querySelector('#pageStatsFeeder_source')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'source', false);
  });

  document.querySelector('#pageSelectSortFeeder_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Feeder', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsFeeder_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortFeeder_classSimpleName')?.addEventListener('change', (event) => {
    sort('Feeder', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsFeeder_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortFeeder_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Feeder', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsFeeder_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortFeeder_sessionId')?.addEventListener('change', (event) => {
    sort('Feeder', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'sessionId', true);
  });
  document.querySelector('#pageStatsFeeder_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortFeeder_userKey')?.addEventListener('change', (event) => {
    sort('Feeder', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'userKey', true);
  });
  document.querySelector('#pageStatsFeeder_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'userKey', false);
  });

  document.querySelector('#pageSelectSortFeeder_saves')?.addEventListener('change', (event) => {
    sort('Feeder', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'saves', true);
  });
  document.querySelector('#pageStatsFeeder_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'saves', false);
  });

  document.querySelector('#pageSelectSortFeeder_objectTitle')?.addEventListener('change', (event) => {
    sort('Feeder', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'objectTitle', true);
  });
  document.querySelector('#pageStatsFeeder_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortFeeder_displayPage')?.addEventListener('change', (event) => {
    sort('Feeder', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'displayPage', true);
  });
  document.querySelector('#pageStatsFeeder_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortFeeder_editPage')?.addEventListener('change', (event) => {
    sort('Feeder', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'editPage', true);
  });
  document.querySelector('#pageStatsFeeder_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'editPage', false);
  });

  document.querySelector('#pageSelectSortFeeder_userPage')?.addEventListener('change', (event) => {
    sort('Feeder', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'userPage', true);
  });
  document.querySelector('#pageStatsFeeder_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'userPage', false);
  });

  document.querySelector('#pageSelectSortFeeder_download')?.addEventListener('change', (event) => {
    sort('Feeder', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'download', true);
  });
  document.querySelector('#pageStatsFeeder_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'download', false);
  });

  document.querySelector('#pageSelectSortFeeder_objectSuggest')?.addEventListener('change', (event) => {
    sort('Feeder', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsFeeder_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortFeeder_objectText')?.addEventListener('change', (event) => {
    sort('Feeder', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'objectText', true);
  });
  document.querySelector('#pageStatsFeeder_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'objectText', false);
  });

  document.querySelector('#pageSelectSortFeeder_solrId')?.addEventListener('change', (event) => {
    sort('Feeder', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'solrId', true);
  });
  document.querySelector('#pageStatsFeeder_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'solrId', false);
  });

  document.querySelector('#pageSelectSortFeeder_areaServedColors')?.addEventListener('change', (event) => {
    sort('Feeder', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_areaServedColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'areaServedColors', true);
  });
  document.querySelector('#pageStatsFeeder_areaServedColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'areaServedColors', false);
  });

  document.querySelector('#pageSelectSortFeeder_areaServedTitles')?.addEventListener('change', (event) => {
    sort('Feeder', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_areaServedTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'areaServedTitles', true);
  });
  document.querySelector('#pageStatsFeeder_areaServedTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'areaServedTitles', false);
  });

  document.querySelector('#pageSelectSortFeeder_areaServedLinks')?.addEventListener('change', (event) => {
    sort('Feeder', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_areaServedLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'areaServedLinks', true);
  });
  document.querySelector('#pageStatsFeeder_areaServedLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'areaServedLinks', false);
  });

  document.querySelector('#pageSelectSortFeeder_entityShortId')?.addEventListener('change', (event) => {
    sort('Feeder', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeeder_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feeder', 'entityShortId', true);
  });
  document.querySelector('#pageStatsFeeder_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feeder', 'entityShortId', false);
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
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_created')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_created')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_archived')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_name')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_name')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_name')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_description')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_description')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_description')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_location')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_location')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_location')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_areaServed')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_areaServed')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_areaServed')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_areaServed')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_id')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_id')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_id')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildData')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_address')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_address')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_address')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_address')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_address')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_alternateName')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_alternateName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_alternateName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_alternateName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dataProvider')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_dataProvider')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_dataProvider')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_dataProvider')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dateCreated')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_dateCreated')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_dateCreated')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_dateCreated')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dateModified')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_dateModified')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_dateModified')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_dateModified')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_owner')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_owner')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_owner')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_owner')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_owner')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_owner')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_relatedSource')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_relatedSource')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_relatedSource')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_relatedSource')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_relatedSource')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_relatedSource')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_seeAlso')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_seeAlso')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_seeAlso')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_seeAlso')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_source')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_source')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_source')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_source')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_source')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_source')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_displayPage')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_editPage')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_userPage')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_download')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget, facetChangeFeederSuccess, facetChangeFeederError);
          });
          document.querySelector('#buttonFacetFeeder_download')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_download')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeeder_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeeder_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeeder_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feeder', event.currentTarget);
          });
});
