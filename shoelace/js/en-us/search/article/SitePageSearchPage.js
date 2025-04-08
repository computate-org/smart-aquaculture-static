Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSitePage')?.addEventListener('sl-change', (event) => {
    facetRangeChange('SitePage', event.target.value);
  });

  document.querySelector('#pageFacetSortSitePage_created')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_modified')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_archived')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_author')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'author', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_pageImageUri')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_pageId')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_displayPage')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_classCanonicalName')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_classSimpleName')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_classCanonicalNames')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_saves')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_title')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'title', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_editPage')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_userPage')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_download')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_objectSuggest')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_objectText')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_solrId')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_courseNum')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_lessonNum')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_name')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_h1')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'h1', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_h2')?.addEventListener('sl-change', (event) => {
    sort('SitePage', 'h2', event.currentTarget.value);
  });

  document.querySelector('#htmButton_patchSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#patchSitePageDialog').open = true;
  });

  document.querySelector('#htmButton_postSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#postSitePageDialog').open = true;
  });

  document.querySelector('#htmButton_putimportSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#putimportSitePageDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageSitePage')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageSitePageDialog').open = true;
  });
          document.querySelector('#fqSitePage_created')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_created')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_author')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_author')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_author')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_pageImageUri')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_pageImageUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_pageId')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_pageId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_displayPage')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_displayPage')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_courseNum')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_courseNum')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_lessonNum')?.addEventListener('sl-change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_lessonNum')?.addEventListener('sl-change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
});
