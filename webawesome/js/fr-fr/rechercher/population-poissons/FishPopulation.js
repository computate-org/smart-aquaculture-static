
async function websocketFishPopulation(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketFishPopulation', function (error, message) {
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
      iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-fish"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify populations de poissons in ' + json.timeRemaining;
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
async function websocketFishPopulationInner(apiRequest) {
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
        var inputAreaServed = null;
        var inputScientificName = null;
        var inputId = null;
        var inputNgsildTenant = null;
        var inputNgsildPath = null;
        var inputNgsildContext = null;
        var inputNgsildData = null;
        var inputAddress = null;
        var inputAlternateName = null;
        var inputBodyMasse = null;
        var inputCulturedIn = null;
        var inputDataProvider = null;
        var inputDateCreated = null;
        var inputDateModified = null;
        var inputFishRemoved = null;
        var inputInitialNumber = null;
        var inputOwner = null;
        var inputRefSpecie = null;
        var inputRelatedSource = null;
        var inputSeeAlso = null;
        var inputSource = null;
        var inputMaturityDaysBegin = null;
        var inputMaturityDaysEnd = null;
        var inputIncubationDaysBegin = null;
        var inputIncubationDaysEnd = null;
        var inputIncubationNumberMin = null;
        var inputIncubationNumberMax = null;
        var inputPercentPopulationPregnantMin = null;
        var inputPercentPopulationPregnantMax = null;
        var inputPopulationsAtBirth = null;
        var inputPopulationsNow = null;
        var inputIncubationDate = null;
        var inputIncubationDaysNow = null;
        var inputPreviousPopulation = null;
        var inputWaterTemperature = null;
        var inputWaterSalinity = null;
        var inputWaterOxygen = null;
        var inputWaterPh = null;
        var inputSimulation = null;
        var inputSimulationDelayMillis = null;
        var inputEntityShortId = null;
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
        var inputAreaServedColors = null;
        var inputAreaServedTitles = null;

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
        if(vars.includes('areaServed'))
          inputAreaServed = $response.querySelector('.Page_areaServed');
        if(vars.includes('scientificName'))
          inputScientificName = $response.querySelector('.Page_scientificName');
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
        if(vars.includes('bodyMasse'))
          inputBodyMasse = $response.querySelector('.Page_bodyMasse');
        if(vars.includes('culturedIn'))
          inputCulturedIn = $response.querySelector('.Page_culturedIn');
        if(vars.includes('dataProvider'))
          inputDataProvider = $response.querySelector('.Page_dataProvider');
        if(vars.includes('dateCreated'))
          inputDateCreated = $response.querySelector('.Page_dateCreated');
        if(vars.includes('dateModified'))
          inputDateModified = $response.querySelector('.Page_dateModified');
        if(vars.includes('fishRemoved'))
          inputFishRemoved = $response.querySelector('.Page_fishRemoved');
        if(vars.includes('initialNumber'))
          inputInitialNumber = $response.querySelector('.Page_initialNumber');
        if(vars.includes('owner'))
          inputOwner = $response.querySelector('.Page_owner');
        if(vars.includes('refSpecie'))
          inputRefSpecie = $response.querySelector('.Page_refSpecie');
        if(vars.includes('relatedSource'))
          inputRelatedSource = $response.querySelector('.Page_relatedSource');
        if(vars.includes('seeAlso'))
          inputSeeAlso = $response.querySelector('.Page_seeAlso');
        if(vars.includes('source'))
          inputSource = $response.querySelector('.Page_source');
        if(vars.includes('maturityDaysBegin'))
          inputMaturityDaysBegin = $response.querySelector('.Page_maturityDaysBegin');
        if(vars.includes('maturityDaysEnd'))
          inputMaturityDaysEnd = $response.querySelector('.Page_maturityDaysEnd');
        if(vars.includes('incubationDaysBegin'))
          inputIncubationDaysBegin = $response.querySelector('.Page_incubationDaysBegin');
        if(vars.includes('incubationDaysEnd'))
          inputIncubationDaysEnd = $response.querySelector('.Page_incubationDaysEnd');
        if(vars.includes('incubationNumberMin'))
          inputIncubationNumberMin = $response.querySelector('.Page_incubationNumberMin');
        if(vars.includes('incubationNumberMax'))
          inputIncubationNumberMax = $response.querySelector('.Page_incubationNumberMax');
        if(vars.includes('percentPopulationPregnantMin'))
          inputPercentPopulationPregnantMin = $response.querySelector('.Page_percentPopulationPregnantMin');
        if(vars.includes('percentPopulationPregnantMax'))
          inputPercentPopulationPregnantMax = $response.querySelector('.Page_percentPopulationPregnantMax');
        if(vars.includes('populationsAtBirth'))
          inputPopulationsAtBirth = $response.querySelector('.Page_populationsAtBirth');
        if(vars.includes('populationsNow'))
          inputPopulationsNow = $response.querySelector('.Page_populationsNow');
        if(vars.includes('incubationDate'))
          inputIncubationDate = $response.querySelector('.Page_incubationDate');
        if(vars.includes('incubationDaysNow'))
          inputIncubationDaysNow = $response.querySelector('.Page_incubationDaysNow');
        if(vars.includes('previousPopulation'))
          inputPreviousPopulation = $response.querySelector('.Page_previousPopulation');
        if(vars.includes('waterTemperature'))
          inputWaterTemperature = $response.querySelector('.Page_waterTemperature');
        if(vars.includes('waterSalinity'))
          inputWaterSalinity = $response.querySelector('.Page_waterSalinity');
        if(vars.includes('waterOxygen'))
          inputWaterOxygen = $response.querySelector('.Page_waterOxygen');
        if(vars.includes('waterPh'))
          inputWaterPh = $response.querySelector('.Page_waterPh');
        if(vars.includes('simulation'))
          inputSimulation = $response.querySelector('.Page_simulation');
        if(vars.includes('simulationDelayMillis'))
          inputSimulationDelayMillis = $response.querySelector('.Page_simulationDelayMillis');
        if(vars.includes('entityShortId'))
          inputEntityShortId = $response.querySelector('.Page_entityShortId');
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
        if(vars.includes('areaServedColors'))
          inputAreaServedColors = $response.querySelector('.Page_areaServedColors');
        if(vars.includes('areaServedTitles'))
          inputAreaServedTitles = $response.querySelector('.Page_areaServedTitles');

        jsWebsocketFishPopulation(entityShortId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listFishPopulation = JSON.parse($response.querySelector('.pageForm .listFishPopulation')?.value);


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

        if(inputAreaServed) {
          document.querySelectorAll('.Page_areaServed').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAreaServed.getAttribute('value');
            else
              item.textContent = inputAreaServed.textContent;
          });
          addGlow(document.querySelector('.Page_areaServed'));
        }

        if(inputScientificName) {
          document.querySelectorAll('.Page_scientificName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputScientificName.getAttribute('value');
            else
              item.textContent = inputScientificName.textContent;
          });
          addGlow(document.querySelector('.Page_scientificName'));
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

        if(inputBodyMasse) {
          document.querySelectorAll('.Page_bodyMasse').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputBodyMasse.getAttribute('value');
            else
              item.textContent = inputBodyMasse.textContent;
          });
          addGlow(document.querySelector('.Page_bodyMasse'));
        }

        if(inputCulturedIn) {
          document.querySelectorAll('.Page_culturedIn').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCulturedIn.getAttribute('value');
            else
              item.textContent = inputCulturedIn.textContent;
          });
          addGlow(document.querySelector('.Page_culturedIn'));
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

        if(inputDateModified) {
          document.querySelectorAll('.Page_dateModified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateModified.getAttribute('value');
            else
              item.textContent = inputDateModified.textContent;
          });
          addGlow(document.querySelector('.Page_dateModified'));
        }

        if(inputFishRemoved) {
          document.querySelectorAll('.Page_fishRemoved').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputFishRemoved.getAttribute('value');
            else
              item.textContent = inputFishRemoved.textContent;
          });
          addGlow(document.querySelector('.Page_fishRemoved'));
        }

        if(inputInitialNumber) {
          document.querySelectorAll('.Page_initialNumber').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInitialNumber.getAttribute('value');
            else
              item.textContent = inputInitialNumber.textContent;
          });
          addGlow(document.querySelector('.Page_initialNumber'));
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

        if(inputRefSpecie) {
          document.querySelectorAll('.Page_refSpecie').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRefSpecie.getAttribute('value');
            else
              item.textContent = inputRefSpecie.textContent;
          });
          addGlow(document.querySelector('.Page_refSpecie'));
        }

        if(inputRelatedSource) {
          document.querySelectorAll('.Page_relatedSource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRelatedSource.getAttribute('value');
            else
              item.textContent = inputRelatedSource.textContent;
          });
          addGlow(document.querySelector('.Page_relatedSource'));
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

        if(inputMaturityDaysBegin) {
          document.querySelectorAll('.Page_maturityDaysBegin').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMaturityDaysBegin.getAttribute('value');
            else
              item.textContent = inputMaturityDaysBegin.textContent;
          });
          addGlow(document.querySelector('.Page_maturityDaysBegin'));
        }

        if(inputMaturityDaysEnd) {
          document.querySelectorAll('.Page_maturityDaysEnd').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMaturityDaysEnd.getAttribute('value');
            else
              item.textContent = inputMaturityDaysEnd.textContent;
          });
          addGlow(document.querySelector('.Page_maturityDaysEnd'));
        }

        if(inputIncubationDaysBegin) {
          document.querySelectorAll('.Page_incubationDaysBegin').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationDaysBegin.getAttribute('value');
            else
              item.textContent = inputIncubationDaysBegin.textContent;
          });
          addGlow(document.querySelector('.Page_incubationDaysBegin'));
        }

        if(inputIncubationDaysEnd) {
          document.querySelectorAll('.Page_incubationDaysEnd').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationDaysEnd.getAttribute('value');
            else
              item.textContent = inputIncubationDaysEnd.textContent;
          });
          addGlow(document.querySelector('.Page_incubationDaysEnd'));
        }

        if(inputIncubationNumberMin) {
          document.querySelectorAll('.Page_incubationNumberMin').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationNumberMin.getAttribute('value');
            else
              item.textContent = inputIncubationNumberMin.textContent;
          });
          addGlow(document.querySelector('.Page_incubationNumberMin'));
        }

        if(inputIncubationNumberMax) {
          document.querySelectorAll('.Page_incubationNumberMax').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationNumberMax.getAttribute('value');
            else
              item.textContent = inputIncubationNumberMax.textContent;
          });
          addGlow(document.querySelector('.Page_incubationNumberMax'));
        }

        if(inputPercentPopulationPregnantMin) {
          document.querySelectorAll('.Page_percentPopulationPregnantMin').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPercentPopulationPregnantMin.getAttribute('value');
            else
              item.textContent = inputPercentPopulationPregnantMin.textContent;
          });
          addGlow(document.querySelector('.Page_percentPopulationPregnantMin'));
        }

        if(inputPercentPopulationPregnantMax) {
          document.querySelectorAll('.Page_percentPopulationPregnantMax').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPercentPopulationPregnantMax.getAttribute('value');
            else
              item.textContent = inputPercentPopulationPregnantMax.textContent;
          });
          addGlow(document.querySelector('.Page_percentPopulationPregnantMax'));
        }

        if(inputPopulationsAtBirth) {
          document.querySelectorAll('.Page_populationsAtBirth').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPopulationsAtBirth.getAttribute('value');
            else
              item.textContent = inputPopulationsAtBirth.textContent;
          });
          addGlow(document.querySelector('.Page_populationsAtBirth'));
        }

        if(inputPopulationsNow) {
          document.querySelectorAll('.Page_populationsNow').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPopulationsNow.getAttribute('value');
            else
              item.textContent = inputPopulationsNow.textContent;
          });
          addGlow(document.querySelector('.Page_populationsNow'));
        }

        if(inputIncubationDate) {
          document.querySelectorAll('.Page_incubationDate').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationDate.getAttribute('value');
            else
              item.textContent = inputIncubationDate.textContent;
          });
          addGlow(document.querySelector('.Page_incubationDate'));
        }

        if(inputIncubationDaysNow) {
          document.querySelectorAll('.Page_incubationDaysNow').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationDaysNow.getAttribute('value');
            else
              item.textContent = inputIncubationDaysNow.textContent;
          });
          addGlow(document.querySelector('.Page_incubationDaysNow'));
        }

        if(inputPreviousPopulation) {
          document.querySelectorAll('.Page_previousPopulation').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPreviousPopulation.getAttribute('value');
            else
              item.textContent = inputPreviousPopulation.textContent;
          });
          addGlow(document.querySelector('.Page_previousPopulation'));
        }

        if(inputWaterTemperature) {
          document.querySelectorAll('.Page_waterTemperature').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWaterTemperature.getAttribute('value');
            else
              item.textContent = inputWaterTemperature.textContent;
          });
          addGlow(document.querySelector('.Page_waterTemperature'));
        }

        if(inputWaterSalinity) {
          document.querySelectorAll('.Page_waterSalinity').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWaterSalinity.getAttribute('value');
            else
              item.textContent = inputWaterSalinity.textContent;
          });
          addGlow(document.querySelector('.Page_waterSalinity'));
        }

        if(inputWaterOxygen) {
          document.querySelectorAll('.Page_waterOxygen').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWaterOxygen.getAttribute('value');
            else
              item.textContent = inputWaterOxygen.textContent;
          });
          addGlow(document.querySelector('.Page_waterOxygen'));
        }

        if(inputWaterPh) {
          document.querySelectorAll('.Page_waterPh').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWaterPh.getAttribute('value');
            else
              item.textContent = inputWaterPh.textContent;
          });
          addGlow(document.querySelector('.Page_waterPh'));
        }

        if(inputSimulation) {
          document.querySelectorAll('.Page_simulation').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSimulation.getAttribute('value');
            else
              item.textContent = inputSimulation.textContent;
          });
          addGlow(document.querySelector('.Page_simulation'));
        }

        if(inputSimulationDelayMillis) {
          document.querySelectorAll('.Page_simulationDelayMillis').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSimulationDelayMillis.getAttribute('value');
            else
              item.textContent = inputSimulationDelayMillis.textContent;
          });
          addGlow(document.querySelector('.Page_simulationDelayMillis'));
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

        if(inputAreaServedColors) {
          document.querySelectorAll('.Page_areaServedColors').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAreaServedColors.getAttribute('value');
            else
              item.textContent = inputAreaServedColors.textContent;
          });
          addGlow(document.querySelector('.Page_areaServedColors'));
        }

        if(inputAreaServedTitles) {
          document.querySelectorAll('.Page_areaServedTitles').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAreaServedTitles.getAttribute('value');
            else
              item.textContent = inputAreaServedTitles.textContent;
          });
          addGlow(document.querySelector('.Page_areaServedTitles'));
        }

          pageGraphFishPopulation();
      });
    });
  }
}

