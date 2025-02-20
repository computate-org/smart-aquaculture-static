Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFeeder')?.addEventListener('change', (event) => {
    facetRangeChange('Feeder', event.target.value);
  });

  document.querySelector('#htmDropdown-name')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-Feeder-name').innerText == undefined);
    if (action === 'sort') {
      sort('Feeder', 'name', checked ? order : '');
      document.querySelector('#pageFacetSortFeeder_name').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortFeeder_name')?.addEventListener('change', (event) => {
    sort('Feeder', 'name', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-description')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-Feeder-description').innerText == undefined);
    if (action === 'sort') {
      sort('Feeder', 'description', checked ? order : '');
      document.querySelector('#pageFacetSortFeeder_description').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortFeeder_description')?.addEventListener('change', (event) => {
    sort('Feeder', 'description', event.currentTarget.value);
  });

  document.querySelector('#htmDropdown-editPage')?.addEventListener('select', (event) => {
    const item = event.detail.item;
    const action = item.getAttribute('data-action');
    const order = item.getAttribute('data-order');
    const checked = !(document.querySelector('#pageSearchVal-pageSort-Feeder-editPage').innerText == undefined);
    if (action === 'sort') {
      sort('Feeder', 'editPage', checked ? order : '');
      document.querySelector('#pageFacetSortFeeder_editPage').value = checked ? order : '';
    }
  });

  document.querySelector('#pageFacetSortFeeder_editPage')?.addEventListener('change', (event) => {
    sort('Feeder', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchFeeder')?.addEventListener('click', (event) => {
    document.querySelector('#patchFeederDialog').open = true;
  });

  document.querySelector('#htmButton_postFeeder')?.addEventListener('click', (event) => {
    document.querySelector('#postFeederDialog').open = true;
  });

  document.querySelector('#htmButton_deleteFeeder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteFeeder(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportFeeder')?.addEventListener('click', (event) => {
    document.querySelector('#putimportFeederDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageFeeder')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageFeederDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterFeeder')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFeeder(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqFeeder_created')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_created')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_created')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_archived')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_name')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_name')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_name')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_description')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_description')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_description')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_location')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_location')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_location')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_areaServed')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_areaServed')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_areaServed')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_id')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_id')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_id')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_ngsildData')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_address')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_address')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_address')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_alternateName')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dataProvider')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dateCreated')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_dateModified')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_owner')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_owner')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_owner')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_relatedSource')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_relatedSource')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_relatedSource')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_seeAlso')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_source')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_source')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_source')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
          document.querySelector('#fqFeeder_displayPage')?.addEventListener('change', (event) => {
            fqChange('Feeder', event.currentTarget);
          });
          document.querySelector('#buttonFacetFeeder_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Feeder', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFeeder_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Feeder', event.currentTarget);
          });
});
