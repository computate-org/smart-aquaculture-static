Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeTimeZone')?.addEventListener('change', (event) => {
    facetRangeChange('TimeZone', event.target.value);
  });

  document.querySelector('#pageSelectSortTimeZone_created')?.addEventListener('change', (event) => {
    sort('TimeZone', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'created', true);
  });
  document.querySelector('#pageStatsTimeZone_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'created', false);
  });

  document.querySelector('#pageSelectSortTimeZone_modified')?.addEventListener('change', (event) => {
    sort('TimeZone', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'modified', true);
  });
  document.querySelector('#pageStatsTimeZone_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'modified', false);
  });

  document.querySelector('#pageSelectSortTimeZone_archived')?.addEventListener('change', (event) => {
    sort('TimeZone', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'archived', true);
  });
  document.querySelector('#pageStatsTimeZone_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'archived', false);
  });

  document.querySelector('#pageSelectSortTimeZone_id')?.addEventListener('change', (event) => {
    sort('TimeZone', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'id', true);
  });
  document.querySelector('#pageStatsTimeZone_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'id', false);
  });

  document.querySelector('#pageSelectSortTimeZone_displayPage')?.addEventListener('change', (event) => {
    sort('TimeZone', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'displayPage', true);
  });
  document.querySelector('#pageStatsTimeZone_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortTimeZone_classCanonicalName')?.addEventListener('change', (event) => {
    sort('TimeZone', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsTimeZone_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortTimeZone_classSimpleName')?.addEventListener('change', (event) => {
    sort('TimeZone', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsTimeZone_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortTimeZone_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('TimeZone', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsTimeZone_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortTimeZone_saves')?.addEventListener('change', (event) => {
    sort('TimeZone', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'saves', true);
  });
  document.querySelector('#pageStatsTimeZone_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'saves', false);
  });

  document.querySelector('#pageSelectSortTimeZone_objectTitle')?.addEventListener('change', (event) => {
    sort('TimeZone', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'objectTitle', true);
  });
  document.querySelector('#pageStatsTimeZone_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortTimeZone_editPage')?.addEventListener('change', (event) => {
    sort('TimeZone', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'editPage', true);
  });
  document.querySelector('#pageStatsTimeZone_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'editPage', false);
  });

  document.querySelector('#pageSelectSortTimeZone_userPage')?.addEventListener('change', (event) => {
    sort('TimeZone', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'userPage', true);
  });
  document.querySelector('#pageStatsTimeZone_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'userPage', false);
  });

  document.querySelector('#pageSelectSortTimeZone_download')?.addEventListener('change', (event) => {
    sort('TimeZone', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'download', true);
  });
  document.querySelector('#pageStatsTimeZone_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'download', false);
  });

  document.querySelector('#pageSelectSortTimeZone_objectSuggest')?.addEventListener('change', (event) => {
    sort('TimeZone', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsTimeZone_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortTimeZone_objectText')?.addEventListener('change', (event) => {
    sort('TimeZone', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'objectText', true);
  });
  document.querySelector('#pageStatsTimeZone_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'objectText', false);
  });

  document.querySelector('#pageSelectSortTimeZone_solrId')?.addEventListener('change', (event) => {
    sort('TimeZone', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTimeZone_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('TimeZone', 'solrId', true);
  });
  document.querySelector('#pageStatsTimeZone_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('TimeZone', 'solrId', false);
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