function pageGraphFishPopulation(apiRequest) {
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
          layout['title'] = 'populations de poissons';
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
          Plotly.react('htmBodyGraphFishPopulationPage', data, layout);
        }
      }
    }

    // Graph Location
    window.mapLayers = {};
    window.bounds = null;
    if(listFishPopulation.filter(o => o.location)) {
      window.bounds = L.latLngBounds(listFishPopulation.filter(o => o.location).map((c) => {
        return [c.location.coordinates[1], c.location.coordinates[0]];
      }));
    }
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipFishPopulation(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapFishPopulation) {
      window.geoJSONFishPopulation.clearLayers();
      window.listFishPopulation.forEach((result, index) => {
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
              , style: jsStyleFishPopulation
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleFishPopulation(feature));
              }
            });
            window.geoJSONFishPopulation.addLayer(layerGeoJson);

            var layerSvg = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleFishPopulation
              , pointToLayer: function(feature, latlng) {
                var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path class="fa-secondary" opacity=".4" d="M70.6 195.3l21.1 36.9c8.4 14.8 8.4 32.9 0 47.6L70.6 316.7l54.3-24.9c19.2-8.8 41.9-4 56 11.8c9.2 10.4 19.4 20.6 30.7 30.1c33.7 28.5 76 50.2 124.5 50.2s90.8-21.8 124.5-50.2c30.3-25.5 52.7-55.7 65.3-77.8c-12.6-22.1-35-52.2-65.3-77.8C426.8 149.7 384.5 128 336 128s-90.8 21.7-124.5 50.2c-11.3 9.5-21.5 19.7-30.7 30.1c-14 15.8-36.7 20.6-56 11.8L70.6 195.3zM448 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z"/><path class="fa-primary" d="M180.8 303.7c9.2 10.4 19.4 20.6 30.7 30.1c33.7 28.5 76 50.2 124.5 50.2s90.8-21.8 124.5-50.2c30.3-25.5 52.7-55.7 65.3-77.8c-12.6-22.1-35-52.2-65.3-77.8C426.8 149.7 384.5 128 336 128s-90.8 21.7-124.5 50.2c-11.3 9.5-21.5 19.7-30.7 30.1c-14 15.8-36.7 20.6-56 11.8L70.6 195.3l21.1 36.9c8.4 14.8 8.4 32.9 0 47.6L70.6 316.7l54.3-24.9c19.2-8.8 41.9-4 56 11.8zM4.2 336.1L50 256 4.2 175.9c-6.9-12.1-5.2-27.2 4.2-37.5s24.3-13.3 36.9-7.5l99.5 45.6c10.5-11.9 22.5-23.8 35.7-35C219.7 108.5 272.6 80 336 80s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8c4.7 9.2 4.7 20.1 0 29.3c-14.1 27.4-41.9 66.8-81 99.8C452.3 403.5 399.4 432 336 432s-116.3-28.5-155.5-61.5c-13.2-11.2-25.1-23.1-35.7-35L45.3 381.1c-12.6 5.8-27.6 2.8-36.9-7.5S-2.7 348.2 4.2 336.1zM416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>';
                svgElementBounds = L.latLng(result.location.coordinates[1], result.location.coordinates[0]).toBounds(100);
                var layer = L.svgOverlay(svgElement, svgElementBounds, {
                  interactive: true
                });
                return layer;
              }
            });
            window.geoJSONFishPopulation.addLayer(layerSvg);
          });
        }
        if(result.areaServed) {
          var shapes = [];
          if(Array.isArray(result.areaServed))
            shapes = shapes.concat(result.areaServed);
          else
            shapes.push(result.areaServed);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layerGeoJson = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleFishPopulation
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleFishPopulation(feature));
              }
            });
            window.geoJSONFishPopulation.addLayer(layerGeoJson);
          });
        }
      });
    } else if(document.getElementById('htmBodyGraphLocationFishPopulationPage')) {
      window.mapFishPopulation = L.map('htmBodyGraphLocationFishPopulationPage', {
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
      window.mapFishPopulation.zoomControl.setPosition('topright');
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendFishPopulation;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapFishPopulation);

      if(window.bounds && window['DEFAULT_MAP_ZOOM'] && window.bounds.getNorthEast()) {
        if(listFishPopulation.length == 1) {
          window.mapFishPopulation.setView(window.bounds.getNorthEast(), window['DEFAULT_MAP_ZOOM']);
        } else {
          window.mapFishPopulation.fitBounds(window.bounds);
        }
      } else {
        if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
          window.mapFishPopulation.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]], window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_ZOOM'])
          window.mapFishPopulation.setView(null, window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_LOCATION'])
          window.mapFishPopulation.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]]);
      }

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONFishPopulation = L.geoJSON().addTo(window.mapFishPopulation);
      window.listFishPopulation.forEach((result, index) => {
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
              , style: jsStyleFishPopulation
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleFishPopulation(feature));
              }
            });
            window.geoJSONFishPopulation.addLayer(layerGeoJson);

            var layerSvg = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleFishPopulation
              , pointToLayer: function(feature, latlng) {
                var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path class="fa-secondary" opacity=".4" d="M70.6 195.3l21.1 36.9c8.4 14.8 8.4 32.9 0 47.6L70.6 316.7l54.3-24.9c19.2-8.8 41.9-4 56 11.8c9.2 10.4 19.4 20.6 30.7 30.1c33.7 28.5 76 50.2 124.5 50.2s90.8-21.8 124.5-50.2c30.3-25.5 52.7-55.7 65.3-77.8c-12.6-22.1-35-52.2-65.3-77.8C426.8 149.7 384.5 128 336 128s-90.8 21.7-124.5 50.2c-11.3 9.5-21.5 19.7-30.7 30.1c-14 15.8-36.7 20.6-56 11.8L70.6 195.3zM448 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z"/><path class="fa-primary" d="M180.8 303.7c9.2 10.4 19.4 20.6 30.7 30.1c33.7 28.5 76 50.2 124.5 50.2s90.8-21.8 124.5-50.2c30.3-25.5 52.7-55.7 65.3-77.8c-12.6-22.1-35-52.2-65.3-77.8C426.8 149.7 384.5 128 336 128s-90.8 21.7-124.5 50.2c-11.3 9.5-21.5 19.7-30.7 30.1c-14 15.8-36.7 20.6-56 11.8L70.6 195.3l21.1 36.9c8.4 14.8 8.4 32.9 0 47.6L70.6 316.7l54.3-24.9c19.2-8.8 41.9-4 56 11.8zM4.2 336.1L50 256 4.2 175.9c-6.9-12.1-5.2-27.2 4.2-37.5s24.3-13.3 36.9-7.5l99.5 45.6c10.5-11.9 22.5-23.8 35.7-35C219.7 108.5 272.6 80 336 80s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8c4.7 9.2 4.7 20.1 0 29.3c-14.1 27.4-41.9 66.8-81 99.8C452.3 403.5 399.4 432 336 432s-116.3-28.5-155.5-61.5c-13.2-11.2-25.1-23.1-35.7-35L45.3 381.1c-12.6 5.8-27.6 2.8-36.9-7.5S-2.7 348.2 4.2 336.1zM416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>';
                svgElementBounds = L.latLng(result.location.coordinates[1], result.location.coordinates[0]).toBounds(100);
                var layer = L.svgOverlay(svgElement, svgElementBounds, {
                  interactive: true
                });
                return layer;
              }
            });
            window.geoJSONFishPopulation.addLayer(layerSvg);
          });
        }
        if(result.areaServed) {
          var shapes = [];
          if(Array.isArray(result.areaServed))
            shapes = shapes.concat(result.areaServed);
          else
            shapes.push(result.areaServed);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layerGeoJson = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleFishPopulation
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleFishPopulation(feature));
              }
            });
            window.geoJSONFishPopulation.addLayer(layerGeoJson);
          });
        }
      });
      window.mapFishPopulation.on('popupopen', function(e) {
        if(e.popup._source) {
          var feature = e.popup._source.feature;
          jsTooltipFishPopulation(e, feature);
        }
      });
      const drawnItems = new L.FeatureGroup();
      window.mapFishPopulation.addLayer(drawnItems);
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
      window.mapFishPopulation.addControl(drawControl);
      window.mapFishPopulation.on(L.Draw.Event.CREATED, function (event) {
        drawnItems.addLayer(event.layer);
        var contextmenuItems = [];
        if(event.layerType == 'marker') {
          contextmenuItems.push({
            text: 'Definir location de ' + result.objectTitle
            , callback: function(event2) {
              patchFishPopulationLocation(event.layer, { coordinates: [event.layer.getLatLng()['lng'], event.layer.getLatLng()['lat']], type: "Point" });
            }
          });
        }
        if(event.layerType == 'polygon') {
          contextmenuItems.push({
            text: 'Definir areaServed de ' + result.objectTitle
            , callback: function(event2) {
              var latLngs = [];
              event.layer.getLatLngs().forEach(ll1 => {
                var latLngs1 = [];
                ll1.forEach(ll2 => {
                  var latLngs2 = [ll2['lng'], ll2['lat']];
                  latLngs1.push(latLngs2);
                });
                latLngs.push(latLngs1);
              });
              patchFishPopulationArea(event.layer, { coordinates: latLngs, type: "Polygon" });
            }
          });
        }
        if(event.layerType == 'polyline') {
          contextmenuItems.push({
            text: 'Definir areaServed de ' + result.objectTitle
            , callback: function(event2) {
              var latLngs = [];
              event.layer.getLatLngs().forEach(ll1 => {
                var latLngs1 = [ll1['lng'], ll1['lat']];
                latLngs.push(latLngs1);
              });
              patchFishPopulationArea(event.layer, { coordinates: latLngs, type: "LineString" });
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
function patchFishPopulationLocation(target, location) {
  patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + result.entityShortId }]
      , 'setLocation', location
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}
function patchFishPopulationArea(target, areaServed) {
  patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + result.entityShortId }]
      , 'setAreaServed', areaServed
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqFishPopulation_time').innerText = '';
  searchPage('FishPopulation', function() {
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
      document.querySelector('#fqFishPopulation_time').value = x;
      document.querySelector('#fqFishPopulation_time').onchange();
      searchPage('FishPopulation');
    }, speedRate);
  });
}

