Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeMapModel')?.addEventListener('change', (event) => {
    facetRangeChange('MapModel', event.target.value);
  });

  document.querySelector('#pageFacetSortMapModel_pk')?.addEventListener('change', (event) => {
    sort('MapModel', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_created')?.addEventListener('change', (event) => {
    sort('MapModel', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_modified')?.addEventListener('change', (event) => {
    sort('MapModel', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_archived')?.addEventListener('change', (event) => {
    sort('MapModel', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_name')?.addEventListener('change', (event) => {
    sort('MapModel', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_location')?.addEventListener('change', (event) => {
    sort('MapModel', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_description')?.addEventListener('change', (event) => {
    sort('MapModel', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_areaServed')?.addEventListener('change', (event) => {
    sort('MapModel', 'areaServed', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_color')?.addEventListener('change', (event) => {
    sort('MapModel', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_id')?.addEventListener('change', (event) => {
    sort('MapModel', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_ngsildTenant')?.addEventListener('change', (event) => {
    sort('MapModel', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_ngsildPath')?.addEventListener('change', (event) => {
    sort('MapModel', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_ngsildContext')?.addEventListener('change', (event) => {
    sort('MapModel', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_ngsildData')?.addEventListener('change', (event) => {
    sort('MapModel', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_classCanonicalName')?.addEventListener('change', (event) => {
    sort('MapModel', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_classSimpleName')?.addEventListener('change', (event) => {
    sort('MapModel', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('MapModel', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_sessionId')?.addEventListener('change', (event) => {
    sort('MapModel', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_userKey')?.addEventListener('change', (event) => {
    sort('MapModel', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_saves')?.addEventListener('change', (event) => {
    sort('MapModel', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_objectTitle')?.addEventListener('change', (event) => {
    sort('MapModel', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_displayPage')?.addEventListener('change', (event) => {
    sort('MapModel', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_editPage')?.addEventListener('change', (event) => {
    sort('MapModel', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_userPage')?.addEventListener('change', (event) => {
    sort('MapModel', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_download')?.addEventListener('change', (event) => {
    sort('MapModel', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_objectSuggest')?.addEventListener('change', (event) => {
    sort('MapModel', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_objectText')?.addEventListener('change', (event) => {
    sort('MapModel', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_solrId')?.addEventListener('change', (event) => {
    sort('MapModel', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_areaServedColors')?.addEventListener('change', (event) => {
    sort('MapModel', 'areaServedColors', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_areaServedTitles')?.addEventListener('change', (event) => {
    sort('MapModel', 'areaServedTitles', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_areaServedLinks')?.addEventListener('change', (event) => {
    sort('MapModel', 'areaServedLinks', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortMapModel_entityShortId')?.addEventListener('change', (event) => {
    sort('MapModel', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#htmButton_searchpageMapModel')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageMapModelDialog').open = true;
  });
});
