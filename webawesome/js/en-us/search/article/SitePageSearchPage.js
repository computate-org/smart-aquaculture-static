Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSitePage')?.addEventListener('change', (event) => {
    facetRangeChange('SitePage', event.target.value);
  });

  document.querySelector('#pageFacetSortSitePage_created')?.addEventListener('change', (event) => {
    sort('SitePage', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_modified')?.addEventListener('change', (event) => {
    sort('SitePage', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_archived')?.addEventListener('change', (event) => {
    sort('SitePage', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_authorName')?.addEventListener('change', (event) => {
    sort('SitePage', 'authorName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_authorUrl')?.addEventListener('change', (event) => {
    sort('SitePage', 'authorUrl', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_pageImageUri')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageImageUri', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_pageId')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_displayPage')?.addEventListener('change', (event) => {
    sort('SitePage', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SitePage', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_classSimpleName')?.addEventListener('change', (event) => {
    sort('SitePage', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SitePage', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_saves')?.addEventListener('change', (event) => {
    sort('SitePage', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_objectTitle')?.addEventListener('change', (event) => {
    sort('SitePage', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_editPage')?.addEventListener('change', (event) => {
    sort('SitePage', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_userPage')?.addEventListener('change', (event) => {
    sort('SitePage', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_download')?.addEventListener('change', (event) => {
    sort('SitePage', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_objectSuggest')?.addEventListener('change', (event) => {
    sort('SitePage', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_objectText')?.addEventListener('change', (event) => {
    sort('SitePage', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_solrId')?.addEventListener('change', (event) => {
    sort('SitePage', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_courseNum')?.addEventListener('change', (event) => {
    sort('SitePage', 'courseNum', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_lessonNum')?.addEventListener('change', (event) => {
    sort('SitePage', 'lessonNum', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_name')?.addEventListener('change', (event) => {
    sort('SitePage', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_description')?.addEventListener('change', (event) => {
    sort('SitePage', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_h1')?.addEventListener('change', (event) => {
    sort('SitePage', 'h1', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_h2')?.addEventListener('change', (event) => {
    sort('SitePage', 'h2', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_pageImageWidth')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageImageWidth', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_pageImageHeight')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageImageHeight', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_pageImageType')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageImageType', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_pageImageAlt')?.addEventListener('change', (event) => {
    sort('SitePage', 'pageImageAlt', event.currentTarget.value);
  });

  document.querySelector('#pageFacetSortSitePage_relatedArticleIds')?.addEventListener('change', (event) => {
    sort('SitePage', 'relatedArticleIds', event.currentTarget.value);
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
          document.querySelector('#fqSitePage_created')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_created')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_created')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_authorName')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_authorName')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_authorName')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_authorUrl')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_authorUrl')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_authorUrl')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_pageImageUri')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_pageImageUri')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_pageImageUri')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_pageId')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_displayPage')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_courseNum')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_courseNum')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_courseNum')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
          document.querySelector('#fqSitePage_lessonNum')?.addEventListener('change', (event) => {
            fqChange('SitePage', event.currentTarget);
          });
          document.querySelector('#buttonFacetSitePage_lessonNum')?.addEventListener('click', (event) => {
            facetFieldChange('SitePage', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSitePage_lessonNum')?.addEventListener('change', (event) => {
            facetPivotChange('SitePage', event.currentTarget);
          });
});