// Search //

async function searchFishPopulation($formFilters, success, error) {
  var filters = searchFishPopulationFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchFishPopulationVals(filters, target, success, error);
}

function searchFishPopulationFilters($formFilters) {
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

    var filterAreaServed = $formFilters.querySelector('.valueAreaServed')?.value;
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterScientificName = $formFilters.querySelector('.valueScientificName')?.value;
    if(filterScientificName != null && filterScientificName !== '')
      filters.push({ name: 'fq', value: 'scientificName:' + filterScientificName });

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

    var filterBodyMasse = $formFilters.querySelector('.valueBodyMasse')?.value;
    if(filterBodyMasse != null && filterBodyMasse !== '')
      filters.push({ name: 'fq', value: 'bodyMasse:' + filterBodyMasse });

    var filterCulturedIn = $formFilters.querySelector('.valueCulturedIn')?.value;
    if(filterCulturedIn != null && filterCulturedIn !== '')
      filters.push({ name: 'fq', value: 'culturedIn:' + filterCulturedIn });

    var filterDataProvider = $formFilters.querySelector('.valueDataProvider')?.value;
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.querySelector('.valueDateCreated')?.value;
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateModified = $formFilters.querySelector('.valueDateModified')?.value;
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterFishRemoved = $formFilters.querySelector('.valueFishRemoved')?.value;
    if(filterFishRemoved != null && filterFishRemoved !== '')
      filters.push({ name: 'fq', value: 'fishRemoved:' + filterFishRemoved });

    var filterInitialNumber = $formFilters.querySelector('.valueInitialNumber')?.value;
    if(filterInitialNumber != null && filterInitialNumber !== '')
      filters.push({ name: 'fq', value: 'initialNumber:' + filterInitialNumber });

    var filterOwner = $formFilters.querySelector('.valueOwner')?.value;
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterRefSpecie = $formFilters.querySelector('.valueRefSpecie')?.value;
    if(filterRefSpecie != null && filterRefSpecie !== '')
      filters.push({ name: 'fq', value: 'refSpecie:' + filterRefSpecie });

    var filterRelatedSource = $formFilters.querySelector('.valueRelatedSource')?.value;
    if(filterRelatedSource != null && filterRelatedSource !== '')
      filters.push({ name: 'fq', value: 'relatedSource:' + filterRelatedSource });

    var filterSeeAlso = $formFilters.querySelector('.valueSeeAlso')?.value;
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSource = $formFilters.querySelector('.valueSource')?.value;
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterMaturityDaysBegin = $formFilters.querySelector('.valueMaturityDaysBegin')?.value;
    if(filterMaturityDaysBegin != null && filterMaturityDaysBegin !== '')
      filters.push({ name: 'fq', value: 'maturityDaysBegin:' + filterMaturityDaysBegin });

    var filterMaturityDaysEnd = $formFilters.querySelector('.valueMaturityDaysEnd')?.value;
    if(filterMaturityDaysEnd != null && filterMaturityDaysEnd !== '')
      filters.push({ name: 'fq', value: 'maturityDaysEnd:' + filterMaturityDaysEnd });

    var filterIncubationDaysBegin = $formFilters.querySelector('.valueIncubationDaysBegin')?.value;
    if(filterIncubationDaysBegin != null && filterIncubationDaysBegin !== '')
      filters.push({ name: 'fq', value: 'incubationDaysBegin:' + filterIncubationDaysBegin });

    var filterIncubationDaysEnd = $formFilters.querySelector('.valueIncubationDaysEnd')?.value;
    if(filterIncubationDaysEnd != null && filterIncubationDaysEnd !== '')
      filters.push({ name: 'fq', value: 'incubationDaysEnd:' + filterIncubationDaysEnd });

    var filterIncubationNumberMin = $formFilters.querySelector('.valueIncubationNumberMin')?.value;
    if(filterIncubationNumberMin != null && filterIncubationNumberMin !== '')
      filters.push({ name: 'fq', value: 'incubationNumberMin:' + filterIncubationNumberMin });

    var filterIncubationNumberMax = $formFilters.querySelector('.valueIncubationNumberMax')?.value;
    if(filterIncubationNumberMax != null && filterIncubationNumberMax !== '')
      filters.push({ name: 'fq', value: 'incubationNumberMax:' + filterIncubationNumberMax });

    var filterPercentPopulationPregnantMin = $formFilters.querySelector('.valuePercentPopulationPregnantMin')?.value;
    if(filterPercentPopulationPregnantMin != null && filterPercentPopulationPregnantMin !== '')
      filters.push({ name: 'fq', value: 'percentPopulationPregnantMin:' + filterPercentPopulationPregnantMin });

    var filterPercentPopulationPregnantMax = $formFilters.querySelector('.valuePercentPopulationPregnantMax')?.value;
    if(filterPercentPopulationPregnantMax != null && filterPercentPopulationPregnantMax !== '')
      filters.push({ name: 'fq', value: 'percentPopulationPregnantMax:' + filterPercentPopulationPregnantMax });

    var filterPopulationsAtBirth = $formFilters.querySelector('.valuePopulationsAtBirth')?.value;
    if(filterPopulationsAtBirth != null && filterPopulationsAtBirth !== '')
      filters.push({ name: 'fq', value: 'populationsAtBirth:' + filterPopulationsAtBirth });

    var filterPopulationsNow = $formFilters.querySelector('.valuePopulationsNow')?.value;
    if(filterPopulationsNow != null && filterPopulationsNow !== '')
      filters.push({ name: 'fq', value: 'populationsNow:' + filterPopulationsNow });

    var filterIncubationDate = $formFilters.querySelector('.valueIncubationDate')?.value;
    if(filterIncubationDate != null && filterIncubationDate !== '')
      filters.push({ name: 'fq', value: 'incubationDate:' + filterIncubationDate });

    var filterIncubationDaysNow = $formFilters.querySelector('.valueIncubationDaysNow')?.value;
    if(filterIncubationDaysNow != null && filterIncubationDaysNow !== '')
      filters.push({ name: 'fq', value: 'incubationDaysNow:' + filterIncubationDaysNow });

    var filterPreviousPopulation = $formFilters.querySelector('.valuePreviousPopulation')?.value;
    if(filterPreviousPopulation != null && filterPreviousPopulation !== '')
      filters.push({ name: 'fq', value: 'previousPopulation:' + filterPreviousPopulation });

    var filterWaterTemperature = $formFilters.querySelector('.valueWaterTemperature')?.value;
    if(filterWaterTemperature != null && filterWaterTemperature !== '')
      filters.push({ name: 'fq', value: 'waterTemperature:' + filterWaterTemperature });

    var filterWaterSalinity = $formFilters.querySelector('.valueWaterSalinity')?.value;
    if(filterWaterSalinity != null && filterWaterSalinity !== '')
      filters.push({ name: 'fq', value: 'waterSalinity:' + filterWaterSalinity });

    var filterWaterOxygen = $formFilters.querySelector('.valueWaterOxygen')?.value;
    if(filterWaterOxygen != null && filterWaterOxygen !== '')
      filters.push({ name: 'fq', value: 'waterOxygen:' + filterWaterOxygen });

    var filterWaterPh = $formFilters.querySelector('.valueWaterPh')?.value;
    if(filterWaterPh != null && filterWaterPh !== '')
      filters.push({ name: 'fq', value: 'waterPh:' + filterWaterPh });

    var $filterSimulationCheckbox = $formFilters.querySelector('input.valueSimulation[type = "checkbox"]');
    var $filterSimulationSelect = $formFilters.querySelector('select.valueSimulation');
    var filterSimulation = $filterSimulationSelect.length ? $filterSimulationSelect.value : $filterSimulationCheckbox.checked;
    var filterSimulationSelectVal = $formFilters.querySelector('select.filterSimulation')?.value;
    var filterSimulation = null;
    if(filterSimulationSelectVal !== '')
      filterSimulation = filterSimulationSelectVal == 'true';
    if(filterSimulation != null && filterSimulation === true)
      filters.push({ name: 'fq', value: 'simulation:' + filterSimulation });

    var filterSimulationDelayMillis = $formFilters.querySelector('.valueSimulationDelayMillis')?.value;
    if(filterSimulationDelayMillis != null && filterSimulationDelayMillis !== '')
      filters.push({ name: 'fq', value: 'simulationDelayMillis:' + filterSimulationDelayMillis });

    var filterEntityShortId = $formFilters.querySelector('.valueEntityShortId')?.value;
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });

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

    var filterAreaServedColors = $formFilters.querySelector('.valueAreaServedColors')?.value;
    if(filterAreaServedColors != null && filterAreaServedColors !== '')
      filters.push({ name: 'fq', value: 'areaServedColors:' + filterAreaServedColors });

    var filterAreaServedTitles = $formFilters.querySelector('.valueAreaServedTitles')?.value;
    if(filterAreaServedTitles != null && filterAreaServedTitles !== '')
      filters.push({ name: 'fq', value: 'areaServedTitles:' + filterAreaServedTitles });
  }
  return filters;
}

