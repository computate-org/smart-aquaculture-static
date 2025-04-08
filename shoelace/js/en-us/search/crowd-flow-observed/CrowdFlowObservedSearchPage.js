Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCrowdFlowObserved')?.addEventListener('sl-change', (event) => {
    facetRangeChange('CrowdFlowObserved', event.target.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_pk')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_created')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_modified')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_archived')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_name')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_description')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_location')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_areaServed')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_id')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_ngsildTenant')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_ngsildPath')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_ngsildContext')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_ngsildData')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_address')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_alternateName')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_averageCrowdSpeed')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'averageCrowdSpeed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_averageHeadwayTime')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'averageHeadwayTime', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_congested')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'congested', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_dataProvider')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_dateCreated')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_dateModified')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_dateObserved')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'dateObserved', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_dateObservedFrom')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'dateObservedFrom', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_dateObservedTo')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'dateObservedTo', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_direction')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'direction', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_occupancy')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'occupancy', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_owner')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_peopleCount')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'peopleCount', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_refRoadSegment')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'refRoadSegment', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_seeAlso')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_source')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_classCanonicalName')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_classSimpleName')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_classCanonicalNames')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_sessionId')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_userKey')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_saves')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_title')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'title', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_displayPage')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_editPage')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_userPage')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_download')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_objectSuggest')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_objectText')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_solrId')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_areaServedColors')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_areaServedTitles')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_areaServedLinks')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_entityShortId')?.addEventListener('sl-change', (event) => {
    sort('CrowdFlowObserved', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchCrowdFlowObserved')?.addEventListener('click', (event) => {
    document.querySelector('#patchCrowdFlowObservedDialog').open = true;
  });

  document.querySelector('#htmButton_postCrowdFlowObserved')?.addEventListener('click', (event) => {
    document.querySelector('#postCrowdFlowObservedDialog').open = true;
  });

  document.querySelector('#htmButton_deleteCrowdFlowObserved')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteCrowdFlowObserved(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportCrowdFlowObserved')?.addEventListener('click', (event) => {
    document.querySelector('#putimportCrowdFlowObservedDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageCrowdFlowObserved')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageCrowdFlowObservedDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterCrowdFlowObserved')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterCrowdFlowObserved(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqCrowdFlowObserved_created')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_created')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_archived')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_archived')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_archived')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_name')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_name')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_description')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_description')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_location')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_location')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_location')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_areaServed')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_areaServed')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_id')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_id')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_id')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_ngsildTenant')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_ngsildTenant')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_ngsildPath')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_ngsildPath')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_ngsildContext')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_ngsildContext')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_ngsildData')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_ngsildData')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_address')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_address')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_address')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_alternateName')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_alternateName')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_averageCrowdSpeed')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_averageCrowdSpeed')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_averageCrowdSpeed')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_averageHeadwayTime')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_averageHeadwayTime')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_averageHeadwayTime')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_congested')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_congested')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_congested')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dataProvider')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dataProvider')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dateCreated')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dateCreated')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dateModified')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dateModified')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dateObserved')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dateObserved')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dateObserved')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dateObservedFrom')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dateObservedFrom')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dateObservedFrom')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dateObservedTo')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dateObservedTo')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dateObservedTo')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_direction')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_direction')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_direction')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_occupancy')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_occupancy')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_occupancy')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_owner')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_owner')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_owner')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_peopleCount')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_peopleCount')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_peopleCount')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_refRoadSegment')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_refRoadSegment')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_refRoadSegment')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_seeAlso')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_seeAlso')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_source')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_source')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_source')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_displayPage')?.addEventListener('sl-change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_displayPage')?.addEventListener('sl-change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
});
