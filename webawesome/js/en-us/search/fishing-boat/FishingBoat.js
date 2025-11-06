
// Search //

async function searchFishingBoat($formFilters, success, error) {
  var filters = searchFishingBoatFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchFishingBoatVals(filters, target, success, error);
}

function searchFishingBoatFilters($formFilters) {
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

    var filterTimeZone = $formFilters.querySelector('.valueTimeZone')?.value;
    if(filterTimeZone != null && filterTimeZone !== '')
      filters.push({ name: 'fq', value: 'timeZone:' + filterTimeZone });

    var filterFishingDockId = $formFilters.querySelector('.valueFishingDockId')?.value;
    if(filterFishingDockId != null && filterFishingDockId !== '')
      filters.push({ name: 'fq', value: 'fishingDockId:' + filterFishingDockId });

    var filterDepartureDate = $formFilters.querySelector('.valueDepartureDate')?.value;
    if(filterDepartureDate != null && filterDepartureDate !== '')
      filters.push({ name: 'fq', value: 'departureDate:' + filterDepartureDate });

    var filterArrivalDate = $formFilters.querySelector('.valueArrivalDate')?.value;
    if(filterArrivalDate != null && filterArrivalDate !== '')
      filters.push({ name: 'fq', value: 'arrivalDate:' + filterArrivalDate });

    var filterAvgSpeedInMph = $formFilters.querySelector('.valueAvgSpeedInMph')?.value;
    if(filterAvgSpeedInMph != null && filterAvgSpeedInMph !== '')
      filters.push({ name: 'fq', value: 'avgSpeedInMph:' + filterAvgSpeedInMph });

    var filterMaxSpeedInMph = $formFilters.querySelector('.valueMaxSpeedInMph')?.value;
    if(filterMaxSpeedInMph != null && filterMaxSpeedInMph !== '')
      filters.push({ name: 'fq', value: 'maxSpeedInMph:' + filterMaxSpeedInMph });

    var filterMilesPerGallon = $formFilters.querySelector('.valueMilesPerGallon')?.value;
    if(filterMilesPerGallon != null && filterMilesPerGallon !== '')
      filters.push({ name: 'fq', value: 'milesPerGallon:' + filterMilesPerGallon });

    var filterGallonsOfGas = $formFilters.querySelector('.valueGallonsOfGas')?.value;
    if(filterGallonsOfGas != null && filterGallonsOfGas !== '')
      filters.push({ name: 'fq', value: 'gallonsOfGas:' + filterGallonsOfGas });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterPath = $formFilters.querySelector('.valuePath')?.value;
    if(filterPath != null && filterPath !== '')
      filters.push({ name: 'fq', value: 'path:' + filterPath });

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

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

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

function searchFishingBoatVals(filters, target, success, error) {


  fetch(
    '/en-us/api/fishing-boat?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestFishingBoatTimeZone(filters, $list, entityShortId = null, timeZone = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-globe"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = 
o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['id'];
        var checked = val == null ? false : (Array.isArray(val) ? val.includes(entityShortId.toString()) : val == timeZone);
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_timeZone_' + entityShortId + '_id_' + o['id']);
        $input.setAttribute('name', 'id');
        $input.setAttribute('value', o['id']);
        $input.setAttribute('class', 'valueTimeZone ');
        if(entityShortId != null) {
          $input.addEventListener('change', function(event) {
            patchFishingBoatVals([{ name: 'fq', value: 'entityShortId:' + entityShortId }], { [(event.target.checked ? 'set' : 'remove') + 'TimeZone']: o['id'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestFishingBoatTimeZone(filters, $list, entityShortId, o['id'], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchTimeZoneVals(filters, target, success, error);
}

function suggestFishingBoatFishingDockId(filters, $list, entityShortId = null, fishingDockId = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-duotone fa-regular fa-bridge-water"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = 
o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var val = o['entityShortId'];
        var checked = val == null ? false : (Array.isArray(val) ? val.includes(entityShortId.toString()) : val == fishingDockId);
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_fishingDockId_' + entityShortId + '_entityShortId_' + o['entityShortId']);
        $input.setAttribute('name', 'entityShortId');
        $input.setAttribute('value', o['entityShortId']);
        $input.setAttribute('class', 'valueFishingDockId ');
        if(entityShortId != null) {
          $input.addEventListener('change', function(event) {
            patchFishingBoatVals([{ name: 'fq', value: 'entityShortId:' + entityShortId }], { [(event.target.checked ? 'set' : 'remove') + 'FishingDockId']: o['entityShortId'] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestFishingBoatFishingDockId(filters, $list, entityShortId, o['entityShortId'], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchFishingDockVals(filters, target, success, error);
}

function suggestFishingBoatObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-duotone fa-regular fa-ship"></i>');
        var $span = document.createElement('span');        $span.setAttribute('class', '');        $span.innerText = o['objectTitle'];
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
  searchFishingBoatVals($formFilters, target, success, error);
}

// GET //

async function getFishingBoat(pk) {
  fetch(
    '/en-us/api/fishing-boat/' + entityShortId
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

async function patchFishingBoat($formFilters, $formValues, target, entityShortId, success, error) {
  var filters = patchFishingBoatFilters($formFilters);

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

  var valueTimeZone = (Array.from($formValues.querySelectorAll('.valueTimeZone')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueTimeZone != null && valueTimeZone !== '')
    vals['setTimeZone'] = valueTimeZone;

  var valueFishingDockId = (Array.from($formValues.querySelectorAll('.valueFishingDockId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueFishingDockId != null && valueFishingDockId !== '')
    vals['setFishingDockId'] = valueFishingDockId;

  var valueDepartureDate = $formValues.querySelector('.valueDepartureDate')?.value;
  var removeDepartureDate = $formValues.querySelector('.removeDepartureDate')?.value === 'true';
  var setDepartureDate = removeDepartureDate ? null : $formValues.querySelector('.setDepartureDate')?.value;
  var addDepartureDate = $formValues.querySelector('.addDepartureDate')?.value;
  if(removeDepartureDate || setDepartureDate != null && setDepartureDate !== '')
    vals['setDepartureDate'] = setDepartureDate;
  if(addDepartureDate != null && addDepartureDate !== '')
    vals['addDepartureDate'] = addDepartureDate;
  var removeDepartureDate = $formValues.querySelector('.removeDepartureDate')?.value;
  if(removeDepartureDate != null && removeDepartureDate !== '')
    vals['removeDepartureDate'] = removeDepartureDate;

  var valueArrivalDate = $formValues.querySelector('.valueArrivalDate')?.value;
  var removeArrivalDate = $formValues.querySelector('.removeArrivalDate')?.value === 'true';
  var setArrivalDate = removeArrivalDate ? null : $formValues.querySelector('.setArrivalDate')?.value;
  var addArrivalDate = $formValues.querySelector('.addArrivalDate')?.value;
  if(removeArrivalDate || setArrivalDate != null && setArrivalDate !== '')
    vals['setArrivalDate'] = setArrivalDate;
  if(addArrivalDate != null && addArrivalDate !== '')
    vals['addArrivalDate'] = addArrivalDate;
  var removeArrivalDate = $formValues.querySelector('.removeArrivalDate')?.value;
  if(removeArrivalDate != null && removeArrivalDate !== '')
    vals['removeArrivalDate'] = removeArrivalDate;

  var valueAvgSpeedInMph = $formValues.querySelector('.valueAvgSpeedInMph')?.value;
  var removeAvgSpeedInMph = $formValues.querySelector('.removeAvgSpeedInMph')?.value === 'true';
  var setAvgSpeedInMph = removeAvgSpeedInMph ? null : $formValues.querySelector('.setAvgSpeedInMph')?.value;
  var addAvgSpeedInMph = $formValues.querySelector('.addAvgSpeedInMph')?.value;
  if(removeAvgSpeedInMph || setAvgSpeedInMph != null && setAvgSpeedInMph !== '')
    vals['setAvgSpeedInMph'] = setAvgSpeedInMph;
  if(addAvgSpeedInMph != null && addAvgSpeedInMph !== '')
    vals['addAvgSpeedInMph'] = addAvgSpeedInMph;
  var removeAvgSpeedInMph = $formValues.querySelector('.removeAvgSpeedInMph')?.value;
  if(removeAvgSpeedInMph != null && removeAvgSpeedInMph !== '')
    vals['removeAvgSpeedInMph'] = removeAvgSpeedInMph;

  var valueMaxSpeedInMph = $formValues.querySelector('.valueMaxSpeedInMph')?.value;
  var removeMaxSpeedInMph = $formValues.querySelector('.removeMaxSpeedInMph')?.value === 'true';
  var setMaxSpeedInMph = removeMaxSpeedInMph ? null : $formValues.querySelector('.setMaxSpeedInMph')?.value;
  var addMaxSpeedInMph = $formValues.querySelector('.addMaxSpeedInMph')?.value;
  if(removeMaxSpeedInMph || setMaxSpeedInMph != null && setMaxSpeedInMph !== '')
    vals['setMaxSpeedInMph'] = setMaxSpeedInMph;
  if(addMaxSpeedInMph != null && addMaxSpeedInMph !== '')
    vals['addMaxSpeedInMph'] = addMaxSpeedInMph;
  var removeMaxSpeedInMph = $formValues.querySelector('.removeMaxSpeedInMph')?.value;
  if(removeMaxSpeedInMph != null && removeMaxSpeedInMph !== '')
    vals['removeMaxSpeedInMph'] = removeMaxSpeedInMph;

  var valueMilesPerGallon = $formValues.querySelector('.valueMilesPerGallon')?.value;
  var removeMilesPerGallon = $formValues.querySelector('.removeMilesPerGallon')?.value === 'true';
  var setMilesPerGallon = removeMilesPerGallon ? null : $formValues.querySelector('.setMilesPerGallon')?.value;
  var addMilesPerGallon = $formValues.querySelector('.addMilesPerGallon')?.value;
  if(removeMilesPerGallon || setMilesPerGallon != null && setMilesPerGallon !== '')
    vals['setMilesPerGallon'] = setMilesPerGallon;
  if(addMilesPerGallon != null && addMilesPerGallon !== '')
    vals['addMilesPerGallon'] = addMilesPerGallon;
  var removeMilesPerGallon = $formValues.querySelector('.removeMilesPerGallon')?.value;
  if(removeMilesPerGallon != null && removeMilesPerGallon !== '')
    vals['removeMilesPerGallon'] = removeMilesPerGallon;

  var valueGallonsOfGas = $formValues.querySelector('.valueGallonsOfGas')?.value;
  var removeGallonsOfGas = $formValues.querySelector('.removeGallonsOfGas')?.value === 'true';
  var setGallonsOfGas = removeGallonsOfGas ? null : $formValues.querySelector('.setGallonsOfGas')?.value;
  var addGallonsOfGas = $formValues.querySelector('.addGallonsOfGas')?.value;
  if(removeGallonsOfGas || setGallonsOfGas != null && setGallonsOfGas !== '')
    vals['setGallonsOfGas'] = setGallonsOfGas;
  if(addGallonsOfGas != null && addGallonsOfGas !== '')
    vals['addGallonsOfGas'] = addGallonsOfGas;
  var removeGallonsOfGas = $formValues.querySelector('.removeGallonsOfGas')?.value;
  if(removeGallonsOfGas != null && removeGallonsOfGas !== '')
    vals['removeGallonsOfGas'] = removeGallonsOfGas;

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

  var valuePath = $formValues.querySelector('.valuePath')?.value;
  var removePath = $formValues.querySelector('.removePath')?.value === 'true';
  var setPath = removePath ? null : $formValues.querySelector('.setPath')?.value;
  var addPath = $formValues.querySelector('.addPath')?.value;
  if(removePath || setPath != null && setPath !== '')
    vals['setPath'] = JSON.parse(setPath);
  if(addPath != null && addPath !== '')
    vals['addPath'] = addPath;
  var removePath = $formValues.querySelector('.removePath')?.value;
  if(removePath != null && removePath !== '')
    vals['removePath'] = removePath;

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

  patchFishingBoatVals(entityShortId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'entityShortId:' + entityShortId}], vals, target, success, error);
}

function patchFishingBoatFilters($formFilters) {
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

    var filterTimeZone = $formFilters.querySelector('.valueTimeZone')?.value;
    if(filterTimeZone != null && filterTimeZone !== '')
      filters.push({ name: 'fq', value: 'timeZone:' + filterTimeZone });

    var filterFishingDockId = $formFilters.querySelector('.valueFishingDockId')?.value;
    if(filterFishingDockId != null && filterFishingDockId !== '')
      filters.push({ name: 'fq', value: 'fishingDockId:' + filterFishingDockId });

    var filterDepartureDate = $formFilters.querySelector('.valueDepartureDate')?.value;
    if(filterDepartureDate != null && filterDepartureDate !== '')
      filters.push({ name: 'fq', value: 'departureDate:' + filterDepartureDate });

    var filterArrivalDate = $formFilters.querySelector('.valueArrivalDate')?.value;
    if(filterArrivalDate != null && filterArrivalDate !== '')
      filters.push({ name: 'fq', value: 'arrivalDate:' + filterArrivalDate });

    var filterAvgSpeedInMph = $formFilters.querySelector('.valueAvgSpeedInMph')?.value;
    if(filterAvgSpeedInMph != null && filterAvgSpeedInMph !== '')
      filters.push({ name: 'fq', value: 'avgSpeedInMph:' + filterAvgSpeedInMph });

    var filterMaxSpeedInMph = $formFilters.querySelector('.valueMaxSpeedInMph')?.value;
    if(filterMaxSpeedInMph != null && filterMaxSpeedInMph !== '')
      filters.push({ name: 'fq', value: 'maxSpeedInMph:' + filterMaxSpeedInMph });

    var filterMilesPerGallon = $formFilters.querySelector('.valueMilesPerGallon')?.value;
    if(filterMilesPerGallon != null && filterMilesPerGallon !== '')
      filters.push({ name: 'fq', value: 'milesPerGallon:' + filterMilesPerGallon });

    var filterGallonsOfGas = $formFilters.querySelector('.valueGallonsOfGas')?.value;
    if(filterGallonsOfGas != null && filterGallonsOfGas !== '')
      filters.push({ name: 'fq', value: 'gallonsOfGas:' + filterGallonsOfGas });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterLocation = $formFilters.querySelector('.valueLocation')?.value;
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterPath = $formFilters.querySelector('.valuePath')?.value;
    if(filterPath != null && filterPath !== '')
      filters.push({ name: 'fq', value: 'path:' + filterPath });

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

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

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

function patchFishingBoatVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchFishingBoatVals(filters, vals, target, success, error);
}

function patchFishingBoatVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/fishing-boat?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postFishingBoat($formValues, target, success, error) {
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
      addError(target, jqXhr);
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

  var valueTimeZone = (Array.from($formValues.querySelectorAll('.valueTimeZone')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueTimeZone != null && valueTimeZone !== '')
    vals['timeZone'] = valueTimeZone;

  var valueFishingDockId = (Array.from($formValues.querySelectorAll('.valueFishingDockId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueFishingDockId != null && valueFishingDockId !== '')
    vals['fishingDockId'] = valueFishingDockId;

  var valueDepartureDate = $formValues.querySelector('.valueDepartureDate')?.value;
  if(valueDepartureDate != null && valueDepartureDate !== '')
    vals['departureDate'] = valueDepartureDate;

  var valueArrivalDate = $formValues.querySelector('.valueArrivalDate')?.value;
  if(valueArrivalDate != null && valueArrivalDate !== '')
    vals['arrivalDate'] = valueArrivalDate;

  var valueAvgSpeedInMph = $formValues.querySelector('.valueAvgSpeedInMph')?.value;
  if(valueAvgSpeedInMph != null && valueAvgSpeedInMph !== '')
    vals['avgSpeedInMph'] = valueAvgSpeedInMph;

  var valueMaxSpeedInMph = $formValues.querySelector('.valueMaxSpeedInMph')?.value;
  if(valueMaxSpeedInMph != null && valueMaxSpeedInMph !== '')
    vals['maxSpeedInMph'] = valueMaxSpeedInMph;

  var valueMilesPerGallon = $formValues.querySelector('.valueMilesPerGallon')?.value;
  if(valueMilesPerGallon != null && valueMilesPerGallon !== '')
    vals['milesPerGallon'] = valueMilesPerGallon;

  var valueGallonsOfGas = $formValues.querySelector('.valueGallonsOfGas')?.value;
  if(valueGallonsOfGas != null && valueGallonsOfGas !== '')
    vals['gallonsOfGas'] = valueGallonsOfGas;

  var valueName = $formValues.querySelector('.valueName')?.value;
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  var valueLocation = $formValues.querySelector('.valueLocation')?.value;
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valuePath = $formValues.querySelector('.valuePath')?.value;
  if(valuePath != null && valuePath !== '')
    vals['path'] = JSON.parse(valuePath);

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

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  fetch(
    '/en-us/api/fishing-boat'
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

function postFishingBoatVals(vals, target, success, error) {
  fetch(
    '/en-us/api/fishing-boat'
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

async function deleteFishingBoat(target, entityShortId, success, error) {
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
      addError(target, jqXhr);
    };
  }

  fetch(
    '/en-us/api/fishing-boat/' + encodeURIComponent(entityShortId)
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

async function putimportFishingBoat($formValues, target, entityShortId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportFishingBoatVals(JSON.parse(json), target, success, error);
}

function putimportFishingBoatVals(json, target, success, error) {
  fetch(
    '/en-us/api/fishing-boat-import'
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

async function deletefilterFishingBoat(target, success, error) {
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
      addError(target, jqXhr);
    };
  }

  fetch(
    '/en-us/api/fishing-boat'
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

async function websocketFishingBoat(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketFishingBoat', function (error, message) {
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
      $headerSpan.innerText = 'modify fishing boats in ' + json.timeRemaining;
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

    window.eventBus.registerHandler('websocketTimeZone', function (error, message) {
      document.querySelector('.Page_timeZone').trigger('oninput');
      document.querySelector('.Page_timeZone_add').innerText = 'add a time zone';
      document.querySelector('.Page_timeZone_add').classList.remove('w3-disabled');
      document.querySelector('.Page_timeZone_add').setAttribute('disabled', false);
    });

    window.eventBus.registerHandler('websocketFishingDock', function (error, message) {
      document.querySelector('.Page_fishingDockId').trigger('oninput');
      document.querySelector('.Page_fishingDockId_add').innerText = 'add a fishing dock';
      document.querySelector('.Page_fishingDockId_add').classList.remove('w3-disabled');
      document.querySelector('.Page_fishingDockId_add').setAttribute('disabled', false);
    });
  }
}
async function websocketFishingBoatInner(apiRequest) {
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
        var inputTimeZone = null;
        var inputFishingDockId = null;
        var inputDepartureDate = null;
        var inputArrivalDate = null;
        var inputAvgSpeedInMph = null;
        var inputMaxSpeedInMph = null;
        var inputMilesPerGallon = null;
        var inputGallonsOfGas = null;
        var inputName = null;
        var inputLocation = null;
        var inputDescription = null;
        var inputPath = null;
        var inputColor = null;
        var inputId = null;
        var inputNgsildTenant = null;
        var inputNgsildPath = null;
        var inputNgsildContext = null;
        var inputNgsildData = null;
        var inputEntityShortId = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputDisplayPage = null;
        var inputEditPage = null;
        var inputDownload = null;
        var inputObjectText = null;
        var inputUserPage = null;
        var inputObjectSuggest = null;
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
        if(vars.includes('timeZone'))
          inputTimeZone = $response.querySelector('.Page_timeZone');
        if(vars.includes('fishingDockId'))
          inputFishingDockId = $response.querySelector('.Page_fishingDockId');
        if(vars.includes('departureDate'))
          inputDepartureDate = $response.querySelector('.Page_departureDate');
        if(vars.includes('arrivalDate'))
          inputArrivalDate = $response.querySelector('.Page_arrivalDate');
        if(vars.includes('avgSpeedInMph'))
          inputAvgSpeedInMph = $response.querySelector('.Page_avgSpeedInMph');
        if(vars.includes('maxSpeedInMph'))
          inputMaxSpeedInMph = $response.querySelector('.Page_maxSpeedInMph');
        if(vars.includes('milesPerGallon'))
          inputMilesPerGallon = $response.querySelector('.Page_milesPerGallon');
        if(vars.includes('gallonsOfGas'))
          inputGallonsOfGas = $response.querySelector('.Page_gallonsOfGas');
        if(vars.includes('name'))
          inputName = $response.querySelector('.Page_name');
        if(vars.includes('location'))
          inputLocation = $response.querySelector('.Page_location');
        if(vars.includes('description'))
          inputDescription = $response.querySelector('.Page_description');
        if(vars.includes('path'))
          inputPath = $response.querySelector('.Page_path');
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
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Page_editPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Page_download');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Page_objectText');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Page_userPage');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Page_objectSuggest');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Page_solrId');
        if(vars.includes('areaServedColors'))
          inputAreaServedColors = $response.querySelector('.Page_areaServedColors');
        if(vars.includes('areaServedTitles'))
          inputAreaServedTitles = $response.querySelector('.Page_areaServedTitles');

        jsWebsocketFishingBoat(entityShortId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listFishingBoat = JSON.parse($response.querySelector('.pageForm .listFishingBoat')?.value);


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

        if(inputTimeZone) {
          document.querySelectorAll('.Page_timeZone').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputTimeZone.getAttribute('value');
            else
              item.textContent = inputTimeZone.textContent;
          });
          addGlow(document.querySelector('.Page_timeZone'));
        }

        if(inputFishingDockId) {
          document.querySelectorAll('.Page_fishingDockId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputFishingDockId.getAttribute('value');
            else
              item.textContent = inputFishingDockId.textContent;
          });
          addGlow(document.querySelector('.Page_fishingDockId'));
        }

        if(inputDepartureDate) {
          document.querySelectorAll('.Page_departureDate').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDepartureDate.getAttribute('value');
            else
              item.textContent = inputDepartureDate.textContent;
          });
          addGlow(document.querySelector('.Page_departureDate'));
        }

        if(inputArrivalDate) {
          document.querySelectorAll('.Page_arrivalDate').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArrivalDate.getAttribute('value');
            else
              item.textContent = inputArrivalDate.textContent;
          });
          addGlow(document.querySelector('.Page_arrivalDate'));
        }

        if(inputAvgSpeedInMph) {
          document.querySelectorAll('.Page_avgSpeedInMph').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputAvgSpeedInMph.getAttribute('value');
            else
              item.textContent = inputAvgSpeedInMph.textContent;
          });
          addGlow(document.querySelector('.Page_avgSpeedInMph'));
        }

        if(inputMaxSpeedInMph) {
          document.querySelectorAll('.Page_maxSpeedInMph').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMaxSpeedInMph.getAttribute('value');
            else
              item.textContent = inputMaxSpeedInMph.textContent;
          });
          addGlow(document.querySelector('.Page_maxSpeedInMph'));
        }

        if(inputMilesPerGallon) {
          document.querySelectorAll('.Page_milesPerGallon').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMilesPerGallon.getAttribute('value');
            else
              item.textContent = inputMilesPerGallon.textContent;
          });
          addGlow(document.querySelector('.Page_milesPerGallon'));
        }

        if(inputGallonsOfGas) {
          document.querySelectorAll('.Page_gallonsOfGas').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGallonsOfGas.getAttribute('value');
            else
              item.textContent = inputGallonsOfGas.textContent;
          });
          addGlow(document.querySelector('.Page_gallonsOfGas'));
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

        if(inputLocation) {
          document.querySelectorAll('.Page_location').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputLocation.getAttribute('value');
            else
              item.textContent = inputLocation.textContent;
          });
          addGlow(document.querySelector('.Page_location'));
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

        if(inputPath) {
          document.querySelectorAll('.Page_path').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPath.getAttribute('value');
            else
              item.textContent = inputPath.textContent;
          });
          addGlow(document.querySelector('.Page_path'));
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

        if(inputEditPage) {
          document.querySelectorAll('.Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Page_editPage'));
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

        if(inputObjectText) {
          document.querySelectorAll('.Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.Page_objectText'));
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

        if(inputObjectSuggest) {
          document.querySelectorAll('.Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.Page_objectSuggest'));
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

          pageGraphFishingBoat();
      });
    });
  }
}

function pageGraphFishingBoat(apiRequest) {
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
          layout['title'] = 'fishing boats';
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
          Plotly.react('htmBodyGraphFishingBoatPage', data, layout);
        }
      }
    }

    // Graph Location
    window.mapLayers = {};
    window.bounds = null;
    if(listFishingBoat.filter(o => o.location)) {
      window.bounds = L.latLngBounds(listFishingBoat.filter(o => o.location).map((c) => {
        return [c.location.coordinates[1], c.location.coordinates[0]];
      }));
    }
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipFishingBoat(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapFishingBoat) {
      window.geoJSONFishingBoat.clearLayers();
      window.listFishingBoat.forEach((result, index) => {
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
              , style: jsStyleFishingBoat
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleFishingBoat(feature));
              }
            });
            window.geoJSONFishingBoat.addLayer(layerGeoJson);

            var layerSvg = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleFishingBoat
              , pointToLayer: function(feature, latlng) {
                var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path opacity=".4" d="M141 363.5L296.5 301.3L296.5 464.5C297.3 465.1 298 465.6 298.7 466.2C297.5 465.3 296.2 464.4 294.9 463.4C266.8 442.3 233.6 431.8 200.5 432C197.5 432 194.5 432.1 191.4 432.3C170 413.7 152.6 390.3 141 363.5zM339.9 467.8C341.4 466.8 342.9 465.7 344.5 464.5L344.5 301.3L500 363.5C488.4 390.3 471.1 413.5 449.6 432.3C445.9 432.1 442.2 432 438.5 432C406 432.2 373.6 442.7 346.1 463.4C343.9 465 341.9 466.5 339.9 467.8z"/><path d="M375 501.7C413.4 472.7 465.6 472.7 504 501.7C520.9 514.4 536.9 523.2 551.8 526.3C565.5 529.1 579.2 527.2 594.1 516C604.7 508 619.7 510.1 627.7 520.7C635.7 531.3 633.6 546.3 623 554.3C596.6 574.2 568.8 578.7 542.3 573.4C517 568.3 494.2 554.5 475.1 540.1C453.8 524 425.2 524 403.9 540.1C379.7 558.4 351.6 576 320.5 576C289.4 576 261.4 558.3 237.1 540.1C215.8 524 187.2 524 165.9 540.1C142.2 558 111.8 575.6 77.9 575.4C57.5 575.3 37.2 568.7 18.1 554.3C7.5 546.3 5.4 531.3 13.4 520.7C21.4 510.1 36.4 508 47 516C58.3 524.5 68.6 527.4 78.2 527.5C95.8 527.6 115.5 518.1 137.1 501.8C175.5 472.8 227.7 472.8 266.1 501.8C290.1 519.9 306.8 528.1 320.6 528.1C334.4 528.1 351.1 519.9 375.1 501.8zM368.5 64C395 64 416.5 85.5 416.5 112L416.5 128L432.5 128C476.7 128 512.5 163.8 512.5 208L512.5 316.8L534.1 325.4C548.9 331.3 556.5 347.8 551.5 362.9C541.1 394.2 524.7 422.2 503.8 446C486.5 438.1 468.1 433.5 449.6 432.3C471 413.7 488.4 390.4 500 363.5L344.5 301.3L344.5 464.5C324.2 479.6 316.8 479.6 296.5 464.5L296.5 301.3L141 363.5C152.6 390.4 170 413.7 191.4 432.3C172.8 433.5 154.5 438.1 137.2 446C116.3 422.3 99.9 394.2 89.5 362.9C84.4 347.7 92.1 331.3 106.9 325.3L128.5 316.7L128.5 207.9C128.5 163.7 164.3 127.9 208.5 127.9L224.5 127.9L224.5 111.9C224.5 85.4 246 63.9 272.5 63.9L368.5 63.9zM208.5 176C190.8 176 176.5 190.3 176.5 208L176.5 297.6L296.7 249.5C312 243.4 329 243.4 344.3 249.5L464.5 297.6L464.5 208C464.5 190.3 450.2 176 432.5 176L208.5 176z"/></svg>';
                svgElementBounds = L.latLng(result.location.coordinates[1], result.location.coordinates[0]).toBounds(100);
                var layer = L.svgOverlay(svgElement, svgElementBounds, {
                  interactive: true
                });
                return layer;
              }
            });
            window.geoJSONFishingBoat.addLayer(layerSvg);
          });
        }
        if(result.path) {
          var shapes = [];
          if(Array.isArray(result.path))
            shapes = shapes.concat(result.path);
          else
            shapes.push(result.path);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layerGeoJson = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleFishingBoat
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleFishingBoat(feature));
              }
            });
            window.geoJSONFishingBoat.addLayer(layerGeoJson);
          });
        }
      });
    } else if(document.getElementById('htmBodyGraphLocationFishingBoatPage')) {
      window.mapFishingBoat = L.map('htmBodyGraphLocationFishingBoatPage', {
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
      window.mapFishingBoat.zoomControl.setPosition('topright');
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendFishingBoat;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapFishingBoat);

      if(window.bounds && window['DEFAULT_MAP_ZOOM'] && window.bounds.getNorthEast()) {
        if(listFishingBoat.length == 1) {
          window.mapFishingBoat.setView(window.bounds.getNorthEast(), window['DEFAULT_MAP_ZOOM']);
        } else {
          window.mapFishingBoat.fitBounds(window.bounds);
        }
      } else {
        if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
          window.mapFishingBoat.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]], window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_ZOOM'])
          window.mapFishingBoat.setView(null, window['DEFAULT_MAP_ZOOM']);
        else if(window['DEFAULT_MAP_LOCATION'])
          window.mapFishingBoat.setView([window['DEFAULT_MAP_LOCATION']['coordinates'][1], window['DEFAULT_MAP_LOCATION']['coordinates'][0]]);
      }

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONFishingBoat = L.geoJSON().addTo(window.mapFishingBoat);
      window.listFishingBoat.forEach((result, index) => {
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
              , style: jsStyleFishingBoat
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleFishingBoat(feature));
              }
            });
            window.geoJSONFishingBoat.addLayer(layerGeoJson);

            var layerSvg = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleFishingBoat
              , pointToLayer: function(feature, latlng) {
                var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2025 Fonticons, Inc.--><path opacity=".4" d="M141 363.5L296.5 301.3L296.5 464.5C297.3 465.1 298 465.6 298.7 466.2C297.5 465.3 296.2 464.4 294.9 463.4C266.8 442.3 233.6 431.8 200.5 432C197.5 432 194.5 432.1 191.4 432.3C170 413.7 152.6 390.3 141 363.5zM339.9 467.8C341.4 466.8 342.9 465.7 344.5 464.5L344.5 301.3L500 363.5C488.4 390.3 471.1 413.5 449.6 432.3C445.9 432.1 442.2 432 438.5 432C406 432.2 373.6 442.7 346.1 463.4C343.9 465 341.9 466.5 339.9 467.8z"/><path d="M375 501.7C413.4 472.7 465.6 472.7 504 501.7C520.9 514.4 536.9 523.2 551.8 526.3C565.5 529.1 579.2 527.2 594.1 516C604.7 508 619.7 510.1 627.7 520.7C635.7 531.3 633.6 546.3 623 554.3C596.6 574.2 568.8 578.7 542.3 573.4C517 568.3 494.2 554.5 475.1 540.1C453.8 524 425.2 524 403.9 540.1C379.7 558.4 351.6 576 320.5 576C289.4 576 261.4 558.3 237.1 540.1C215.8 524 187.2 524 165.9 540.1C142.2 558 111.8 575.6 77.9 575.4C57.5 575.3 37.2 568.7 18.1 554.3C7.5 546.3 5.4 531.3 13.4 520.7C21.4 510.1 36.4 508 47 516C58.3 524.5 68.6 527.4 78.2 527.5C95.8 527.6 115.5 518.1 137.1 501.8C175.5 472.8 227.7 472.8 266.1 501.8C290.1 519.9 306.8 528.1 320.6 528.1C334.4 528.1 351.1 519.9 375.1 501.8zM368.5 64C395 64 416.5 85.5 416.5 112L416.5 128L432.5 128C476.7 128 512.5 163.8 512.5 208L512.5 316.8L534.1 325.4C548.9 331.3 556.5 347.8 551.5 362.9C541.1 394.2 524.7 422.2 503.8 446C486.5 438.1 468.1 433.5 449.6 432.3C471 413.7 488.4 390.4 500 363.5L344.5 301.3L344.5 464.5C324.2 479.6 316.8 479.6 296.5 464.5L296.5 301.3L141 363.5C152.6 390.4 170 413.7 191.4 432.3C172.8 433.5 154.5 438.1 137.2 446C116.3 422.3 99.9 394.2 89.5 362.9C84.4 347.7 92.1 331.3 106.9 325.3L128.5 316.7L128.5 207.9C128.5 163.7 164.3 127.9 208.5 127.9L224.5 127.9L224.5 111.9C224.5 85.4 246 63.9 272.5 63.9L368.5 63.9zM208.5 176C190.8 176 176.5 190.3 176.5 208L176.5 297.6L296.7 249.5C312 243.4 329 243.4 344.3 249.5L464.5 297.6L464.5 208C464.5 190.3 450.2 176 432.5 176L208.5 176z"/></svg>';
                svgElementBounds = L.latLng(result.location.coordinates[1], result.location.coordinates[0]).toBounds(100);
                var layer = L.svgOverlay(svgElement, svgElementBounds, {
                  interactive: true
                });
                return layer;
              }
            });
            window.geoJSONFishingBoat.addLayer(layerSvg);
          });
        }
        if(result.path) {
          var shapes = [];
          if(Array.isArray(result.path))
            shapes = shapes.concat(result.path);
          else
            shapes.push(result.path);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": result
              , "geometry": shape
              , "index": index
            }];
            var layerGeoJson = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleFishingBoat
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleFishingBoat(feature));
              }
            });
            window.geoJSONFishingBoat.addLayer(layerGeoJson);
          });
        }
      });
      window.mapFishingBoat.on('popupopen', function(e) {
        if(e.popup._source) {
          var feature = e.popup._source.feature;
          jsTooltipFishingBoat(e, feature);
        }
      });
      const drawnItems = new L.FeatureGroup();
      window.mapFishingBoat.addLayer(drawnItems);
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
      window.mapFishingBoat.addControl(drawControl);
      window.mapFishingBoat.on(L.Draw.Event.CREATED, function (event) {
        drawnItems.addLayer(event.layer);
        var contextmenuItems = [];
        if(event.layerType == 'marker') {
          contextmenuItems.push({
            text: 'Set location of ' + result.objectTitle
            , callback: function(event2) {
              patchFishingBoatLocation(event.layer, { coordinates: [event.layer.getLatLng()['lng'], event.layer.getLatLng()['lat']], type: "Point" });
            }
          });
        }
        if(event.layerType == 'polygon') {
          contextmenuItems.push({
            text: 'Set path of ' + result.objectTitle
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
              patchFishingBoatArea(event.layer, { coordinates: latLngs, type: "Polygon" });
            }
          });
        }
        if(event.layerType == 'polyline') {
          contextmenuItems.push({
            text: 'Set path of ' + result.objectTitle
            , callback: function(event2) {
              var latLngs = [];
              event.layer.getLatLngs().forEach(ll1 => {
                var latLngs1 = [ll1['lng'], ll1['lat']];
                latLngs.push(latLngs1);
              });
              patchFishingBoatArea(event.layer, { coordinates: latLngs, type: "LineString" });
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
function patchFishingBoatLocation(target, location) {
  patchFishingBoatVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + result.entityShortId }]
      , 'setLocation', location
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}
function patchFishingBoatArea(target, path) {
  patchFishingBoatVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + result.entityShortId }]
      , 'setPath', path
      , target
      , function(response, e) { addGlow(target); }
      , function(response, e) { addError(target); }
      );
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqFishingBoat_time').innerText = '';
  searchPage('FishingBoat', function() {
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
      document.querySelector('#fqFishingBoat_time').value = x;
      document.querySelector('#fqFishingBoat_time').onchange();
      searchPage('FishingBoat');
    }, speedRate);
  });
}