function searchFishPopulationVals(filters, target, success, error) {


  fetch(
    '/en-us/api/fish-population?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestFishPopulationObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular fa-fish"></i>');
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $li = document.createElement('li');
        var $a = document.createElement('a').setAttribute('href', o['editPageFrFR']);
        $a.append($i);
        $a.append($span);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchFishPopulationVals($formFilters, target, success, error);
}

// GET //

async function getFishPopulation(pk) {
  fetch(
    '/en-us/api/fish-population/' + entityShortId
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

async function patchFishPopulation($formFilters, $formValues, target, entityShortId, success, error) {
  var filters = patchFishPopulationFilters($formFilters);

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

  var valueAreaServed = $formValues.querySelector('.valueAreaServed')?.value;
  var removeAreaServed = $formValues.querySelector('.removeAreaServed')?.value === 'true';
  var setAreaServed = removeAreaServed ? null : $formValues.querySelector('.setAreaServed')?.value;
  var addAreaServed = $formValues.querySelector('.addAreaServed')?.value;
  if(removeAreaServed || setAreaServed != null && setAreaServed !== '')
    vals['setAreaServed'] = JSON.parse(setAreaServed);
  if(addAreaServed != null && addAreaServed !== '')
    vals['addAreaServed'] = addAreaServed;
  var removeAreaServed = $formValues.querySelector('.removeAreaServed')?.value;
  if(removeAreaServed != null && removeAreaServed !== '')
    vals['removeAreaServed'] = removeAreaServed;

  var valueScientificName = $formValues.querySelector('.valueScientificName')?.value;
  var removeScientificName = $formValues.querySelector('.removeScientificName')?.value === 'true';
  var setScientificName = removeScientificName ? null : $formValues.querySelector('.setScientificName')?.value;
  var addScientificName = $formValues.querySelector('.addScientificName')?.value;
  if(removeScientificName || setScientificName != null && setScientificName !== '')
    vals['setScientificName'] = setScientificName;
  if(addScientificName != null && addScientificName !== '')
    vals['addScientificName'] = addScientificName;
  var removeScientificName = $formValues.querySelector('.removeScientificName')?.value;
  if(removeScientificName != null && removeScientificName !== '')
    vals['removeScientificName'] = removeScientificName;

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

  var valueBodyMasse = $formValues.querySelector('.valueBodyMasse')?.value;
  var removeBodyMasse = $formValues.querySelector('.removeBodyMasse')?.value === 'true';
  var setBodyMasse = removeBodyMasse ? null : $formValues.querySelector('.setBodyMasse')?.value;
  var addBodyMasse = $formValues.querySelector('.addBodyMasse')?.value;
  if(removeBodyMasse || setBodyMasse != null && setBodyMasse !== '')
    vals['setBodyMasse'] = setBodyMasse;
  if(addBodyMasse != null && addBodyMasse !== '')
    vals['addBodyMasse'] = addBodyMasse;
  var removeBodyMasse = $formValues.querySelector('.removeBodyMasse')?.value;
  if(removeBodyMasse != null && removeBodyMasse !== '')
    vals['removeBodyMasse'] = removeBodyMasse;

  var valueCulturedIn = $formValues.querySelector('.valueCulturedIn')?.value;
  var removeCulturedIn = $formValues.querySelector('.removeCulturedIn')?.value === 'true';
  var setCulturedIn = removeCulturedIn ? null : $formValues.querySelector('.setCulturedIn')?.value;
  var addCulturedIn = $formValues.querySelector('.addCulturedIn')?.value;
  if(removeCulturedIn || setCulturedIn != null && setCulturedIn !== '')
    vals['setCulturedIn'] = setCulturedIn;
  if(addCulturedIn != null && addCulturedIn !== '')
    vals['addCulturedIn'] = addCulturedIn;
  var removeCulturedIn = $formValues.querySelector('.removeCulturedIn')?.value;
  if(removeCulturedIn != null && removeCulturedIn !== '')
    vals['removeCulturedIn'] = removeCulturedIn;

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

  var valueFishRemoved = $formValues.querySelector('.valueFishRemoved')?.value;
  var removeFishRemoved = $formValues.querySelector('.removeFishRemoved')?.value === 'true';
  var setFishRemoved = removeFishRemoved ? null : $formValues.querySelector('.setFishRemoved')?.value;
  var addFishRemoved = $formValues.querySelector('.addFishRemoved')?.value;
  if(removeFishRemoved || setFishRemoved != null && setFishRemoved !== '')
    vals['setFishRemoved'] = setFishRemoved;
  if(addFishRemoved != null && addFishRemoved !== '')
    vals['addFishRemoved'] = addFishRemoved;
  var removeFishRemoved = $formValues.querySelector('.removeFishRemoved')?.value;
  if(removeFishRemoved != null && removeFishRemoved !== '')
    vals['removeFishRemoved'] = removeFishRemoved;

  var valueInitialNumber = $formValues.querySelector('.valueInitialNumber')?.value;
  var removeInitialNumber = $formValues.querySelector('.removeInitialNumber')?.value === 'true';
  var setInitialNumber = removeInitialNumber ? null : $formValues.querySelector('.setInitialNumber')?.value;
  var addInitialNumber = $formValues.querySelector('.addInitialNumber')?.value;
  if(removeInitialNumber || setInitialNumber != null && setInitialNumber !== '')
    vals['setInitialNumber'] = setInitialNumber;
  if(addInitialNumber != null && addInitialNumber !== '')
    vals['addInitialNumber'] = addInitialNumber;
  var removeInitialNumber = $formValues.querySelector('.removeInitialNumber')?.value;
  if(removeInitialNumber != null && removeInitialNumber !== '')
    vals['removeInitialNumber'] = removeInitialNumber;

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

  var valueRefSpecie = $formValues.querySelector('.valueRefSpecie')?.value;
  var removeRefSpecie = $formValues.querySelector('.removeRefSpecie')?.value === 'true';
  var setRefSpecie = removeRefSpecie ? null : $formValues.querySelector('.setRefSpecie')?.value;
  var addRefSpecie = $formValues.querySelector('.addRefSpecie')?.value;
  if(removeRefSpecie || setRefSpecie != null && setRefSpecie !== '')
    vals['setRefSpecie'] = setRefSpecie;
  if(addRefSpecie != null && addRefSpecie !== '')
    vals['addRefSpecie'] = addRefSpecie;
  var removeRefSpecie = $formValues.querySelector('.removeRefSpecie')?.value;
  if(removeRefSpecie != null && removeRefSpecie !== '')
    vals['removeRefSpecie'] = removeRefSpecie;

  var valueRelatedSource = $formValues.querySelector('.valueRelatedSource')?.value;
  var removeRelatedSource = $formValues.querySelector('.removeRelatedSource')?.value === 'true';
  var setRelatedSource = removeRelatedSource ? null : $formValues.querySelector('.setRelatedSource')?.value;
  var addRelatedSource = $formValues.querySelector('.addRelatedSource')?.value;
  if(removeRelatedSource || setRelatedSource != null && setRelatedSource !== '')
    vals['setRelatedSource'] = JSON.parse(setRelatedSource);
  if(addRelatedSource != null && addRelatedSource !== '')
    vals['addRelatedSource'] = addRelatedSource;
  var removeRelatedSource = $formValues.querySelector('.removeRelatedSource')?.value;
  if(removeRelatedSource != null && removeRelatedSource !== '')
    vals['removeRelatedSource'] = removeRelatedSource;

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

  var valueMaturityDaysBegin = $formValues.querySelector('.valueMaturityDaysBegin')?.value;
  var removeMaturityDaysBegin = $formValues.querySelector('.removeMaturityDaysBegin')?.value === 'true';
  var setMaturityDaysBegin = removeMaturityDaysBegin ? null : $formValues.querySelector('.setMaturityDaysBegin')?.value;
  var addMaturityDaysBegin = $formValues.querySelector('.addMaturityDaysBegin')?.value;
  if(removeMaturityDaysBegin || setMaturityDaysBegin != null && setMaturityDaysBegin !== '')
    vals['setMaturityDaysBegin'] = setMaturityDaysBegin;
  if(addMaturityDaysBegin != null && addMaturityDaysBegin !== '')
    vals['addMaturityDaysBegin'] = addMaturityDaysBegin;
  var removeMaturityDaysBegin = $formValues.querySelector('.removeMaturityDaysBegin')?.value;
  if(removeMaturityDaysBegin != null && removeMaturityDaysBegin !== '')
    vals['removeMaturityDaysBegin'] = removeMaturityDaysBegin;

  var valueMaturityDaysEnd = $formValues.querySelector('.valueMaturityDaysEnd')?.value;
  var removeMaturityDaysEnd = $formValues.querySelector('.removeMaturityDaysEnd')?.value === 'true';
  var setMaturityDaysEnd = removeMaturityDaysEnd ? null : $formValues.querySelector('.setMaturityDaysEnd')?.value;
  var addMaturityDaysEnd = $formValues.querySelector('.addMaturityDaysEnd')?.value;
  if(removeMaturityDaysEnd || setMaturityDaysEnd != null && setMaturityDaysEnd !== '')
    vals['setMaturityDaysEnd'] = setMaturityDaysEnd;
  if(addMaturityDaysEnd != null && addMaturityDaysEnd !== '')
    vals['addMaturityDaysEnd'] = addMaturityDaysEnd;
  var removeMaturityDaysEnd = $formValues.querySelector('.removeMaturityDaysEnd')?.value;
  if(removeMaturityDaysEnd != null && removeMaturityDaysEnd !== '')
    vals['removeMaturityDaysEnd'] = removeMaturityDaysEnd;

  var valueIncubationDaysBegin = $formValues.querySelector('.valueIncubationDaysBegin')?.value;
  var removeIncubationDaysBegin = $formValues.querySelector('.removeIncubationDaysBegin')?.value === 'true';
  var setIncubationDaysBegin = removeIncubationDaysBegin ? null : $formValues.querySelector('.setIncubationDaysBegin')?.value;
  var addIncubationDaysBegin = $formValues.querySelector('.addIncubationDaysBegin')?.value;
  if(removeIncubationDaysBegin || setIncubationDaysBegin != null && setIncubationDaysBegin !== '')
    vals['setIncubationDaysBegin'] = setIncubationDaysBegin;
  if(addIncubationDaysBegin != null && addIncubationDaysBegin !== '')
    vals['addIncubationDaysBegin'] = addIncubationDaysBegin;
  var removeIncubationDaysBegin = $formValues.querySelector('.removeIncubationDaysBegin')?.value;
  if(removeIncubationDaysBegin != null && removeIncubationDaysBegin !== '')
    vals['removeIncubationDaysBegin'] = removeIncubationDaysBegin;

  var valueIncubationDaysEnd = $formValues.querySelector('.valueIncubationDaysEnd')?.value;
  var removeIncubationDaysEnd = $formValues.querySelector('.removeIncubationDaysEnd')?.value === 'true';
  var setIncubationDaysEnd = removeIncubationDaysEnd ? null : $formValues.querySelector('.setIncubationDaysEnd')?.value;
  var addIncubationDaysEnd = $formValues.querySelector('.addIncubationDaysEnd')?.value;
  if(removeIncubationDaysEnd || setIncubationDaysEnd != null && setIncubationDaysEnd !== '')
    vals['setIncubationDaysEnd'] = setIncubationDaysEnd;
  if(addIncubationDaysEnd != null && addIncubationDaysEnd !== '')
    vals['addIncubationDaysEnd'] = addIncubationDaysEnd;
  var removeIncubationDaysEnd = $formValues.querySelector('.removeIncubationDaysEnd')?.value;
  if(removeIncubationDaysEnd != null && removeIncubationDaysEnd !== '')
    vals['removeIncubationDaysEnd'] = removeIncubationDaysEnd;

  var valueIncubationNumberMin = $formValues.querySelector('.valueIncubationNumberMin')?.value;
  var removeIncubationNumberMin = $formValues.querySelector('.removeIncubationNumberMin')?.value === 'true';
  var setIncubationNumberMin = removeIncubationNumberMin ? null : $formValues.querySelector('.setIncubationNumberMin')?.value;
  var addIncubationNumberMin = $formValues.querySelector('.addIncubationNumberMin')?.value;
  if(removeIncubationNumberMin || setIncubationNumberMin != null && setIncubationNumberMin !== '')
    vals['setIncubationNumberMin'] = setIncubationNumberMin;
  if(addIncubationNumberMin != null && addIncubationNumberMin !== '')
    vals['addIncubationNumberMin'] = addIncubationNumberMin;
  var removeIncubationNumberMin = $formValues.querySelector('.removeIncubationNumberMin')?.value;
  if(removeIncubationNumberMin != null && removeIncubationNumberMin !== '')
    vals['removeIncubationNumberMin'] = removeIncubationNumberMin;

  var valueIncubationNumberMax = $formValues.querySelector('.valueIncubationNumberMax')?.value;
  var removeIncubationNumberMax = $formValues.querySelector('.removeIncubationNumberMax')?.value === 'true';
  var setIncubationNumberMax = removeIncubationNumberMax ? null : $formValues.querySelector('.setIncubationNumberMax')?.value;
  var addIncubationNumberMax = $formValues.querySelector('.addIncubationNumberMax')?.value;
  if(removeIncubationNumberMax || setIncubationNumberMax != null && setIncubationNumberMax !== '')
    vals['setIncubationNumberMax'] = setIncubationNumberMax;
  if(addIncubationNumberMax != null && addIncubationNumberMax !== '')
    vals['addIncubationNumberMax'] = addIncubationNumberMax;
  var removeIncubationNumberMax = $formValues.querySelector('.removeIncubationNumberMax')?.value;
  if(removeIncubationNumberMax != null && removeIncubationNumberMax !== '')
    vals['removeIncubationNumberMax'] = removeIncubationNumberMax;

  var valuePercentPopulationPregnantMin = $formValues.querySelector('.valuePercentPopulationPregnantMin')?.value;
  var removePercentPopulationPregnantMin = $formValues.querySelector('.removePercentPopulationPregnantMin')?.value === 'true';
  var setPercentPopulationPregnantMin = removePercentPopulationPregnantMin ? null : $formValues.querySelector('.setPercentPopulationPregnantMin')?.value;
  var addPercentPopulationPregnantMin = $formValues.querySelector('.addPercentPopulationPregnantMin')?.value;
  if(removePercentPopulationPregnantMin || setPercentPopulationPregnantMin != null && setPercentPopulationPregnantMin !== '')
    vals['setPercentPopulationPregnantMin'] = setPercentPopulationPregnantMin;
  if(addPercentPopulationPregnantMin != null && addPercentPopulationPregnantMin !== '')
    vals['addPercentPopulationPregnantMin'] = addPercentPopulationPregnantMin;
  var removePercentPopulationPregnantMin = $formValues.querySelector('.removePercentPopulationPregnantMin')?.value;
  if(removePercentPopulationPregnantMin != null && removePercentPopulationPregnantMin !== '')
    vals['removePercentPopulationPregnantMin'] = removePercentPopulationPregnantMin;

  var valuePercentPopulationPregnantMax = $formValues.querySelector('.valuePercentPopulationPregnantMax')?.value;
  var removePercentPopulationPregnantMax = $formValues.querySelector('.removePercentPopulationPregnantMax')?.value === 'true';
  var setPercentPopulationPregnantMax = removePercentPopulationPregnantMax ? null : $formValues.querySelector('.setPercentPopulationPregnantMax')?.value;
  var addPercentPopulationPregnantMax = $formValues.querySelector('.addPercentPopulationPregnantMax')?.value;
  if(removePercentPopulationPregnantMax || setPercentPopulationPregnantMax != null && setPercentPopulationPregnantMax !== '')
    vals['setPercentPopulationPregnantMax'] = setPercentPopulationPregnantMax;
  if(addPercentPopulationPregnantMax != null && addPercentPopulationPregnantMax !== '')
    vals['addPercentPopulationPregnantMax'] = addPercentPopulationPregnantMax;
  var removePercentPopulationPregnantMax = $formValues.querySelector('.removePercentPopulationPregnantMax')?.value;
  if(removePercentPopulationPregnantMax != null && removePercentPopulationPregnantMax !== '')
    vals['removePercentPopulationPregnantMax'] = removePercentPopulationPregnantMax;

  var valuePopulationsAtBirth = $formValues.querySelector('.valuePopulationsAtBirth')?.value;
  var removePopulationsAtBirth = $formValues.querySelector('.removePopulationsAtBirth')?.value === 'true';
  var setPopulationsAtBirth = removePopulationsAtBirth ? null : $formValues.querySelector('.setPopulationsAtBirth')?.value;
  var addPopulationsAtBirth = $formValues.querySelector('.addPopulationsAtBirth')?.value;
  if(removePopulationsAtBirth || setPopulationsAtBirth != null && setPopulationsAtBirth !== '')
    vals['setPopulationsAtBirth'] = JSON.parse(setPopulationsAtBirth);
  if(addPopulationsAtBirth != null && addPopulationsAtBirth !== '')
    vals['addPopulationsAtBirth'] = addPopulationsAtBirth;
  var removePopulationsAtBirth = $formValues.querySelector('.removePopulationsAtBirth')?.value;
  if(removePopulationsAtBirth != null && removePopulationsAtBirth !== '')
    vals['removePopulationsAtBirth'] = removePopulationsAtBirth;

  var valuePopulationsNow = $formValues.querySelector('.valuePopulationsNow')?.value;
  var removePopulationsNow = $formValues.querySelector('.removePopulationsNow')?.value === 'true';
  var setPopulationsNow = removePopulationsNow ? null : $formValues.querySelector('.setPopulationsNow')?.value;
  var addPopulationsNow = $formValues.querySelector('.addPopulationsNow')?.value;
  if(removePopulationsNow || setPopulationsNow != null && setPopulationsNow !== '')
    vals['setPopulationsNow'] = JSON.parse(setPopulationsNow);
  if(addPopulationsNow != null && addPopulationsNow !== '')
    vals['addPopulationsNow'] = addPopulationsNow;
  var removePopulationsNow = $formValues.querySelector('.removePopulationsNow')?.value;
  if(removePopulationsNow != null && removePopulationsNow !== '')
    vals['removePopulationsNow'] = removePopulationsNow;

  var valueIncubationDate = $formValues.querySelector('.valueIncubationDate')?.value;
  var removeIncubationDate = $formValues.querySelector('.removeIncubationDate')?.value === 'true';
  var setIncubationDate = removeIncubationDate ? null : $formValues.querySelector('.setIncubationDate')?.value;
  var addIncubationDate = $formValues.querySelector('.addIncubationDate')?.value;
  if(removeIncubationDate || setIncubationDate != null && setIncubationDate !== '')
    vals['setIncubationDate'] = setIncubationDate;
  if(addIncubationDate != null && addIncubationDate !== '')
    vals['addIncubationDate'] = addIncubationDate;
  var removeIncubationDate = $formValues.querySelector('.removeIncubationDate')?.value;
  if(removeIncubationDate != null && removeIncubationDate !== '')
    vals['removeIncubationDate'] = removeIncubationDate;

  var valueIncubationDaysNow = $formValues.querySelector('.valueIncubationDaysNow')?.value;
  var removeIncubationDaysNow = $formValues.querySelector('.removeIncubationDaysNow')?.value === 'true';
  var setIncubationDaysNow = removeIncubationDaysNow ? null : $formValues.querySelector('.setIncubationDaysNow')?.value;
  var addIncubationDaysNow = $formValues.querySelector('.addIncubationDaysNow')?.value;
  if(removeIncubationDaysNow || setIncubationDaysNow != null && setIncubationDaysNow !== '')
    vals['setIncubationDaysNow'] = setIncubationDaysNow;
  if(addIncubationDaysNow != null && addIncubationDaysNow !== '')
    vals['addIncubationDaysNow'] = addIncubationDaysNow;
  var removeIncubationDaysNow = $formValues.querySelector('.removeIncubationDaysNow')?.value;
  if(removeIncubationDaysNow != null && removeIncubationDaysNow !== '')
    vals['removeIncubationDaysNow'] = removeIncubationDaysNow;

  var valuePreviousPopulation = $formValues.querySelector('.valuePreviousPopulation')?.value;
  var removePreviousPopulation = $formValues.querySelector('.removePreviousPopulation')?.value === 'true';
  var setPreviousPopulation = removePreviousPopulation ? null : $formValues.querySelector('.setPreviousPopulation')?.value;
  var addPreviousPopulation = $formValues.querySelector('.addPreviousPopulation')?.value;
  if(removePreviousPopulation || setPreviousPopulation != null && setPreviousPopulation !== '')
    vals['setPreviousPopulation'] = setPreviousPopulation;
  if(addPreviousPopulation != null && addPreviousPopulation !== '')
    vals['addPreviousPopulation'] = addPreviousPopulation;
  var removePreviousPopulation = $formValues.querySelector('.removePreviousPopulation')?.value;
  if(removePreviousPopulation != null && removePreviousPopulation !== '')
    vals['removePreviousPopulation'] = removePreviousPopulation;

  var valueWaterTemperature = $formValues.querySelector('.valueWaterTemperature')?.value;
  var removeWaterTemperature = $formValues.querySelector('.removeWaterTemperature')?.value === 'true';
  var setWaterTemperature = removeWaterTemperature ? null : $formValues.querySelector('.setWaterTemperature')?.value;
  var addWaterTemperature = $formValues.querySelector('.addWaterTemperature')?.value;
  if(removeWaterTemperature || setWaterTemperature != null && setWaterTemperature !== '')
    vals['setWaterTemperature'] = setWaterTemperature;
  if(addWaterTemperature != null && addWaterTemperature !== '')
    vals['addWaterTemperature'] = addWaterTemperature;
  var removeWaterTemperature = $formValues.querySelector('.removeWaterTemperature')?.value;
  if(removeWaterTemperature != null && removeWaterTemperature !== '')
    vals['removeWaterTemperature'] = removeWaterTemperature;

  var valueWaterSalinity = $formValues.querySelector('.valueWaterSalinity')?.value;
  var removeWaterSalinity = $formValues.querySelector('.removeWaterSalinity')?.value === 'true';
  var setWaterSalinity = removeWaterSalinity ? null : $formValues.querySelector('.setWaterSalinity')?.value;
  var addWaterSalinity = $formValues.querySelector('.addWaterSalinity')?.value;
  if(removeWaterSalinity || setWaterSalinity != null && setWaterSalinity !== '')
    vals['setWaterSalinity'] = setWaterSalinity;
  if(addWaterSalinity != null && addWaterSalinity !== '')
    vals['addWaterSalinity'] = addWaterSalinity;
  var removeWaterSalinity = $formValues.querySelector('.removeWaterSalinity')?.value;
  if(removeWaterSalinity != null && removeWaterSalinity !== '')
    vals['removeWaterSalinity'] = removeWaterSalinity;

  var valueWaterOxygen = $formValues.querySelector('.valueWaterOxygen')?.value;
  var removeWaterOxygen = $formValues.querySelector('.removeWaterOxygen')?.value === 'true';
  var setWaterOxygen = removeWaterOxygen ? null : $formValues.querySelector('.setWaterOxygen')?.value;
  var addWaterOxygen = $formValues.querySelector('.addWaterOxygen')?.value;
  if(removeWaterOxygen || setWaterOxygen != null && setWaterOxygen !== '')
    vals['setWaterOxygen'] = setWaterOxygen;
  if(addWaterOxygen != null && addWaterOxygen !== '')
    vals['addWaterOxygen'] = addWaterOxygen;
  var removeWaterOxygen = $formValues.querySelector('.removeWaterOxygen')?.value;
  if(removeWaterOxygen != null && removeWaterOxygen !== '')
    vals['removeWaterOxygen'] = removeWaterOxygen;

  var valueWaterPh = $formValues.querySelector('.valueWaterPh')?.value;
  var removeWaterPh = $formValues.querySelector('.removeWaterPh')?.value === 'true';
  var setWaterPh = removeWaterPh ? null : $formValues.querySelector('.setWaterPh')?.value;
  var addWaterPh = $formValues.querySelector('.addWaterPh')?.value;
  if(removeWaterPh || setWaterPh != null && setWaterPh !== '')
    vals['setWaterPh'] = setWaterPh;
  if(addWaterPh != null && addWaterPh !== '')
    vals['addWaterPh'] = addWaterPh;
  var removeWaterPh = $formValues.querySelector('.removeWaterPh')?.value;
  if(removeWaterPh != null && removeWaterPh !== '')
    vals['removeWaterPh'] = removeWaterPh;

  var valueSimulation = $formValues.querySelector('.valueSimulation')?.value;
  var removeSimulation = $formValues.querySelector('.removeSimulation')?.value === 'true';
  if(valueSimulation != null)
    valueSimulation = valueSimulation === 'true';
  var valueSimulationSelectVal = $formValues.querySelector('select.setSimulation')?.value;
  if(valueSimulationSelectVal != null)
    valueSimulationSelectVal = valueSimulationSelectVal === 'true';
  if(valueSimulationSelectVal != null && valueSimulationSelectVal !== '')
    valueSimulation = valueSimulationSelectVal == 'true';
  var setSimulation = removeSimulation ? null : valueSimulation;
  var addSimulation = $formValues.querySelector('.addSimulation')?.checked;
  if(removeSimulation || setSimulation != null && setSimulation !== '')
    vals['setSimulation'] = setSimulation;
  if(addSimulation != null && addSimulation !== '')
    vals['addSimulation'] = addSimulation;
  var removeSimulation = $formValues.querySelector('.removeSimulation')?.checked;
  if(removeSimulation != null && removeSimulation !== '')
    vals['removeSimulation'] = removeSimulation;

  var valueSimulationDelayMillis = $formValues.querySelector('.valueSimulationDelayMillis')?.value;
  var removeSimulationDelayMillis = $formValues.querySelector('.removeSimulationDelayMillis')?.value === 'true';
  var setSimulationDelayMillis = removeSimulationDelayMillis ? null : $formValues.querySelector('.setSimulationDelayMillis')?.value;
  var addSimulationDelayMillis = $formValues.querySelector('.addSimulationDelayMillis')?.value;
  if(removeSimulationDelayMillis || setSimulationDelayMillis != null && setSimulationDelayMillis !== '')
    vals['setSimulationDelayMillis'] = setSimulationDelayMillis;
  if(addSimulationDelayMillis != null && addSimulationDelayMillis !== '')
    vals['addSimulationDelayMillis'] = addSimulationDelayMillis;
  var removeSimulationDelayMillis = $formValues.querySelector('.removeSimulationDelayMillis')?.value;
  if(removeSimulationDelayMillis != null && removeSimulationDelayMillis !== '')
    vals['removeSimulationDelayMillis'] = removeSimulationDelayMillis;

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

  patchFishPopulationVals(entityShortId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'entityShortId:' + entityShortId}], vals, target, success, error);
}

