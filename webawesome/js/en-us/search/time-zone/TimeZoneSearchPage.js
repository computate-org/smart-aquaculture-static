Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeTimeZone')?.addEventListener('change', (event) => {
    facetRangeChange('TimeZone', event.target.value);
  });

  document.querySelector('#pageFacetSortTimeZone_created')?.addEventListener('change', (event) => {
    sort('TimeZone', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_modified')?.addEventListener('change', (event) => {
    sort('TimeZone', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_archived')?.addEventListener('change', (event) => {
    sort('TimeZone', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_id')?.addEventListener('change', (event) => {
    sort('TimeZone', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_displayPage')?.addEventListener('change', (event) => {
    sort('TimeZone', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_classCanonicalName')?.addEventListener('change', (event) => {
    sort('TimeZone', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('TimeZone', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_saves')?.addEventListener('change', (event) => {
    sort('TimeZone', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_objectTitle')?.addEventListener('change', (event) => {
    sort('TimeZone', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_editPage')?.addEventListener('change', (event) => {
    sort('TimeZone', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_userPage')?.addEventListener('change', (event) => {
    sort('TimeZone', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_classSimpleName')?.addEventListener('change', (event) => {
    sort('TimeZone', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_objectText')?.addEventListener('change', (event) => {
    sort('TimeZone', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_solrId')?.addEventListener('change', (event) => {
    sort('TimeZone', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_objectSuggest')?.addEventListener('change', (event) => {
    sort('TimeZone', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortTimeZone_download')?.addEventListener('change', (event) => {
    sort('TimeZone', 'download', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchTimeZone')?.addEventListener('click', (event) => {
    document.querySelector('#patchTimeZoneDialog').open = true;
  });

  document.querySelector('#htmButton_postTimeZone')?.addEventListener('click', (event) => {
    document.querySelector('#postTimeZoneDialog').open = true;
  });

  document.querySelector('#htmButton_deleteTimeZone')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var id =  event.currentTarget.getAttribute('data-id');
      deleteTimeZone(
          event.currentTarget
          , id
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportTimeZone')?.addEventListener('click', (event) => {
    document.querySelector('#putimportTimeZoneDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageTimeZone')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageTimeZoneDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterTimeZone')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterTimeZone(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqTimeZone_created')?.addEventListener('change', (event) => {
            fqChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#buttonFacetTimeZone_created')?.addEventListener('click', (event) => {
            facetFieldChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTimeZone_created')?.addEventListener('change', (event) => {
            facetPivotChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTimeZone_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#fqTimeZone_id')?.addEventListener('change', (event) => {
            fqChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#buttonFacetTimeZone_id')?.addEventListener('click', (event) => {
            facetFieldChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTimeZone_id')?.addEventListener('change', (event) => {
            facetPivotChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTimeZone_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#fqTimeZone_displayPage')?.addEventListener('change', (event) => {
            fqChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#buttonFacetTimeZone_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTimeZone_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('TimeZone', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTimeZone_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('TimeZone', event.currentTarget);
          });
});
