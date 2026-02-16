
async function websocketSeaportFacility(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketSeaportFacility', function (error, message) {
      var json = JSON.parse(message['body']);
      var entityShortId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + entityShortId + ' ');
      $box.setAttribute('id', 'box-' + entityShortId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + entityShortId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + entityShortId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + entityShortId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-ship"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify seaport facilities in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + entityShortId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + entityShortId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + entityShortId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + entityShortId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + entityShortId);
      $progress.innerText = numPATCH + '/' + numFound;
      $card.append($header);
      $header.append($i);
      $header.append($headerSpan);
      $header.append($x);
      $body.append($bar);
      $bar.append($progress);
      $card.append($body);
      $box.append($margin);
      $margin.append($card);
      if(numPATCH < numFound) {
        var $old_box = document.querySelector('.box-' + entityShortId);
      } else {
        document.querySelector('.box-' + entityShortId)?.remove();
      }
      if(entityShortId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketSeaportFacilityInner(apiRequest) {
  var entityShortId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(entityShortId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputName = null;
        var inputDescription = null;
        var inputLocation = null;
        var inputColor = null;
        var inputId = null;
        var inputNgsildTenant = null;
        var inputNgsildPath = null;
        var inputNgsildContext = null;
        var inputNgsildData = null;
        var inputAddress = null;
        var inputAlternateName = null;
        var inputAuthorizedPropulsion = null;
        var inputBoatSupplyingServices = null;
        var inputContactPoint = null;
        var inputContractingAuthority = null;
        var inputContractingCompany = null;
        var inputCurrencyAccepted = null;
        var inputDataProvider = null;
        var inputDateCreated = null;
        var inputDateLastReported = null;
        var inputDateModified = null;
        var inputElectricTransport = null;
        var inputEndDate = null;
        var inputFacilities = null;
        var inputMaxDraft = null;
        var inputMaxLength = null;
        var inputMaxTonnage = null;
        var inputMaxWidth = null;
        var inputMinLength = null;
        var inputNearbyServices = null;
        var inputNumberOfPlace = null;
        var inputOpeningHours = null;
        var inputOpeningHoursSpecification = null;
        var inputOwner = null;
        var inputPaymentAccepted = null;
        var inputPortServicesProvided = null;
        var inputRefBoatAuthorized = null;
        var inputRefBoatPlaceAvailable = null;
        var inputRefBoatPlacePricing = null;
        var inputRefDevice = null;
        var inputRefPointOfInterest = null;
        var inputRentalSaleServices = null;
        var inputRouteType = null;
        var inputSeeAlso = null;
        var inputSource = null;
        var inputStartDate = null;
        var inputTransportServices = null;
        var inputTypeOfPort = null;
        var inputWebSite = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputDisplayPage = null;
        var inputDisplayPageFrFR = null;
        var inputEditPage = null;
        var inputEditPageFrFR = null;
        var inputUserPage = null;
        var inputUserPageFrFR = null;
        var inputDownload = null;
        var inputDownloadFrFR = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputSolrId = null;
        var inputEntityShortId = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Page_archived');
        if(vars.includes('name'))
          inputName = $response.querySelector('.Page_name');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Page_description');
        if(vars.includes('location'))
          inputLocation = $response.querySelector('.Page_location');
        if(vars.includes('color'))
          inputColor = $response.querySelector('.Page_color');
        if(vars.includes('id'))
          inputId = $response.querySelector('.Page_id');
        if(vars.includes('ngsildTenant'))
          inputNgsildTenant = $response.querySelector('.Page_ngsildTenant');
        if(vars.includes('ngsildPath'))
          inputNgsildPath = $response.querySelector('.Page_ngsildPath');
        if(vars.includes('ngsildContext'))
          inputNgsildContext = $response.querySelector('.Page_ngsildContext');
        if(vars.includes('ngsildData'))
          inputNgsildData = $response.querySelector('.Page_ngsildData');
        if(vars.includes('address'))
          inputAddress = $response.querySelector('.Page_address');
        if(vars.includes('alternateName'))
          inputAlternateName = $response.querySelector('.Page_alternateName');
        if(vars.includes('authorizedPropulsion'))
          inputAuthorizedPropulsion = $response.querySelector('.Page_authorizedPropulsion');
        if(vars.includes('boatSupplyingServices'))
          inputBoatSupplyingServices = $response.querySelector('.Page_boatSupplyingServices');
        if(vars.includes('contactPoint'))
          inputContactPoint = $response.querySelector('.Page_contactPoint');
        if(vars.includes('contractingAuthority'))
          inputContractingAuthority = $response.querySelector('.Page_contractingAuthority');
        if(vars.includes('contractingCompany'))
          inputContractingCompany = $response.querySelector('.Page_contractingCompany');
        if(vars.includes('currencyAccepted'))
          inputCurrencyAccepted = $response.querySelector('.Page_currencyAccepted');
        if(vars.includes('dataProvider'))
          inputDataProvider = $response.querySelector('.Page_dataProvider');
        if(vars.includes('dateCreated'))
          inputDateCreated = $response.querySelector('.Page_dateCreated');
        if(vars.includes('dateLastReported'))
          inputDateLastReported = $response.querySelector('.Page_dateLastReported');
        if(vars.includes('dateModified'))
          inputDateModified = $response.querySelector('.Page_dateModified');
        if(vars.includes('electricTransport'))
          inputElectricTransport = $response.querySelector('.Page_electricTransport');
        if(vars.includes('endDate'))
          inputEndDate = $response.querySelector('.Page_endDate');
        if(vars.includes('facilities'))
          inputFacilities = $response.querySelector('.Page_facilities');
        if(vars.includes('maxDraft'))
          inputMaxDraft = $response.querySelector('.Page_maxDraft');
        if(vars.includes('maxLength'))
          inputMaxLength = $response.querySelector('.Page_maxLength');
        if(vars.includes('maxTonnage'))
          inputMaxTonnage = $response.querySelector('.Page_maxTonnage');
        if(vars.includes('maxWidth'))
          inputMaxWidth = $response.querySelector('.Page_maxWidth');
        if(vars.includes('minLength'))
          inputMinLength = $response.querySelector('.Page_minLength');
        if(vars.includes('nearbyServices'))
          inputNearbyServices = $response.querySelector('.Page_nearbyServices');
        if(vars.includes('numberOfPlace'))
          inputNumberOfPlace = $response.querySelector('.Page_numberOfPlace');
        if(vars.includes('openingHours'))
          inputOpeningHours = $response.querySelector('.Page_openingHours');
        if(vars.includes('openingHoursSpecification'))
          inputOpeningHoursSpecification = $response.querySelector('.Page_openingHoursSpecification');
        if(vars.includes('owner'))
          inputOwner = $response.querySelector('.Page_owner');
        if(vars.includes('paymentAccepted'))
          inputPaymentAccepted = $response.querySelector('.Page_paymentAccepted');
        if(vars.includes('portServicesProvided'))
          inputPortServicesProvided = $response.querySelector('.Page_portServicesProvided');
        if(vars.includes('refBoatAuthorized'))
          inputRefBoatAuthorized = $response.querySelector('.Page_refBoatAuthorized');
        if(vars.includes('refBoatPlaceAvailable'))
          inputRefBoatPlaceAvailable = $response.querySelector('.Page_refBoatPlaceAvailable');
        if(vars.includes('refBoatPlacePricing'))
          inputRefBoatPlacePricing = $response.querySelector('.Page_refBoatPlacePricing');
        if(vars.includes('refDevice'))
          inputRefDevice = $response.querySelector('.Page_refDevice');
        if(vars.includes('refPointOfInterest'))
          inputRefPointOfInterest = $response.querySelector('.Page_refPointOfInterest');
        if(vars.includes('rentalSaleServices'))
          inputRentalSaleServices = $response.querySelector('.Page_rentalSaleServices');
        if(vars.includes('routeType'))
          inputRouteType = $response.querySelector('.Page_routeType');
        if(vars.includes('seeAlso'))
          inputSeeAlso = $response.querySelector('.Page_seeAlso');
        if(vars.includes('source'))
          inputSource = $response.querySelector('.Page_source');
        if(vars.includes('startDate'))
          inputStartDate = $response.querySelector('.Page_startDate');
        if(vars.includes('transportServices'))
          inputTransportServices = $response.querySelector('.Page_transportServices');
        if(vars.includes('typeOfPort'))
          inputTypeOfPort = $response.querySelector('.Page_typeOfPort');
        if(vars.includes('webSite'))
          inputWebSite = $response.querySelector('.Page_webSite');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Page_displayPage');
        if(vars.includes('displayPageFrFR'))
          inputDisplayPageFrFR = $response.querySelector('.Page_displayPageFrFR');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Page_editPage');
        if(vars.includes('editPageFrFR'))
          inputEditPageFrFR = $response.querySelector('.Page_editPageFrFR');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Page_userPage');
        if(vars.includes('userPageFrFR'))
          inputUserPageFrFR = $response.querySelector('.Page_userPageFrFR');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Page_download');
        if(vars.includes('downloadFrFR'))
          inputDownloadFrFR = $response.querySelector('.Page_downloadFrFR');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Page_solrId');
        if(vars.includes('entityShortId'))
          inputEntityShortId = $response.querySelector('.Page_entityShortId');

        jsWebsocketSeaportFacility(entityShortId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listSeaportFacility = JSON.parse($response.querySelector('.pageForm .listSeaportFacility')?.value);


        if(inputPk) {
          document.querySelectorAll('.Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.Page_archived'));
        }

        if(inputName) {
          document.querySelectorAll('.Page_name').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputName.getAttribute('value');
            else
              item.textContent = inputName.textContent;
          });
          addGlow(document.querySelector('.Page_name'));
        }

        if(inputDescription) {
          document.querySelectorAll('.Page_description').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          addGlow(document.querySelector('.Page_description'));
        }

        if(inputLocation) {
          document.querySelectorAll('.Page_location').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocation.getAttribute('value');
            else
              item.textContent = inputLocation.textContent;
          });
          addGlow(document.querySelector('.Page_location'));
        }

        if(inputColor) {
          document.querySelectorAll('.Page_color').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputColor.getAttribute('value');
            else
              item.textContent = inputColor.textContent;
          });
          addGlow(document.querySelector('.Page_color'));
        }

        if(inputId) {
          document.querySelectorAll('.Page_id').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputId.getAttribute('value');
            else
              item.textContent = inputId.textContent;
          });
          addGlow(document.querySelector('.Page_id'));
        }

        if(inputNgsildTenant) {
          document.querySelectorAll('.Page_ngsildTenant').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildTenant.getAttribute('value');
            else
              item.textContent = inputNgsildTenant.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildTenant'));
        }

        if(inputNgsildPath) {
          document.querySelectorAll('.Page_ngsildPath').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildPath.getAttribute('value');
            else
              item.textContent = inputNgsildPath.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildPath'));
        }

        if(inputNgsildContext) {
          document.querySelectorAll('.Page_ngsildContext').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildContext.getAttribute('value');
            else
              item.textContent = inputNgsildContext.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildContext'));
        }

        if(inputNgsildData) {
          document.querySelectorAll('.Page_ngsildData').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildData.getAttribute('value');
            else
              item.textContent = inputNgsildData.textContent;
          });
          addGlow(document.querySelector('.Page_ngsildData'));
        }

        if(inputAddress) {
          document.querySelectorAll('.Page_address').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAddress.getAttribute('value');
            else
              item.textContent = inputAddress.textContent;
          });
          addGlow(document.querySelector('.Page_address'));
        }

        if(inputAlternateName) {
          document.querySelectorAll('.Page_alternateName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAlternateName.getAttribute('value');
            else
              item.textContent = inputAlternateName.textContent;
          });
          addGlow(document.querySelector('.Page_alternateName'));
        }

        if(inputAuthorizedPropulsion) {
          document.querySelectorAll('.Page_authorizedPropulsion').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAuthorizedPropulsion.getAttribute('value');
            else
              item.textContent = inputAuthorizedPropulsion.textContent;
          });
          addGlow(document.querySelector('.Page_authorizedPropulsion'));
        }

        if(inputBoatSupplyingServices) {
          document.querySelectorAll('.Page_boatSupplyingServices').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputBoatSupplyingServices.getAttribute('value');
            else
              item.textContent = inputBoatSupplyingServices.textContent;
          });
          addGlow(document.querySelector('.Page_boatSupplyingServices'));
        }

        if(inputContactPoint) {
          document.querySelectorAll('.Page_contactPoint').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputContactPoint.getAttribute('value');
            else
              item.textContent = inputContactPoint.textContent;
          });
          addGlow(document.querySelector('.Page_contactPoint'));
        }

        if(inputContractingAuthority) {
          document.querySelectorAll('.Page_contractingAuthority').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputContractingAuthority.getAttribute('value');
            else
              item.textContent = inputContractingAuthority.textContent;
          });
          addGlow(document.querySelector('.Page_contractingAuthority'));
        }

        if(inputContractingCompany) {
          document.querySelectorAll('.Page_contractingCompany').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputContractingCompany.getAttribute('value');
            else
              item.textContent = inputContractingCompany.textContent;
          });
          addGlow(document.querySelector('.Page_contractingCompany'));
        }

        if(inputCurrencyAccepted) {
          document.querySelectorAll('.Page_currencyAccepted').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCurrencyAccepted.getAttribute('value');
            else
              item.textContent = inputCurrencyAccepted.textContent;
          });
          addGlow(document.querySelector('.Page_currencyAccepted'));
        }

        if(inputDataProvider) {
          document.querySelectorAll('.Page_dataProvider').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDataProvider.getAttribute('value');
            else
              item.textContent = inputDataProvider.textContent;
          });
          addGlow(document.querySelector('.Page_dataProvider'));
        }

        if(inputDateCreated) {
          document.querySelectorAll('.Page_dateCreated').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateCreated.getAttribute('value');
            else
              item.textContent = inputDateCreated.textContent;
          });
          addGlow(document.querySelector('.Page_dateCreated'));
        }

        if(inputDateLastReported) {
          document.querySelectorAll('.Page_dateLastReported').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateLastReported.getAttribute('value');
            else
              item.textContent = inputDateLastReported.textContent;
          });
          addGlow(document.querySelector('.Page_dateLastReported'));
        }

        if(inputDateModified) {
          document.querySelectorAll('.Page_dateModified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateModified.getAttribute('value');
            else
              item.textContent = inputDateModified.textContent;
          });
          addGlow(document.querySelector('.Page_dateModified'));
        }

        if(inputElectricTransport) {
          document.querySelectorAll('.Page_electricTransport').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputElectricTransport.getAttribute('value');
            else
              item.textContent = inputElectricTransport.textContent;
          });
          addGlow(document.querySelector('.Page_electricTransport'));
        }

        if(inputEndDate) {
          document.querySelectorAll('.Page_endDate').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEndDate.getAttribute('value');
            else
              item.textContent = inputEndDate.textContent;
          });
          addGlow(document.querySelector('.Page_endDate'));
        }

        if(inputFacilities) {
          document.querySelectorAll('.Page_facilities').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputFacilities.getAttribute('value');
            else
              item.textContent = inputFacilities.textContent;
          });
          addGlow(document.querySelector('.Page_facilities'));
        }

        if(inputMaxDraft) {
          document.querySelectorAll('.Page_maxDraft').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMaxDraft.getAttribute('value');
            else
              item.textContent = inputMaxDraft.textContent;
          });
          addGlow(document.querySelector('.Page_maxDraft'));
        }

        if(inputMaxLength) {
          document.querySelectorAll('.Page_maxLength').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMaxLength.getAttribute('value');
            else
              item.textContent = inputMaxLength.textContent;
          });
          addGlow(document.querySelector('.Page_maxLength'));
        }

        if(inputMaxTonnage) {
          document.querySelectorAll('.Page_maxTonnage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMaxTonnage.getAttribute('value');
            else
              item.textContent = inputMaxTonnage.textContent;
          });
          addGlow(document.querySelector('.Page_maxTonnage'));
        }

        if(inputMaxWidth) {
          document.querySelectorAll('.Page_maxWidth').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMaxWidth.getAttribute('value');
            else
              item.textContent = inputMaxWidth.textContent;
          });
          addGlow(document.querySelector('.Page_maxWidth'));
        }

        if(inputMinLength) {
          document.querySelectorAll('.Page_minLength').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMinLength.getAttribute('value');
            else
              item.textContent = inputMinLength.textContent;
          });
          addGlow(document.querySelector('.Page_minLength'));
        }

        if(inputNearbyServices) {
          document.querySelectorAll('.Page_nearbyServices').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNearbyServices.getAttribute('value');
            else
              item.textContent = inputNearbyServices.textContent;
          });
          addGlow(document.querySelector('.Page_nearbyServices'));
        }

        if(inputNumberOfPlace) {
          document.querySelectorAll('.Page_numberOfPlace').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNumberOfPlace.getAttribute('value');
            else
              item.textContent = inputNumberOfPlace.textContent;
          });
          addGlow(document.querySelector('.Page_numberOfPlace'));
        }

        if(inputOpeningHours) {
          document.querySelectorAll('.Page_openingHours').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpeningHours.getAttribute('value');
            else
              item.textContent = inputOpeningHours.textContent;
          });
          addGlow(document.querySelector('.Page_openingHours'));
        }

        if(inputOpeningHoursSpecification) {
          document.querySelectorAll('.Page_openingHoursSpecification').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOpeningHoursSpecification.getAttribute('value');
            else
              item.textContent = inputOpeningHoursSpecification.textContent;
          });
          addGlow(document.querySelector('.Page_openingHoursSpecification'));
        }

        if(inputOwner) {
          document.querySelectorAll('.Page_owner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOwner.getAttribute('value');
            else
              item.textContent = inputOwner.textContent;
          });
          addGlow(document.querySelector('.Page_owner'));
        }

        if(inputPaymentAccepted) {
          document.querySelectorAll('.Page_paymentAccepted').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPaymentAccepted.getAttribute('value');
            else
              item.textContent = inputPaymentAccepted.textContent;
          });
          addGlow(document.querySelector('.Page_paymentAccepted'));
        }

        if(inputPortServicesProvided) {
          document.querySelectorAll('.Page_portServicesProvided').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPortServicesProvided.getAttribute('value');
            else
              item.textContent = inputPortServicesProvided.textContent;
          });
          addGlow(document.querySelector('.Page_portServicesProvided'));
        }

        if(inputRefBoatAuthorized) {
          document.querySelectorAll('.Page_refBoatAuthorized').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRefBoatAuthorized.getAttribute('value');
            else
              item.textContent = inputRefBoatAuthorized.textContent;
          });
          addGlow(document.querySelector('.Page_refBoatAuthorized'));
        }

        if(inputRefBoatPlaceAvailable) {
          document.querySelectorAll('.Page_refBoatPlaceAvailable').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRefBoatPlaceAvailable.getAttribute('value');
            else
              item.textContent = inputRefBoatPlaceAvailable.textContent;
          });
          addGlow(document.querySelector('.Page_refBoatPlaceAvailable'));
        }

        if(inputRefBoatPlacePricing) {
          document.querySelectorAll('.Page_refBoatPlacePricing').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRefBoatPlacePricing.getAttribute('value');
            else
              item.textContent = inputRefBoatPlacePricing.textContent;
          });
          addGlow(document.querySelector('.Page_refBoatPlacePricing'));
        }

        if(inputRefDevice) {
          document.querySelectorAll('.Page_refDevice').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRefDevice.getAttribute('value');
            else
              item.textContent = inputRefDevice.textContent;
          });
          addGlow(document.querySelector('.Page_refDevice'));
        }

        if(inputRefPointOfInterest) {
          document.querySelectorAll('.Page_refPointOfInterest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRefPointOfInterest.getAttribute('value');
            else
              item.textContent = inputRefPointOfInterest.textContent;
          });
          addGlow(document.querySelector('.Page_refPointOfInterest'));
        }

        if(inputRentalSaleServices) {
          document.querySelectorAll('.Page_rentalSaleServices').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRentalSaleServices.getAttribute('value');
            else
              item.textContent = inputRentalSaleServices.textContent;
          });
          addGlow(document.querySelector('.Page_rentalSaleServices'));
        }

        if(inputRouteType) {
          document.querySelectorAll('.Page_routeType').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRouteType.getAttribute('value');
            else
              item.textContent = inputRouteType.textContent;
          });
          addGlow(document.querySelector('.Page_routeType'));
        }

        if(inputSeeAlso) {
          document.querySelectorAll('.Page_seeAlso').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSeeAlso.getAttribute('value');
            else
              item.textContent = inputSeeAlso.textContent;
          });
          addGlow(document.querySelector('.Page_seeAlso'));
        }

        if(inputSource) {
          document.querySelectorAll('.Page_source').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSource.getAttribute('value');
            else
              item.textContent = inputSource.textContent;
          });
          addGlow(document.querySelector('.Page_source'));
        }

        if(inputStartDate) {
          document.querySelectorAll('.Page_startDate').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputStartDate.getAttribute('value');
            else
              item.textContent = inputStartDate.textContent;
          });
          addGlow(document.querySelector('.Page_startDate'));
        }

        if(inputTransportServices) {
          document.querySelectorAll('.Page_transportServices').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTransportServices.getAttribute('value');
            else
              item.textContent = inputTransportServices.textContent;
          });
          addGlow(document.querySelector('.Page_transportServices'));
        }

        if(inputTypeOfPort) {
          document.querySelectorAll('.Page_typeOfPort').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTypeOfPort.getAttribute('value');
            else
              item.textContent = inputTypeOfPort.textContent;
          });
          addGlow(document.querySelector('.Page_typeOfPort'));
        }

        if(inputWebSite) {
          document.querySelectorAll('.Page_webSite').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWebSite.getAttribute('value');
            else
              item.textContent = inputWebSite.textContent;
          });
          addGlow(document.querySelector('.Page_webSite'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.Page_displayPage'));
        }

        if(inputDisplayPageFrFR) {
          document.querySelectorAll('.Page_displayPageFrFR').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPageFrFR.getAttribute('value');
            else
              item.textContent = inputDisplayPageFrFR.textContent;
          });
          addGlow(document.querySelector('.Page_displayPageFrFR'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Page_editPage'));
        }

        if(inputEditPageFrFR) {
          document.querySelectorAll('.Page_editPageFrFR').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPageFrFR.getAttribute('value');
            else
              item.textContent = inputEditPageFrFR.textContent;
          });
          addGlow(document.querySelector('.Page_editPageFrFR'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.Page_userPage'));
        }

        if(inputUserPageFrFR) {
          document.querySelectorAll('.Page_userPageFrFR').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPageFrFR.getAttribute('value');
            else
              item.textContent = inputUserPageFrFR.textContent;
          });
          addGlow(document.querySelector('.Page_userPageFrFR'));
        }

        if(inputDownload) {
          document.querySelectorAll('.Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.Page_download'));
        }

        if(inputDownloadFrFR) {
          document.querySelectorAll('.Page_downloadFrFR').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownloadFrFR.getAttribute('value');
            else
              item.textContent = inputDownloadFrFR.textContent;
          });
          addGlow(document.querySelector('.Page_downloadFrFR'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.Page_solrId'));
        }

        if(inputEntityShortId) {
          document.querySelectorAll('.Page_entityShortId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEntityShortId.getAttribute('value');
            else
              item.textContent = inputEntityShortId.textContent;
          });
          addGlow(document.querySelector('.Page_entityShortId'));
        }

          pageGraphSeaportFacility();
      });
    });
  }
}

