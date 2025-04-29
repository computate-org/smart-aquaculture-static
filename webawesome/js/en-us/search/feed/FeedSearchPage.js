Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeed')?.addEventListener('change', (event) => {
    facetRangeChange('Feed', event.target.value);
  });

  document.querySelector('#pageFacetSortFeed_pk')?.addEventListener('change', (event) => {
    sort('Feed', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_created')?.addEventListener('change', (event) => {
    sort('Feed', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_modified')?.addEventListener('change', (event) => {
    sort('Feed', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_archived')?.addEventListener('change', (event) => {
    sort('Feed', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_name')?.addEventListener('change', (event) => {
    sort('Feed', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_description')?.addEventListener('change', (event) => {
    sort('Feed', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_location')?.addEventListener('change', (event) => {
    sort('Feed', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_areaServed')?.addEventListener('change', (event) => {
    sort('Feed', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_id')?.addEventListener('change', (event) => {
    sort('Feed', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_ngsildTenant')?.addEventListener('change', (event) => {
    sort('Feed', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_ngsildPath')?.addEventListener('change', (event) => {
    sort('Feed', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_ngsildContext')?.addEventListener('change', (event) => {
    sort('Feed', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_ngsildData')?.addEventListener('change', (event) => {
    sort('Feed', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_address')?.addEventListener('change', (event) => {
    sort('Feed', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_alternateName')?.addEventListener('change', (event) => {
    sort('Feed', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_dataProvider')?.addEventListener('change', (event) => {
    sort('Feed', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_dateCreated')?.addEventListener('change', (event) => {
    sort('Feed', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_dateModified')?.addEventListener('change', (event) => {
    sort('Feed', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_owner')?.addEventListener('change', (event) => {
    sort('Feed', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_relatedSource')?.addEventListener('change', (event) => {
    sort('Feed', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_seeAlso')?.addEventListener('change', (event) => {
    sort('Feed', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_source')?.addEventListener('change', (event) => {
    sort('Feed', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Feed', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_classSimpleName')?.addEventListener('change', (event) => {
    sort('Feed', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Feed', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_sessionId')?.addEventListener('change', (event) => {
    sort('Feed', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_userKey')?.addEventListener('change', (event) => {
    sort('Feed', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_saves')?.addEventListener('change', (event) => {
    sort('Feed', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_objectTitle')?.addEventListener('change', (event) => {
    sort('Feed', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_displayPage')?.addEventListener('change', (event) => {
    sort('Feed', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_editPage')?.addEventListener('change', (event) => {
    sort('Feed', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_userPage')?.addEventListener('change', (event) => {
    sort('Feed', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_download')?.addEventListener('change', (event) => {
    sort('Feed', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_objectSuggest')?.addEventListener('change', (event) => {
    sort('Feed', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_objectText')?.addEventListener('change', (event) => {
    sort('Feed', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_solrId')?.addEventListener('change', (event) => {
    sort('Feed', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_areaServedColors')?.addEventListener('change', (event) => {
    sort('Feed', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_areaServedTitles')?.addEventListener('change', (event) => {
    sort('Feed', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_areaServedLinks')?.addEventListener('change', (event) => {
    sort('Feed', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_entityShortId')?.addEventListener('change', (event) => {
    sort('Feed', 'entityShortId', event.currentTarget.value);
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
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_created')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_created')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_archived')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_name')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_name')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_name')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_description')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_description')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_description')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_location')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_location')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_location')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_areaServed')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_id')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_id')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_id')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildData')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_address')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_address')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_address')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_alternateName')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_dataProvider')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_dateCreated')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_dateModified')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_owner')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_owner')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_owner')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_relatedSource')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_relatedSource')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_relatedSource')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_seeAlso')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_source')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_source')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_source')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_displayPage')?.addEventListener('change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
});