function patchFishPopulationFilters($formFilters) {
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

    var filterAreaServed = $formFilters.querySelector('.valueAreaServed')?.value;
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterScientificName = $formFilters.querySelector('.valueScientificName')?.value;
    if(filterScientificName != null && filterScientificName !== '')
      filters.push({ name: 'fq', value: 'scientificName:' + filterScientificName });

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

    var filterBodyMasse = $formFilters.querySelector('.valueBodyMasse')?.value;
    if(filterBodyMasse != null && filterBodyMasse !== '')
      filters.push({ name: 'fq', value: 'bodyMasse:' + filterBodyMasse });

    var filterCulturedIn = $formFilters.querySelector('.valueCulturedIn')?.value;
    if(filterCulturedIn != null && filterCulturedIn !== '')
      filters.push({ name: 'fq', value: 'culturedIn:' + filterCulturedIn });

    var filterDataProvider = $formFilters.querySelector('.valueDataProvider')?.value;
    if(filterDataProvider != null && filterDataProvider !== '')
      filters.push({ name: 'fq', value: 'dataProvider:' + filterDataProvider });

    var filterDateCreated = $formFilters.querySelector('.valueDateCreated')?.value;
    if(filterDateCreated != null && filterDateCreated !== '')
      filters.push({ name: 'fq', value: 'dateCreated:' + filterDateCreated });

    var filterDateModified = $formFilters.querySelector('.valueDateModified')?.value;
    if(filterDateModified != null && filterDateModified !== '')
      filters.push({ name: 'fq', value: 'dateModified:' + filterDateModified });

    var filterFishRemoved = $formFilters.querySelector('.valueFishRemoved')?.value;
    if(filterFishRemoved != null && filterFishRemoved !== '')
      filters.push({ name: 'fq', value: 'fishRemoved:' + filterFishRemoved });

    var filterInitialNumber = $formFilters.querySelector('.valueInitialNumber')?.value;
    if(filterInitialNumber != null && filterInitialNumber !== '')
      filters.push({ name: 'fq', value: 'initialNumber:' + filterInitialNumber });

    var filterOwner = $formFilters.querySelector('.valueOwner')?.value;
    if(filterOwner != null && filterOwner !== '')
      filters.push({ name: 'fq', value: 'owner:' + filterOwner });

    var filterRefSpecie = $formFilters.querySelector('.valueRefSpecie')?.value;
    if(filterRefSpecie != null && filterRefSpecie !== '')
      filters.push({ name: 'fq', value: 'refSpecie:' + filterRefSpecie });

    var filterRelatedSource = $formFilters.querySelector('.valueRelatedSource')?.value;
    if(filterRelatedSource != null && filterRelatedSource !== '')
      filters.push({ name: 'fq', value: 'relatedSource:' + filterRelatedSource });

    var filterSeeAlso = $formFilters.querySelector('.valueSeeAlso')?.value;
    if(filterSeeAlso != null && filterSeeAlso !== '')
      filters.push({ name: 'fq', value: 'seeAlso:' + filterSeeAlso });

    var filterSource = $formFilters.querySelector('.valueSource')?.value;
    if(filterSource != null && filterSource !== '')
      filters.push({ name: 'fq', value: 'source:' + filterSource });

    var filterMaturityDaysBegin = $formFilters.querySelector('.valueMaturityDaysBegin')?.value;
    if(filterMaturityDaysBegin != null && filterMaturityDaysBegin !== '')
      filters.push({ name: 'fq', value: 'maturityDaysBegin:' + filterMaturityDaysBegin });

    var filterMaturityDaysEnd = $formFilters.querySelector('.valueMaturityDaysEnd')?.value;
    if(filterMaturityDaysEnd != null && filterMaturityDaysEnd !== '')
      filters.push({ name: 'fq', value: 'maturityDaysEnd:' + filterMaturityDaysEnd });

    var filterIncubationDaysBegin = $formFilters.querySelector('.valueIncubationDaysBegin')?.value;
    if(filterIncubationDaysBegin != null && filterIncubationDaysBegin !== '')
      filters.push({ name: 'fq', value: 'incubationDaysBegin:' + filterIncubationDaysBegin });

    var filterIncubationDaysEnd = $formFilters.querySelector('.valueIncubationDaysEnd')?.value;
    if(filterIncubationDaysEnd != null && filterIncubationDaysEnd !== '')
      filters.push({ name: 'fq', value: 'incubationDaysEnd:' + filterIncubationDaysEnd });

    var filterIncubationNumberMin = $formFilters.querySelector('.valueIncubationNumberMin')?.value;
    if(filterIncubationNumberMin != null && filterIncubationNumberMin !== '')
      filters.push({ name: 'fq', value: 'incubationNumberMin:' + filterIncubationNumberMin });

    var filterIncubationNumberMax = $formFilters.querySelector('.valueIncubationNumberMax')?.value;
    if(filterIncubationNumberMax != null && filterIncubationNumberMax !== '')
      filters.push({ name: 'fq', value: 'incubationNumberMax:' + filterIncubationNumberMax });

    var filterPercentPopulationPregnantMin = $formFilters.querySelector('.valuePercentPopulationPregnantMin')?.value;
    if(filterPercentPopulationPregnantMin != null && filterPercentPopulationPregnantMin !== '')
      filters.push({ name: 'fq', value: 'percentPopulationPregnantMin:' + filterPercentPopulationPregnantMin });

    var filterPercentPopulationPregnantMax = $formFilters.querySelector('.valuePercentPopulationPregnantMax')?.value;
    if(filterPercentPopulationPregnantMax != null && filterPercentPopulationPregnantMax !== '')
      filters.push({ name: 'fq', value: 'percentPopulationPregnantMax:' + filterPercentPopulationPregnantMax });

    var filterPopulationsAtBirth = $formFilters.querySelector('.valuePopulationsAtBirth')?.value;
    if(filterPopulationsAtBirth != null && filterPopulationsAtBirth !== '')
      filters.push({ name: 'fq', value: 'populationsAtBirth:' + filterPopulationsAtBirth });

    var filterPopulationsNow = $formFilters.querySelector('.valuePopulationsNow')?.value;
    if(filterPopulationsNow != null && filterPopulationsNow !== '')
      filters.push({ name: 'fq', value: 'populationsNow:' + filterPopulationsNow });

    var filterIncubationDate = $formFilters.querySelector('.valueIncubationDate')?.value;
    if(filterIncubationDate != null && filterIncubationDate !== '')
      filters.push({ name: 'fq', value: 'incubationDate:' + filterIncubationDate });

    var filterIncubationDaysNow = $formFilters.querySelector('.valueIncubationDaysNow')?.value;
    if(filterIncubationDaysNow != null && filterIncubationDaysNow !== '')
      filters.push({ name: 'fq', value: 'incubationDaysNow:' + filterIncubationDaysNow });

    var filterPreviousPopulation = $formFilters.querySelector('.valuePreviousPopulation')?.value;
    if(filterPreviousPopulation != null && filterPreviousPopulation !== '')
      filters.push({ name: 'fq', value: 'previousPopulation:' + filterPreviousPopulation });

    var filterWaterTemperature = $formFilters.querySelector('.valueWaterTemperature')?.value;
    if(filterWaterTemperature != null && filterWaterTemperature !== '')
      filters.push({ name: 'fq', value: 'waterTemperature:' + filterWaterTemperature });

    var filterWaterSalinity = $formFilters.querySelector('.valueWaterSalinity')?.value;
    if(filterWaterSalinity != null && filterWaterSalinity !== '')
      filters.push({ name: 'fq', value: 'waterSalinity:' + filterWaterSalinity });

    var filterWaterOxygen = $formFilters.querySelector('.valueWaterOxygen')?.value;
    if(filterWaterOxygen != null && filterWaterOxygen !== '')
      filters.push({ name: 'fq', value: 'waterOxygen:' + filterWaterOxygen });

    var filterWaterPh = $formFilters.querySelector('.valueWaterPh')?.value;
    if(filterWaterPh != null && filterWaterPh !== '')
      filters.push({ name: 'fq', value: 'waterPh:' + filterWaterPh });

    var $filterSimulationCheckbox = $formFilters.querySelector('input.valueSimulation[type = "checkbox"]');
    var $filterSimulationSelect = $formFilters.querySelector('select.valueSimulation');
    var filterSimulation = $filterSimulationSelect.length ? $filterSimulationSelect.value : $filterSimulationCheckbox.checked;
    var filterSimulationSelectVal = $formFilters.querySelector('select.filterSimulation')?.value;
    var filterSimulation = null;
    if(filterSimulationSelectVal !== '')
      filterSimulation = filterSimulationSelectVal == 'true';
    if(filterSimulation != null && filterSimulation === true)
      filters.push({ name: 'fq', value: 'simulation:' + filterSimulation });

    var filterSimulationDelayMillis = $formFilters.querySelector('.valueSimulationDelayMillis')?.value;
    if(filterSimulationDelayMillis != null && filterSimulationDelayMillis !== '')
      filters.push({ name: 'fq', value: 'simulationDelayMillis:' + filterSimulationDelayMillis });

    var filterEntityShortId = $formFilters.querySelector('.valueEntityShortId')?.value;
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });

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

    var filterAreaServedColors = $formFilters.querySelector('.valueAreaServedColors')?.value;
    if(filterAreaServedColors != null && filterAreaServedColors !== '')
      filters.push({ name: 'fq', value: 'areaServedColors:' + filterAreaServedColors });

    var filterAreaServedTitles = $formFilters.querySelector('.valueAreaServedTitles')?.value;
    if(filterAreaServedTitles != null && filterAreaServedTitles !== '')
      filters.push({ name: 'fq', value: 'areaServedTitles:' + filterAreaServedTitles });
  }
  return filters;
}

function patchFishPopulationVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchFishPopulationVals(filters, vals, target, success, error);
}

function patchFishPopulationVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/fish-population?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postFishPopulation($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPageFrFR'];
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

  var valueAreaServed = $formValues.querySelector('.valueAreaServed')?.value;
  if(valueAreaServed != null && valueAreaServed !== '')
    vals['areaServed'] = JSON.parse(valueAreaServed);

  var valueScientificName = $formValues.querySelector('.valueScientificName')?.value;
  if(valueScientificName != null && valueScientificName !== '')
    vals['scientificName'] = valueScientificName;

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

  var valueBodyMasse = $formValues.querySelector('.valueBodyMasse')?.value;
  if(valueBodyMasse != null && valueBodyMasse !== '')
    vals['bodyMasse'] = valueBodyMasse;

  var valueCulturedIn = $formValues.querySelector('.valueCulturedIn')?.value;
  if(valueCulturedIn != null && valueCulturedIn !== '')
    vals['culturedIn'] = valueCulturedIn;

  var valueDataProvider = $formValues.querySelector('.valueDataProvider')?.value;
  if(valueDataProvider != null && valueDataProvider !== '')
    vals['dataProvider'] = valueDataProvider;

  var valueDateCreated = $formValues.querySelector('.valueDateCreated')?.value;
  if(valueDateCreated != null && valueDateCreated !== '')
    vals['dateCreated'] = valueDateCreated;

  var valueDateModified = $formValues.querySelector('.valueDateModified')?.value;
  if(valueDateModified != null && valueDateModified !== '')
    vals['dateModified'] = valueDateModified;

  var valueFishRemoved = $formValues.querySelector('.valueFishRemoved')?.value;
  if(valueFishRemoved != null && valueFishRemoved !== '')
    vals['fishRemoved'] = valueFishRemoved;

  var valueInitialNumber = $formValues.querySelector('.valueInitialNumber')?.value;
  if(valueInitialNumber != null && valueInitialNumber !== '')
    vals['initialNumber'] = valueInitialNumber;

  var valueOwner = $formValues.querySelector('.valueOwner')?.value;
  if(valueOwner != null && valueOwner !== '')
    vals['owner'] = JSON.parse(valueOwner);

  var valueRefSpecie = $formValues.querySelector('.valueRefSpecie')?.value;
  if(valueRefSpecie != null && valueRefSpecie !== '')
    vals['refSpecie'] = valueRefSpecie;

  var valueRelatedSource = $formValues.querySelector('.valueRelatedSource')?.value;
  if(valueRelatedSource != null && valueRelatedSource !== '')
    vals['relatedSource'] = JSON.parse(valueRelatedSource);

  var valueSeeAlso = $formValues.querySelector('.valueSeeAlso')?.value;
  if(valueSeeAlso != null && valueSeeAlso !== '')
    vals['seeAlso'] = valueSeeAlso;

  var valueSource = $formValues.querySelector('.valueSource')?.value;
  if(valueSource != null && valueSource !== '')
    vals['source'] = valueSource;

  var valueMaturityDaysBegin = $formValues.querySelector('.valueMaturityDaysBegin')?.value;
  if(valueMaturityDaysBegin != null && valueMaturityDaysBegin !== '')
    vals['maturityDaysBegin'] = valueMaturityDaysBegin;

  var valueMaturityDaysEnd = $formValues.querySelector('.valueMaturityDaysEnd')?.value;
  if(valueMaturityDaysEnd != null && valueMaturityDaysEnd !== '')
    vals['maturityDaysEnd'] = valueMaturityDaysEnd;

  var valueIncubationDaysBegin = $formValues.querySelector('.valueIncubationDaysBegin')?.value;
  if(valueIncubationDaysBegin != null && valueIncubationDaysBegin !== '')
    vals['incubationDaysBegin'] = valueIncubationDaysBegin;

  var valueIncubationDaysEnd = $formValues.querySelector('.valueIncubationDaysEnd')?.value;
  if(valueIncubationDaysEnd != null && valueIncubationDaysEnd !== '')
    vals['incubationDaysEnd'] = valueIncubationDaysEnd;

  var valueIncubationNumberMin = $formValues.querySelector('.valueIncubationNumberMin')?.value;
  if(valueIncubationNumberMin != null && valueIncubationNumberMin !== '')
    vals['incubationNumberMin'] = valueIncubationNumberMin;

  var valueIncubationNumberMax = $formValues.querySelector('.valueIncubationNumberMax')?.value;
  if(valueIncubationNumberMax != null && valueIncubationNumberMax !== '')
    vals['incubationNumberMax'] = valueIncubationNumberMax;

  var valuePercentPopulationPregnantMin = $formValues.querySelector('.valuePercentPopulationPregnantMin')?.value;
  if(valuePercentPopulationPregnantMin != null && valuePercentPopulationPregnantMin !== '')
    vals['percentPopulationPregnantMin'] = valuePercentPopulationPregnantMin;

  var valuePercentPopulationPregnantMax = $formValues.querySelector('.valuePercentPopulationPregnantMax')?.value;
  if(valuePercentPopulationPregnantMax != null && valuePercentPopulationPregnantMax !== '')
    vals['percentPopulationPregnantMax'] = valuePercentPopulationPregnantMax;

  var valuePopulationsAtBirth = $formValues.querySelector('.valuePopulationsAtBirth')?.value;
  if(valuePopulationsAtBirth != null && valuePopulationsAtBirth !== '')
    vals['populationsAtBirth'] = JSON.parse(valuePopulationsAtBirth);

  var valuePopulationsNow = $formValues.querySelector('.valuePopulationsNow')?.value;
  if(valuePopulationsNow != null && valuePopulationsNow !== '')
    vals['populationsNow'] = JSON.parse(valuePopulationsNow);

  var valueIncubationDate = $formValues.querySelector('.valueIncubationDate')?.value;
  if(valueIncubationDate != null && valueIncubationDate !== '')
    vals['incubationDate'] = valueIncubationDate;

  var valueIncubationDaysNow = $formValues.querySelector('.valueIncubationDaysNow')?.value;
  if(valueIncubationDaysNow != null && valueIncubationDaysNow !== '')
    vals['incubationDaysNow'] = valueIncubationDaysNow;

  var valuePreviousPopulation = $formValues.querySelector('.valuePreviousPopulation')?.value;
  if(valuePreviousPopulation != null && valuePreviousPopulation !== '')
    vals['previousPopulation'] = valuePreviousPopulation;

  var valueWaterTemperature = $formValues.querySelector('.valueWaterTemperature')?.value;
  if(valueWaterTemperature != null && valueWaterTemperature !== '')
    vals['waterTemperature'] = valueWaterTemperature;

  var valueWaterSalinity = $formValues.querySelector('.valueWaterSalinity')?.value;
  if(valueWaterSalinity != null && valueWaterSalinity !== '')
    vals['waterSalinity'] = valueWaterSalinity;

  var valueWaterOxygen = $formValues.querySelector('.valueWaterOxygen')?.value;
  if(valueWaterOxygen != null && valueWaterOxygen !== '')
    vals['waterOxygen'] = valueWaterOxygen;

  var valueWaterPh = $formValues.querySelector('.valueWaterPh')?.value;
  if(valueWaterPh != null && valueWaterPh !== '')
    vals['waterPh'] = valueWaterPh;

  var valueSimulation = $formValues.querySelector('.valueSimulation')?.value;
  if(valueSimulation != null && valueSimulation !== '')
    vals['simulation'] = valueSimulation == 'true';

  var valueSimulationDelayMillis = $formValues.querySelector('.valueSimulationDelayMillis')?.value;
  if(valueSimulationDelayMillis != null && valueSimulationDelayMillis !== '')
    vals['simulationDelayMillis'] = valueSimulationDelayMillis;

  var valueEntityShortId = $formValues.querySelector('.valueEntityShortId')?.value;
  if(valueEntityShortId != null && valueEntityShortId !== '')
    vals['entityShortId'] = valueEntityShortId;

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

  fetch(
    '/en-us/api/fish-population'
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

function postFishPopulationVals(vals, target, success, error) {
  fetch(
    '/en-us/api/fish-population'
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

async function deleteFishPopulation(target, entityShortId, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPageFrFR'];
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
    '/en-us/api/fish-population/' + encodeURIComponent(entityShortId)
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

async function putimportFishPopulation($formValues, target, entityShortId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportFishPopulationVals(JSON.parse(json), target, success, error);
}

function putimportFishPopulationVals(json, target, success, error) {
  fetch(
    '/en-us/api/fish-population-import'
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

async function deletefilterFishPopulation(target, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPageFrFR'];
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
    '/en-us/api/fish-population'
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
