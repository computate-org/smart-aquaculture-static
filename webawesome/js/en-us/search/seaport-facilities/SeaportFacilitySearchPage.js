Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSeaportFacility')?.addEventListener('change', (event) => {
    facetRangeChange('SeaportFacility', event.target.value);
  });

  document.querySelector('#pageSelectSortSeaportFacility_pk')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'pk', true);
  });
  document.querySelector('#pageStatsSeaportFacility_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'pk', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_created')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'created', true);
  });
  document.querySelector('#pageStatsSeaportFacility_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'created', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_modified')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'modified', true);
  });
  document.querySelector('#pageStatsSeaportFacility_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'modified', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_archived')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'archived', true);
  });
  document.querySelector('#pageStatsSeaportFacility_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'archived', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_name')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'name', true);
  });
  document.querySelector('#pageStatsSeaportFacility_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'name', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_description')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'description', true);
  });
  document.querySelector('#pageStatsSeaportFacility_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'description', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_location')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'location', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_location')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'location', true);
  });
  document.querySelector('#pageStatsSeaportFacility_location')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'location', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_color')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'color', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_color')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'color', true);
  });
  document.querySelector('#pageStatsSeaportFacility_color')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'color', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_id')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'id', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_id')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'id', true);
  });
  document.querySelector('#pageStatsSeaportFacility_id')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'id', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_ngsildTenant')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'ngsildTenant', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_ngsildTenant')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'ngsildTenant', true);
  });
  document.querySelector('#pageStatsSeaportFacility_ngsildTenant')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'ngsildTenant', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_ngsildPath')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'ngsildPath', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_ngsildPath')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'ngsildPath', true);
  });
  document.querySelector('#pageStatsSeaportFacility_ngsildPath')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'ngsildPath', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_ngsildContext')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'ngsildContext', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_ngsildContext')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'ngsildContext', true);
  });
  document.querySelector('#pageStatsSeaportFacility_ngsildContext')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'ngsildContext', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_ngsildData')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'ngsildData', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_ngsildData')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'ngsildData', true);
  });
  document.querySelector('#pageStatsSeaportFacility_ngsildData')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'ngsildData', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_address')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'address', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_address')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'address', true);
  });
  document.querySelector('#pageStatsSeaportFacility_address')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'address', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_alternateName')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'alternateName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_alternateName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'alternateName', true);
  });
  document.querySelector('#pageStatsSeaportFacility_alternateName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'alternateName', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_authorizedPropulsion')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'authorizedPropulsion', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_authorizedPropulsion')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'authorizedPropulsion', true);
  });
  document.querySelector('#pageStatsSeaportFacility_authorizedPropulsion')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'authorizedPropulsion', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_boatSupplyingServices')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'boatSupplyingServices', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_boatSupplyingServices')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'boatSupplyingServices', true);
  });
  document.querySelector('#pageStatsSeaportFacility_boatSupplyingServices')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'boatSupplyingServices', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_contactPoint')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'contactPoint', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_contactPoint')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'contactPoint', true);
  });
  document.querySelector('#pageStatsSeaportFacility_contactPoint')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'contactPoint', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_contractingAuthority')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'contractingAuthority', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_contractingAuthority')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'contractingAuthority', true);
  });
  document.querySelector('#pageStatsSeaportFacility_contractingAuthority')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'contractingAuthority', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_contractingCompany')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'contractingCompany', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_contractingCompany')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'contractingCompany', true);
  });
  document.querySelector('#pageStatsSeaportFacility_contractingCompany')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'contractingCompany', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_currencyAccepted')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'currencyAccepted', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_currencyAccepted')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'currencyAccepted', true);
  });
  document.querySelector('#pageStatsSeaportFacility_currencyAccepted')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'currencyAccepted', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_dataProvider')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'dataProvider', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_dataProvider')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'dataProvider', true);
  });
  document.querySelector('#pageStatsSeaportFacility_dataProvider')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'dataProvider', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_dateCreated')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'dateCreated', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_dateCreated')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'dateCreated', true);
  });
  document.querySelector('#pageStatsSeaportFacility_dateCreated')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'dateCreated', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_dateLastReported')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'dateLastReported', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_dateLastReported')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'dateLastReported', true);
  });
  document.querySelector('#pageStatsSeaportFacility_dateLastReported')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'dateLastReported', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_dateModified')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'dateModified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_dateModified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'dateModified', true);
  });
  document.querySelector('#pageStatsSeaportFacility_dateModified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'dateModified', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_electricTransport')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'electricTransport', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_electricTransport')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'electricTransport', true);
  });
  document.querySelector('#pageStatsSeaportFacility_electricTransport')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'electricTransport', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_endDate')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'endDate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_endDate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'endDate', true);
  });
  document.querySelector('#pageStatsSeaportFacility_endDate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'endDate', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_facilities')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'facilities', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_facilities')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'facilities', true);
  });
  document.querySelector('#pageStatsSeaportFacility_facilities')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'facilities', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_maxDraft')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'maxDraft', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_maxDraft')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'maxDraft', true);
  });
  document.querySelector('#pageStatsSeaportFacility_maxDraft')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'maxDraft', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_maxLength')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'maxLength', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_maxLength')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'maxLength', true);
  });
  document.querySelector('#pageStatsSeaportFacility_maxLength')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'maxLength', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_maxTonnage')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'maxTonnage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_maxTonnage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'maxTonnage', true);
  });
  document.querySelector('#pageStatsSeaportFacility_maxTonnage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'maxTonnage', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_maxWidth')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'maxWidth', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_maxWidth')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'maxWidth', true);
  });
  document.querySelector('#pageStatsSeaportFacility_maxWidth')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'maxWidth', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_minLength')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'minLength', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_minLength')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'minLength', true);
  });
  document.querySelector('#pageStatsSeaportFacility_minLength')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'minLength', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_nearbyServices')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'nearbyServices', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_nearbyServices')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'nearbyServices', true);
  });
  document.querySelector('#pageStatsSeaportFacility_nearbyServices')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'nearbyServices', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_numberOfPlace')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'numberOfPlace', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_numberOfPlace')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'numberOfPlace', true);
  });
  document.querySelector('#pageStatsSeaportFacility_numberOfPlace')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'numberOfPlace', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_openingHours')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'openingHours', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_openingHours')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'openingHours', true);
  });
  document.querySelector('#pageStatsSeaportFacility_openingHours')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'openingHours', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_openingHoursSpecification')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'openingHoursSpecification', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_openingHoursSpecification')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'openingHoursSpecification', true);
  });
  document.querySelector('#pageStatsSeaportFacility_openingHoursSpecification')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'openingHoursSpecification', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_owner')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'owner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_owner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'owner', true);
  });
  document.querySelector('#pageStatsSeaportFacility_owner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'owner', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_paymentAccepted')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'paymentAccepted', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_paymentAccepted')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'paymentAccepted', true);
  });
  document.querySelector('#pageStatsSeaportFacility_paymentAccepted')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'paymentAccepted', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_portServicesProvided')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'portServicesProvided', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_portServicesProvided')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'portServicesProvided', true);
  });
  document.querySelector('#pageStatsSeaportFacility_portServicesProvided')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'portServicesProvided', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_refBoatAuthorized')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'refBoatAuthorized', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_refBoatAuthorized')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'refBoatAuthorized', true);
  });
  document.querySelector('#pageStatsSeaportFacility_refBoatAuthorized')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'refBoatAuthorized', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_refBoatPlaceAvailable')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'refBoatPlaceAvailable', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_refBoatPlaceAvailable')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'refBoatPlaceAvailable', true);
  });
  document.querySelector('#pageStatsSeaportFacility_refBoatPlaceAvailable')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'refBoatPlaceAvailable', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_refBoatPlacePricing')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'refBoatPlacePricing', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_refBoatPlacePricing')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'refBoatPlacePricing', true);
  });
  document.querySelector('#pageStatsSeaportFacility_refBoatPlacePricing')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'refBoatPlacePricing', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_refDevice')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'refDevice', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_refDevice')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'refDevice', true);
  });
  document.querySelector('#pageStatsSeaportFacility_refDevice')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'refDevice', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_refPointOfInterest')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'refPointOfInterest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_refPointOfInterest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'refPointOfInterest', true);
  });
  document.querySelector('#pageStatsSeaportFacility_refPointOfInterest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'refPointOfInterest', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_rentalSaleServices')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'rentalSaleServices', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_rentalSaleServices')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'rentalSaleServices', true);
  });
  document.querySelector('#pageStatsSeaportFacility_rentalSaleServices')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'rentalSaleServices', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_routeType')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'routeType', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_routeType')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'routeType', true);
  });
  document.querySelector('#pageStatsSeaportFacility_routeType')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'routeType', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_seeAlso')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'seeAlso', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_seeAlso')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'seeAlso', true);
  });
  document.querySelector('#pageStatsSeaportFacility_seeAlso')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'seeAlso', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_source')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'source', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_source')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'source', true);
  });
  document.querySelector('#pageStatsSeaportFacility_source')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'source', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_startDate')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'startDate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_startDate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'startDate', true);
  });
  document.querySelector('#pageStatsSeaportFacility_startDate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'startDate', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_transportServices')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'transportServices', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_transportServices')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'transportServices', true);
  });
  document.querySelector('#pageStatsSeaportFacility_transportServices')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'transportServices', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_typeOfPort')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'typeOfPort', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_typeOfPort')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'typeOfPort', true);
  });
  document.querySelector('#pageStatsSeaportFacility_typeOfPort')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'typeOfPort', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_webSite')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'webSite', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_webSite')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'webSite', true);
  });
  document.querySelector('#pageStatsSeaportFacility_webSite')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'webSite', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_entityShortId')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'entityShortId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_entityShortId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'entityShortId', true);
  });
  document.querySelector('#pageStatsSeaportFacility_entityShortId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'entityShortId', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsSeaportFacility_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_classSimpleName')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsSeaportFacility_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsSeaportFacility_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_sessionId')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'sessionId', true);
  });
  document.querySelector('#pageStatsSeaportFacility_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_userKey')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'userKey', true);
  });
  document.querySelector('#pageStatsSeaportFacility_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'userKey', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_saves')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'saves', true);
  });
  document.querySelector('#pageStatsSeaportFacility_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'saves', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_objectTitle')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'objectTitle', true);
  });
  document.querySelector('#pageStatsSeaportFacility_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_displayPage')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'displayPage', true);
  });
  document.querySelector('#pageStatsSeaportFacility_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_displayPageFrFR')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'displayPageFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_displayPageFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'displayPageFrFR', true);
  });
  document.querySelector('#pageStatsSeaportFacility_displayPageFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'displayPageFrFR', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_editPage')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'editPage', true);
  });
  document.querySelector('#pageStatsSeaportFacility_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'editPage', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_editPageFrFR')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'editPageFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_editPageFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'editPageFrFR', true);
  });
  document.querySelector('#pageStatsSeaportFacility_editPageFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'editPageFrFR', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_userPage')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'userPage', true);
  });
  document.querySelector('#pageStatsSeaportFacility_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'userPage', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_userPageFrFR')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'userPageFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_userPageFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'userPageFrFR', true);
  });
  document.querySelector('#pageStatsSeaportFacility_userPageFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'userPageFrFR', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_download')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'download', true);
  });
  document.querySelector('#pageStatsSeaportFacility_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'download', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_downloadFrFR')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'downloadFrFR', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_downloadFrFR')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'downloadFrFR', true);
  });
  document.querySelector('#pageStatsSeaportFacility_downloadFrFR')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'downloadFrFR', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_objectSuggest')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsSeaportFacility_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortSeaportFacility_objectText')?.addEventListener('change', (event) => {
    sort('SeaportFacility', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSeaportFacility_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SeaportFacility', 'objectText', true);
  });
  document.querySelector('#pageStatsSeaportFacility_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SeaportFacility', 'objectText', false);
  });
          document.querySelector('#fqSeaportFacility_created')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_created')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_created')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_archived')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_archived')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_archived')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_name')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_name')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_name')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_description')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_description')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_description')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_location')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_location')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_location')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_location')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_location')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_location')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_color')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_color')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_color')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_color')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_color')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_color')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_id')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_id')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_id')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_id')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_id')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_id')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_ngsildTenant')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_ngsildTenant')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_ngsildTenant')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_ngsildTenant')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_ngsildPath')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_ngsildPath')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_ngsildPath')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_ngsildPath')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_ngsildContext')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_ngsildContext')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_ngsildContext')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_ngsildContext')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_ngsildData')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_ngsildData')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_ngsildData')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_ngsildData')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_ngsildData')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_ngsildData')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_address')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_address')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_address')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_address')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_address')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_address')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_alternateName')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_alternateName')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_alternateName')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_alternateName')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_alternateName')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_alternateName')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_authorizedPropulsion')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_authorizedPropulsion')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_authorizedPropulsion')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_authorizedPropulsion')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_authorizedPropulsion')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_authorizedPropulsion')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_boatSupplyingServices')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_boatSupplyingServices')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_boatSupplyingServices')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_boatSupplyingServices')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_boatSupplyingServices')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_boatSupplyingServices')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_contactPoint')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_contactPoint')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_contactPoint')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_contactPoint')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_contactPoint')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_contactPoint')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_contractingAuthority')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_contractingAuthority')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_contractingAuthority')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_contractingAuthority')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_contractingAuthority')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_contractingAuthority')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_contractingCompany')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_contractingCompany')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_contractingCompany')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_contractingCompany')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_contractingCompany')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_contractingCompany')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_currencyAccepted')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_currencyAccepted')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_currencyAccepted')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_currencyAccepted')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_currencyAccepted')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_currencyAccepted')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_dataProvider')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_dataProvider')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_dataProvider')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_dataProvider')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_dataProvider')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_dataProvider')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_dateCreated')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_dateCreated')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_dateCreated')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_dateCreated')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_dateCreated')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_dateCreated')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_dateLastReported')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_dateLastReported')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_dateLastReported')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_dateLastReported')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_dateLastReported')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_dateLastReported')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_dateModified')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_dateModified')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_dateModified')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_dateModified')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_dateModified')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_dateModified')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_electricTransport')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_electricTransport')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_electricTransport')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_electricTransport')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_electricTransport')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_electricTransport')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_endDate')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_endDate')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_endDate')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_endDate')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_endDate')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_endDate')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_facilities')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_facilities')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_facilities')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_facilities')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_facilities')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_facilities')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_maxDraft')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_maxDraft')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_maxDraft')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_maxDraft')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_maxDraft')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_maxDraft')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_maxLength')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_maxLength')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_maxLength')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_maxLength')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_maxLength')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_maxLength')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_maxTonnage')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_maxTonnage')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_maxTonnage')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_maxTonnage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_maxTonnage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_maxTonnage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_maxWidth')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_maxWidth')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_maxWidth')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_maxWidth')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_maxWidth')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_maxWidth')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_minLength')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_minLength')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_minLength')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_minLength')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_minLength')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_minLength')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_nearbyServices')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_nearbyServices')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_nearbyServices')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_nearbyServices')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_nearbyServices')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_nearbyServices')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_numberOfPlace')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_numberOfPlace')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_numberOfPlace')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_numberOfPlace')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_numberOfPlace')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_numberOfPlace')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_openingHours')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_openingHours')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_openingHours')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_openingHours')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_openingHours')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_openingHours')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_openingHoursSpecification')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_openingHoursSpecification')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_openingHoursSpecification')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_openingHoursSpecification')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_openingHoursSpecification')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_openingHoursSpecification')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_owner')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_owner')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_owner')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_owner')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_owner')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_owner')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_paymentAccepted')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_paymentAccepted')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_paymentAccepted')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_paymentAccepted')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_paymentAccepted')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_paymentAccepted')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_portServicesProvided')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_portServicesProvided')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_portServicesProvided')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_portServicesProvided')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_portServicesProvided')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_portServicesProvided')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_refBoatAuthorized')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_refBoatAuthorized')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_refBoatAuthorized')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_refBoatAuthorized')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_refBoatAuthorized')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_refBoatAuthorized')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_refBoatPlaceAvailable')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_refBoatPlaceAvailable')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_refBoatPlaceAvailable')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_refBoatPlaceAvailable')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_refBoatPlaceAvailable')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_refBoatPlaceAvailable')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_refBoatPlacePricing')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_refBoatPlacePricing')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_refBoatPlacePricing')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_refBoatPlacePricing')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_refBoatPlacePricing')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_refBoatPlacePricing')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_refDevice')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_refDevice')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_refDevice')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_refDevice')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_refDevice')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_refDevice')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_refPointOfInterest')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_refPointOfInterest')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_refPointOfInterest')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_refPointOfInterest')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_refPointOfInterest')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_refPointOfInterest')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_rentalSaleServices')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_rentalSaleServices')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_rentalSaleServices')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_rentalSaleServices')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_rentalSaleServices')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_rentalSaleServices')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_routeType')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_routeType')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_routeType')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_routeType')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_routeType')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_routeType')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_seeAlso')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_seeAlso')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_seeAlso')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_seeAlso')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_seeAlso')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_seeAlso')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_source')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_source')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_source')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_source')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_source')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_source')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_startDate')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_startDate')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_startDate')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_startDate')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_startDate')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_startDate')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_transportServices')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_transportServices')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_transportServices')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_transportServices')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_transportServices')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_transportServices')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_typeOfPort')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_typeOfPort')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_typeOfPort')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_typeOfPort')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_typeOfPort')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_typeOfPort')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_webSite')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_webSite')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_webSite')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_webSite')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_webSite')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_webSite')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_entityShortId')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_entityShortId')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_entityShortId')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_entityShortId')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_entityShortId')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_entityShortId')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_displayPage')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_displayPageFrFR')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_displayPageFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_displayPageFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_displayPageFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_displayPageFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_displayPageFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_editPage')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_editPageFrFR')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_editPageFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_editPageFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_editPageFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_editPageFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_editPageFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_userPage')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_userPageFrFR')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_userPageFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_userPageFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_userPageFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_userPageFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_userPageFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_download')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_download')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_download')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#fqSeaportFacility_downloadFrFR')?.addEventListener('change', (event) => {
            fqChange('SeaportFacility', event.currentTarget, facetChangeSeaportFacilitySuccess, facetChangeSeaportFacilityError);
          });
          document.querySelector('#buttonFacetSeaportFacility_downloadFrFR')?.addEventListener('click', (event) => {
            facetFieldChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSeaportFacility_downloadFrFR')?.addEventListener('change', (event) => {
            facetPivotChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSeaportFacility_downloadFrFR')?.addEventListener('change', (event) => {
            facetRangeGapChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSeaportFacility_downloadFrFR')?.addEventListener('change', (event) => {
            facetRangeStartChange('SeaportFacility', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSeaportFacility_downloadFrFR')?.addEventListener('change', (event) => {
            facetRangeEndChange('SeaportFacility', event.currentTarget);
          });
});

  document.querySelector('#htmButton_patchSeaportFacility')?.addEventListener('click', (event) => {
    document.querySelector('#patchSeaportFacilityDialog').open = true;
  });

  document.querySelector('#htmButton_postSeaportFacility')?.addEventListener('click', (event) => {
    document.querySelector('#postSeaportFacilityDialog').open = true;
  });

  document.querySelector('#htmButton_deleteSeaportFacility')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var entityShortId =  event.currentTarget.getAttribute('data-entityShortId');
      deleteSeaportFacility(
          event.currentTarget
          , entityShortId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportSeaportFacility')?.addEventListener('click', (event) => {
    document.querySelector('#putimportSeaportFacilityDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageSeaportFacility')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageSeaportFacilityDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterSeaportFacility')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterSeaportFacility(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
