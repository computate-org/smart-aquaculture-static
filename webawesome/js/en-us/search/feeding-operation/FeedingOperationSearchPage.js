Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeedingOperation')?.addEventListener('change', (event) => {
    facetRangeChange('FeedingOperation', event.target.value);
  });

  document.querySelector('#pageSelectSortFeedingOperation_pk')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'pk', true);
  });
  document.querySelector('#pageStatsFeedingOperation_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'pk', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_created')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'created', true);
  });
  document.querySelector('#pageStatsFeedingOperation_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'created', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_modified')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'modified', true);
  });
  document.querySelector('#pageStatsFeedingOperation_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'modified', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_archived')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'archived', true);
  });
  document.querySelector('#pageStatsFeedingOperation_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'archived', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_name')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'name', true);
  });
  document.querySelector('#pageStatsFeedingOperation_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'name', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_description')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'description', true);
  });
  document.querySelector('#pageStatsFeedingOperation_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'description', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_location')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'location', true);
  });
  document.querySelector('#pageStatsFeedingOperation_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'location', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_areaServed')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_areaServed')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'areaServed', true);
  });
  document.querySelector('#pageStatsFeedingOperation_areaServed')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'areaServed', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_id')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'id', true);
  });
  document.querySelector('#pageStatsFeedingOperation_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'id', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_ngsildTenant')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsFeedingOperation_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_ngsildPath')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsFeedingOperation_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_ngsildContext')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsFeedingOperation_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_ngsildData')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'ngsildData', true);
  });
  document.querySelector('#pageStatsFeedingOperation_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_address')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'address', true);
  });
  document.querySelector('#pageStatsFeedingOperation_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'address', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_alternateName')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_alternateName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'alternateName', true);
  });
  document.querySelector('#pageStatsFeedingOperation_alternateName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'alternateName', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_category')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'category', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_category')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'category', true);
  });
  document.querySelector('#pageStatsFeedingOperation_category')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'category', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_dataProvider')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_dataProvider')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'dataProvider', true);
  });
  document.querySelector('#pageStatsFeedingOperation_dataProvider')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'dataProvider', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_dateCreated')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_dateCreated')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'dateCreated', true);
  });
  document.querySelector('#pageStatsFeedingOperation_dateCreated')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'dateCreated', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_dateModified')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_dateModified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'dateModified', true);
  });
  document.querySelector('#pageStatsFeedingOperation_dateModified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'dateModified', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_endpoint')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'endpoint', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_endpoint')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'endpoint', true);
  });
  document.querySelector('#pageStatsFeedingOperation_endpoint')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'endpoint', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_hasProvider')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'hasProvider', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_hasProvider')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'hasProvider', true);
  });
  document.querySelector('#pageStatsFeedingOperation_hasProvider')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'hasProvider', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_owner')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_owner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'owner', true);
  });
  document.querySelector('#pageStatsFeedingOperation_owner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'owner', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_relatedSource')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_relatedSource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'relatedSource', true);
  });
  document.querySelector('#pageStatsFeedingOperation_relatedSource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'relatedSource', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_seeAlso')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_seeAlso')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'seeAlso', true);
  });
  document.querySelector('#pageStatsFeedingOperation_seeAlso')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'seeAlso', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_source')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_source')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'source', true);
  });
  document.querySelector('#pageStatsFeedingOperation_source')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'source', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_version')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'version', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_version')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'version', true);
  });
  document.querySelector('#pageStatsFeedingOperation_version')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'version', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsFeedingOperation_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_classSimpleName')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsFeedingOperation_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsFeedingOperation_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_sessionId')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'sessionId', true);
  });
  document.querySelector('#pageStatsFeedingOperation_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_userKey')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'userKey', true);
  });
  document.querySelector('#pageStatsFeedingOperation_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'userKey', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_saves')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'saves', true);
  });
  document.querySelector('#pageStatsFeedingOperation_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'saves', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_objectTitle')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'objectTitle', true);
  });
  document.querySelector('#pageStatsFeedingOperation_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_displayPage')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'displayPage', true);
  });
  document.querySelector('#pageStatsFeedingOperation_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_editPage')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'editPage', true);
  });
  document.querySelector('#pageStatsFeedingOperation_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'editPage', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_userPage')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'userPage', true);
  });
  document.querySelector('#pageStatsFeedingOperation_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'userPage', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_download')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'download', true);
  });
  document.querySelector('#pageStatsFeedingOperation_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'download', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_objectSuggest')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsFeedingOperation_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_objectText')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'objectText', true);
  });
  document.querySelector('#pageStatsFeedingOperation_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'objectText', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_solrId')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'solrId', true);
  });
  document.querySelector('#pageStatsFeedingOperation_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'solrId', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_areaServedColors')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_areaServedColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'areaServedColors', true);
  });
  document.querySelector('#pageStatsFeedingOperation_areaServedColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'areaServedColors', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_areaServedTitles')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_areaServedTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'areaServedTitles', true);
  });
  document.querySelector('#pageStatsFeedingOperation_areaServedTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'areaServedTitles', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_areaServedLinks')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_areaServedLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'areaServedLinks', true);
  });
  document.querySelector('#pageStatsFeedingOperation_areaServedLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'areaServedLinks', false);
  });

  document.querySelector('#pageSelectSortFeedingOperation_entityShortId')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeedingOperation_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FeedingOperation', 'entityShortId', true);
  });
  document.querySelector('#pageStatsFeedingOperation_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FeedingOperation', 'entityShortId', false);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_areaServed')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_alternateName')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_category')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_dataProvider')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_dateCreated')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_dateModified')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_endpoint')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_hasProvider')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_owner')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_relatedSource')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_seeAlso')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_source')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_version')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
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
          document.querySelector('#pageFacetRangeGapFeedingOperation_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FeedingOperation', event.currentTarget);
          });
});