function pageGraphSeaportFacility(apiRequest) {
  var r = document.querySelector('.pageForm .pageResponse')?.value;
  if(r) {
    var json = JSON.parse(r);
    if(json['facetCounts']) {
      var facetCounts = json.facetCounts;
      if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
        var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
        var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
        var rangeName;
        var rangeVar;
        var rangeVarFq;
        var rangeCounts;
        var rangeVals;
        if(range) {
          rangeName = range.name;
          rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
          rangeVarFq = window.varsFq[rangeVar];
          rangeCounts = range.counts;
          rangeVals = Object.keys(rangeCounts).map(key => key);
        }
        var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
        var pivot1VarIndexed = pivot1Name;
        if(pivot1VarIndexed.includes(','))
          pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
        var pivot1VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot1VarIndexed)[0];
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'seaport facilities';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot2VarIndexed)[0];
            var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
            layout['yaxis'] = {
              title: pivot2VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              trace['x'] = Object.keys(pivot1Counts).map(key => key);
              if(pivot2Map) {
                var xs = [];
                var ys = [];
                var pivot2Vals = Object.keys(pivot2Map);
                pivot2Vals.forEach((pivot2Val) => {
                  var pivot2 = pivot2Map[pivot2Val];
                  var pivot2Counts = pivot2.ranges[rangeName].counts;
                  Object.entries(pivot2Counts).forEach(([key, count]) => {
                    xs.push(key);
                    ys.push(parseFloat(pivot2Val));
                  });
                });
                trace['y'] = ys;
                trace['x'] = xs;
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
                trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              }
              data.push(trace);
            });
          } else {
            layout['yaxis'] = {
              title: pivot1VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
                trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
              }
              trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              data.push(trace);
            });
          }
          Plotly.react('htmBodyGraphSeaportFacilityPage', data, layout);
        }
      }
    }

    // Graph Location
    window.mapLayers = {};
    window.bounds = null;
    if(listSeaportFacility.filter(o => o.location)) {
      window.bounds = L.latLngBounds(listSeaportFacility.filter(o => o.location).map((c) => {
        return [c.location.coordinates[1], c.location.coordinates[0]];
      }));
    }
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipSeaportFacility(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapSeaportFacility) {
      window.geoJSONSeaportFacility.clearLayers();
      window.listSeaportFacility.forEach((result, index) => {
        if(result.location) {
          var shapes = [];
          if(Array.isArray(result.location))
            shapes = shapes.concat(result.location);
          else
            shapes.push(result.location);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layerGeoJson = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleSeaportFacility
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleSeaportFacility(feature));
              }
            });
            window.geoJSONSeaportFacility.addLayer(layerGeoJson);
          });
        }
      });
    } else if(document.getElementById('htmBodyGraphLocationSeaportFacilityPage')) {
      window.mapSeaportFacility = L.map('htmBodyGraphLocationSeaportFacilityPage', {
        position: 'topright'
        , zoomControl: true
        , scrollWheelZoom: true
        , closePopupOnClick: false
        , contextmenu: true
        , contextmenuWidth: 140
        , contextmenuItems: [
          {
            text: 'Show coordinates'
            , callback: function(event) {
              alert(event.latlng);
            }
          }
          ]
      });
      window.mapSeaportFacility.zoomControl.setPosition('topright');
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendSeaportFacility;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapSeaportFacility);

      if(window.bounds && window['DEFAULT_MAP_ZOOM'] && window.bounds.getNorthEast()) {
        if(listSeaportFacility.length == 1) {
          window.mapSeaportFacility.setView(window.bounds.getNorthEast(), window['DEFAULT_MAP_ZOOM']);
        } else {
          window.mapSeaportFacility.fitBounds(window.bounds);
        }
      } else {
        if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
          window.mapSeaportFacility.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]], window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_ZOOM'])
          window.mapSeaportFacility.setView(null, window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_LOCATION'])
          window.mapSeaportFacility.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]]);
      }

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONSeaportFacility = L.geoJSON().addTo(window.mapSeaportFacility);
      window.listSeaportFacility.forEach((result, index) => {
        if(result.location) {
          var shapes = [];
          if(Array.isArray(result.location))
            shapes = shapes.concat(result.location);
          else
            shapes.push(result.location);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layerGeoJson = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleSeaportFacility
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleSeaportFacility(feature));
              }
            });
            window.geoJSONSeaportFacility.addLayer(layerGeoJson);
          });
        }
      });
      window.mapSeaportFacility.on('popupopen', function(e) {
        if(e.popup._source) {
          var feature = e.popup._source.feature;
          jsTooltipSeaportFacility(e, feature);
        }
      });
      const drawnItems = new L.FeatureGroup();
      window.mapSeaportFacility.addLayer(drawnItems);
      const drawControl = new L.Control.Draw({
        position: 'topright'
        , edit: {
          featureGroup: drawnItems
        }
        , draw: {
          polygon: true
          , polyline: true
          , rectangle: true
          , circle: true
          , marker: true
        }
      });
      window.mapSeaportFacility.addControl(drawControl);
      window.mapSeaportFacility.on(L.Draw.Event.CREATED, function (event) {
        drawnItems.addLayer(event.layer);
        var contextmenuItems = [];
        if(event.layerType == 'marker') {
          contextmenuItems.push({
            text: 'Set location of ' + result.objectTitle
            , callback: function(event2) {
              patchSeaportFacilityLocation(event.layer, { coordinates: [event.layer.getLatLng()['lng'], event.layer.getLatLng()['lat']], type: "Point" });
            }
          });
        }
        event.layer.bindContextMenu({
          contextmenu: true
          , contextmenuItems: contextmenuItems
        });
      });
    }
  }
}
function patchSeaportFacilityLocation(target, location) {
  patchSeaportFacilityVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + result.entityShortId }]
      , 'setLocation', location
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqSeaportFacility_time').innerText = '';
  searchPage('SeaportFacility', function() {
    let speedRate = parseFloat(document.querySelector('#animateStatsSpeed')?.value) * 1000;
    let xStep = parseFloat(document.querySelector('#animateStatsStep')?.value);
    let xMin = parseFloat(document.querySelector('#animateStatsMin')?.value);
    let xMax = parseFloat(document.querySelector('#animateStatsMax')?.value);
    let x = xMin;

    let animateInterval = window.setInterval(() => {
      x = x + xStep;
      if (x > xMax || x < 0) {
        clearInterval(animateInterval);
      }
      document.querySelector('#fqSeaportFacility_time').value = x;
      document.querySelector('#fqSeaportFacility_time').onchange();
      searchPage('SeaportFacility');
    }, speedRate);
  });
}

