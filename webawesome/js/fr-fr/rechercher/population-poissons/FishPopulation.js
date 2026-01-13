
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
      $headerSpan.innerText = 'modify population de poissons in ' + json.timeRemaining;
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
  var entityShortId = requeteApi['id'];
  var classes = requeteApi['classes'];
  var vars = requeteApi['vars'];
  var empty = requeteApi['empty'];

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
        var inputClassCanonicalNames = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputEditPage = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputSessionId = null;
        var inputObjectTitle = null;
        var inputDisplayPage = null;
        var inputUserPage = null;
        var inputDownload = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputSolrId = null;
        var inputEntityShortId = null;
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
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Page_classCanonicalNames');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Page_saves');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Page_editPage');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Page_classSimpleName');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.Page_sessionId');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Page_displayPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Page_solrId');
        if(vars.includes('entityShortId'))
          inputEntityShortId = $response.querySelector('.Page_entityShortId');
        if(vars.includes('areaServedColors'))
          inputAreaServedColors = $response.querySelector('.Page_areaServedColors');
        if(vars.includes('areaServedTitles'))
          inputAreaServedTitles = $response.querySelector('.Page_areaServedTitles');

        jsWebsocketFishPopulation(entityShortId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageFormulaire .result')?.value);
        window.listeFishPopulation = JSON.parse($response.querySelector('.pageFormulaire .listeFishPopulation')?.value);


        if(inputPk) {
          document.querySelectorAll('.Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          ajouterLueur(document.querySelector('.Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          ajouterLueur(document.querySelector('.Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          ajouterLueur(document.querySelector('.Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          ajouterLueur(document.querySelector('.Page_archived'));
        }

        if(inputName) {
          document.querySelectorAll('.Page_name').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputName.getAttribute('value');
            else
              item.textContent = inputName.textContent;
          });
          ajouterLueur(document.querySelector('.Page_name'));
        }

        if(inputDescription) {
          document.querySelectorAll('.Page_description').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDescription.getAttribute('value');
            else
              item.textContent = inputDescription.textContent;
          });
          ajouterLueur(document.querySelector('.Page_description'));
        }

        if(inputLocation) {
          document.querySelectorAll('.Page_location').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocation.getAttribute('value');
            else
              item.textContent = inputLocation.textContent;
          });
          ajouterLueur(document.querySelector('.Page_location'));
        }

        if(inputColor) {
          document.querySelectorAll('.Page_color').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputColor.getAttribute('value');
            else
              item.textContent = inputColor.textContent;
          });
          ajouterLueur(document.querySelector('.Page_color'));
        }

        if(inputAreaServed) {
          document.querySelectorAll('.Page_areaServed').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAreaServed.getAttribute('value');
            else
              item.textContent = inputAreaServed.textContent;
          });
          ajouterLueur(document.querySelector('.Page_areaServed'));
        }

        if(inputScientificName) {
          document.querySelectorAll('.Page_scientificName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputScientificName.getAttribute('value');
            else
              item.textContent = inputScientificName.textContent;
          });
          ajouterLueur(document.querySelector('.Page_scientificName'));
        }

        if(inputId) {
          document.querySelectorAll('.Page_id').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputId.getAttribute('value');
            else
              item.textContent = inputId.textContent;
          });
          ajouterLueur(document.querySelector('.Page_id'));
        }

        if(inputNgsildTenant) {
          document.querySelectorAll('.Page_ngsildTenant').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildTenant.getAttribute('value');
            else
              item.textContent = inputNgsildTenant.textContent;
          });
          ajouterLueur(document.querySelector('.Page_ngsildTenant'));
        }

        if(inputNgsildPath) {
          document.querySelectorAll('.Page_ngsildPath').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildPath.getAttribute('value');
            else
              item.textContent = inputNgsildPath.textContent;
          });
          ajouterLueur(document.querySelector('.Page_ngsildPath'));
        }

        if(inputNgsildContext) {
          document.querySelectorAll('.Page_ngsildContext').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildContext.getAttribute('value');
            else
              item.textContent = inputNgsildContext.textContent;
          });
          ajouterLueur(document.querySelector('.Page_ngsildContext'));
        }

        if(inputNgsildData) {
          document.querySelectorAll('.Page_ngsildData').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputNgsildData.getAttribute('value');
            else
              item.textContent = inputNgsildData.textContent;
          });
          ajouterLueur(document.querySelector('.Page_ngsildData'));
        }

        if(inputAddress) {
          document.querySelectorAll('.Page_address').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAddress.getAttribute('value');
            else
              item.textContent = inputAddress.textContent;
          });
          ajouterLueur(document.querySelector('.Page_address'));
        }

        if(inputAlternateName) {
          document.querySelectorAll('.Page_alternateName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAlternateName.getAttribute('value');
            else
              item.textContent = inputAlternateName.textContent;
          });
          ajouterLueur(document.querySelector('.Page_alternateName'));
        }

        if(inputBodyMasse) {
          document.querySelectorAll('.Page_bodyMasse').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputBodyMasse.getAttribute('value');
            else
              item.textContent = inputBodyMasse.textContent;
          });
          ajouterLueur(document.querySelector('.Page_bodyMasse'));
        }

        if(inputCulturedIn) {
          document.querySelectorAll('.Page_culturedIn').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCulturedIn.getAttribute('value');
            else
              item.textContent = inputCulturedIn.textContent;
          });
          ajouterLueur(document.querySelector('.Page_culturedIn'));
        }

        if(inputDataProvider) {
          document.querySelectorAll('.Page_dataProvider').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDataProvider.getAttribute('value');
            else
              item.textContent = inputDataProvider.textContent;
          });
          ajouterLueur(document.querySelector('.Page_dataProvider'));
        }

        if(inputDateCreated) {
          document.querySelectorAll('.Page_dateCreated').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateCreated.getAttribute('value');
            else
              item.textContent = inputDateCreated.textContent;
          });
          ajouterLueur(document.querySelector('.Page_dateCreated'));
        }

        if(inputDateModified) {
          document.querySelectorAll('.Page_dateModified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDateModified.getAttribute('value');
            else
              item.textContent = inputDateModified.textContent;
          });
          ajouterLueur(document.querySelector('.Page_dateModified'));
        }

        if(inputFishRemoved) {
          document.querySelectorAll('.Page_fishRemoved').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputFishRemoved.getAttribute('value');
            else
              item.textContent = inputFishRemoved.textContent;
          });
          ajouterLueur(document.querySelector('.Page_fishRemoved'));
        }

        if(inputInitialNumber) {
          document.querySelectorAll('.Page_initialNumber').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputInitialNumber.getAttribute('value');
            else
              item.textContent = inputInitialNumber.textContent;
          });
          ajouterLueur(document.querySelector('.Page_initialNumber'));
        }

        if(inputOwner) {
          document.querySelectorAll('.Page_owner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputOwner.getAttribute('value');
            else
              item.textContent = inputOwner.textContent;
          });
          ajouterLueur(document.querySelector('.Page_owner'));
        }

        if(inputRefSpecie) {
          document.querySelectorAll('.Page_refSpecie').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRefSpecie.getAttribute('value');
            else
              item.textContent = inputRefSpecie.textContent;
          });
          ajouterLueur(document.querySelector('.Page_refSpecie'));
        }

        if(inputRelatedSource) {
          document.querySelectorAll('.Page_relatedSource').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputRelatedSource.getAttribute('value');
            else
              item.textContent = inputRelatedSource.textContent;
          });
          ajouterLueur(document.querySelector('.Page_relatedSource'));
        }

        if(inputSeeAlso) {
          document.querySelectorAll('.Page_seeAlso').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSeeAlso.getAttribute('value');
            else
              item.textContent = inputSeeAlso.textContent;
          });
          ajouterLueur(document.querySelector('.Page_seeAlso'));
        }

        if(inputSource) {
          document.querySelectorAll('.Page_source').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSource.getAttribute('value');
            else
              item.textContent = inputSource.textContent;
          });
          ajouterLueur(document.querySelector('.Page_source'));
        }

        if(inputMaturityDaysBegin) {
          document.querySelectorAll('.Page_maturityDaysBegin').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMaturityDaysBegin.getAttribute('value');
            else
              item.textContent = inputMaturityDaysBegin.textContent;
          });
          ajouterLueur(document.querySelector('.Page_maturityDaysBegin'));
        }

        if(inputMaturityDaysEnd) {
          document.querySelectorAll('.Page_maturityDaysEnd').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMaturityDaysEnd.getAttribute('value');
            else
              item.textContent = inputMaturityDaysEnd.textContent;
          });
          ajouterLueur(document.querySelector('.Page_maturityDaysEnd'));
        }

        if(inputIncubationDaysBegin) {
          document.querySelectorAll('.Page_incubationDaysBegin').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationDaysBegin.getAttribute('value');
            else
              item.textContent = inputIncubationDaysBegin.textContent;
          });
          ajouterLueur(document.querySelector('.Page_incubationDaysBegin'));
        }

        if(inputIncubationDaysEnd) {
          document.querySelectorAll('.Page_incubationDaysEnd').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationDaysEnd.getAttribute('value');
            else
              item.textContent = inputIncubationDaysEnd.textContent;
          });
          ajouterLueur(document.querySelector('.Page_incubationDaysEnd'));
        }

        if(inputIncubationNumberMin) {
          document.querySelectorAll('.Page_incubationNumberMin').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationNumberMin.getAttribute('value');
            else
              item.textContent = inputIncubationNumberMin.textContent;
          });
          ajouterLueur(document.querySelector('.Page_incubationNumberMin'));
        }

        if(inputIncubationNumberMax) {
          document.querySelectorAll('.Page_incubationNumberMax').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationNumberMax.getAttribute('value');
            else
              item.textContent = inputIncubationNumberMax.textContent;
          });
          ajouterLueur(document.querySelector('.Page_incubationNumberMax'));
        }

        if(inputPercentPopulationPregnantMin) {
          document.querySelectorAll('.Page_percentPopulationPregnantMin').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPercentPopulationPregnantMin.getAttribute('value');
            else
              item.textContent = inputPercentPopulationPregnantMin.textContent;
          });
          ajouterLueur(document.querySelector('.Page_percentPopulationPregnantMin'));
        }

        if(inputPercentPopulationPregnantMax) {
          document.querySelectorAll('.Page_percentPopulationPregnantMax').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPercentPopulationPregnantMax.getAttribute('value');
            else
              item.textContent = inputPercentPopulationPregnantMax.textContent;
          });
          ajouterLueur(document.querySelector('.Page_percentPopulationPregnantMax'));
        }

        if(inputPopulationsAtBirth) {
          document.querySelectorAll('.Page_populationsAtBirth').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPopulationsAtBirth.getAttribute('value');
            else
              item.textContent = inputPopulationsAtBirth.textContent;
          });
          ajouterLueur(document.querySelector('.Page_populationsAtBirth'));
        }

        if(inputPopulationsNow) {
          document.querySelectorAll('.Page_populationsNow').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPopulationsNow.getAttribute('value');
            else
              item.textContent = inputPopulationsNow.textContent;
          });
          ajouterLueur(document.querySelector('.Page_populationsNow'));
        }

        if(inputIncubationDate) {
          document.querySelectorAll('.Page_incubationDate').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationDate.getAttribute('value');
            else
              item.textContent = inputIncubationDate.textContent;
          });
          ajouterLueur(document.querySelector('.Page_incubationDate'));
        }

        if(inputIncubationDaysNow) {
          document.querySelectorAll('.Page_incubationDaysNow').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputIncubationDaysNow.getAttribute('value');
            else
              item.textContent = inputIncubationDaysNow.textContent;
          });
          ajouterLueur(document.querySelector('.Page_incubationDaysNow'));
        }

        if(inputPreviousPopulation) {
          document.querySelectorAll('.Page_previousPopulation').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPreviousPopulation.getAttribute('value');
            else
              item.textContent = inputPreviousPopulation.textContent;
          });
          ajouterLueur(document.querySelector('.Page_previousPopulation'));
        }

        if(inputWaterTemperature) {
          document.querySelectorAll('.Page_waterTemperature').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWaterTemperature.getAttribute('value');
            else
              item.textContent = inputWaterTemperature.textContent;
          });
          ajouterLueur(document.querySelector('.Page_waterTemperature'));
        }

        if(inputWaterSalinity) {
          document.querySelectorAll('.Page_waterSalinity').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWaterSalinity.getAttribute('value');
            else
              item.textContent = inputWaterSalinity.textContent;
          });
          ajouterLueur(document.querySelector('.Page_waterSalinity'));
        }

        if(inputWaterOxygen) {
          document.querySelectorAll('.Page_waterOxygen').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWaterOxygen.getAttribute('value');
            else
              item.textContent = inputWaterOxygen.textContent;
          });
          ajouterLueur(document.querySelector('.Page_waterOxygen'));
        }

        if(inputWaterPh) {
          document.querySelectorAll('.Page_waterPh').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWaterPh.getAttribute('value');
            else
              item.textContent = inputWaterPh.textContent;
          });
          ajouterLueur(document.querySelector('.Page_waterPh'));
        }

        if(inputSimulation) {
          document.querySelectorAll('.Page_simulation').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSimulation.getAttribute('value');
            else
              item.textContent = inputSimulation.textContent;
          });
          ajouterLueur(document.querySelector('.Page_simulation'));
        }

        if(inputSimulationDelayMillis) {
          document.querySelectorAll('.Page_simulationDelayMillis').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSimulationDelayMillis.getAttribute('value');
            else
              item.textContent = inputSimulationDelayMillis.textContent;
          });
          ajouterLueur(document.querySelector('.Page_simulationDelayMillis'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          ajouterLueur(document.querySelector('.Page_classCanonicalNames'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          ajouterLueur(document.querySelector('.Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          ajouterLueur(document.querySelector('.Page_saves'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          ajouterLueur(document.querySelector('.Page_editPage'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          ajouterLueur(document.querySelector('.Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          ajouterLueur(document.querySelector('.Page_classSimpleName'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          ajouterLueur(document.querySelector('.Page_sessionId'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          ajouterLueur(document.querySelector('.Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          ajouterLueur(document.querySelector('.Page_displayPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          ajouterLueur(document.querySelector('.Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          ajouterLueur(document.querySelector('.Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          ajouterLueur(document.querySelector('.Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          ajouterLueur(document.querySelector('.Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          ajouterLueur(document.querySelector('.Page_solrId'));
        }

        if(inputEntityShortId) {
          document.querySelectorAll('.Page_entityShortId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEntityShortId.getAttribute('value');
            else
              item.textContent = inputEntityShortId.textContent;
          });
          ajouterLueur(document.querySelector('.Page_entityShortId'));
        }

        if(inputAreaServedColors) {
          document.querySelectorAll('.Page_areaServedColors').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAreaServedColors.getAttribute('value');
            else
              item.textContent = inputAreaServedColors.textContent;
          });
          ajouterLueur(document.querySelector('.Page_areaServedColors'));
        }

        if(inputAreaServedTitles) {
          document.querySelectorAll('.Page_areaServedTitles').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAreaServedTitles.getAttribute('value');
            else
              item.textContent = inputAreaServedTitles.textContent;
          });
          ajouterLueur(document.querySelector('.Page_areaServedTitles'));
        }

          pageGraphiqueFishPopulation();
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
          layout['title'] = 'population de poissons';
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
            text: 'Definir location de ' + result.
            , callback: function(event2) {
              patchFishPopulationLocation(event.layer, { coordinates: [event.layer.getLatLng()['lng'], event.layer.getLatLng()['lat']], type: "Point" });
            }
          });
        }
        if(event.layerType == 'polygon') {
          contextmenuItems.push({
            text: 'Definir areaServed de ' + result.
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
            text: 'Definir areaServed de ' + result.
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
