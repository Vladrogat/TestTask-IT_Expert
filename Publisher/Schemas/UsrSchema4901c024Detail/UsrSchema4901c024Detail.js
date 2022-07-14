define("UsrSchema4901c024Detail", ["ProcessModuleUtilities", "ConfigurationGrid", "ConfigurationGridGenerator",
    "ConfigurationGridUtilitiesV2"], function (ProcessModuleUtilities) {
        return {
            entitySchemaName: "UsrEntityIssues",
            attributes: {
                "IsEditable": {
                    dataValueType: Terrasoft.DataValueType.BOOLEAN,
                    type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
                    value: true
                }
            },
            mixins: {
                ConfigurationGridUtilitiesV2: "Terrasoft.ConfigurationGridUtilitiesV2"
            },
            methods: {
                init: function () {
                    // Вызов родительского метода init()
                    this.callParent(arguments);
                    // Подписка на прием сообщения
                    Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE, this.onNewRelease, this);
                },
                // Обработчик события получения сообщения NewRelease
                onNewRelease: function (sender, message) {
                    //добавлена валидация
                    if (message && message.Header.Sender && message.Body && this.values.MasterRecordId) {
                        if (message.Header.Sender === "NewRelease" && this.values.MasterRecordId === message.Body) {
                            this.updateDetail({ detail: "UsrIssues", reloadAll: "true" });
                        }
                    }
                },
                onActiveRowAction: function (buttonTag, primaryColumnValue) {
                    this.mixins.ConfigurationGridUtilitiesV2.onActiveRowAction.call(this, buttonTag, primaryColumnValue);
                },
                addReleases: function () {
                    var idPublish;
                    //проверка данных
                    if (idPublish = this.values.MasterRecordId) {
                        var processArgs = {
                            sysProcessName: 'UsrProcessCreateRelease',
                            parameters: {
                                ProcessSchemaParameterIdPublish: idPublish,
                            }
                        };
                        ProcessModuleUtilities.executeProcess(processArgs);
                    }
                },
                addRecordOperationsMenuItems: function (toolsButtonMenu) {
                    this.callParent(arguments);
                    toolsButtonMenu.addItem(this.getButtonMenuItem({
                        Type: "Terrasoft.MenuSeparator",
                        Caption: ""
                    }));
                    toolsButtonMenu.addItem(this.getButtonMenuItem({
                        "Caption": { bindTo: "Resources.Strings.CreationReleases" },
                        "Click": { bindTo: "addReleases" },
                        "Enabled": true
                    }));
                }
            },
            diff: /**SCHEMA_DIFF*/[
                {
                    "operation": "merge",
                    "name": "DataGrid",
                    "values": {
                        "className": "Terrasoft.ConfigurationGrid",
                        "generator": "ConfigurationGridGenerator.generatePartial",
                        "generateControlsConfig": { "bindTo": "generateActiveRowControlsConfig" },
                        "changeRow": { "bindTo": "changeRow" },
                        "unSelectRow": { "bindTo": "unSelectRow" },
                        "onGridClick": { "bindTo": "onGridClick" },
                        "activeRowActions": [
                            {
                                "className": "Terrasoft.Button",
                                "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                                "tag": "save",
                                "markerValue": "save",
                                "imageConfig": { "bindTo": "Resources.Images.SaveIcon" }
                            },
                            {
                                "className": "Terrasoft.Button",
                                "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                                "tag": "cancel",
                                "markerValue": "cancel",
                                "imageConfig": { "bindTo": "Resources.Images.CancelIcon" }
                            },
                            {
                                "className": "Terrasoft.Button",
                                "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                                "tag": "card",
                                "markerValue": "card",
                                "imageConfig": { "bindTo": "Resources.Images.CardIcon" }
                            },
                            {
                                "className": "Terrasoft.Button",
                                "style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                                "tag": "copy",
                                "markerValue": "copy",
                                "imageConfig": { "bindTo": "Resources.Images.CopyIcon" }
                            },
                            {
                                "className": "Terrasoft.Button",
                                "style": this.Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
                                "tag": "remove",
                                "markerValue": "remove",
                                "imageConfig": { "bindTo": "Resources.Images.RemoveIcon" }
                            }
                        ],
                        "initActiveRowKeyMap": { "bindTo": "initActiveRowKeyMap" },
                        "activeRowAction": { "bindTo": "onActiveRowAction" },
                        "multiSelect": { "bindTo": "MultiSelect" }
                    }
                }
            ]/**SCHEMA_DIFF*/
        };
    });