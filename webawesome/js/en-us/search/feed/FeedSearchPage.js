Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeed')?.addEventListener('change', (event) => {
    facetRangeChange('Feed', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-Feed-name').innerText == undefined);
    if (action === 'sort') {
      sort('Feed', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortFeed_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortFeed_name')?.addEventListener('change', (event) => {
    sort('Feed', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-Feed-description').innerText == undefined);
    if (action === 'sort') {
      sort('Feed', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortFeed_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortFeed_description')?.addEventListener('change', (event) => {
    sort('Feed', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-Feed-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('Feed', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortFeed_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortFeed_editPage')?.addEventListener('change', (event) => {
    sort('Feed', 'editPage', event.currentTarget.value);
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
