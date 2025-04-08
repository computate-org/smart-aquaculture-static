Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeed')?.addEventListener('sl-change', (event) => {
    facetRangeChange('Feed', event.target.value);
  });

  document.querySelector('#pageFacetSortFeed_pk')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_created')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_modified')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_archived')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_name')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_description')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_location')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_areaServed')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_id')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_ngsildTenant')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_ngsildPath')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_ngsildContext')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_ngsildData')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_address')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_alternateName')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_dataProvider')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_dateCreated')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_dateModified')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_owner')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_relatedSource')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'relatedSource', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_seeAlso')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_source')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_classCanonicalName')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_classSimpleName')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_classCanonicalNames')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_sessionId')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_userKey')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_saves')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_title')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'title', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_displayPage')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_editPage')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_userPage')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_download')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_objectSuggest')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_objectText')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_solrId')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_areaServedColors')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_areaServedTitles')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_areaServedLinks')?.addEventListener('sl-change', (event) => {
    sort('Feed', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortFeed_entityShortId')?.addEventListener('sl-change', (event) => {
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
          document.querySelector('#fqFeed_created')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_created')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_archived')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_name')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_name')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_description')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_description')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_location')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_location')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_location')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_areaServed')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_areaServed')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_id')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_id')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_id')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildTenant')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildTenant')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildPath')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildPath')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildContext')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildContext')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_ngsildData')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_ngsildData')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_address')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_address')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_address')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_alternateName')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_alternateName')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_dataProvider')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_dataProvider')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_dateCreated')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_dateCreated')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_dateModified')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_dateModified')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_owner')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_owner')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_owner')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_relatedSource')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_relatedSource')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_relatedSource')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_seeAlso')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_seeAlso')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_source')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_source')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_source')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
          document.querySelector('#fqFeed_displayPage')?.addEventListener('sl-change', (event) => {
            fqChange('Feed', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeed_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feed', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeed_displayPage')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Feed', event.currentTarget);
          });
});
