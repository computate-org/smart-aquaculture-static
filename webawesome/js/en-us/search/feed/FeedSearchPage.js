Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeed')?.addEventListener('change', (event) => {
    facetRangeChange('Feed', event.target.value);
  });

  document.querySelector('#pageSelectSortFeed_pk')?.addEventListener('change', (event) => {
    sort('Feed', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'pk', true);
  });
  document.querySelector('#pageStatsFeed_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'pk', false);
  });

  document.querySelector('#pageSelectSortFeed_created')?.addEventListener('change', (event) => {
    sort('Feed', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'created', true);
  });
  document.querySelector('#pageStatsFeed_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'created', false);
  });

  document.querySelector('#pageSelectSortFeed_modified')?.addEventListener('change', (event) => {
    sort('Feed', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'modified', true);
  });
  document.querySelector('#pageStatsFeed_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'modified', false);
  });

  document.querySelector('#pageSelectSortFeed_archived')?.addEventListener('change', (event) => {
    sort('Feed', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'archived', true);
  });
  document.querySelector('#pageStatsFeed_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'archived', false);
  });

  document.querySelector('#pageSelectSortFeed_name')?.addEventListener('change', (event) => {
    sort('Feed', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'name', true);
  });
  document.querySelector('#pageStatsFeed_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'name', false);
  });

  document.querySelector('#pageSelectSortFeed_description')?.addEventListener('change', (event) => {
    sort('Feed', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'description', true);
  });
  document.querySelector('#pageStatsFeed_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'description', false);
  });

  document.querySelector('#pageSelectSortFeed_location')?.addEventListener('change', (event) => {
    sort('Feed', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'location', true);
  });
  document.querySelector('#pageStatsFeed_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'location', false);
  });

  document.querySelector('#pageSelectSortFeed_areaServed')?.addEventListener('change', (event) => {
    sort('Feed', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_areaServed')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'areaServed', true);
  });
  document.querySelector('#pageStatsFeed_areaServed')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'areaServed', false);
  });

  document.querySelector('#pageSelectSortFeed_id')?.addEventListener('change', (event) => {
    sort('Feed', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'id', true);
  });
  document.querySelector('#pageStatsFeed_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'id', false);
  });

  document.querySelector('#pageSelectSortFeed_ngsildTenant')?.addEventListener('change', (event) => {
    sort('Feed', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsFeed_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortFeed_ngsildPath')?.addEventListener('change', (event) => {
    sort('Feed', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsFeed_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortFeed_ngsildContext')?.addEventListener('change', (event) => {
    sort('Feed', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsFeed_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortFeed_ngsildData')?.addEventListener('change', (event) => {
    sort('Feed', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'ngsildData', true);
  });
  document.querySelector('#pageStatsFeed_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortFeed_address')?.addEventListener('change', (event) => {
    sort('Feed', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'address', true);
  });
  document.querySelector('#pageStatsFeed_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'address', false);
  });

  document.querySelector('#pageSelectSortFeed_alternateName')?.addEventListener('change', (event) => {
    sort('Feed', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_alternateName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'alternateName', true);
  });
  document.querySelector('#pageStatsFeed_alternateName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'alternateName', false);
  });

  document.querySelector('#pageSelectSortFeed_dataProvider')?.addEventListener('change', (event) => {
    sort('Feed', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_dataProvider')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'dataProvider', true);
  });
  document.querySelector('#pageStatsFeed_dataProvider')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'dataProvider', false);
  });

  document.querySelector('#pageSelectSortFeed_dateCreated')?.addEventListener('change', (event) => {
    sort('Feed', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_dateCreated')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'dateCreated', true);
  });
  document.querySelector('#pageStatsFeed_dateCreated')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'dateCreated', false);
  });

  document.querySelector('#pageSelectSortFeed_dateModified')?.addEventListener('change', (event) => {
    sort('Feed', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_dateModified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'dateModified', true);
  });
  document.querySelector('#pageStatsFeed_dateModified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'dateModified', false);
  });

  document.querySelector('#pageSelectSortFeed_owner')?.addEventListener('change', (event) => {
    sort('Feed', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_owner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'owner', true);
  });
  document.querySelector('#pageStatsFeed_owner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'owner', false);
  });

  document.querySelector('#pageSelectSortFeed_relatedSource')?.addEventListener('change', (event) => {
    sort('Feed', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_relatedSource')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'relatedSource', true);
  });
  document.querySelector('#pageStatsFeed_relatedSource')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'relatedSource', false);
  });

  document.querySelector('#pageSelectSortFeed_seeAlso')?.addEventListener('change', (event) => {
    sort('Feed', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_seeAlso')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'seeAlso', true);
  });
  document.querySelector('#pageStatsFeed_seeAlso')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'seeAlso', false);
  });

  document.querySelector('#pageSelectSortFeed_source')?.addEventListener('change', (event) => {
    sort('Feed', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_source')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'source', true);
  });
  document.querySelector('#pageStatsFeed_source')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'source', false);
  });

  document.querySelector('#pageSelectSortFeed_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Feed', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsFeed_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortFeed_classSimpleName')?.addEventListener('change', (event) => {
    sort('Feed', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsFeed_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortFeed_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Feed', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsFeed_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortFeed_sessionId')?.addEventListener('change', (event) => {
    sort('Feed', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'sessionId', true);
  });
  document.querySelector('#pageStatsFeed_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortFeed_userKey')?.addEventListener('change', (event) => {
    sort('Feed', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'userKey', true);
  });
  document.querySelector('#pageStatsFeed_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'userKey', false);
  });

  document.querySelector('#pageSelectSortFeed_saves')?.addEventListener('change', (event) => {
    sort('Feed', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'saves', true);
  });
  document.querySelector('#pageStatsFeed_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'saves', false);
  });

  document.querySelector('#pageSelectSortFeed_objectTitle')?.addEventListener('change', (event) => {
    sort('Feed', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'objectTitle', true);
  });
  document.querySelector('#pageStatsFeed_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortFeed_displayPage')?.addEventListener('change', (event) => {
    sort('Feed', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'displayPage', true);
  });
  document.querySelector('#pageStatsFeed_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortFeed_displayPageFrFR')?.addEventListener('change', (event) => {
    sort('Feed', 'displayPageFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_displayPageFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'displayPageFrFR', true);
  });
  document.querySelector('#pageStatsFeed_displayPageFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'displayPageFrFR', false);
  });

  document.querySelector('#pageSelectSortFeed_editPage')?.addEventListener('change', (event) => {
    sort('Feed', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'editPage', true);
  });
  document.querySelector('#pageStatsFeed_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'editPage', false);
  });

  document.querySelector('#pageSelectSortFeed_editPageFrFR')?.addEventListener('change', (event) => {
    sort('Feed', 'editPageFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_editPageFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'editPageFrFR', true);
  });
  document.querySelector('#pageStatsFeed_editPageFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'editPageFrFR', false);
  });

  document.querySelector('#pageSelectSortFeed_userPage')?.addEventListener('change', (event) => {
    sort('Feed', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'userPage', true);
  });
  document.querySelector('#pageStatsFeed_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'userPage', false);
  });

  document.querySelector('#pageSelectSortFeed_userPageFrFR')?.addEventListener('change', (event) => {
    sort('Feed', 'userPageFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_userPageFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'userPageFrFR', true);
  });
  document.querySelector('#pageStatsFeed_userPageFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'userPageFrFR', false);
  });

  document.querySelector('#pageSelectSortFeed_download')?.addEventListener('change', (event) => {
    sort('Feed', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'download', true);
  });
  document.querySelector('#pageStatsFeed_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'download', false);
  });

  document.querySelector('#pageSelectSortFeed_downloadFrFR')?.addEventListener('change', (event) => {
    sort('Feed', 'downloadFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_downloadFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'downloadFrFR', true);
  });
  document.querySelector('#pageStatsFeed_downloadFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'downloadFrFR', false);
  });

  document.querySelector('#pageSelectSortFeed_objectSuggest')?.addEventListener('change', (event) => {
    sort('Feed', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsFeed_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortFeed_objectText')?.addEventListener('change', (event) => {
    sort('Feed', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'objectText', true);
  });
  document.querySelector('#pageStatsFeed_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'objectText', false);
  });

  document.querySelector('#pageSelectSortFeed_solrId')?.addEventListener('change', (event) => {
    sort('Feed', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'solrId', true);
  });
  document.querySelector('#pageStatsFeed_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'solrId', false);
  });

  document.querySelector('#pageSelectSortFeed_areaServedColors')?.addEventListener('change', (event) => {
    sort('Feed', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_areaServedColors')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'areaServedColors', true);
  });
  document.querySelector('#pageStatsFeed_areaServedColors')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'areaServedColors', false);
  });

  document.querySelector('#pageSelectSortFeed_areaServedTitles')?.addEventListener('change', (event) => {
    sort('Feed', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_areaServedTitles')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'areaServedTitles', true);
  });
  document.querySelector('#pageStatsFeed_areaServedTitles')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'areaServedTitles', false);
  });

  document.querySelector('#pageSelectSortFeed_areaServedLinks')?.addEventListener('change', (event) => {
    sort('Feed', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_areaServedLinks')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'areaServedLinks', true);
  });
  document.querySelector('#pageStatsFeed_areaServedLinks')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'areaServedLinks', false);
  });

  document.querySelector('#pageSelectSortFeed_entityShortId')?.addEventListener('change', (event) => {
    sort('Feed', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFeed_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Feed', 'entityShortId', true);
  });
  document.querySelector('#pageStatsFeed_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Feed', 'entityShortId', false);
  });

  document.querySelector('#htmButton_patchFeed')?.addEventListener('click', (event) => {
    document.querySelector('#patchFeedDialog').open = true;
  });

  document.querySelector('#htmButton_postFeed')?.addEventListener('click', (event) => {
    document.querySelector('#postFeedDialog').open = true;
  });

  document.querySelector('#htmButton_deleteFeed')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteFeed(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportFeed')?.addEventListener('click', (event) => {
    document.querySelector('#putimportFeedDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageFeed')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageFeedDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterFeed')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFeed(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqFeed_created')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_created')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_created')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_archived')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_name')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_name')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_name')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_description')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_description')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_description')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_location')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_location')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_location')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_areaServed')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_areaServed')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_areaServed')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_areaServed')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_id')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_id')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_id')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildData')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_address')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_address')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_address')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_address')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_address')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_alternateName')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_alternateName')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_alternateName')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_alternateName')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_dataProvider')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_dataProvider')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_dataProvider')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_dataProvider')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_dateCreated')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_dateCreated')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_dateCreated')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_dateCreated')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_dateModified')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_dateModified')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_dateModified')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_dateModified')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_owner')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_owner')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_owner')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_owner')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_owner')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_owner')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_relatedSource')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_relatedSource')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_relatedSource')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_relatedSource')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_relatedSource')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_relatedSource')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_seeAlso')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_seeAlso')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_seeAlso')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_seeAlso')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_source')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_source')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_source')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_source')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_source')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_source')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_displayPage')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_displayPageFrFR')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_displayPageFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_displayPageFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_displayPageFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_displayPageFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_displayPageFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_editPage')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_editPageFrFR')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_editPageFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_editPageFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_editPageFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_editPageFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_editPageFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_userPage')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_userPageFrFR')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_userPageFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_userPageFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_userPageFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_userPageFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_userPageFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_download')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_download')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_download')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_downloadFrFR')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget, facetChangeFeedSuccess, facetChangeFeedError);
          });
          document.querySelector('#buttonFacetFeed_downloadFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_downloadFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFeed_downloadFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFeed_downloadFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFeed_downloadFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('Feed', event.currentTarget);
          });
});
