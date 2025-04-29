Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeedingOperation')?.addEventListener('change', (event) => {
    facetRangeChange('FeedingOperation', event.target.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_pk')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_created')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_modified')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_archived')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_name')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_description')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_location')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_areaServed')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_id')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_ngsildPath')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_ngsildContext')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_ngsildData')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_address')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_alternateName')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_category')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'category', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_dataProvider')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_dateCreated')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_dateModified')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_endpoint')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'endpoint', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_hasProvider')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'hasProvider', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_owner')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_relatedSource')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_seeAlso')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_source')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_version')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'version', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_classSimpleName')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_sessionId')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_userKey')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_saves')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_objectTitle')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_displayPage')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_editPage')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_userPage')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_download')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_objectSuggest')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_objectText')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_solrId')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_areaServedColors')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_areaServedTitles')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_areaServedLinks')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_entityShortId')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchFeedingOperation')?.addEventListener('click', (event) => {
    document.querySelector('#patchFeedingOperationDialog').open = true;
  });

  document.querySelector('#htmButton_postFeedingOperation')?.addEventListener('click', (event) => {
    document.querySelector('#postFeedingOperationDialog').open = true;
  });

  document.querySelector('#htmButton_deleteFeedingOperation')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteFeedingOperation(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportFeedingOperation')?.addEventListener('click', (event) => {
    document.querySelector('#putimportFeedingOperationDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageFeedingOperation')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageFeedingOperationDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterFeedingOperation')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFeedingOperation(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqFeedingOperation_created')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_created')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_created')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_archived')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_name')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_name')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_name')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_description')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_description')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_description')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_location')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_location')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_location')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_areaServed')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_id')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_id')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_id')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_ngsildData')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_address')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_address')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_address')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_alternateName')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_category')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_category')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_category')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_dataProvider')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_dateCreated')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_dateModified')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_endpoint')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_endpoint')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_endpoint')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_hasProvider')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_hasProvider')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_hasProvider')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_owner')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_owner')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_owner')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_relatedSource')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_relatedSource')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_relatedSource')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_seeAlso')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_source')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_source')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_source')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_version')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_version')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_version')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_displayPage')?.addEventListener('change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
});
