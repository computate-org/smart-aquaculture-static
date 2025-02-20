Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeCrowdFlowObserved')?.addEventListener('change', (event) => {
    facetRangeChange('CrowdFlowObserved', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CrowdFlowObserved-name').innerText == undefined);
    if (action === 'sort') {
      sort('CrowdFlowObserved', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortCrowdFlowObserved_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_name')?.addEventListener('change', (event) => {
    sort('CrowdFlowObserved', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CrowdFlowObserved-description').innerText == undefined);
    if (action === 'sort') {
      sort('CrowdFlowObserved', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortCrowdFlowObserved_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_description')?.addEventListener('change', (event) => {
    sort('CrowdFlowObserved', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-CrowdFlowObserved-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('CrowdFlowObserved', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortCrowdFlowObserved_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortCrowdFlowObserved_editPage')?.addEventListener('change', (event) => {
    sort('CrowdFlowObserved', 'editPage', event.currentTarget.value);
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
          document.querySelector('#fqCrowdFlowObserved_created')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_created')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_created')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_archived')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_archived')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_archived')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_name')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_name')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_name')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_description')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_description')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_description')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_location')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_location')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_location')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_areaServed')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_id')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_id')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_id')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_ngsildData')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_address')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_address')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_address')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_alternateName')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_averageCrowdSpeed')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_averageCrowdSpeed')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_averageCrowdSpeed')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_averageHeadwayTime')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_averageHeadwayTime')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_averageHeadwayTime')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_congested')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_congested')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_congested')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dataProvider')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dateCreated')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dateModified')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dateObserved')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dateObserved')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dateObserved')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dateObservedFrom')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dateObservedFrom')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dateObservedFrom')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_dateObservedTo')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_dateObservedTo')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_dateObservedTo')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_direction')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_direction')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_direction')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_occupancy')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_occupancy')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_occupancy')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_owner')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_owner')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_owner')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_peopleCount')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_peopleCount')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_peopleCount')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_refRoadSegment')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_refRoadSegment')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_refRoadSegment')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_seeAlso')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_source')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_source')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_source')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#fqCrowdFlowObserved_displayPage')?.addEventListener('change', (event) => {
            fqChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#buttonFacetCrowdFlowObserved_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('CrowdFlowObserved', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotCrowdFlowObserved_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('CrowdFlowObserved', event.currentTarget);
          });
});