// Search //

async function searchSeaportFacility($formFilters, success, error) {
  var filters = searchSeaportFacilityFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchSeaportFacilityVals(filters, target, success, error);
}

function searchSeaportFacilityFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterColor = $formFilters.querySelector('.valueColor')?.value;
    if(filterColor != null && filterColor !== '')
      filters.push({ name: 'fq', value: 'color:' + filterColor });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterNgsildTenant = $formFilters.querySelector('.valueNgsildTenant')?.value;
    if(filterNgsildTenant != null && filterNgsildTenant !== '')
      filters.push({ name: 'fq', value: 'ngsildTenant:' + filterNgsildTenant });

    var filterNgsildPath = $formFilters.querySelector('.valueNgsildPath')?.value;
    if(filterNgsildPath != null && filterNgsildPath !== '')
      filters.push({ name: 'fq', value: 'ngsildPath:' + filterNgsildPath });

    var filterNgsildContext = $formFilters.querySelector('.valueNgsildContext')?.value;
    if(filterNgsildContext != null && filterNgsildContext !== '')
      filters.push({ name: 'fq', value: 'ngsildContext:' + filterNgsildContext });

    var filterNgsildData = $formFilters.querySelector('.valueNgsildData')?.value;
    if(filterNgsildData != null && filterNgsildData !== '')
      filters.push({ name: 'fq', value: 'ngsildData:' + filterNgsildData });

    var filterAddress = $formFilters.querySelector('.valueAddress')?.value;
    if(filterAddress != null && filterAddress !== '')
      filters.push({ name: 'fq', value: 'address:' + filterAddress });

    var filterAlternateName = $formFilters.querySelector('.valueAlternateName')?.value;
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterAuthorizedPropulsion = $formFilters.querySelector('.valueAuthorizedPropulsion')?.value;
    if(filterAuthorizedPropulsion != null && filterAuthorizedPropulsion !== '')
      filters.push({ name: 'fq', value: 'authorizedPropulsion:' + filterAuthorizedPropulsion });

    var filterBoatSupplyingServices = $formFilters.querySelector('.valueBoatSupplyingServices')?.value;
    if(filterBoatSupplyingServices != null && filterBoatSupplyingServices !== '')
      filters.push({ name: 'fq', value: 'boatSupplyingServices:' + filterBoatSupplyingServices });

    var filterContactPoint = $formFilters.querySelector('.valueContactPoint')?.value;
    if(filterContactPoint != null && filterContactPoint !== '')
      filters.push({ name: 'fq', value: 'contactPoint:' + filterContactPoint });

    var filterContractingAuthority = $formFilters.querySelector('.valueContractingAuthority')?.value;
    if(filterContractingAuthority != null && filterContractingAuthority !== '')
      filters.push({ name: 'fq', value: 'contractingAuthority:' + filterContractingAuthority });

    var filterContractingCompany = $formFilters.querySelector('.valueContractingCompany')?.value;
    if(filterContractingCompany != null && filterContractingCompany !== '')
      filters.push({ name: 'fq', value: 'contractingCompany:' + filterContractingCompany });

    var filterCurrencyAccepted = $formFilters.querySelector('.valueCurrencyAccepted')?.value;
    if(filterCurrencyAccepted != null && filterCurrencyAccepted !== '')
      filters.push({ name: 'fq', value: 'currencyAccepted:' + filterCurrencyAccepted });

    var filterDataProvider = $formFilters.querySelector('.valueDataProvider')?.value;
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.querySelector('.valueDateCreated')?.value;
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateLastReported = $formFilters.querySelector('.valueDateLastReported')?.value;
    if(filterDateLastReported != null && filterDateLastReported !== '')
      filters.push({ name: 'fq', value: 'dateLastReported:' + filterDateLastReported });

    var filterDateModified = $formFilters.querySelector('.valueDateModified')?.value;
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterElectricTransport = $formFilters.querySelector('.valueElectricTransport')?.value;
    if(filterElectricTransport != null && filterElectricTransport !== '')
      filters.push({ name: 'fq', value: 'electricTransport:' + filterElectricTransport });

    var filterEndDate = $formFilters.querySelector('.valueEndDate')?.value;
    if(filterEndDate != null && filterEndDate !== '')
      filters.push({ name: 'fq', value: 'endDate:' + filterEndDate });

    var filterFacilities = $formFilters.querySelector('.valueFacilities')?.value;
    if(filterFacilities != null && filterFacilities !== '')
      filters.push({ name: 'fq', value: 'facilities:' + filterFacilities });

    var filterMaxDraft = $formFilters.querySelector('.valueMaxDraft')?.value;
    if(filterMaxDraft != null && filterMaxDraft !== '')
      filters.push({ name: 'fq', value: 'maxDraft:' + filterMaxDraft });

    var filterMaxLength = $formFilters.querySelector('.valueMaxLength')?.value;
    if(filterMaxLength != null && filterMaxLength !== '')
      filters.push({ name: 'fq', value: 'maxLength:' + filterMaxLength });

    var filterMaxTonnage = $formFilters.querySelector('.valueMaxTonnage')?.value;
    if(filterMaxTonnage != null && filterMaxTonnage !== '')
      filters.push({ name: 'fq', value: 'maxTonnage:' + filterMaxTonnage });

    var filterMaxWidth = $formFilters.querySelector('.valueMaxWidth')?.value;
    if(filterMaxWidth != null && filterMaxWidth !== '')
      filters.push({ name: 'fq', value: 'maxWidth:' + filterMaxWidth });

    var filterMinLength = $formFilters.querySelector('.valueMinLength')?.value;
    if(filterMinLength != null && filterMinLength !== '')
      filters.push({ name: 'fq', value: 'minLength:' + filterMinLength });

    var filterNearbyServices = $formFilters.querySelector('.valueNearbyServices')?.value;
    if(filterNearbyServices != null && filterNearbyServices !== '')
      filters.push({ name: 'fq', value: 'nearbyServices:' + filterNearbyServices });

    var filterNumberOfPlace = $formFilters.querySelector('.valueNumberOfPlace')?.value;
    if(filterNumberOfPlace != null && filterNumberOfPlace !== '')
      filters.push({ name: 'fq', value: 'numberOfPlace:' + filterNumberOfPlace });

    var filterOpeningHours = $formFilters.querySelector('.valueOpeningHours')?.value;
    if(filterOpeningHours != null && filterOpeningHours !== '')
      filters.push({ name: 'fq', value: 'openingHours:' + filterOpeningHours });

    var filterOpeningHoursSpecification = $formFilters.querySelector('.valueOpeningHoursSpecification')?.value;
    if(filterOpeningHoursSpecification != null && filterOpeningHoursSpecification !== '')
      filters.push({ name: 'fq', value: 'openingHoursSpecification:' + filterOpeningHoursSpecification });

    var filterOwner = $formFilters.querySelector('.valueOwner')?.value;
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterPaymentAccepted = $formFilters.querySelector('.valuePaymentAccepted')?.value;
    if(filterPaymentAccepted != null && filterPaymentAccepted !== '')
      filters.push({ name: 'fq', value: 'paymentAccepted:' + filterPaymentAccepted });

    var filterPortServicesProvided = $formFilters.querySelector('.valuePortServicesProvided')?.value;
    if(filterPortServicesProvided != null && filterPortServicesProvided !== '')
      filters.push({ name: 'fq', value: 'portServicesProvided:' + filterPortServicesProvided });

    var filterRefBoatAuthorized = $formFilters.querySelector('.valueRefBoatAuthorized')?.value;
    if(filterRefBoatAuthorized != null && filterRefBoatAuthorized !== '')
      filters.push({ name: 'fq', value: 'refBoatAuthorized:' + filterRefBoatAuthorized });

    var filterRefBoatPlaceAvailable = $formFilters.querySelector('.valueRefBoatPlaceAvailable')?.value;
    if(filterRefBoatPlaceAvailable != null && filterRefBoatPlaceAvailable !== '')
      filters.push({ name: 'fq', value: 'refBoatPlaceAvailable:' + filterRefBoatPlaceAvailable });

    var filterRefBoatPlacePricing = $formFilters.querySelector('.valueRefBoatPlacePricing')?.value;
    if(filterRefBoatPlacePricing != null && filterRefBoatPlacePricing !== '')
      filters.push({ name: 'fq', value: 'refBoatPlacePricing:' + filterRefBoatPlacePricing });

    var filterRefDevice = $formFilters.querySelector('.valueRefDevice')?.value;
    if(filterRefDevice != null && filterRefDevice !== '')
      filters.push({ name: 'fq', value: 'refDevice:' + filterRefDevice });

    var filterRefPointOfInterest = $formFilters.querySelector('.valueRefPointOfInterest')?.value;
    if(filterRefPointOfInterest != null && filterRefPointOfInterest !== '')
      filters.push({ name: 'fq', value: 'refPointOfInterest:' + filterRefPointOfInterest });

    var filterRentalSaleServices = $formFilters.querySelector('.valueRentalSaleServices')?.value;
    if(filterRentalSaleServices != null && filterRentalSaleServices !== '')
      filters.push({ name: 'fq', value: 'rentalSaleServices:' + filterRentalSaleServices });

    var filterRouteType = $formFilters.querySelector('.valueRouteType')?.value;
    if(filterRouteType != null && filterRouteType !== '')
      filters.push({ name: 'fq', value: 'routeType:' + filterRouteType });

    var filterSeeAlso = $formFilters.querySelector('.valueSeeAlso')?.value;
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSource = $formFilters.querySelector('.valueSource')?.value;
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterStartDate = $formFilters.querySelector('.valueStartDate')?.value;
    if(filterStartDate != null && filterStartDate !== '')
      filters.push({ name: 'fq', value: 'startDate:' + filterStartDate });

    var filterTransportServices = $formFilters.querySelector('.valueTransportServices')?.value;
    if(filterTransportServices != null && filterTransportServices !== '')
      filters.push({ name: 'fq', value: 'transportServices:' + filterTransportServices });

    var filterTypeOfPort = $formFilters.querySelector('.valueTypeOfPort')?.value;
    if(filterTypeOfPort != null && filterTypeOfPort !== '')
      filters.push({ name: 'fq', value: 'typeOfPort:' + filterTypeOfPort });

    var filterWebSite = $formFilters.querySelector('.valueWebSite')?.value;
    if(filterWebSite != null && filterWebSite !== '')
      filters.push({ name: 'fq', value: 'webSite:' + filterWebSite });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterDisplayPageFrFR = $formFilters.querySelector('.valueDisplayPageFrFR')?.value;
    if(filterDisplayPageFrFR != null && filterDisplayPageFrFR !== '')
      filters.push({ name: 'fq', value: 'displayPageFrFR:' + filterDisplayPageFrFR });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterEditPageFrFR = $formFilters.querySelector('.valueEditPageFrFR')?.value;
    if(filterEditPageFrFR != null && filterEditPageFrFR !== '')
      filters.push({ name: 'fq', value: 'editPageFrFR:' + filterEditPageFrFR });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterUserPageFrFR = $formFilters.querySelector('.valueUserPageFrFR')?.value;
    if(filterUserPageFrFR != null && filterUserPageFrFR !== '')
      filters.push({ name: 'fq', value: 'userPageFrFR:' + filterUserPageFrFR });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterDownloadFrFR = $formFilters.querySelector('.valueDownloadFrFR')?.value;
    if(filterDownloadFrFR != null && filterDownloadFrFR !== '')
      filters.push({ name: 'fq', value: 'downloadFrFR:' + filterDownloadFrFR });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterEntityShortId = $formFilters.querySelector('.valueEntityShortId')?.value;
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });
  }
  return filters;
}

function searchSeaportFacilityVals(filters, target, success, error) {


  fetch(
    '/en-us/api/seaport-facilities?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function suggestSeaportFacilityObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular fa-ship"></i>');
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $li = document.createElement('li');
        var $a = document.createElement('a').setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchSeaportFacilityVals($formFilters, target, success, error);
}

// GET //

