Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeedingOperation')?.addEventListener('sl-change', (event) => {
    facetRangeChange('FeedingOperation', event.target.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_pk')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_created')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_modified')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_archived')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_name')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_description')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_location')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_areaServed')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_id')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_ngsildTenant')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_ngsildPath')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_ngsildContext')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_ngsildData')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_address')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_alternateName')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_category')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'category', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_dataProvider')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_dateCreated')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_dateModified')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_endpoint')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'endpoint', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_hasProvider')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'hasProvider', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_owner')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_relatedSource')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_seeAlso')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_source')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_version')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'version', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_classCanonicalName')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_classSimpleName')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_classCanonicalNames')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_sessionId')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_userKey')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_saves')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_objectTitle')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_displayPage')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_editPage')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_userPage')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_download')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_objectSuggest')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_objectText')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_solrId')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_areaServedColors')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_areaServedTitles')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_areaServedLinks')?.addEventListener('sl-change', (event) => {
    sort('FeedingOperation', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeedingOperation_entityShortId')?.addEventListener('sl-change', (event) => {
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
          document.querySelector('#fqFeedingOperation_created')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_created')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_archived')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_name')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_name')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_description')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_description')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_location')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_location')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_location')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_areaServed')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_areaServed')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_id')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_id')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_id')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_ngsildTenant')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_ngsildTenant')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_ngsildPath')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_ngsildPath')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_ngsildContext')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_ngsildContext')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_ngsildData')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_ngsildData')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_address')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_address')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_address')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_alternateName')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_alternateName')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_category')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_category')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_category')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_dataProvider')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_dataProvider')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_dateCreated')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_dateCreated')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_dateModified')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_dateModified')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_endpoint')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_endpoint')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_endpoint')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_hasProvider')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_hasProvider')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_hasProvider')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_owner')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_owner')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_owner')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_relatedSource')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_relatedSource')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_relatedSource')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_seeAlso')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_seeAlso')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_source')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_source')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_source')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_version')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_version')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_version')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#fqFeedingOperation_displayPage')?.addEventListener('sl-change', (event) => {
            fqChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeedingOperation_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FeedingOperation', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeedingOperation_displayPage')?.addEventListener('sl-change', (event) => {
            facetPivotChange('FeedingOperation', event.currentTarget);
          });
});
