Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeedingOperation')?.addEventListener('change', (event) => {
    facetRangeChange('FeedingOperation', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-FeedingOperation-name').innerText == undefined);
    if (action === 'sort') {
      sort('FeedingOperation', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortFeedingOperation_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortFeedingOperation_name')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-FeedingOperation-description').innerText == undefined);
    if (action === 'sort') {
      sort('FeedingOperation', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortFeedingOperation_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortFeedingOperation_description')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-FeedingOperation-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('FeedingOperation', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortFeedingOperation_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortFeedingOperation_editPage')?.addEventListener('change', (event) => {
    sort('FeedingOperation', 'editPage', event.currentTarget.value);
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
