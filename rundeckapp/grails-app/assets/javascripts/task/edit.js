/*
 * Copyright 2018 Rundeck, Inc. (http://rundeck.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//= require storageBrowseKO
//= require ui/toggle
//= require pluginPropKO
//= require ko/binding-job-link
//= require bootstrap-datetimepicker.min
//= require ko/binding-datetimepicker
//= require nodeFiltersKO
//= require executionOptions
//= require jobs/jobPicker
//= require jobs/jobOptions
//= require menu/job-remote-options
//= require ko/binding-popover
//= require ko/component/map-editor
//= require menu/joboptions
//= require koBind

"use strict";

function TaskEditor(data) {
    var self = this;
    self.trigger = new PluginEditor({
        service: 'TaskTrigger',
        config: data.triggerConfig,
        formId: data.triggerFormId,
        formPrefixes: data.triggerFormPrefixes,
        inputFieldPrefix: data.triggerInputPrefix
    });
    self.action = new PluginEditor({
        service: 'TaskAction',
        config: data.actionConfig,
        formId: data.actionFormId,
        formPrefixes: data.actionFormPrefixes,
        inputFieldPrefix: data.actionInputPrefix
    });
    self.userData = new MultiMap({data: data.userData, inputPrefix: data.userDataInputPrefix});
    self.init = function () {
        self.trigger.init();
        self.action.init();
    };
}