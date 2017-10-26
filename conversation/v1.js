"use strict";
/**
 * Copyright 2017 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var extend = require("extend");
var requestFactory = require("../lib/requestwrapper");
var helper = require("../lib/helper");
var util = require("util");
var BaseService = require("../lib/base_service");
var ConversationV1 = /** @class */ (function () {
    /**
     * Construct a ConversationV1 object.
     *
     * @param {Object} options
     * @param {String} options.version_date - Release date of the API version in YYYY-MM-DD format.
     * @constructor
     */
    function ConversationV1(options) {
        BaseService.call(this, options);
        // check if 'version_date' was provided
        if (typeof this._options.version_date === 'undefined') {
            throw new Error('Argument error: version_date was not specified, use ConversationV1.VERSION_DATE_2017_05_26');
        }
        this._options.qs.version = options.version_date;
    }
    /*************************
     * counterexamples
     ************************/
    /**
     * Create counterexample.
     *
     * Add a new counterexample to a workspace. Counterexamples are examples that have been marked as irrelevant input.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.text - The text of a user input marked as irrelevant input.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.createCounterexample = function (params, callback) {
        var requiredParams = ['workspace_id', 'text'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { text: params.text };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/counterexamples',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Delete counterexample.
     *
     * Delete a counterexample from a workspace. Counterexamples are examples that have been marked as irrelevant input.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.text - The text of a user input counterexample (for example, `What are you wearing?`).
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.deleteCounterexample = function (params, callback) {
        var requiredParams = ['workspace_id', 'text'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, text: params.text };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/counterexamples/{text}',
                method: 'DELETE',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Get counterexample.
     *
     * Get information about a counterexample. Counterexamples are examples that have been marked as irrelevant input.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.text - The text of a user input counterexample (for example, `What are you wearing?`).
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.getCounterexample = function (params, callback) {
        var requiredParams = ['workspace_id', 'text'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, text: params.text };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/counterexamples/{text}',
                method: 'GET',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * List counterexamples.
     *
     * List the counterexamples for a workspace. Counterexamples are examples that have been marked as irrelevant input.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {number} [params.page_limit] - The number of records to return in each page of results. The default page limit is 100.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - Sorts the response according to the value of the specified property, in ascending or descending order.
     * @param {string} [params.cursor] - A token identifying the last value from the previous page of results.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.listCounterexamples = function (params, callback) {
        var requiredParams = ['workspace_id'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { page_limit: params.page_limit, include_count: params.include_count, sort: params.sort, cursor: params.cursor };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/counterexamples',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Update counterexample.
     *
     * Update the text of a counterexample. Counterexamples are examples that have been marked as irrelevant input.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.text - The text of a user input counterexample (for example, `What are you wearing?`).
     * @param {string} [params.new_text] - The text of the example to be marked as irrelevant input.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.updateCounterexample = function (params, callback) {
        var requiredParams = ['workspace_id', 'text'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { text: params.new_text };
        var path = { workspace_id: params.workspace_id, text: params.text };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/counterexamples/{text}',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /*************************
     * dialogNodes
     ************************/
    /**
     * Create dialog node.
     *
     * Create a dialog node.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.dialog_node - The dialog node ID.
     * @param {string} [params.description] - The description of the dialog node.
     * @param {string} [params.conditions] - The condition that will trigger the dialog node.
     * @param {string} [params.parent] - The ID of the parent dialog node (if any).
     * @param {string} [params.previous_sibling] - The previous dialog node.
     * @param {Object} [params.output] - The output of the dialog node.
     * @param {Object} [params.context] - The context for the dialog node.
     * @param {Object} [params.metadata] - The metadata for the dialog node.
     * @param {DialogNodeNextStep} [params.next_step] - The next step to execute following this dialog node.
     * @param {DialogNodeAction[]} [params.actions] - The actions for the dialog node.
     * @param {string} [params.title] - The alias used to identify the dialog node.
     * @param {string} [params.node_type] - How the dialog node is processed.
     * @param {string} [params.event_name] - How an `event_handler` node is processed.
     * @param {string} [params.variable] - The location in the dialog context where output is stored.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.createDialogNode = function (params, callback) {
        var requiredParams = ['workspace_id', 'dialog_node'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { dialog_node: params.dialog_node, description: params.description, conditions: params.conditions, parent: params.parent, previous_sibling: params.previous_sibling, output: params.output, context: params.context, metadata: params.metadata, next_step: params.next_step, actions: params.actions, title: params.title, type: params.node_type, event_name: params.event_name, variable: params.variable };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/dialog_nodes',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Delete dialog node.
     *
     * Delete a dialog node from the workspace.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.dialog_node - The dialog node ID (for example, `get_order`).
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.deleteDialogNode = function (params, callback) {
        var requiredParams = ['workspace_id', 'dialog_node'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, dialog_node: params.dialog_node };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/dialog_nodes/{dialog_node}',
                method: 'DELETE',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Get dialog node.
     *
     * Get information about a dialog node.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.dialog_node - The dialog node ID (for example, `get_order`).
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.getDialogNode = function (params, callback) {
        var requiredParams = ['workspace_id', 'dialog_node'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, dialog_node: params.dialog_node };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/dialog_nodes/{dialog_node}',
                method: 'GET',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * List dialog nodes.
     *
     * List the dialog nodes in the workspace.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {number} [params.page_limit] - The number of records to return in each page of results. The default page limit is 100.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - Sorts the response according to the value of the specified property, in ascending or descending order.
     * @param {string} [params.cursor] - A token identifying the last value from the previous page of results.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.listDialogNodes = function (params, callback) {
        var requiredParams = ['workspace_id'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { page_limit: params.page_limit, include_count: params.include_count, sort: params.sort, cursor: params.cursor };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/dialog_nodes',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Update dialog node.
     *
     * Update information for a dialog node.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.dialog_node - The dialog node ID (for example, `get_order`).
     * @param {string} params.new_dialog_node - The dialog node ID.
     * @param {string} [params.new_description] - The description of the dialog node.
     * @param {string} [params.new_conditions] - The condition that will trigger the dialog node.
     * @param {string} [params.new_parent] - The ID of the parent dialog node (if any).
     * @param {string} [params.new_previous_sibling] - The previous dialog node.
     * @param {Object} [params.new_output] - The output of the dialog node.
     * @param {Object} [params.new_context] - The context for the dialog node.
     * @param {Object} [params.new_metadata] - The metadata for the dialog node.
     * @param {DialogNodeNextStep} [params.new_next_step] - The next step to execute following this dialog node.
     * @param {string} [params.new_title] - The alias used to identify the dialog node.
     * @param {string} [params.new_type] - How the node is processed.
     * @param {string} [params.new_event_name] - How an `event_handler` node is processed.
     * @param {string} [params.new_variable] - The location in the dialog context where output is stored.
     * @param {DialogNodeAction[]} [params.new_actions] - The actions for the dialog node.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.updateDialogNode = function (params, callback) {
        var requiredParams = ['workspace_id', 'dialog_node', 'new_dialog_node'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { dialog_node: params.new_dialog_node, description: params.new_description, conditions: params.new_conditions, parent: params.new_parent, previous_sibling: params.new_previous_sibling, output: params.new_output, context: params.new_context, metadata: params.new_metadata, next_step: params.new_next_step, title: params.new_title, type: params.new_type, event_name: params.new_event_name, variable: params.new_variable, actions: params.new_actions };
        var path = { workspace_id: params.workspace_id, dialog_node: params.dialog_node };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/dialog_nodes/{dialog_node}',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /*************************
     * entities
     ************************/
    /**
     * Create entity.
     *
     * Create a new entity.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} [params.description] - The description of the entity.
     * @param {Object} [params.metadata] - Any metadata related to the value.
     * @param {CreateValue[]} [params.values] - An array of entity values.
     * @param {boolean} [params.fuzzy_match] - Whether to use fuzzy matching for the entity.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.createEntity = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { entity: params.entity, description: params.description, metadata: params.metadata, values: params.values, fuzzy_match: params.fuzzy_match };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Delete entity.
     *
     * Delete an entity from a workspace.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.deleteEntity = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, entity: params.entity };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}',
                method: 'DELETE',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Get entity.
     *
     * Get information about an entity, optionally including all entity content.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If export=`false`, the returned data includes only information about the element itself. If export=`true`, all content, including subelements, is included. The default value is `false`.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.getEntity = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { "export": params["export"] };
        var path = { workspace_id: params.workspace_id, entity: params.entity };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * List entities.
     *
     * List the entities for a workspace.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If export=`false`, the returned data includes only information about the element itself. If export=`true`, all content, including subelements, is included. The default value is `false`.
     * @param {number} [params.page_limit] - The number of records to return in each page of results. The default page limit is 100.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - Sorts the response according to the value of the specified property, in ascending or descending order.
     * @param {string} [params.cursor] - A token identifying the last value from the previous page of results.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.listEntities = function (params, callback) {
        var requiredParams = ['workspace_id'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { "export": params["export"], page_limit: params.page_limit, include_count: params.include_count, sort: params.sort, cursor: params.cursor };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Update entity.
     *
     * Update an existing entity with new or modified data.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} [params.new_entity] - The name of the entity.
     * @param {string} [params.new_description] - The description of the entity.
     * @param {Object} [params.new_metadata] - Any metadata related to the entity.
     * @param {boolean} [params.new_fuzzy_match] - Whether to use fuzzy matching for the entity.
     * @param {CreateValue[]} [params.new_values] - An array of entity values.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.updateEntity = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { entity: params.new_entity, description: params.new_description, metadata: params.new_metadata, fuzzy_match: params.new_fuzzy_match, values: params.new_values };
        var path = { workspace_id: params.workspace_id, entity: params.entity };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /*************************
     * examples
     ************************/
    /**
     * Create user input example.
     *
     * Add a new user input example to an intent.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.intent - The intent name (for example, `pizza_order`).
     * @param {string} params.text - The text of a user input example.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.createExample = function (params, callback) {
        var requiredParams = ['workspace_id', 'intent', 'text'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { text: params.text };
        var path = { workspace_id: params.workspace_id, intent: params.intent };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/intents/{intent}/examples',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Delete user input example.
     *
     * Delete a user input example from an intent.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.intent - The intent name (for example, `pizza_order`).
     * @param {string} params.text - The text of the user input example.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.deleteExample = function (params, callback) {
        var requiredParams = ['workspace_id', 'intent', 'text'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, intent: params.intent, text: params.text };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/intents/{intent}/examples/{text}',
                method: 'DELETE',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Get user input example.
     *
     * Get information about a user input example.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.intent - The intent name (for example, `pizza_order`).
     * @param {string} params.text - The text of the user input example.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.getExample = function (params, callback) {
        var requiredParams = ['workspace_id', 'intent', 'text'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, intent: params.intent, text: params.text };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/intents/{intent}/examples/{text}',
                method: 'GET',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * List user input examples.
     *
     * List the user input examples for an intent.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.intent - The intent name (for example, `pizza_order`).
     * @param {number} [params.page_limit] - The number of records to return in each page of results. The default page limit is 100.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - Sorts the response according to the value of the specified property, in ascending or descending order.
     * @param {string} [params.cursor] - A token identifying the last value from the previous page of results.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.listExamples = function (params, callback) {
        var requiredParams = ['workspace_id', 'intent'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { page_limit: params.page_limit, include_count: params.include_count, sort: params.sort, cursor: params.cursor };
        var path = { workspace_id: params.workspace_id, intent: params.intent };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/intents/{intent}/examples',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Update user input example.
     *
     * Update the text of a user input example.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.intent - The intent name (for example, `pizza_order`).
     * @param {string} params.text - The text of the user input example.
     * @param {string} [params.new_text] - The text of the user input example.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.updateExample = function (params, callback) {
        var requiredParams = ['workspace_id', 'intent', 'text'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { text: params.new_text };
        var path = { workspace_id: params.workspace_id, intent: params.intent, text: params.text };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/intents/{intent}/examples/{text}',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /*************************
     * intents
     ************************/
    /**
     * Create intent.
     *
     * Create a new intent.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.intent - The name of the intent.
     * @param {string} [params.description] - The description of the intent.
     * @param {CreateExample[]} [params.examples] - An array of user input examples.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.createIntent = function (params, callback) {
        var requiredParams = ['workspace_id', 'intent'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { intent: params.intent, description: params.description, examples: params.examples };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/intents',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Delete intent.
     *
     * Delete an intent from a workspace.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.intent - The intent name (for example, `pizza_order`).
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.deleteIntent = function (params, callback) {
        var requiredParams = ['workspace_id', 'intent'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, intent: params.intent };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/intents/{intent}',
                method: 'DELETE',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Get intent.
     *
     * Get information about an intent, optionally including all intent content.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.intent - The intent name (for example, `pizza_order`).
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If export=`false`, the returned data includes only information about the element itself. If export=`true`, all content, including subelements, is included. The default value is `false`.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.getIntent = function (params, callback) {
        var requiredParams = ['workspace_id', 'intent'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { "export": params["export"] };
        var path = { workspace_id: params.workspace_id, intent: params.intent };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/intents/{intent}',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * List intents.
     *
     * List the intents for a workspace.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If export=`false`, the returned data includes only information about the element itself. If export=`true`, all content, including subelements, is included. The default value is `false`.
     * @param {number} [params.page_limit] - The number of records to return in each page of results. The default page limit is 100.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - Sorts the response according to the value of the specified property, in ascending or descending order.
     * @param {string} [params.cursor] - A token identifying the last value from the previous page of results.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.listIntents = function (params, callback) {
        var requiredParams = ['workspace_id'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { "export": params["export"], page_limit: params.page_limit, include_count: params.include_count, sort: params.sort, cursor: params.cursor };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/intents',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Update intent.
     *
     * Update an existing intent with new or modified data. You must provide data defining the content of the updated intent.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.intent - The intent name (for example, `pizza_order`).
     * @param {string} [params.new_intent] - The name of the intent.
     * @param {string} [params.new_description] - The description of the intent.
     * @param {CreateExample[]} [params.new_examples] - An array of user input examples for the intent.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.updateIntent = function (params, callback) {
        var requiredParams = ['workspace_id', 'intent'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { intent: params.new_intent, description: params.new_description, examples: params.new_examples };
        var path = { workspace_id: params.workspace_id, intent: params.intent };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/intents/{intent}',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /*************************
     * logs
     ************************/
    /**
     * List log events in a workspace.
     *
     * List log events in a specific workspace.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} [params.sort] - Sorts the response according to the value of the specified property, in ascending or descending order.
     * @param {string} [params.filter] - A cacheable parameter that limits the results to those matching the specified filter. For more information, see the [documentation](https://console.bluemix.net/docs/services/conversation/filter-reference.html#filter-query-syntax).
     * @param {number} [params.page_limit] - The number of records to return in each page of results. The default page limit is 100.
     * @param {string} [params.cursor] - A token identifying the last value from the previous page of results.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.listLogs = function (params, callback) {
        var requiredParams = ['workspace_id'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { sort: params.sort, filter: params.filter, page_limit: params.page_limit, cursor: params.cursor };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/logs',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /*************************
     * message
     ************************/
    /**
     * Get a response to a user's input.
     *
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - Unique identifier of the workspace.
     * @param {InputData} [params.input] - An input object that includes the input text.
     * @param {boolean} [params.alternate_intents] - Whether to return more than one intent. Set to `true` to return all matching intents.
     * @param {Context} [params.context] - State information for the conversation. Continue a conversation by including the context object from the previous response.
     * @param {RuntimeEntity[]} [params.entities] - Include the entities from the previous response when they do not need to change and to prevent Watson from trying to identify them.
     * @param {RuntimeIntent[]} [params.intents] - An array of name-confidence pairs for the user input. Include the intents from the previous response when they do not need to change and to prevent Watson from trying to identify them.
     * @param {OutputData} [params.output] - System output. Include the output from the request when you have several requests within the same Dialog turn to pass back in the intermediate information.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.message = function (params, callback) {
        var requiredParams = ['workspace_id'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { input: params.input, alternate_intents: params.alternate_intents, context: params.context, entities: params.entities, intents: params.intents, output: params.output };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/message',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /*************************
     * synonyms
     ************************/
    /**
     * Add entity value synonym.
     *
     * Add a new synonym to an entity value.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {string} params.synonym - The text of the synonym.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.createSynonym = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity', 'value', 'synonym'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { synonym: params.synonym };
        var path = { workspace_id: params.workspace_id, entity: params.entity, value: params.value };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}/values/{value}/synonyms',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Delete entity value synonym.
     *
     * Delete a synonym for an entity value.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {string} params.synonym - The text of the synonym.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.deleteSynonym = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity', 'value', 'synonym'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, entity: params.entity, value: params.value, synonym: params.synonym };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}/values/{value}/synonyms/{synonym}',
                method: 'DELETE',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Get entity value synonym.
     *
     * Get information about a synonym for an entity value.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {string} params.synonym - The text of the synonym.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.getSynonym = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity', 'value', 'synonym'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, entity: params.entity, value: params.value, synonym: params.synonym };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}/values/{value}/synonyms/{synonym}',
                method: 'GET',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * List entity value synonyms.
     *
     * List the synonyms for an entity value.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {number} [params.page_limit] - The number of records to return in each page of results. The default page limit is 100.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - Sorts the response according to the value of the specified property, in ascending or descending order.
     * @param {string} [params.cursor] - A token identifying the last value from the previous page of results.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.listSynonyms = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity', 'value'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { page_limit: params.page_limit, include_count: params.include_count, sort: params.sort, cursor: params.cursor };
        var path = { workspace_id: params.workspace_id, entity: params.entity, value: params.value };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}/values/{value}/synonyms',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Update entity value synonym.
     *
     * Update the information about a synonym for an entity value.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {string} params.synonym - The text of the synonym.
     * @param {string} [params.new_synonym] - The text of the synonym.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.updateSynonym = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity', 'value', 'synonym'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { synonym: params.new_synonym };
        var path = { workspace_id: params.workspace_id, entity: params.entity, value: params.value, synonym: params.synonym };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}/values/{value}/synonyms/{synonym}',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /*************************
     * values
     ************************/
    /**
     * Add entity value.
     *
     * Create a new value for an entity.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {Object} [params.metadata] - Any metadata related to the entity value.
     * @param {string[]} [params.synonyms] - An array of synonyms for the entity value.
     * @param {string[]} [params.patterns] - An array of patterns for the entity value. A pattern is specified as a regular expression.
     * @param {string} [params.value_type] - Specifies the type of value (`synonyms` or `patterns`). The default value is `synonyms`.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.createValue = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity', 'value'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { value: params.value, metadata: params.metadata, synonyms: params.synonyms, patterns: params.patterns, type: params.value_type };
        var path = { workspace_id: params.workspace_id, entity: params.entity };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}/values',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Delete entity value.
     *
     * Delete a value for an entity.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.deleteValue = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity', 'value'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id, entity: params.entity, value: params.value };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}/values/{value}',
                method: 'DELETE',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Get entity value.
     *
     * Get information about an entity value.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If export=`false`, the returned data includes only information about the element itself. If export=`true`, all content, including subelements, is included. The default value is `false`.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.getValue = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity', 'value'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { "export": params["export"] };
        var path = { workspace_id: params.workspace_id, entity: params.entity, value: params.value };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}/values/{value}',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * List entity values.
     *
     * List the values for an entity.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If export=`false`, the returned data includes only information about the element itself. If export=`true`, all content, including subelements, is included. The default value is `false`.
     * @param {number} [params.page_limit] - The number of records to return in each page of results. The default page limit is 100.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - Sorts the response according to the value of the specified property, in ascending or descending order.
     * @param {string} [params.cursor] - A token identifying the last value from the previous page of results.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.listValues = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { "export": params["export"], page_limit: params.page_limit, include_count: params.include_count, sort: params.sort, cursor: params.cursor };
        var path = { workspace_id: params.workspace_id, entity: params.entity };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}/values',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Update entity value.
     *
     * Update the content of a value for an entity.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} params.entity - The name of the entity.
     * @param {string} params.value - The text of the entity value.
     * @param {string} [params.new_value] - The text of the entity value.
     * @param {Object} [params.new_metadata] - Any metadata related to the entity value.
     * @param {string} [params.new_type] - Specifies the type of value (`synonyms` or `patterns`). The default value is `synonyms`.
     * @param {string[]} [params.new_synonyms] - An array of synonyms for the entity value.
     * @param {string[]} [params.new_patterns] - An array of patterns for the entity value. A pattern is specified as a regular expression.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.updateValue = function (params, callback) {
        var requiredParams = ['workspace_id', 'entity', 'value'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { value: params.new_value, metadata: params.new_metadata, type: params.new_type, synonyms: params.new_synonyms, patterns: params.new_patterns };
        var path = { workspace_id: params.workspace_id, entity: params.entity, value: params.value };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}/entities/{entity}/values/{value}',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /*************************
     * workspaces
     ************************/
    /**
     * Create workspace.
     *
     * Create a workspace based on component objects. You must provide workspace components defining the content of the new workspace.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {string} [params.name] - The name of the workspace.
     * @param {string} [params.description] - The description of the workspace.
     * @param {string} [params.language] - The language of the workspace.
     * @param {CreateIntent[]} [params.intents] - An array of objects defining the intents for the workspace.
     * @param {CreateEntity[]} [params.entities] - An array of objects defining the entities for the workspace.
     * @param {CreateDialogNode[]} [params.dialog_nodes] - An array of objects defining the nodes in the workspace dialog.
     * @param {CreateCounterexample[]} [params.counterexamples] - An array of objects defining input examples that have been marked as irrelevant input.
     * @param {Object} [params.metadata] - Any metadata related to the workspace.
     * @param {boolean} [params.learning_opt_out] - Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.createWorkspace = function (params, callback) {
        params = params || {};
        if (typeof params === 'function' && !callback) {
            callback = params;
            params = {};
        }
        var body = { name: params.name, description: params.description, language: params.language, intents: params.intents, entities: params.entities, dialog_nodes: params.dialog_nodes, counterexamples: params.counterexamples, metadata: params.metadata, learning_opt_out: params.learning_opt_out };
        var parameters = {
            options: {
                url: '/v1/workspaces',
                method: 'POST',
                json: true,
                body: body
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Delete workspace.
     *
     * Delete a workspace from the service instance.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.deleteWorkspace = function (params, callback) {
        var requiredParams = ['workspace_id'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}',
                method: 'DELETE',
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Get information about a workspace.
     *
     * Get information about a workspace, optionally including all workspace content.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {boolean} [params.export] - Whether to include all element content in the returned data. If export=`false`, the returned data includes only information about the element itself. If export=`true`, all content, including subelements, is included. The default value is `false`.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.getWorkspace = function (params, callback) {
        var requiredParams = ['workspace_id'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var query = { "export": params["export"] };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}',
                method: 'GET',
                qs: query,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * List workspaces.
     *
     * List the workspaces associated with a Conversation service instance.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {number} [params.page_limit] - The number of records to return in each page of results. The default page limit is 100.
     * @param {boolean} [params.include_count] - Whether to include information about the number of records returned.
     * @param {string} [params.sort] - Sorts the response according to the value of the specified property, in ascending or descending order.
     * @param {string} [params.cursor] - A token identifying the last value from the previous page of results.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.listWorkspaces = function (params, callback) {
        params = params || {};
        if (typeof params === 'function' && !callback) {
            callback = params;
            params = {};
        }
        var query = { page_limit: params.page_limit, include_count: params.include_count, sort: params.sort, cursor: params.cursor };
        var parameters = {
            options: {
                url: '/v1/workspaces',
                method: 'GET',
                qs: query
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    /**
     * Update workspace.
     *
     * Update an existing workspace with new or modified data. You must provide component objects defining the content of the updated workspace.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {string} params.workspace_id - The workspace ID.
     * @param {string} [params.name] - The name of the workspace.
     * @param {string} [params.description] - The description of the workspace.
     * @param {string} [params.language] - The language of the workspace.
     * @param {CreateIntent[]} [params.intents] - An array of objects defining the intents for the workspace.
     * @param {CreateEntity[]} [params.entities] - An array of objects defining the entities for the workspace.
     * @param {CreateDialogNode[]} [params.dialog_nodes] - An array of objects defining the nodes in the workspace dialog.
     * @param {CreateCounterexample[]} [params.counterexamples] - An array of objects defining input examples that have been marked as irrelevant input.
     * @param {Object} [params.metadata] - Any metadata related to the workspace.
     * @param {boolean} [params.learning_opt_out] - Whether training data from the workspace can be used by IBM for general service improvements. `true` indicates that workspace training data is not to be used.
     * @param {Function} [callback] - The callback that handles the response.
     */
    ConversationV1.prototype.updateWorkspace = function (params, callback) {
        var requiredParams = ['workspace_id'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = { name: params.name, description: params.description, language: params.language, intents: params.intents, entities: params.entities, dialog_nodes: params.dialog_nodes, counterexamples: params.counterexamples, metadata: params.metadata, learning_opt_out: params.learning_opt_out };
        var path = { workspace_id: params.workspace_id };
        var parameters = {
            options: {
                url: '/v1/workspaces/{workspace_id}',
                method: 'POST',
                json: true,
                body: body,
                path: path
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    ConversationV1.VERSION_DATE_2017_05_26 = '2017-05-26';
    ConversationV1.VERSION_DATE_2017_04_21 = '2017-04-21';
    ConversationV1.VERSION_DATE_2017_02_03 = '2017-02-03';
    ConversationV1.VERSION_DATE_2016_09_20 = '2016-09-20';
    ConversationV1.VERSION_DATE_2016_07_11 = '2016-07-11';
    ConversationV1.URL = 'https://gateway.watsonplatform.net/conversation/api';
    return ConversationV1;
}());
util.inherits(ConversationV1, BaseService);
ConversationV1.prototype.name = 'conversation';
ConversationV1.prototype.version = 'v1';
/*************************
 * interfaces
 ************************/
(function (ConversationV1) {
    var CreateDialogNodeConstants;
    (function (CreateDialogNodeConstants) {
        var NodeType;
        (function (NodeType) {
            NodeType["STANDARD"] = "standard";
            NodeType["EVENT_HANDLER"] = "event_handler";
            NodeType["FRAME"] = "frame";
            NodeType["SLOT"] = "slot";
            NodeType["RESPONSE_CONDITION"] = "response_condition";
        })(NodeType = CreateDialogNodeConstants.NodeType || (CreateDialogNodeConstants.NodeType = {}));
        var EventName;
        (function (EventName) {
            EventName["FOCUS"] = "focus";
            EventName["INPUT"] = "input";
            EventName["FILLED"] = "filled";
            EventName["VALIDATE"] = "validate";
            EventName["FILLED_MULTIPLE"] = "filled_multiple";
            EventName["GENERIC"] = "generic";
            EventName["NOMATCH"] = "nomatch";
            EventName["NOMATCH_RESPONSES_DEPLETED"] = "nomatch_responses_depleted";
        })(EventName = CreateDialogNodeConstants.EventName || (CreateDialogNodeConstants.EventName = {}));
    })(CreateDialogNodeConstants = ConversationV1.CreateDialogNodeConstants || (ConversationV1.CreateDialogNodeConstants = {}));
    var UpdateDialogNodeConstants;
    (function (UpdateDialogNodeConstants) {
        var NodeType;
        (function (NodeType) {
            NodeType["STANDARD"] = "standard";
            NodeType["EVENT_HANDLER"] = "event_handler";
            NodeType["FRAME"] = "frame";
            NodeType["SLOT"] = "slot";
            NodeType["RESPONSE_CONDITION"] = "response_condition";
        })(NodeType = UpdateDialogNodeConstants.NodeType || (UpdateDialogNodeConstants.NodeType = {}));
        var EventName;
        (function (EventName) {
            EventName["FOCUS"] = "focus";
            EventName["INPUT"] = "input";
            EventName["FILLED"] = "filled";
            EventName["VALIDATE"] = "validate";
            EventName["FILLED_MULTIPLE"] = "filled_multiple";
            EventName["GENERIC"] = "generic";
            EventName["NOMATCH"] = "nomatch";
            EventName["NOMATCH_RESPONSES_DEPLETED"] = "nomatch_responses_depleted";
        })(EventName = UpdateDialogNodeConstants.EventName || (UpdateDialogNodeConstants.EventName = {}));
    })(UpdateDialogNodeConstants = ConversationV1.UpdateDialogNodeConstants || (ConversationV1.UpdateDialogNodeConstants = {}));
    var CreateValueConstants;
    (function (CreateValueConstants) {
        var ValueType;
        (function (ValueType) {
            ValueType["SYNONYMS"] = "synonyms";
            ValueType["PATTERNS"] = "patterns";
        })(ValueType = CreateValueConstants.ValueType || (CreateValueConstants.ValueType = {}));
    })(CreateValueConstants = ConversationV1.CreateValueConstants || (ConversationV1.CreateValueConstants = {}));
    var UpdateValueConstants;
    (function (UpdateValueConstants) {
        var ValueType;
        (function (ValueType) {
            ValueType["SYNONYMS"] = "synonyms";
            ValueType["PATTERNS"] = "patterns";
        })(ValueType = UpdateValueConstants.ValueType || (UpdateValueConstants.ValueType = {}));
    })(UpdateValueConstants = ConversationV1.UpdateValueConstants || (ConversationV1.UpdateValueConstants = {}));
})(ConversationV1 || (ConversationV1 = {}));
module.exports = ConversationV1;
