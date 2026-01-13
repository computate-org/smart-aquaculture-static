Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Page_created')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_created');
            const valide = form.checkValidity();
            if(valide) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(reponse, target) { ajouterLueur(target); }
                    , function(reponse, target) { ajouterErreur(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_created');
            const valide = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageFormulaire_archived');
            const valide = form.checkValidity();
            if(valide) {
              var confirmResponse = confirm('Voulez-vous vraiment archiver cela ?'); 
              if(confirmResponse) { 
                patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(reponse, target) { ajouterLueur(target); }
                    , function(reponse, target) { ajouterErreur(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_archived');
            const valide = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#Page_name')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_name');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_name')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_name')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_name');
            const valide = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_description');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_description');
            const valide = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#Page_location')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_location');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_location')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_location')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_location');
            const valide = form.reportValidity();
          });

          // PATCH color
          document.querySelector('#Page_color')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_color');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setColor', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_color')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_color')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_color');
            const valide = form.reportValidity();
          });

          // PATCH areaServed
          document.querySelector('#Page_areaServed')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_areaServed');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAreaServed', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_areaServed')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_areaServed')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_areaServed');
            const valide = form.reportValidity();
          });

          // PATCH scientificName
          document.querySelector('#Page_scientificName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_scientificName');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setScientificName', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_scientificName')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_scientificName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_scientificName');
            const valide = form.reportValidity();
          });

          // PATCH id
          document.querySelector('#Page_id')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_id');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_id')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_id')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_id');
            const valide = form.reportValidity();
          });

          // PATCH ngsildTenant
          document.querySelector('#Page_ngsildTenant')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_ngsildTenant');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildTenant', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_ngsildTenant');
            const valide = form.reportValidity();
          });

          // PATCH ngsildPath
          document.querySelector('#Page_ngsildPath')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_ngsildPath');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildPath', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_ngsildPath');
            const valide = form.reportValidity();
          });

          // PATCH ngsildContext
          document.querySelector('#Page_ngsildContext')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_ngsildContext');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildContext', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_ngsildContext');
            const valide = form.reportValidity();
          });

          // PATCH ngsildData
          document.querySelector('#Page_ngsildData')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_ngsildData');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildData', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_ngsildData');
            const valide = form.reportValidity();
          });

          // PATCH address
          document.querySelector('#Page_address')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_address');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAddress', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_address')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_address')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_address');
            const valide = form.reportValidity();
          });

          // PATCH alternateName
          document.querySelector('#Page_alternateName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_alternateName');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAlternateName', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_alternateName')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_alternateName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_alternateName');
            const valide = form.reportValidity();
          });

          // PATCH bodyMasse
          document.querySelector('#Page_bodyMasse')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_bodyMasse');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setBodyMasse', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_bodyMasse')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_bodyMasse')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_bodyMasse');
            const valide = form.reportValidity();
          });

          // PATCH culturedIn
          document.querySelector('#Page_culturedIn')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_culturedIn');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setCulturedIn', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_culturedIn')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_culturedIn')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_culturedIn');
            const valide = form.reportValidity();
          });

          // PATCH dataProvider
          document.querySelector('#Page_dataProvider')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_dataProvider');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDataProvider', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_dataProvider')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_dataProvider')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_dataProvider');
            const valide = form.reportValidity();
          });

          // PATCH dateCreated
          document.querySelector('#Page_dateCreated')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_dateCreated');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateCreated', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_dateCreated')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_dateCreated')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_dateCreated');
            const valide = form.reportValidity();
          });

          // PATCH dateModified
          document.querySelector('#Page_dateModified')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_dateModified');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateModified', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_dateModified')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_dateModified')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_dateModified');
            const valide = form.reportValidity();
          });

          // PATCH fishRemoved
          document.querySelector('#Page_fishRemoved')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_fishRemoved');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setFishRemoved', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_fishRemoved')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_fishRemoved')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_fishRemoved');
            const valide = form.reportValidity();
          });

          // PATCH initialNumber
          document.querySelector('#Page_initialNumber')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_initialNumber');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setInitialNumber', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_initialNumber')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_initialNumber')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_initialNumber');
            const valide = form.reportValidity();
          });

          // PATCH owner
          document.querySelector('#Page_owner')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_owner');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setOwner', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_owner')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_owner')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_owner');
            const valide = form.reportValidity();
          });

          // PATCH refSpecie
          document.querySelector('#Page_refSpecie')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_refSpecie');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setRefSpecie', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_refSpecie')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_refSpecie')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_refSpecie');
            const valide = form.reportValidity();
          });

          // PATCH relatedSource
          document.querySelector('#Page_relatedSource')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_relatedSource');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setRelatedSource', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_relatedSource')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_relatedSource')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_relatedSource');
            const valide = form.reportValidity();
          });

          // PATCH seeAlso
          document.querySelector('#Page_seeAlso')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_seeAlso');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSeeAlso', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_seeAlso')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_seeAlso')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_seeAlso');
            const valide = form.reportValidity();
          });

          // PATCH source
          document.querySelector('#Page_source')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_source');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSource', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_source')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_source')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_source');
            const valide = form.reportValidity();
          });

          // PATCH maturityDaysBegin
          document.querySelector('#Page_maturityDaysBegin')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_maturityDaysBegin');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setMaturityDaysBegin', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_maturityDaysBegin')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_maturityDaysBegin')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_maturityDaysBegin');
            const valide = form.reportValidity();
          });

          // PATCH maturityDaysEnd
          document.querySelector('#Page_maturityDaysEnd')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_maturityDaysEnd');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setMaturityDaysEnd', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_maturityDaysEnd')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_maturityDaysEnd')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_maturityDaysEnd');
            const valide = form.reportValidity();
          });

          // PATCH incubationDaysBegin
          document.querySelector('#Page_incubationDaysBegin')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationDaysBegin');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setIncubationDaysBegin', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_incubationDaysBegin')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_incubationDaysBegin')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationDaysBegin');
            const valide = form.reportValidity();
          });

          // PATCH incubationDaysEnd
          document.querySelector('#Page_incubationDaysEnd')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationDaysEnd');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setIncubationDaysEnd', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_incubationDaysEnd')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_incubationDaysEnd')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationDaysEnd');
            const valide = form.reportValidity();
          });

          // PATCH incubationNumberMin
          document.querySelector('#Page_incubationNumberMin')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationNumberMin');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setIncubationNumberMin', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_incubationNumberMin')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_incubationNumberMin')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationNumberMin');
            const valide = form.reportValidity();
          });

          // PATCH incubationNumberMax
          document.querySelector('#Page_incubationNumberMax')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationNumberMax');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setIncubationNumberMax', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_incubationNumberMax')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_incubationNumberMax')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationNumberMax');
            const valide = form.reportValidity();
          });

          // PATCH percentPopulationPregnantMin
          document.querySelector('#Page_percentPopulationPregnantMin')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_percentPopulationPregnantMin');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPercentPopulationPregnantMin', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_percentPopulationPregnantMin')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_percentPopulationPregnantMin')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_percentPopulationPregnantMin');
            const valide = form.reportValidity();
          });

          // PATCH percentPopulationPregnantMax
          document.querySelector('#Page_percentPopulationPregnantMax')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_percentPopulationPregnantMax');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPercentPopulationPregnantMax', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_percentPopulationPregnantMax')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_percentPopulationPregnantMax')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_percentPopulationPregnantMax');
            const valide = form.reportValidity();
          });

          // PATCH populationsAtBirth
          document.querySelector('#Page_populationsAtBirth')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_populationsAtBirth');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPopulationsAtBirth', event.currentTarget.value.replace('[','').replace(']','').split(/[ ,]+/)
                  , event.currentTarget
                  , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_populationsAtBirth')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_populationsAtBirth')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_populationsAtBirth');
            const valide = form.reportValidity();
          });

          // PATCH populationsNow
          document.querySelector('#Page_populationsNow')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_populationsNow');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPopulationsNow', event.currentTarget.value.replace('[','').replace(']','').split(/[ ,]+/)
                  , event.currentTarget
                  , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_populationsNow')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_populationsNow')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_populationsNow');
            const valide = form.reportValidity();
          });

          // PATCH incubationDate
          document.querySelector('#Page_incubationDate')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationDate');
            const valide = form.checkValidity();
            if(valide) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setIncubationDate', s
                    , event.currentTarget
                    , function(reponse, target) { ajouterLueur(target); }
                    , function(reponse, target) { ajouterErreur(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_incubationDate')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_incubationDate')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationDate');
            const valide = form.reportValidity();
          });

          // PATCH incubationDaysNow
          document.querySelector('#Page_incubationDaysNow')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationDaysNow');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setIncubationDaysNow', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_incubationDaysNow')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_incubationDaysNow')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_incubationDaysNow');
            const valide = form.reportValidity();
          });

          // PATCH previousPopulation
          document.querySelector('#Page_previousPopulation')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_previousPopulation');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPreviousPopulation', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_previousPopulation')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_previousPopulation')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_previousPopulation');
            const valide = form.reportValidity();
          });

          // PATCH waterTemperature
          document.querySelector('#Page_waterTemperature')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_waterTemperature');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setWaterTemperature', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_waterTemperature')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_waterTemperature')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_waterTemperature');
            const valide = form.reportValidity();
          });

          // PATCH waterSalinity
          document.querySelector('#Page_waterSalinity')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_waterSalinity');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setWaterSalinity', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_waterSalinity')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_waterSalinity')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_waterSalinity');
            const valide = form.reportValidity();
          });

          // PATCH waterOxygen
          document.querySelector('#Page_waterOxygen')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_waterOxygen');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setWaterOxygen', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_waterOxygen')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_waterOxygen')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_waterOxygen');
            const valide = form.reportValidity();
          });

          // PATCH waterPh
          document.querySelector('#Page_waterPh')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_waterPh');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setWaterPh', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_waterPh')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_waterPh')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_waterPh');
            const valide = form.reportValidity();
          });

          // PATCH simulation
          document.querySelector('#Page_simulation')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_simulation');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSimulation', event.currentTarget.checked
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_simulation')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_simulation')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_simulation');
            const valide = form.reportValidity();
          });

          // PATCH simulationDelayMillis
          document.querySelector('#Page_simulationDelayMillis')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_simulationDelayMillis');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSimulationDelayMillis', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_simulationDelayMillis')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_simulationDelayMillis')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_simulationDelayMillis');
            const valide = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_userKey');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_userKey');
            const valide = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_editPage');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_editPage')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_editPage');
            const valide = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_sessionId');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_sessionId');
            const valide = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_objectTitle');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_objectTitle')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_objectTitle');
            const valide = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_displayPage');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_displayPage')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_displayPage');
            const valide = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_userPage');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_userPage')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_userPage');
            const valide = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_download');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_download')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_download');
            const valide = form.reportValidity();
          });

          // PATCH entityShortId
          document.querySelector('#Page_entityShortId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageFormulaire_entityShortId');
            const valide = form.checkValidity();
            if(valide) {
              patchFishPopulationVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setEntityShortId', event.currentTarget.value
                  , event.currentTarget
                , function(reponse, target) { ajouterLueur(target); }
                  , function(reponse, target) { ajouterErreur(target); }
                  );
            }
          });
          document.querySelector('#Page_entityShortId')?.addEventListener('focus', (event) => {
            enleverLueur(event.currentTarget);
          });
          document.querySelector('#Page_entityShortId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageFormulaire_entityShortId');
            const valide = form.reportValidity();
          });
});