async function getSeaportFacility(pk) {
  fetch(
    '/en-us/api/seaport-facilities/' + entityShortId
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PATCH //

async function patchSeaportFacility($formFilters, $formValues, target, entityShortId, success, error) {
  var filters = patchSeaportFacilityFilters($formFilters);

  var vals = {};

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  var removePk = $formValues.querySelector('.removePk')?.value === 'true';
  var setPk = removePk ? null : $formValues.querySelector('.setPk')?.value;
  var addPk = $formValues.querySelector('.addPk')?.value;
  if(removePk || setPk != null && setPk !== '')
    vals['setPk'] = setPk;
  if(addPk != null && addPk !== '')
    vals['addPk'] = addPk;
  var removePk = $formValues.querySelector('.removePk')?.value;
  if(removePk != null && removePk !== '')
    vals['removePk'] = removePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value === 'true';
  var setCreated = removeCreated ? null : $formValues.querySelector('.setCreated')?.value;
  var addCreated = $formValues.querySelector('.addCreated')?.value;
  if(removeCreated || setCreated != null && setCreated !== '')
    vals['setCreated'] = setCreated;
  if(addCreated != null && addCreated !== '')
    vals['addCreated'] = addCreated;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value;
  if(removeCreated != null && removeCreated !== '')
    vals['removeCreated'] = removeCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  var removeModified = $formValues.querySelector('.removeModified')?.value === 'true';
  var setModified = removeModified ? null : $formValues.querySelector('.setModified')?.value;
  var addModified = $formValues.querySelector('.addModified')?.value;
  if(removeModified || setModified != null && setModified !== '')
    vals['setModified'] = setModified;
  if(addModified != null && addModified !== '')
    vals['addModified'] = addModified;
  var removeModified = $formValues.querySelector('.removeModified')?.value;
  if(removeModified != null && removeModified !== '')
    vals['removeModified'] = removeModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  var removeArchived = $formValues.querySelector('.removeArchived')?.value === 'true';
  if(valueArchived != null)
    valueArchived = valueArchived === 'true';
  var valueArchivedSelectVal = $formValues.querySelector('select.setArchived')?.value;
  if(valueArchivedSelectVal != null)
    valueArchivedSelectVal = valueArchivedSelectVal === 'true';
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.querySelector('.addArchived')?.checked;
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.querySelector('.removeArchived')?.checked;
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueName = $formValues.querySelector('.valueName')?.value;
  var removeName = $formValues.querySelector('.removeName')?.value === 'true';
  var setName = removeName ? null : $formValues.querySelector('.setName')?.value;
  var addName = $formValues.querySelector('.addName')?.value;
  if(removeName || setName != null && setName !== '')
    vals['setName'] = setName;
  if(addName != null && addName !== '')
    vals['addName'] = addName;
  var removeName = $formValues.querySelector('.removeName')?.value;
  if(removeName != null && removeName !== '')
    vals['removeName'] = removeName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value === 'true';
  var setDescription = removeDescription ? null : $formValues.querySelector('.setDescription')?.value;
  var addDescription = $formValues.querySelector('.addDescription')?.value;
  if(removeDescription || setDescription != null && setDescription !== '')
    vals['setDescription'] = setDescription;
  if(addDescription != null && addDescription !== '')
    vals['addDescription'] = addDescription;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value;
  if(removeDescription != null && removeDescription !== '')
    vals['removeDescription'] = removeDescription;

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  var removeLocation = $formValues.querySelector('.removeLocation')?.value === 'true';
  var setLocation = removeLocation ? null : $formValues.querySelector('.setLocation')?.value;
  var addLocation = $formValues.querySelector('.addLocation')?.value;
  if(removeLocation || setLocation != null && setLocation !== '')
    vals['setLocation'] = JSON.parse(setLocation);
  if(addLocation != null && addLocation !== '')
    vals['addLocation'] = addLocation;
  var removeLocation = $formValues.querySelector('.removeLocation')?.value;
  if(removeLocation != null && removeLocation !== '')
    vals['removeLocation'] = removeLocation;

  var valueColor = $formValues.querySelector('.valueColor')?.value;
  var removeColor = $formValues.querySelector('.removeColor')?.value === 'true';
  var setColor = removeColor ? null : $formValues.querySelector('.setColor')?.value;
  var addColor = $formValues.querySelector('.addColor')?.value;
  if(removeColor || setColor != null && setColor !== '')
    vals['setColor'] = setColor;
  if(addColor != null && addColor !== '')
    vals['addColor'] = addColor;
  var removeColor = $formValues.querySelector('.removeColor')?.value;
  if(removeColor != null && removeColor !== '')
    vals['removeColor'] = removeColor;

  var valueId = $formValues.querySelector('.valueId')?.value;
  var removeId = $formValues.querySelector('.removeId')?.value === 'true';
  var setId = removeId ? null : $formValues.querySelector('.setId')?.value;
  var addId = $formValues.querySelector('.addId')?.value;
  if(removeId || setId != null && setId !== '')
    vals['setId'] = setId;
  if(addId != null && addId !== '')
    vals['addId'] = addId;
  var removeId = $formValues.querySelector('.removeId')?.value;
  if(removeId != null && removeId !== '')
    vals['removeId'] = removeId;

  var valueNgsildTenant = $formValues.querySelector('.valueNgsildTenant')?.value;
  var removeNgsildTenant = $formValues.querySelector('.removeNgsildTenant')?.value === 'true';
  var setNgsildTenant = removeNgsildTenant ? null : $formValues.querySelector('.setNgsildTenant')?.value;
  var addNgsildTenant = $formValues.querySelector('.addNgsildTenant')?.value;
  if(removeNgsildTenant || setNgsildTenant != null && setNgsildTenant !== '')
    vals['setNgsildTenant'] = setNgsildTenant;
  if(addNgsildTenant != null && addNgsildTenant !== '')
    vals['addNgsildTenant'] = addNgsildTenant;
  var removeNgsildTenant = $formValues.querySelector('.removeNgsildTenant')?.value;
  if(removeNgsildTenant != null && removeNgsildTenant !== '')
    vals['removeNgsildTenant'] = removeNgsildTenant;

  var valueNgsildPath = $formValues.querySelector('.valueNgsildPath')?.value;
  var removeNgsildPath = $formValues.querySelector('.removeNgsildPath')?.value === 'true';
  var setNgsildPath = removeNgsildPath ? null : $formValues.querySelector('.setNgsildPath')?.value;
  var addNgsildPath = $formValues.querySelector('.addNgsildPath')?.value;
  if(removeNgsildPath || setNgsildPath != null && setNgsildPath !== '')
    vals['setNgsildPath'] = setNgsildPath;
  if(addNgsildPath != null && addNgsildPath !== '')
    vals['addNgsildPath'] = addNgsildPath;
  var removeNgsildPath = $formValues.querySelector('.removeNgsildPath')?.value;
  if(removeNgsildPath != null && removeNgsildPath !== '')
    vals['removeNgsildPath'] = removeNgsildPath;

  var valueNgsildContext = $formValues.querySelector('.valueNgsildContext')?.value;
  var removeNgsildContext = $formValues.querySelector('.removeNgsildContext')?.value === 'true';
  var setNgsildContext = removeNgsildContext ? null : $formValues.querySelector('.setNgsildContext')?.value;
  var addNgsildContext = $formValues.querySelector('.addNgsildContext')?.value;
  if(removeNgsildContext || setNgsildContext != null && setNgsildContext !== '')
    vals['setNgsildContext'] = setNgsildContext;
  if(addNgsildContext != null && addNgsildContext !== '')
    vals['addNgsildContext'] = addNgsildContext;
  var removeNgsildContext = $formValues.querySelector('.removeNgsildContext')?.value;
  if(removeNgsildContext != null && removeNgsildContext !== '')
    vals['removeNgsildContext'] = removeNgsildContext;

  var valueNgsildData = $formValues.querySelector('.valueNgsildData')?.value;
  var removeNgsildData = $formValues.querySelector('.removeNgsildData')?.value === 'true';
  var setNgsildData = removeNgsildData ? null : $formValues.querySelector('.setNgsildData')?.value;
  var addNgsildData = $formValues.querySelector('.addNgsildData')?.value;
  if(removeNgsildData || setNgsildData != null && setNgsildData !== '')
    vals['setNgsildData'] = JSON.parse(setNgsildData);
  if(addNgsildData != null && addNgsildData !== '')
    vals['addNgsildData'] = addNgsildData;
  var removeNgsildData = $formValues.querySelector('.removeNgsildData')?.value;
  if(removeNgsildData != null && removeNgsildData !== '')
    vals['removeNgsildData'] = removeNgsildData;

  var valueAddress = $formValues.querySelector('.valueAddress')?.value;
  var removeAddress = $formValues.querySelector('.removeAddress')?.value === 'true';
  var setAddress = removeAddress ? null : $formValues.querySelector('.setAddress')?.value;
  var addAddress = $formValues.querySelector('.addAddress')?.value;
  if(removeAddress || setAddress != null && setAddress !== '')
    vals['setAddress'] = JSON.parse(setAddress);
  if(addAddress != null && addAddress !== '')
    vals['addAddress'] = addAddress;
  var removeAddress = $formValues.querySelector('.removeAddress')?.value;
  if(removeAddress != null && removeAddress !== '')
    vals['removeAddress'] = removeAddress;

  var valueAlternateName = $formValues.querySelector('.valueAlternateName')?.value;
  var removeAlternateName = $formValues.querySelector('.removeAlternateName')?.value === 'true';
  var setAlternateName = removeAlternateName ? null : $formValues.querySelector('.setAlternateName')?.value;
  var addAlternateName = $formValues.querySelector('.addAlternateName')?.value;
  if(removeAlternateName || setAlternateName != null && setAlternateName !== '')
    vals['setAlternateName'] = setAlternateName;
  if(addAlternateName != null && addAlternateName !== '')
    vals['addAlternateName'] = addAlternateName;
  var removeAlternateName = $formValues.querySelector('.removeAlternateName')?.value;
  if(removeAlternateName != null && removeAlternateName !== '')
    vals['removeAlternateName'] = removeAlternateName;

  var valueAuthorizedPropulsion = $formValues.querySelector('.valueAuthorizedPropulsion')?.value;
  var removeAuthorizedPropulsion = $formValues.querySelector('.removeAuthorizedPropulsion')?.value === 'true';
  var setAuthorizedPropulsion = removeAuthorizedPropulsion ? null : $formValues.querySelector('.setAuthorizedPropulsion')?.value;
  var addAuthorizedPropulsion = $formValues.querySelector('.addAuthorizedPropulsion')?.value;
  if(removeAuthorizedPropulsion || setAuthorizedPropulsion != null && setAuthorizedPropulsion !== '')
    vals['setAuthorizedPropulsion'] = JSON.parse(setAuthorizedPropulsion);
  if(addAuthorizedPropulsion != null && addAuthorizedPropulsion !== '')
    vals['addAuthorizedPropulsion'] = addAuthorizedPropulsion;
  var removeAuthorizedPropulsion = $formValues.querySelector('.removeAuthorizedPropulsion')?.value;
  if(removeAuthorizedPropulsion != null && removeAuthorizedPropulsion !== '')
    vals['removeAuthorizedPropulsion'] = removeAuthorizedPropulsion;

  var valueBoatSupplyingServices = $formValues.querySelector('.valueBoatSupplyingServices')?.value;
  var removeBoatSupplyingServices = $formValues.querySelector('.removeBoatSupplyingServices')?.value === 'true';
  var setBoatSupplyingServices = removeBoatSupplyingServices ? null : $formValues.querySelector('.setBoatSupplyingServices')?.value;
  var addBoatSupplyingServices = $formValues.querySelector('.addBoatSupplyingServices')?.value;
  if(removeBoatSupplyingServices || setBoatSupplyingServices != null && setBoatSupplyingServices !== '')
    vals['setBoatSupplyingServices'] = JSON.parse(setBoatSupplyingServices);
  if(addBoatSupplyingServices != null && addBoatSupplyingServices !== '')
    vals['addBoatSupplyingServices'] = addBoatSupplyingServices;
  var removeBoatSupplyingServices = $formValues.querySelector('.removeBoatSupplyingServices')?.value;
  if(removeBoatSupplyingServices != null && removeBoatSupplyingServices !== '')
    vals['removeBoatSupplyingServices'] = removeBoatSupplyingServices;

  var valueContactPoint = $formValues.querySelector('.valueContactPoint')?.value;
  var removeContactPoint = $formValues.querySelector('.removeContactPoint')?.value === 'true';
  var setContactPoint = removeContactPoint ? null : $formValues.querySelector('.setContactPoint')?.value;
  var addContactPoint = $formValues.querySelector('.addContactPoint')?.value;
  if(removeContactPoint || setContactPoint != null && setContactPoint !== '')
    vals['setContactPoint'] = JSON.parse(setContactPoint);
  if(addContactPoint != null && addContactPoint !== '')
    vals['addContactPoint'] = addContactPoint;
  var removeContactPoint = $formValues.querySelector('.removeContactPoint')?.value;
  if(removeContactPoint != null && removeContactPoint !== '')
    vals['removeContactPoint'] = removeContactPoint;

  var valueContractingAuthority = $formValues.querySelector('.valueContractingAuthority')?.value;
  var removeContractingAuthority = $formValues.querySelector('.removeContractingAuthority')?.value === 'true';
  var setContractingAuthority = removeContractingAuthority ? null : $formValues.querySelector('.setContractingAuthority')?.value;
  var addContractingAuthority = $formValues.querySelector('.addContractingAuthority')?.value;
  if(removeContractingAuthority || setContractingAuthority != null && setContractingAuthority !== '')
    vals['setContractingAuthority'] = setContractingAuthority;
  if(addContractingAuthority != null && addContractingAuthority !== '')
    vals['addContractingAuthority'] = addContractingAuthority;
  var removeContractingAuthority = $formValues.querySelector('.removeContractingAuthority')?.value;
  if(removeContractingAuthority != null && removeContractingAuthority !== '')
    vals['removeContractingAuthority'] = removeContractingAuthority;

  var valueContractingCompany = $formValues.querySelector('.valueContractingCompany')?.value;
  var removeContractingCompany = $formValues.querySelector('.removeContractingCompany')?.value === 'true';
  var setContractingCompany = removeContractingCompany ? null : $formValues.querySelector('.setContractingCompany')?.value;
  var addContractingCompany = $formValues.querySelector('.addContractingCompany')?.value;
  if(removeContractingCompany || setContractingCompany != null && setContractingCompany !== '')
    vals['setContractingCompany'] = setContractingCompany;
  if(addContractingCompany != null && addContractingCompany !== '')
    vals['addContractingCompany'] = addContractingCompany;
  var removeContractingCompany = $formValues.querySelector('.removeContractingCompany')?.value;
  if(removeContractingCompany != null && removeContractingCompany !== '')
    vals['removeContractingCompany'] = removeContractingCompany;

  var valueCurrencyAccepted = $formValues.querySelector('.valueCurrencyAccepted')?.value;
  var removeCurrencyAccepted = $formValues.querySelector('.removeCurrencyAccepted')?.value === 'true';
  var setCurrencyAccepted = removeCurrencyAccepted ? null : $formValues.querySelector('.setCurrencyAccepted')?.value;
  var addCurrencyAccepted = $formValues.querySelector('.addCurrencyAccepted')?.value;
  if(removeCurrencyAccepted || setCurrencyAccepted != null && setCurrencyAccepted !== '')
    vals['setCurrencyAccepted'] = JSON.parse(setCurrencyAccepted);
  if(addCurrencyAccepted != null && addCurrencyAccepted !== '')
    vals['addCurrencyAccepted'] = addCurrencyAccepted;
  var removeCurrencyAccepted = $formValues.querySelector('.removeCurrencyAccepted')?.value;
  if(removeCurrencyAccepted != null && removeCurrencyAccepted !== '')
    vals['removeCurrencyAccepted'] = removeCurrencyAccepted;

  var valueDataProvider = $formValues.querySelector('.valueDataProvider')?.value;
  var removeDataProvider = $formValues.querySelector('.removeDataProvider')?.value === 'true';
  var setDataProvider = removeDataProvider ? null : $formValues.querySelector('.setDataProvider')?.value;
  var addDataProvider = $formValues.querySelector('.addDataProvider')?.value;
  if(removeDataProvider || setDataProvider != null && setDataProvider !== '')
    vals['setDataProvider'] = setDataProvider;
  if(addDataProvider != null && addDataProvider !== '')
    vals['addDataProvider'] = addDataProvider;
  var removeDataProvider = $formValues.querySelector('.removeDataProvider')?.value;
  if(removeDataProvider != null && removeDataProvider !== '')
    vals['removeDataProvider'] = removeDataProvider;

  var valueDateCreated = $formValues.querySelector('.valueDateCreated')?.value;
  var removeDateCreated = $formValues.querySelector('.removeDateCreated')?.value === 'true';
  var setDateCreated = removeDateCreated ? null : $formValues.querySelector('.setDateCreated')?.value;
  var addDateCreated = $formValues.querySelector('.addDateCreated')?.value;
  if(removeDateCreated || setDateCreated != null && setDateCreated !== '')
    vals['setDateCreated'] = setDateCreated;
  if(addDateCreated != null && addDateCreated !== '')
    vals['addDateCreated'] = addDateCreated;
  var removeDateCreated = $formValues.querySelector('.removeDateCreated')?.value;
  if(removeDateCreated != null && removeDateCreated !== '')
    vals['removeDateCreated'] = removeDateCreated;

  var valueDateLastReported = $formValues.querySelector('.valueDateLastReported')?.value;
  var removeDateLastReported = $formValues.querySelector('.removeDateLastReported')?.value === 'true';
  var setDateLastReported = removeDateLastReported ? null : $formValues.querySelector('.setDateLastReported')?.value;
  var addDateLastReported = $formValues.querySelector('.addDateLastReported')?.value;
  if(removeDateLastReported || setDateLastReported != null && setDateLastReported !== '')
    vals['setDateLastReported'] = setDateLastReported;
  if(addDateLastReported != null && addDateLastReported !== '')
    vals['addDateLastReported'] = addDateLastReported;
  var removeDateLastReported = $formValues.querySelector('.removeDateLastReported')?.value;
  if(removeDateLastReported != null && removeDateLastReported !== '')
    vals['removeDateLastReported'] = removeDateLastReported;

  var valueDateModified = $formValues.querySelector('.valueDateModified')?.value;
  var removeDateModified = $formValues.querySelector('.removeDateModified')?.value === 'true';
  var setDateModified = removeDateModified ? null : $formValues.querySelector('.setDateModified')?.value;
  var addDateModified = $formValues.querySelector('.addDateModified')?.value;
  if(removeDateModified || setDateModified != null && setDateModified !== '')
    vals['setDateModified'] = setDateModified;
  if(addDateModified != null && addDateModified !== '')
    vals['addDateModified'] = addDateModified;
  var removeDateModified = $formValues.querySelector('.removeDateModified')?.value;
  if(removeDateModified != null && removeDateModified !== '')
    vals['removeDateModified'] = removeDateModified;

  var valueElectricTransport = $formValues.querySelector('.valueElectricTransport')?.value;
  var removeElectricTransport = $formValues.querySelector('.removeElectricTransport')?.value === 'true';
  var setElectricTransport = removeElectricTransport ? null : $formValues.querySelector('.setElectricTransport')?.value;
  var addElectricTransport = $formValues.querySelector('.addElectricTransport')?.value;
  if(removeElectricTransport || setElectricTransport != null && setElectricTransport !== '')
    vals['setElectricTransport'] = JSON.parse(setElectricTransport);
  if(addElectricTransport != null && addElectricTransport !== '')
    vals['addElectricTransport'] = addElectricTransport;
  var removeElectricTransport = $formValues.querySelector('.removeElectricTransport')?.value;
  if(removeElectricTransport != null && removeElectricTransport !== '')
    vals['removeElectricTransport'] = removeElectricTransport;

  var valueEndDate = $formValues.querySelector('.valueEndDate')?.value;
  var removeEndDate = $formValues.querySelector('.removeEndDate')?.value === 'true';
  var setEndDate = removeEndDate ? null : $formValues.querySelector('.setEndDate')?.value;
  var addEndDate = $formValues.querySelector('.addEndDate')?.value;
  if(removeEndDate || setEndDate != null && setEndDate !== '')
    vals['setEndDate'] = setEndDate;
  if(addEndDate != null && addEndDate !== '')
    vals['addEndDate'] = addEndDate;
  var removeEndDate = $formValues.querySelector('.removeEndDate')?.value;
  if(removeEndDate != null && removeEndDate !== '')
    vals['removeEndDate'] = removeEndDate;

  var valueFacilities = $formValues.querySelector('.valueFacilities')?.value;
  var removeFacilities = $formValues.querySelector('.removeFacilities')?.value === 'true';
  var setFacilities = removeFacilities ? null : $formValues.querySelector('.setFacilities')?.value;
  var addFacilities = $formValues.querySelector('.addFacilities')?.value;
  if(removeFacilities || setFacilities != null && setFacilities !== '')
    vals['setFacilities'] = JSON.parse(setFacilities);
  if(addFacilities != null && addFacilities !== '')
    vals['addFacilities'] = addFacilities;
  var removeFacilities = $formValues.querySelector('.removeFacilities')?.value;
  if(removeFacilities != null && removeFacilities !== '')
    vals['removeFacilities'] = removeFacilities;

  var valueMaxDraft = $formValues.querySelector('.valueMaxDraft')?.value;
  var removeMaxDraft = $formValues.querySelector('.removeMaxDraft')?.value === 'true';
  var setMaxDraft = removeMaxDraft ? null : $formValues.querySelector('.setMaxDraft')?.value;
  var addMaxDraft = $formValues.querySelector('.addMaxDraft')?.value;
  if(removeMaxDraft || setMaxDraft != null && setMaxDraft !== '')
    vals['setMaxDraft'] = setMaxDraft;
  if(addMaxDraft != null && addMaxDraft !== '')
    vals['addMaxDraft'] = addMaxDraft;
  var removeMaxDraft = $formValues.querySelector('.removeMaxDraft')?.value;
  if(removeMaxDraft != null && removeMaxDraft !== '')
    vals['removeMaxDraft'] = removeMaxDraft;

  var valueMaxLength = $formValues.querySelector('.valueMaxLength')?.value;
  var removeMaxLength = $formValues.querySelector('.removeMaxLength')?.value === 'true';
  var setMaxLength = removeMaxLength ? null : $formValues.querySelector('.setMaxLength')?.value;
  var addMaxLength = $formValues.querySelector('.addMaxLength')?.value;
  if(removeMaxLength || setMaxLength != null && setMaxLength !== '')
    vals['setMaxLength'] = setMaxLength;
  if(addMaxLength != null && addMaxLength !== '')
    vals['addMaxLength'] = addMaxLength;
  var removeMaxLength = $formValues.querySelector('.removeMaxLength')?.value;
  if(removeMaxLength != null && removeMaxLength !== '')
    vals['removeMaxLength'] = removeMaxLength;

  var valueMaxTonnage = $formValues.querySelector('.valueMaxTonnage')?.value;
  var removeMaxTonnage = $formValues.querySelector('.removeMaxTonnage')?.value === 'true';
  var setMaxTonnage = removeMaxTonnage ? null : $formValues.querySelector('.setMaxTonnage')?.value;
  var addMaxTonnage = $formValues.querySelector('.addMaxTonnage')?.value;
  if(removeMaxTonnage || setMaxTonnage != null && setMaxTonnage !== '')
    vals['setMaxTonnage'] = setMaxTonnage;
  if(addMaxTonnage != null && addMaxTonnage !== '')
    vals['addMaxTonnage'] = addMaxTonnage;
  var removeMaxTonnage = $formValues.querySelector('.removeMaxTonnage')?.value;
  if(removeMaxTonnage != null && removeMaxTonnage !== '')
    vals['removeMaxTonnage'] = removeMaxTonnage;

  var valueMaxWidth = $formValues.querySelector('.valueMaxWidth')?.value;
  var removeMaxWidth = $formValues.querySelector('.removeMaxWidth')?.value === 'true';
  var setMaxWidth = removeMaxWidth ? null : $formValues.querySelector('.setMaxWidth')?.value;
  var addMaxWidth = $formValues.querySelector('.addMaxWidth')?.value;
  if(removeMaxWidth || setMaxWidth != null && setMaxWidth !== '')
    vals['setMaxWidth'] = setMaxWidth;
  if(addMaxWidth != null && addMaxWidth !== '')
    vals['addMaxWidth'] = addMaxWidth;
  var removeMaxWidth = $formValues.querySelector('.removeMaxWidth')?.value;
  if(removeMaxWidth != null && removeMaxWidth !== '')
    vals['removeMaxWidth'] = removeMaxWidth;

  var valueMinLength = $formValues.querySelector('.valueMinLength')?.value;
  var removeMinLength = $formValues.querySelector('.removeMinLength')?.value === 'true';
  var setMinLength = removeMinLength ? null : $formValues.querySelector('.setMinLength')?.value;
  var addMinLength = $formValues.querySelector('.addMinLength')?.value;
  if(removeMinLength || setMinLength != null && setMinLength !== '')
    vals['setMinLength'] = setMinLength;
  if(addMinLength != null && addMinLength !== '')
    vals['addMinLength'] = addMinLength;
  var removeMinLength = $formValues.querySelector('.removeMinLength')?.value;
  if(removeMinLength != null && removeMinLength !== '')
    vals['removeMinLength'] = removeMinLength;

  var valueNearbyServices = $formValues.querySelector('.valueNearbyServices')?.value;
  var removeNearbyServices = $formValues.querySelector('.removeNearbyServices')?.value === 'true';
  var setNearbyServices = removeNearbyServices ? null : $formValues.querySelector('.setNearbyServices')?.value;
  var addNearbyServices = $formValues.querySelector('.addNearbyServices')?.value;
  if(removeNearbyServices || setNearbyServices != null && setNearbyServices !== '')
    vals['setNearbyServices'] = JSON.parse(setNearbyServices);
  if(addNearbyServices != null && addNearbyServices !== '')
    vals['addNearbyServices'] = addNearbyServices;
  var removeNearbyServices = $formValues.querySelector('.removeNearbyServices')?.value;
  if(removeNearbyServices != null && removeNearbyServices !== '')
    vals['removeNearbyServices'] = removeNearbyServices;

  var valueNumberOfPlace = $formValues.querySelector('.valueNumberOfPlace')?.value;
  var removeNumberOfPlace = $formValues.querySelector('.removeNumberOfPlace')?.value === 'true';
  var setNumberOfPlace = removeNumberOfPlace ? null : $formValues.querySelector('.setNumberOfPlace')?.value;
  var addNumberOfPlace = $formValues.querySelector('.addNumberOfPlace')?.value;
  if(removeNumberOfPlace || setNumberOfPlace != null && setNumberOfPlace !== '')
    vals['setNumberOfPlace'] = setNumberOfPlace;
  if(addNumberOfPlace != null && addNumberOfPlace !== '')
    vals['addNumberOfPlace'] = addNumberOfPlace;
  var removeNumberOfPlace = $formValues.querySelector('.removeNumberOfPlace')?.value;
  if(removeNumberOfPlace != null && removeNumberOfPlace !== '')
    vals['removeNumberOfPlace'] = removeNumberOfPlace;

  var valueOpeningHours = $formValues.querySelector('.valueOpeningHours')?.value;
  var removeOpeningHours = $formValues.querySelector('.removeOpeningHours')?.value === 'true';
  var setOpeningHours = removeOpeningHours ? null : $formValues.querySelector('.setOpeningHours')?.value;
  var addOpeningHours = $formValues.querySelector('.addOpeningHours')?.value;
  if(removeOpeningHours || setOpeningHours != null && setOpeningHours !== '')
    vals['setOpeningHours'] = setOpeningHours;
  if(addOpeningHours != null && addOpeningHours !== '')
    vals['addOpeningHours'] = addOpeningHours;
  var removeOpeningHours = $formValues.querySelector('.removeOpeningHours')?.value;
  if(removeOpeningHours != null && removeOpeningHours !== '')
    vals['removeOpeningHours'] = removeOpeningHours;

  var valueOpeningHoursSpecification = $formValues.querySelector('.valueOpeningHoursSpecification')?.value;
  var removeOpeningHoursSpecification = $formValues.querySelector('.removeOpeningHoursSpecification')?.value === 'true';
  var setOpeningHoursSpecification = removeOpeningHoursSpecification ? null : $formValues.querySelector('.setOpeningHoursSpecification')?.value;
  var addOpeningHoursSpecification = $formValues.querySelector('.addOpeningHoursSpecification')?.value;
  if(removeOpeningHoursSpecification || setOpeningHoursSpecification != null && setOpeningHoursSpecification !== '')
    vals['setOpeningHoursSpecification'] = JSON.parse(setOpeningHoursSpecification);
  if(addOpeningHoursSpecification != null && addOpeningHoursSpecification !== '')
    vals['addOpeningHoursSpecification'] = addOpeningHoursSpecification;
  var removeOpeningHoursSpecification = $formValues.querySelector('.removeOpeningHoursSpecification')?.value;
  if(removeOpeningHoursSpecification != null && removeOpeningHoursSpecification !== '')
    vals['removeOpeningHoursSpecification'] = removeOpeningHoursSpecification;

  var valueOwner = $formValues.querySelector('.valueOwner')?.value;
  var removeOwner = $formValues.querySelector('.removeOwner')?.value === 'true';
  var setOwner = removeOwner ? null : $formValues.querySelector('.setOwner')?.value;
  var addOwner = $formValues.querySelector('.addOwner')?.value;
  if(removeOwner || setOwner != null && setOwner !== '')
    vals['setOwner'] = JSON.parse(setOwner);
  if(addOwner != null && addOwner !== '')
    vals['addOwner'] = addOwner;
  var removeOwner = $formValues.querySelector('.removeOwner')?.value;
  if(removeOwner != null && removeOwner !== '')
    vals['removeOwner'] = removeOwner;

  var valuePaymentAccepted = $formValues.querySelector('.valuePaymentAccepted')?.value;
  var removePaymentAccepted = $formValues.querySelector('.removePaymentAccepted')?.value === 'true';
  var setPaymentAccepted = removePaymentAccepted ? null : $formValues.querySelector('.setPaymentAccepted')?.value;
  var addPaymentAccepted = $formValues.querySelector('.addPaymentAccepted')?.value;
  if(removePaymentAccepted || setPaymentAccepted != null && setPaymentAccepted !== '')
    vals['setPaymentAccepted'] = JSON.parse(setPaymentAccepted);
  if(addPaymentAccepted != null && addPaymentAccepted !== '')
    vals['addPaymentAccepted'] = addPaymentAccepted;
  var removePaymentAccepted = $formValues.querySelector('.removePaymentAccepted')?.value;
  if(removePaymentAccepted != null && removePaymentAccepted !== '')
    vals['removePaymentAccepted'] = removePaymentAccepted;

  var valuePortServicesProvided = $formValues.querySelector('.valuePortServicesProvided')?.value;
  var removePortServicesProvided = $formValues.querySelector('.removePortServicesProvided')?.value === 'true';
  var setPortServicesProvided = removePortServicesProvided ? null : $formValues.querySelector('.setPortServicesProvided')?.value;
  var addPortServicesProvided = $formValues.querySelector('.addPortServicesProvided')?.value;
  if(removePortServicesProvided || setPortServicesProvided != null && setPortServicesProvided !== '')
    vals['setPortServicesProvided'] = JSON.parse(setPortServicesProvided);
  if(addPortServicesProvided != null && addPortServicesProvided !== '')
    vals['addPortServicesProvided'] = addPortServicesProvided;
  var removePortServicesProvided = $formValues.querySelector('.removePortServicesProvided')?.value;
  if(removePortServicesProvided != null && removePortServicesProvided !== '')
    vals['removePortServicesProvided'] = removePortServicesProvided;

  var valueRefBoatAuthorized = $formValues.querySelector('.valueRefBoatAuthorized')?.value;
  var removeRefBoatAuthorized = $formValues.querySelector('.removeRefBoatAuthorized')?.value === 'true';
  var setRefBoatAuthorized = removeRefBoatAuthorized ? null : $formValues.querySelector('.setRefBoatAuthorized')?.value;
  var addRefBoatAuthorized = $formValues.querySelector('.addRefBoatAuthorized')?.value;
  if(removeRefBoatAuthorized || setRefBoatAuthorized != null && setRefBoatAuthorized !== '')
    vals['setRefBoatAuthorized'] = JSON.parse(setRefBoatAuthorized);
  if(addRefBoatAuthorized != null && addRefBoatAuthorized !== '')
    vals['addRefBoatAuthorized'] = addRefBoatAuthorized;
  var removeRefBoatAuthorized = $formValues.querySelector('.removeRefBoatAuthorized')?.value;
  if(removeRefBoatAuthorized != null && removeRefBoatAuthorized !== '')
    vals['removeRefBoatAuthorized'] = removeRefBoatAuthorized;

  var valueRefBoatPlaceAvailable = $formValues.querySelector('.valueRefBoatPlaceAvailable')?.value;
  var removeRefBoatPlaceAvailable = $formValues.querySelector('.removeRefBoatPlaceAvailable')?.value === 'true';
  var setRefBoatPlaceAvailable = removeRefBoatPlaceAvailable ? null : $formValues.querySelector('.setRefBoatPlaceAvailable')?.value;
  var addRefBoatPlaceAvailable = $formValues.querySelector('.addRefBoatPlaceAvailable')?.value;
  if(removeRefBoatPlaceAvailable || setRefBoatPlaceAvailable != null && setRefBoatPlaceAvailable !== '')
    vals['setRefBoatPlaceAvailable'] = JSON.parse(setRefBoatPlaceAvailable);
  if(addRefBoatPlaceAvailable != null && addRefBoatPlaceAvailable !== '')
    vals['addRefBoatPlaceAvailable'] = addRefBoatPlaceAvailable;
  var removeRefBoatPlaceAvailable = $formValues.querySelector('.removeRefBoatPlaceAvailable')?.value;
  if(removeRefBoatPlaceAvailable != null && removeRefBoatPlaceAvailable !== '')
    vals['removeRefBoatPlaceAvailable'] = removeRefBoatPlaceAvailable;

  var valueRefBoatPlacePricing = $formValues.querySelector('.valueRefBoatPlacePricing')?.value;
  var removeRefBoatPlacePricing = $formValues.querySelector('.removeRefBoatPlacePricing')?.value === 'true';
  var setRefBoatPlacePricing = removeRefBoatPlacePricing ? null : $formValues.querySelector('.setRefBoatPlacePricing')?.value;
  var addRefBoatPlacePricing = $formValues.querySelector('.addRefBoatPlacePricing')?.value;
  if(removeRefBoatPlacePricing || setRefBoatPlacePricing != null && setRefBoatPlacePricing !== '')
    vals['setRefBoatPlacePricing'] = JSON.parse(setRefBoatPlacePricing);
  if(addRefBoatPlacePricing != null && addRefBoatPlacePricing !== '')
    vals['addRefBoatPlacePricing'] = addRefBoatPlacePricing;
  var removeRefBoatPlacePricing = $formValues.querySelector('.removeRefBoatPlacePricing')?.value;
  if(removeRefBoatPlacePricing != null && removeRefBoatPlacePricing !== '')
    vals['removeRefBoatPlacePricing'] = removeRefBoatPlacePricing;

  var valueRefDevice = $formValues.querySelector('.valueRefDevice')?.value;
  var removeRefDevice = $formValues.querySelector('.removeRefDevice')?.value === 'true';
  var setRefDevice = removeRefDevice ? null : $formValues.querySelector('.setRefDevice')?.value;
  var addRefDevice = $formValues.querySelector('.addRefDevice')?.value;
  if(removeRefDevice || setRefDevice != null && setRefDevice !== '')
    vals['setRefDevice'] = setRefDevice;
  if(addRefDevice != null && addRefDevice !== '')
    vals['addRefDevice'] = addRefDevice;
  var removeRefDevice = $formValues.querySelector('.removeRefDevice')?.value;
  if(removeRefDevice != null && removeRefDevice !== '')
    vals['removeRefDevice'] = removeRefDevice;

  var valueRefPointOfInterest = $formValues.querySelector('.valueRefPointOfInterest')?.value;
  var removeRefPointOfInterest = $formValues.querySelector('.removeRefPointOfInterest')?.value === 'true';
  var setRefPointOfInterest = removeRefPointOfInterest ? null : $formValues.querySelector('.setRefPointOfInterest')?.value;
  var addRefPointOfInterest = $formValues.querySelector('.addRefPointOfInterest')?.value;
  if(removeRefPointOfInterest || setRefPointOfInterest != null && setRefPointOfInterest !== '')
    vals['setRefPointOfInterest'] = setRefPointOfInterest;
  if(addRefPointOfInterest != null && addRefPointOfInterest !== '')
    vals['addRefPointOfInterest'] = addRefPointOfInterest;
  var removeRefPointOfInterest = $formValues.querySelector('.removeRefPointOfInterest')?.value;
  if(removeRefPointOfInterest != null && removeRefPointOfInterest !== '')
    vals['removeRefPointOfInterest'] = removeRefPointOfInterest;

  var valueRentalSaleServices = $formValues.querySelector('.valueRentalSaleServices')?.value;
  var removeRentalSaleServices = $formValues.querySelector('.removeRentalSaleServices')?.value === 'true';
  var setRentalSaleServices = removeRentalSaleServices ? null : $formValues.querySelector('.setRentalSaleServices')?.value;
  var addRentalSaleServices = $formValues.querySelector('.addRentalSaleServices')?.value;
  if(removeRentalSaleServices || setRentalSaleServices != null && setRentalSaleServices !== '')
    vals['setRentalSaleServices'] = JSON.parse(setRentalSaleServices);
  if(addRentalSaleServices != null && addRentalSaleServices !== '')
    vals['addRentalSaleServices'] = addRentalSaleServices;
  var removeRentalSaleServices = $formValues.querySelector('.removeRentalSaleServices')?.value;
  if(removeRentalSaleServices != null && removeRentalSaleServices !== '')
    vals['removeRentalSaleServices'] = removeRentalSaleServices;

  var valueRouteType = $formValues.querySelector('.valueRouteType')?.value;
  var removeRouteType = $formValues.querySelector('.removeRouteType')?.value === 'true';
  var setRouteType = removeRouteType ? null : $formValues.querySelector('.setRouteType')?.value;
  var addRouteType = $formValues.querySelector('.addRouteType')?.value;
  if(removeRouteType || setRouteType != null && setRouteType !== '')
    vals['setRouteType'] = JSON.parse(setRouteType);
  if(addRouteType != null && addRouteType !== '')
    vals['addRouteType'] = addRouteType;
  var removeRouteType = $formValues.querySelector('.removeRouteType')?.value;
  if(removeRouteType != null && removeRouteType !== '')
    vals['removeRouteType'] = removeRouteType;

  var valueSeeAlso = $formValues.querySelector('.valueSeeAlso')?.value;
  var removeSeeAlso = $formValues.querySelector('.removeSeeAlso')?.value === 'true';
  var setSeeAlso = removeSeeAlso ? null : $formValues.querySelector('.setSeeAlso')?.value;
  var addSeeAlso = $formValues.querySelector('.addSeeAlso')?.value;
  if(removeSeeAlso || setSeeAlso != null && setSeeAlso !== '')
    vals['setSeeAlso'] = setSeeAlso;
  if(addSeeAlso != null && addSeeAlso !== '')
    vals['addSeeAlso'] = addSeeAlso;
  var removeSeeAlso = $formValues.querySelector('.removeSeeAlso')?.value;
  if(removeSeeAlso != null && removeSeeAlso !== '')
    vals['removeSeeAlso'] = removeSeeAlso;

  var valueSource = $formValues.querySelector('.valueSource')?.value;
  var removeSource = $formValues.querySelector('.removeSource')?.value === 'true';
  var setSource = removeSource ? null : $formValues.querySelector('.setSource')?.value;
  var addSource = $formValues.querySelector('.addSource')?.value;
  if(removeSource || setSource != null && setSource !== '')
    vals['setSource'] = setSource;
  if(addSource != null && addSource !== '')
    vals['addSource'] = addSource;
  var removeSource = $formValues.querySelector('.removeSource')?.value;
  if(removeSource != null && removeSource !== '')
    vals['removeSource'] = removeSource;

  var valueStartDate = $formValues.querySelector('.valueStartDate')?.value;
  var removeStartDate = $formValues.querySelector('.removeStartDate')?.value === 'true';
  var setStartDate = removeStartDate ? null : $formValues.querySelector('.setStartDate')?.value;
  var addStartDate = $formValues.querySelector('.addStartDate')?.value;
  if(removeStartDate || setStartDate != null && setStartDate !== '')
    vals['setStartDate'] = setStartDate;
  if(addStartDate != null && addStartDate !== '')
    vals['addStartDate'] = addStartDate;
  var removeStartDate = $formValues.querySelector('.removeStartDate')?.value;
  if(removeStartDate != null && removeStartDate !== '')
    vals['removeStartDate'] = removeStartDate;

  var valueTransportServices = $formValues.querySelector('.valueTransportServices')?.value;
  var removeTransportServices = $formValues.querySelector('.removeTransportServices')?.value === 'true';
  var setTransportServices = removeTransportServices ? null : $formValues.querySelector('.setTransportServices')?.value;
  var addTransportServices = $formValues.querySelector('.addTransportServices')?.value;
  if(removeTransportServices || setTransportServices != null && setTransportServices !== '')
    vals['setTransportServices'] = JSON.parse(setTransportServices);
  if(addTransportServices != null && addTransportServices !== '')
    vals['addTransportServices'] = addTransportServices;
  var removeTransportServices = $formValues.querySelector('.removeTransportServices')?.value;
  if(removeTransportServices != null && removeTransportServices !== '')
    vals['removeTransportServices'] = removeTransportServices;

  var valueTypeOfPort = $formValues.querySelector('.valueTypeOfPort')?.value;
  var removeTypeOfPort = $formValues.querySelector('.removeTypeOfPort')?.value === 'true';
  var setTypeOfPort = removeTypeOfPort ? null : $formValues.querySelector('.setTypeOfPort')?.value;
  var addTypeOfPort = $formValues.querySelector('.addTypeOfPort')?.value;
  if(removeTypeOfPort || setTypeOfPort != null && setTypeOfPort !== '')
    vals['setTypeOfPort'] = JSON.parse(setTypeOfPort);
  if(addTypeOfPort != null && addTypeOfPort !== '')
    vals['addTypeOfPort'] = addTypeOfPort;
  var removeTypeOfPort = $formValues.querySelector('.removeTypeOfPort')?.value;
  if(removeTypeOfPort != null && removeTypeOfPort !== '')
    vals['removeTypeOfPort'] = removeTypeOfPort;

  var valueWebSite = $formValues.querySelector('.valueWebSite')?.value;
  var removeWebSite = $formValues.querySelector('.removeWebSite')?.value === 'true';
  var setWebSite = removeWebSite ? null : $formValues.querySelector('.setWebSite')?.value;
  var addWebSite = $formValues.querySelector('.addWebSite')?.value;
  if(removeWebSite || setWebSite != null && setWebSite !== '')
    vals['setWebSite'] = setWebSite;
  if(addWebSite != null && addWebSite !== '')
    vals['addWebSite'] = addWebSite;
  var removeWebSite = $formValues.querySelector('.removeWebSite')?.value;
  if(removeWebSite != null && removeWebSite !== '')
    vals['removeWebSite'] = removeWebSite;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value === 'true';
  var setSessionId = removeSessionId ? null : $formValues.querySelector('.setSessionId')?.value;
  var addSessionId = $formValues.querySelector('.addSessionId')?.value;
  if(removeSessionId || setSessionId != null && setSessionId !== '')
    vals['setSessionId'] = setSessionId;
  if(addSessionId != null && addSessionId !== '')
    vals['addSessionId'] = addSessionId;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value;
  if(removeSessionId != null && removeSessionId !== '')
    vals['removeSessionId'] = removeSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value === 'true';
  var setUserKey = removeUserKey ? null : $formValues.querySelector('.setUserKey')?.value;
  var addUserKey = $formValues.querySelector('.addUserKey')?.value;
  if(removeUserKey || setUserKey != null && setUserKey !== '')
    vals['setUserKey'] = setUserKey;
  if(addUserKey != null && addUserKey !== '')
    vals['addUserKey'] = addUserKey;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value;
  if(removeUserKey != null && removeUserKey !== '')
    vals['removeUserKey'] = removeUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value === 'true';
  var setObjectTitle = removeObjectTitle ? null : $formValues.querySelector('.setObjectTitle')?.value;
  var addObjectTitle = $formValues.querySelector('.addObjectTitle')?.value;
  if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
    vals['setObjectTitle'] = setObjectTitle;
  if(addObjectTitle != null && addObjectTitle !== '')
    vals['addObjectTitle'] = addObjectTitle;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value;
  if(removeObjectTitle != null && removeObjectTitle !== '')
    vals['removeObjectTitle'] = removeObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value === 'true';
  var setDisplayPage = removeDisplayPage ? null : $formValues.querySelector('.setDisplayPage')?.value;
  var addDisplayPage = $formValues.querySelector('.addDisplayPage')?.value;
  if(removeDisplayPage || setDisplayPage != null && setDisplayPage !== '')
    vals['setDisplayPage'] = setDisplayPage;
  if(addDisplayPage != null && addDisplayPage !== '')
    vals['addDisplayPage'] = addDisplayPage;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value;
  if(removeDisplayPage != null && removeDisplayPage !== '')
    vals['removeDisplayPage'] = removeDisplayPage;

  var valueDisplayPageFrFR = $formValues.querySelector('.valueDisplayPageFrFR')?.value;
  var removeDisplayPageFrFR = $formValues.querySelector('.removeDisplayPageFrFR')?.value === 'true';
  var setDisplayPageFrFR = removeDisplayPageFrFR ? null : $formValues.querySelector('.setDisplayPageFrFR')?.value;
  var addDisplayPageFrFR = $formValues.querySelector('.addDisplayPageFrFR')?.value;
  if(removeDisplayPageFrFR || setDisplayPageFrFR != null && setDisplayPageFrFR !== '')
    vals['setDisplayPageFrFR'] = setDisplayPageFrFR;
  if(addDisplayPageFrFR != null && addDisplayPageFrFR !== '')
    vals['addDisplayPageFrFR'] = addDisplayPageFrFR;
  var removeDisplayPageFrFR = $formValues.querySelector('.removeDisplayPageFrFR')?.value;
  if(removeDisplayPageFrFR != null && removeDisplayPageFrFR !== '')
    vals['removeDisplayPageFrFR'] = removeDisplayPageFrFR;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value === 'true';
  var setEditPage = removeEditPage ? null : $formValues.querySelector('.setEditPage')?.value;
  var addEditPage = $formValues.querySelector('.addEditPage')?.value;
  if(removeEditPage || setEditPage != null && setEditPage !== '')
    vals['setEditPage'] = setEditPage;
  if(addEditPage != null && addEditPage !== '')
    vals['addEditPage'] = addEditPage;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value;
  if(removeEditPage != null && removeEditPage !== '')
    vals['removeEditPage'] = removeEditPage;

  var valueEditPageFrFR = $formValues.querySelector('.valueEditPageFrFR')?.value;
  var removeEditPageFrFR = $formValues.querySelector('.removeEditPageFrFR')?.value === 'true';
  var setEditPageFrFR = removeEditPageFrFR ? null : $formValues.querySelector('.setEditPageFrFR')?.value;
  var addEditPageFrFR = $formValues.querySelector('.addEditPageFrFR')?.value;
  if(removeEditPageFrFR || setEditPageFrFR != null && setEditPageFrFR !== '')
    vals['setEditPageFrFR'] = setEditPageFrFR;
  if(addEditPageFrFR != null && addEditPageFrFR !== '')
    vals['addEditPageFrFR'] = addEditPageFrFR;
  var removeEditPageFrFR = $formValues.querySelector('.removeEditPageFrFR')?.value;
  if(removeEditPageFrFR != null && removeEditPageFrFR !== '')
    vals['removeEditPageFrFR'] = removeEditPageFrFR;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value === 'true';
  var setUserPage = removeUserPage ? null : $formValues.querySelector('.setUserPage')?.value;
  var addUserPage = $formValues.querySelector('.addUserPage')?.value;
  if(removeUserPage || setUserPage != null && setUserPage !== '')
    vals['setUserPage'] = setUserPage;
  if(addUserPage != null && addUserPage !== '')
    vals['addUserPage'] = addUserPage;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value;
  if(removeUserPage != null && removeUserPage !== '')
    vals['removeUserPage'] = removeUserPage;

  var valueUserPageFrFR = $formValues.querySelector('.valueUserPageFrFR')?.value;
  var removeUserPageFrFR = $formValues.querySelector('.removeUserPageFrFR')?.value === 'true';
  var setUserPageFrFR = removeUserPageFrFR ? null : $formValues.querySelector('.setUserPageFrFR')?.value;
  var addUserPageFrFR = $formValues.querySelector('.addUserPageFrFR')?.value;
  if(removeUserPageFrFR || setUserPageFrFR != null && setUserPageFrFR !== '')
    vals['setUserPageFrFR'] = setUserPageFrFR;
  if(addUserPageFrFR != null && addUserPageFrFR !== '')
    vals['addUserPageFrFR'] = addUserPageFrFR;
  var removeUserPageFrFR = $formValues.querySelector('.removeUserPageFrFR')?.value;
  if(removeUserPageFrFR != null && removeUserPageFrFR !== '')
    vals['removeUserPageFrFR'] = removeUserPageFrFR;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value === 'true';
  var setDownload = removeDownload ? null : $formValues.querySelector('.setDownload')?.value;
  var addDownload = $formValues.querySelector('.addDownload')?.value;
  if(removeDownload || setDownload != null && setDownload !== '')
    vals['setDownload'] = setDownload;
  if(addDownload != null && addDownload !== '')
    vals['addDownload'] = addDownload;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value;
  if(removeDownload != null && removeDownload !== '')
    vals['removeDownload'] = removeDownload;

  var valueDownloadFrFR = $formValues.querySelector('.valueDownloadFrFR')?.value;
  var removeDownloadFrFR = $formValues.querySelector('.removeDownloadFrFR')?.value === 'true';
  var setDownloadFrFR = removeDownloadFrFR ? null : $formValues.querySelector('.setDownloadFrFR')?.value;
  var addDownloadFrFR = $formValues.querySelector('.addDownloadFrFR')?.value;
  if(removeDownloadFrFR || setDownloadFrFR != null && setDownloadFrFR !== '')
    vals['setDownloadFrFR'] = setDownloadFrFR;
  if(addDownloadFrFR != null && addDownloadFrFR !== '')
    vals['addDownloadFrFR'] = addDownloadFrFR;
  var removeDownloadFrFR = $formValues.querySelector('.removeDownloadFrFR')?.value;
  if(removeDownloadFrFR != null && removeDownloadFrFR !== '')
    vals['removeDownloadFrFR'] = removeDownloadFrFR;

  var valueEntityShortId = $formValues.querySelector('.valueEntityShortId')?.value;
  var removeEntityShortId = $formValues.querySelector('.removeEntityShortId')?.value === 'true';
  var setEntityShortId = removeEntityShortId ? null : $formValues.querySelector('.setEntityShortId')?.value;
  var addEntityShortId = $formValues.querySelector('.addEntityShortId')?.value;
  if(removeEntityShortId || setEntityShortId != null && setEntityShortId !== '')
    vals['setEntityShortId'] = setEntityShortId;
  if(addEntityShortId != null && addEntityShortId !== '')
    vals['addEntityShortId'] = addEntityShortId;
  var removeEntityShortId = $formValues.querySelector('.removeEntityShortId')?.value;
  if(removeEntityShortId != null && removeEntityShortId !== '')
    vals['removeEntityShortId'] = removeEntityShortId;

  patchSeaportFacilityVals(entityShortId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'entityShortId:' + entityShortId}], vals, target, success, error);
}

function patchSeaportFacilityFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterColor = $formFilters.querySelector('.valueColor')?.value;
    if(filterColor != null && filterColor !== '')
      filters.push({ name: 'fq', value: 'color:' + filterColor });

    var filterId = $formFilters.querySelector('.valueId')?.value;
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterNgsildTenant = $formFilters.querySelector('.valueNgsildTenant')?.value;
    if(filterNgsildTenant != null && filterNgsildTenant !== '')
      filters.push({ name: 'fq', value: 'ngsildTenant:' + filterNgsildTenant });

    var filterNgsildPath = $formFilters.querySelector('.valueNgsildPath')?.value;
    if(filterNgsildPath != null && filterNgsildPath !== '')
      filters.push({ name: 'fq', value: 'ngsildPath:' + filterNgsildPath });

    var filterNgsildContext = $formFilters.querySelector('.valueNgsildContext')?.value;
    if(filterNgsildContext != null && filterNgsildContext !== '')
      filters.push({ name: 'fq', value: 'ngsildContext:' + filterNgsildContext });

    var filterNgsildData = $formFilters.querySelector('.valueNgsildData')?.value;
    if(filterNgsildData != null && filterNgsildData !== '')
      filters.push({ name: 'fq', value: 'ngsildData:' + filterNgsildData });

    var filterAddress = $formFilters.querySelector('.valueAddress')?.value;
    if(filterAddress != null && filterAddress !== '')
      filters.push({ name: 'fq', value: 'address:' + filterAddress });

    var filterAlternateName = $formFilters.querySelector('.valueAlternateName')?.value;
    if(filterAlternateName != null && filterAlternateName !== '')
      filters.push({ name: 'fq', value: 'alternateName:' + filterAlternateName });

    var filterAuthorizedPropulsion = $formFilters.querySelector('.valueAuthorizedPropulsion')?.value;
    if(filterAuthorizedPropulsion != null && filterAuthorizedPropulsion !== '')
      filters.push({ name: 'fq', value: 'authorizedPropulsion:' + filterAuthorizedPropulsion });

    var filterBoatSupplyingServices = $formFilters.querySelector('.valueBoatSupplyingServices')?.value;
    if(filterBoatSupplyingServices != null && filterBoatSupplyingServices !== '')
      filters.push({ name: 'fq', value: 'boatSupplyingServices:' + filterBoatSupplyingServices });

    var filterContactPoint = $formFilters.querySelector('.valueContactPoint')?.value;
    if(filterContactPoint != null && filterContactPoint !== '')
      filters.push({ name: 'fq', value: 'contactPoint:' + filterContactPoint });

    var filterContractingAuthority = $formFilters.querySelector('.valueContractingAuthority')?.value;
    if(filterContractingAuthority != null && filterContractingAuthority !== '')
      filters.push({ name: 'fq', value: 'contractingAuthority:' + filterContractingAuthority });

    var filterContractingCompany = $formFilters.querySelector('.valueContractingCompany')?.value;
    if(filterContractingCompany != null && filterContractingCompany !== '')
      filters.push({ name: 'fq', value: 'contractingCompany:' + filterContractingCompany });

    var filterCurrencyAccepted = $formFilters.querySelector('.valueCurrencyAccepted')?.value;
    if(filterCurrencyAccepted != null && filterCurrencyAccepted !== '')
      filters.push({ name: 'fq', value: 'currencyAccepted:' + filterCurrencyAccepted });

    var filterDataProvider = $formFilters.querySelector('.valueDataProvider')?.value;
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.querySelector('.valueDateCreated')?.value;
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateLastReported = $formFilters.querySelector('.valueDateLastReported')?.value;
    if(filterDateLastReported != null && filterDateLastReported !== '')
      filters.push({ name: 'fq', value: 'dateLastReported:' + filterDateLastReported });

    var filterDateModified = $formFilters.querySelector('.valueDateModified')?.value;
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterElectricTransport = $formFilters.querySelector('.valueElectricTransport')?.value;
    if(filterElectricTransport != null && filterElectricTransport !== '')
      filters.push({ name: 'fq', value: 'electricTransport:' + filterElectricTransport });

    var filterEndDate = $formFilters.querySelector('.valueEndDate')?.value;
    if(filterEndDate != null && filterEndDate !== '')
      filters.push({ name: 'fq', value: 'endDate:' + filterEndDate });

    var filterFacilities = $formFilters.querySelector('.valueFacilities')?.value;
    if(filterFacilities != null && filterFacilities !== '')
      filters.push({ name: 'fq', value: 'facilities:' + filterFacilities });

    var filterMaxDraft = $formFilters.querySelector('.valueMaxDraft')?.value;
    if(filterMaxDraft != null && filterMaxDraft !== '')
      filters.push({ name: 'fq', value: 'maxDraft:' + filterMaxDraft });

    var filterMaxLength = $formFilters.querySelector('.valueMaxLength')?.value;
    if(filterMaxLength != null && filterMaxLength !== '')
      filters.push({ name: 'fq', value: 'maxLength:' + filterMaxLength });

    var filterMaxTonnage = $formFilters.querySelector('.valueMaxTonnage')?.value;
    if(filterMaxTonnage != null && filterMaxTonnage !== '')
      filters.push({ name: 'fq', value: 'maxTonnage:' + filterMaxTonnage });

    var filterMaxWidth = $formFilters.querySelector('.valueMaxWidth')?.value;
    if(filterMaxWidth != null && filterMaxWidth !== '')
      filters.push({ name: 'fq', value: 'maxWidth:' + filterMaxWidth });

    var filterMinLength = $formFilters.querySelector('.valueMinLength')?.value;
    if(filterMinLength != null && filterMinLength !== '')
      filters.push({ name: 'fq', value: 'minLength:' + filterMinLength });

    var filterNearbyServices = $formFilters.querySelector('.valueNearbyServices')?.value;
    if(filterNearbyServices != null && filterNearbyServices !== '')
      filters.push({ name: 'fq', value: 'nearbyServices:' + filterNearbyServices });

    var filterNumberOfPlace = $formFilters.querySelector('.valueNumberOfPlace')?.value;
    if(filterNumberOfPlace != null && filterNumberOfPlace !== '')
      filters.push({ name: 'fq', value: 'numberOfPlace:' + filterNumberOfPlace });

    var filterOpeningHours = $formFilters.querySelector('.valueOpeningHours')?.value;
    if(filterOpeningHours != null && filterOpeningHours !== '')
      filters.push({ name: 'fq', value: 'openingHours:' + filterOpeningHours });

    var filterOpeningHoursSpecification = $formFilters.querySelector('.valueOpeningHoursSpecification')?.value;
    if(filterOpeningHoursSpecification != null && filterOpeningHoursSpecification !== '')
      filters.push({ name: 'fq', value: 'openingHoursSpecification:' + filterOpeningHoursSpecification });

    var filterOwner = $formFilters.querySelector('.valueOwner')?.value;
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterPaymentAccepted = $formFilters.querySelector('.valuePaymentAccepted')?.value;
    if(filterPaymentAccepted != null && filterPaymentAccepted !== '')
      filters.push({ name: 'fq', value: 'paymentAccepted:' + filterPaymentAccepted });

    var filterPortServicesProvided = $formFilters.querySelector('.valuePortServicesProvided')?.value;
    if(filterPortServicesProvided != null && filterPortServicesProvided !== '')
      filters.push({ name: 'fq', value: 'portServicesProvided:' + filterPortServicesProvided });

    var filterRefBoatAuthorized = $formFilters.querySelector('.valueRefBoatAuthorized')?.value;
    if(filterRefBoatAuthorized != null && filterRefBoatAuthorized !== '')
      filters.push({ name: 'fq', value: 'refBoatAuthorized:' + filterRefBoatAuthorized });

    var filterRefBoatPlaceAvailable = $formFilters.querySelector('.valueRefBoatPlaceAvailable')?.value;
    if(filterRefBoatPlaceAvailable != null && filterRefBoatPlaceAvailable !== '')
      filters.push({ name: 'fq', value: 'refBoatPlaceAvailable:' + filterRefBoatPlaceAvailable });

    var filterRefBoatPlacePricing = $formFilters.querySelector('.valueRefBoatPlacePricing')?.value;
    if(filterRefBoatPlacePricing != null && filterRefBoatPlacePricing !== '')
      filters.push({ name: 'fq', value: 'refBoatPlacePricing:' + filterRefBoatPlacePricing });

    var filterRefDevice = $formFilters.querySelector('.valueRefDevice')?.value;
    if(filterRefDevice != null && filterRefDevice !== '')
      filters.push({ name: 'fq', value: 'refDevice:' + filterRefDevice });

    var filterRefPointOfInterest = $formFilters.querySelector('.valueRefPointOfInterest')?.value;
    if(filterRefPointOfInterest != null && filterRefPointOfInterest !== '')
      filters.push({ name: 'fq', value: 'refPointOfInterest:' + filterRefPointOfInterest });

    var filterRentalSaleServices = $formFilters.querySelector('.valueRentalSaleServices')?.value;
    if(filterRentalSaleServices != null && filterRentalSaleServices !== '')
      filters.push({ name: 'fq', value: 'rentalSaleServices:' + filterRentalSaleServices });

    var filterRouteType = $formFilters.querySelector('.valueRouteType')?.value;
    if(filterRouteType != null && filterRouteType !== '')
      filters.push({ name: 'fq', value: 'routeType:' + filterRouteType });

    var filterSeeAlso = $formFilters.querySelector('.valueSeeAlso')?.value;
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSource = $formFilters.querySelector('.valueSource')?.value;
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterStartDate = $formFilters.querySelector('.valueStartDate')?.value;
    if(filterStartDate != null && filterStartDate !== '')
      filters.push({ name: 'fq', value: 'startDate:' + filterStartDate });

    var filterTransportServices = $formFilters.querySelector('.valueTransportServices')?.value;
    if(filterTransportServices != null && filterTransportServices !== '')
      filters.push({ name: 'fq', value: 'transportServices:' + filterTransportServices });

    var filterTypeOfPort = $formFilters.querySelector('.valueTypeOfPort')?.value;
    if(filterTypeOfPort != null && filterTypeOfPort !== '')
      filters.push({ name: 'fq', value: 'typeOfPort:' + filterTypeOfPort });

    var filterWebSite = $formFilters.querySelector('.valueWebSite')?.value;
    if(filterWebSite != null && filterWebSite !== '')
      filters.push({ name: 'fq', value: 'webSite:' + filterWebSite });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterDisplayPageFrFR = $formFilters.querySelector('.valueDisplayPageFrFR')?.value;
    if(filterDisplayPageFrFR != null && filterDisplayPageFrFR !== '')
      filters.push({ name: 'fq', value: 'displayPageFrFR:' + filterDisplayPageFrFR });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterEditPageFrFR = $formFilters.querySelector('.valueEditPageFrFR')?.value;
    if(filterEditPageFrFR != null && filterEditPageFrFR !== '')
      filters.push({ name: 'fq', value: 'editPageFrFR:' + filterEditPageFrFR });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterUserPageFrFR = $formFilters.querySelector('.valueUserPageFrFR')?.value;
    if(filterUserPageFrFR != null && filterUserPageFrFR !== '')
      filters.push({ name: 'fq', value: 'userPageFrFR:' + filterUserPageFrFR });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterDownloadFrFR = $formFilters.querySelector('.valueDownloadFrFR')?.value;
    if(filterDownloadFrFR != null && filterDownloadFrFR !== '')
      filters.push({ name: 'fq', value: 'downloadFrFR:' + filterDownloadFrFR });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterEntityShortId = $formFilters.querySelector('.valueEntityShortId')?.value;
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });
  }
  return filters;
}

function patchSeaportFacilityVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchSeaportFacilityVals(filters, vals, target, success, error);
}

function patchSeaportFacilityVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/seaport-facilities?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PATCH'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// POST //

async function postSeaportFacility($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  if(valuePk != null && valuePk !== '')
    vals['pk'] = valuePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueName = $formValues.querySelector('.valueName')?.value;
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueColor = $formValues.querySelector('.valueColor')?.value;
  if(valueColor != null && valueColor !== '')
    vals['color'] = valueColor;

  var valueId = $formValues.querySelector('.valueId')?.value;
  if(valueId != null && valueId !== '')
    vals['id'] = valueId;

  var valueNgsildTenant = $formValues.querySelector('.valueNgsildTenant')?.value;
  if(valueNgsildTenant != null && valueNgsildTenant !== '')
    vals['ngsildTenant'] = valueNgsildTenant;

  var valueNgsildPath = $formValues.querySelector('.valueNgsildPath')?.value;
  if(valueNgsildPath != null && valueNgsildPath !== '')
    vals['ngsildPath'] = valueNgsildPath;

  var valueNgsildContext = $formValues.querySelector('.valueNgsildContext')?.value;
  if(valueNgsildContext != null && valueNgsildContext !== '')
    vals['ngsildContext'] = valueNgsildContext;

  var valueNgsildData = $formValues.querySelector('.valueNgsildData')?.value;
  if(valueNgsildData != null && valueNgsildData !== '')
    vals['ngsildData'] = JSON.parse(valueNgsildData);

  var valueAddress = $formValues.querySelector('.valueAddress')?.value;
  if(valueAddress != null && valueAddress !== '')
    vals['address'] = JSON.parse(valueAddress);

  var valueAlternateName = $formValues.querySelector('.valueAlternateName')?.value;
  if(valueAlternateName != null && valueAlternateName !== '')
    vals['alternateName'] = valueAlternateName;

  var valueAuthorizedPropulsion = $formValues.querySelector('.valueAuthorizedPropulsion')?.value;
  if(valueAuthorizedPropulsion != null && valueAuthorizedPropulsion !== '')
    vals['authorizedPropulsion'] = JSON.parse(valueAuthorizedPropulsion);

  var valueBoatSupplyingServices = $formValues.querySelector('.valueBoatSupplyingServices')?.value;
  if(valueBoatSupplyingServices != null && valueBoatSupplyingServices !== '')
    vals['boatSupplyingServices'] = JSON.parse(valueBoatSupplyingServices);

  var valueContactPoint = $formValues.querySelector('.valueContactPoint')?.value;
  if(valueContactPoint != null && valueContactPoint !== '')
    vals['contactPoint'] = JSON.parse(valueContactPoint);

  var valueContractingAuthority = $formValues.querySelector('.valueContractingAuthority')?.value;
  if(valueContractingAuthority != null && valueContractingAuthority !== '')
    vals['contractingAuthority'] = valueContractingAuthority;

  var valueContractingCompany = $formValues.querySelector('.valueContractingCompany')?.value;
  if(valueContractingCompany != null && valueContractingCompany !== '')
    vals['contractingCompany'] = valueContractingCompany;

  var valueCurrencyAccepted = $formValues.querySelector('.valueCurrencyAccepted')?.value;
  if(valueCurrencyAccepted != null && valueCurrencyAccepted !== '')
    vals['currencyAccepted'] = JSON.parse(valueCurrencyAccepted);

  var valueDataProvider = $formValues.querySelector('.valueDataProvider')?.value;
  if(valueDataProvider != null && valueDataProvider !== '')
    vals['dataProvider'] = valueDataProvider;

  var valueDateCreated = $formValues.querySelector('.valueDateCreated')?.value;
  if(valueDateCreated != null && valueDateCreated !== '')
    vals['dateCreated'] = valueDateCreated;

  var valueDateLastReported = $formValues.querySelector('.valueDateLastReported')?.value;
  if(valueDateLastReported != null && valueDateLastReported !== '')
    vals['dateLastReported'] = valueDateLastReported;

  var valueDateModified = $formValues.querySelector('.valueDateModified')?.value;
  if(valueDateModified != null && valueDateModified !== '')
    vals['dateModified'] = valueDateModified;

  var valueElectricTransport = $formValues.querySelector('.valueElectricTransport')?.value;
  if(valueElectricTransport != null && valueElectricTransport !== '')
    vals['electricTransport'] = JSON.parse(valueElectricTransport);

  var valueEndDate = $formValues.querySelector('.valueEndDate')?.value;
  if(valueEndDate != null && valueEndDate !== '')
    vals['endDate'] = valueEndDate;

  var valueFacilities = $formValues.querySelector('.valueFacilities')?.value;
  if(valueFacilities != null && valueFacilities !== '')
    vals['facilities'] = JSON.parse(valueFacilities);

  var valueMaxDraft = $formValues.querySelector('.valueMaxDraft')?.value;
  if(valueMaxDraft != null && valueMaxDraft !== '')
    vals['maxDraft'] = valueMaxDraft;

  var valueMaxLength = $formValues.querySelector('.valueMaxLength')?.value;
  if(valueMaxLength != null && valueMaxLength !== '')
    vals['maxLength'] = valueMaxLength;

  var valueMaxTonnage = $formValues.querySelector('.valueMaxTonnage')?.value;
  if(valueMaxTonnage != null && valueMaxTonnage !== '')
    vals['maxTonnage'] = valueMaxTonnage;

  var valueMaxWidth = $formValues.querySelector('.valueMaxWidth')?.value;
  if(valueMaxWidth != null && valueMaxWidth !== '')
    vals['maxWidth'] = valueMaxWidth;

  var valueMinLength = $formValues.querySelector('.valueMinLength')?.value;
  if(valueMinLength != null && valueMinLength !== '')
    vals['minLength'] = valueMinLength;

  var valueNearbyServices = $formValues.querySelector('.valueNearbyServices')?.value;
  if(valueNearbyServices != null && valueNearbyServices !== '')
    vals['nearbyServices'] = JSON.parse(valueNearbyServices);

  var valueNumberOfPlace = $formValues.querySelector('.valueNumberOfPlace')?.value;
  if(valueNumberOfPlace != null && valueNumberOfPlace !== '')
    vals['numberOfPlace'] = valueNumberOfPlace;

  var valueOpeningHours = $formValues.querySelector('.valueOpeningHours')?.value;
  if(valueOpeningHours != null && valueOpeningHours !== '')
    vals['openingHours'] = valueOpeningHours;

  var valueOpeningHoursSpecification = $formValues.querySelector('.valueOpeningHoursSpecification')?.value;
  if(valueOpeningHoursSpecification != null && valueOpeningHoursSpecification !== '')
    vals['openingHoursSpecification'] = JSON.parse(valueOpeningHoursSpecification);

  var valueOwner = $formValues.querySelector('.valueOwner')?.value;
  if(valueOwner != null && valueOwner !== '')
    vals['owner'] = JSON.parse(valueOwner);

  var valuePaymentAccepted = $formValues.querySelector('.valuePaymentAccepted')?.value;
  if(valuePaymentAccepted != null && valuePaymentAccepted !== '')
    vals['paymentAccepted'] = JSON.parse(valuePaymentAccepted);

  var valuePortServicesProvided = $formValues.querySelector('.valuePortServicesProvided')?.value;
  if(valuePortServicesProvided != null && valuePortServicesProvided !== '')
    vals['portServicesProvided'] = JSON.parse(valuePortServicesProvided);

  var valueRefBoatAuthorized = $formValues.querySelector('.valueRefBoatAuthorized')?.value;
  if(valueRefBoatAuthorized != null && valueRefBoatAuthorized !== '')
    vals['refBoatAuthorized'] = JSON.parse(valueRefBoatAuthorized);

  var valueRefBoatPlaceAvailable = $formValues.querySelector('.valueRefBoatPlaceAvailable')?.value;
  if(valueRefBoatPlaceAvailable != null && valueRefBoatPlaceAvailable !== '')
    vals['refBoatPlaceAvailable'] = JSON.parse(valueRefBoatPlaceAvailable);

  var valueRefBoatPlacePricing = $formValues.querySelector('.valueRefBoatPlacePricing')?.value;
  if(valueRefBoatPlacePricing != null && valueRefBoatPlacePricing !== '')
    vals['refBoatPlacePricing'] = JSON.parse(valueRefBoatPlacePricing);

  var valueRefDevice = $formValues.querySelector('.valueRefDevice')?.value;
  if(valueRefDevice != null && valueRefDevice !== '')
    vals['refDevice'] = valueRefDevice;

  var valueRefPointOfInterest = $formValues.querySelector('.valueRefPointOfInterest')?.value;
  if(valueRefPointOfInterest != null && valueRefPointOfInterest !== '')
    vals['refPointOfInterest'] = valueRefPointOfInterest;

  var valueRentalSaleServices = $formValues.querySelector('.valueRentalSaleServices')?.value;
  if(valueRentalSaleServices != null && valueRentalSaleServices !== '')
    vals['rentalSaleServices'] = JSON.parse(valueRentalSaleServices);

  var valueRouteType = $formValues.querySelector('.valueRouteType')?.value;
  if(valueRouteType != null && valueRouteType !== '')
    vals['routeType'] = JSON.parse(valueRouteType);

  var valueSeeAlso = $formValues.querySelector('.valueSeeAlso')?.value;
  if(valueSeeAlso != null && valueSeeAlso !== '')
    vals['seeAlso'] = valueSeeAlso;

  var valueSource = $formValues.querySelector('.valueSource')?.value;
  if(valueSource != null && valueSource !== '')
    vals['source'] = valueSource;

  var valueStartDate = $formValues.querySelector('.valueStartDate')?.value;
  if(valueStartDate != null && valueStartDate !== '')
    vals['startDate'] = valueStartDate;

  var valueTransportServices = $formValues.querySelector('.valueTransportServices')?.value;
  if(valueTransportServices != null && valueTransportServices !== '')
    vals['transportServices'] = JSON.parse(valueTransportServices);

  var valueTypeOfPort = $formValues.querySelector('.valueTypeOfPort')?.value;
  if(valueTypeOfPort != null && valueTypeOfPort !== '')
    vals['typeOfPort'] = JSON.parse(valueTypeOfPort);

  var valueWebSite = $formValues.querySelector('.valueWebSite')?.value;
  if(valueWebSite != null && valueWebSite !== '')
    vals['webSite'] = valueWebSite;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueDisplayPageFrFR = $formValues.querySelector('.valueDisplayPageFrFR')?.value;
  if(valueDisplayPageFrFR != null && valueDisplayPageFrFR !== '')
    vals['displayPageFrFR'] = valueDisplayPageFrFR;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  var valueEditPageFrFR = $formValues.querySelector('.valueEditPageFrFR')?.value;
  if(valueEditPageFrFR != null && valueEditPageFrFR !== '')
    vals['editPageFrFR'] = valueEditPageFrFR;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  if(valueUserPage != null && valueUserPage !== '')
    vals['userPage'] = valueUserPage;

  var valueUserPageFrFR = $formValues.querySelector('.valueUserPageFrFR')?.value;
  if(valueUserPageFrFR != null && valueUserPageFrFR !== '')
    vals['userPageFrFR'] = valueUserPageFrFR;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  if(valueDownload != null && valueDownload !== '')
    vals['download'] = valueDownload;

  var valueDownloadFrFR = $formValues.querySelector('.valueDownloadFrFR')?.value;
  if(valueDownloadFrFR != null && valueDownloadFrFR !== '')
    vals['downloadFrFR'] = valueDownloadFrFR;

  var valueEntityShortId = $formValues.querySelector('.valueEntityShortId')?.value;
  if(valueEntityShortId != null && valueEntityShortId !== '')
    vals['entityShortId'] = valueEntityShortId;

  fetch(
    '/en-us/api/seaport-facilities'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function postSeaportFacilityVals(vals, target, success, error) {
  fetch(
    '/en-us/api/seaport-facilities'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETE //

async function deleteSeaportFacility(target, entityShortId, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/seaport-facilities/' + encodeURIComponent(entityShortId)
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PUTImport //

async function putimportSeaportFacility($formValues, target, entityShortId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportSeaportFacilityVals(JSON.parse(json), target, success, error);
}

function putimportSeaportFacilityVals(json, target, success, error) {
  fetch(
    '/en-us/api/seaport-facilities-import'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PUT'
      , body: JSON.stringify(json)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETEFilter //

async function deletefilterSeaportFacility(target, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/seaport-facilities'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}
