Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Page_created')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.value.split('[').pop().split(']')[0];
              var t1 = moment(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a');
              var t2 = moment.tz(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a', timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#Page_name')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_name')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_name')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH location
          document.querySelector('#Page_location')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setLocation', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_location')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_location')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_location');
            const valid = form.reportValidity();
          });

          // PATCH areaServed
          document.querySelector('#Page_areaServed')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_areaServed');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAreaServed', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_areaServed')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_areaServed')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_areaServed');
            const valid = form.reportValidity();
          });

          // PATCH id
          document.querySelector('#Page_id')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_id')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_id')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH ngsildTenant
          document.querySelector('#Page_ngsildTenant')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildTenant', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildTenant')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildTenant');
            const valid = form.reportValidity();
          });

          // PATCH ngsildPath
          document.querySelector('#Page_ngsildPath')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildPath', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildPath')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildPath');
            const valid = form.reportValidity();
          });

          // PATCH ngsildContext
          document.querySelector('#Page_ngsildContext')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildContext', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildContext')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildContext');
            const valid = form.reportValidity();
          });

          // PATCH ngsildData
          document.querySelector('#Page_ngsildData')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setNgsildData', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_ngsildData')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_ngsildData');
            const valid = form.reportValidity();
          });

          // PATCH address
          document.querySelector('#Page_address')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_address');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAddress', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_address')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_address')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_address');
            const valid = form.reportValidity();
          });

          // PATCH alternateName
          document.querySelector('#Page_alternateName')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_alternateName');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAlternateName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_alternateName')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_alternateName')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_alternateName');
            const valid = form.reportValidity();
          });

          // PATCH averageCrowdSpeed
          document.querySelector('#Page_averageCrowdSpeed')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_averageCrowdSpeed');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAverageCrowdSpeed', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_averageCrowdSpeed')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_averageCrowdSpeed')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_averageCrowdSpeed');
            const valid = form.reportValidity();
          });

          // PATCH averageHeadwayTime
          document.querySelector('#Page_averageHeadwayTime')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_averageHeadwayTime');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setAverageHeadwayTime', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_averageHeadwayTime')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_averageHeadwayTime')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_averageHeadwayTime');
            const valid = form.reportValidity();
          });

          // PATCH congested
          document.querySelector('#Page_congested')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_congested');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setCongested', event.currentTarget.checked
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_congested')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_congested')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_congested');
            const valid = form.reportValidity();
          });

          // PATCH dataProvider
          document.querySelector('#Page_dataProvider')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dataProvider');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDataProvider', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dataProvider')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dataProvider')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dataProvider');
            const valid = form.reportValidity();
          });

          // PATCH dateCreated
          document.querySelector('#Page_dateCreated')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dateCreated');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateCreated', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateCreated')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateCreated')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dateCreated');
            const valid = form.reportValidity();
          });

          // PATCH dateModified
          document.querySelector('#Page_dateModified')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dateModified');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateModified', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateModified')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateModified')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dateModified');
            const valid = form.reportValidity();
          });

          // PATCH dateObserved
          document.querySelector('#Page_dateObserved')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dateObserved');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateObserved', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateObserved')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateObserved')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dateObserved');
            const valid = form.reportValidity();
          });

          // PATCH dateObservedFrom
          document.querySelector('#Page_dateObservedFrom')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dateObservedFrom');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateObservedFrom', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateObservedFrom')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateObservedFrom')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dateObservedFrom');
            const valid = form.reportValidity();
          });

          // PATCH dateObservedTo
          document.querySelector('#Page_dateObservedTo')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_dateObservedTo');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDateObservedTo', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_dateObservedTo')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_dateObservedTo')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_dateObservedTo');
            const valid = form.reportValidity();
          });

          // PATCH direction
          document.querySelector('#Page_direction')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_direction');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDirection', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_direction')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_direction')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_direction');
            const valid = form.reportValidity();
          });

          // PATCH occupancy
          document.querySelector('#Page_occupancy')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_occupancy');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setOccupancy', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_occupancy')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_occupancy')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_occupancy');
            const valid = form.reportValidity();
          });

          // PATCH owner
          document.querySelector('#Page_owner')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_owner');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setOwner', event.currentTarget.value == '' ? null : JSON.parse(event.currentTarget.value)
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_owner')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_owner')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_owner');
            const valid = form.reportValidity();
          });

          // PATCH peopleCount
          document.querySelector('#Page_peopleCount')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_peopleCount');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setPeopleCount', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_peopleCount')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_peopleCount')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_peopleCount');
            const valid = form.reportValidity();
          });

          // PATCH refRoadSegment
          document.querySelector('#Page_refRoadSegment')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_refRoadSegment');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setRefRoadSegment', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_refRoadSegment')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_refRoadSegment')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_refRoadSegment');
            const valid = form.reportValidity();
          });

          // PATCH seeAlso
          document.querySelector('#Page_seeAlso')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_seeAlso');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSeeAlso', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_seeAlso')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_seeAlso')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_seeAlso');
            const valid = form.reportValidity();
          });

          // PATCH source
          document.querySelector('#Page_source')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_source');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSource', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_source')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_source')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_source');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchCrowdFlowObservedVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'entityShortId:' + event.currentTarget.getAttribute('data-entityShortId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });
});
