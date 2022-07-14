define("UsrPublisher1Page", [], function () {
    return {
        entitySchemaName: "UsrPublisher",
        attributes: {},
        modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
        details: /**SCHEMA_DETAILS*/{
            "UsrIssues": {
                "schemaName": "UsrSchema4901c024Detail",
                "entitySchemaName": "UsrEntityIssues",
                "filter": {
                    "detailColumn": "UsrPublish",
                    "masterColumn": "Id"
                }
            }
        }/**SCHEMA_DETAILS*/,
        businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
        methods: {
            asyncValidate: function (callback, scope) {
                this.callParent([function (response) {
                    if (!this.validateResponse(response)) {
                        return;
                    }
                    Terrasoft.chain(
                        function (next) {
                            this.validateEditionChange(function (response) {
                                if (this.validateResponse(response)) {
                                    next();
                                }
                            }, this);
                        },
                        function (next) {
                            callback.call(scope, response);
                            next();
                        }, this);
                }, this]);
            },

            validateEditionChange: function (callback, scope) {
                // ид переодичности Ежедневно
                const ID_PERIODICITY = "7f2050cd-0263-405f-92a3-602879c3311d";
                const CHANGED = this.changedValues;

                // изменена проверка
                var isActive = this.get("UsrActive");
                var periodicity = this.get("UsrPereodicity").value;
                var result = { success: true };

                if (!(isActive && periodicity == ID_PERIODICITY) || (CHANGED && !(CHANGED.UsrActive || CHANGED.UsrPereodicity))) {
                    callback.call(scope, result);
                    return;
                }

                Terrasoft.SysSettings.querySysSettingsItem("MaxCountActiveEveryDayPublish", function (maxCount) {
                    //измененро на использование локализируемой строки
                    const MESSAGE = this.get("Resources.Strings.MessageErrorOverLimit").replace("%count%", maxCount);

                    var esq = Ext.create("Terrasoft.EntitySchemaQuery", { rootSchemaName: "UsrPublisher" });
                    esq.filters.addItem(esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
                        "UsrPereodicity.Id", ID_PERIODICITY));
                    esq.filters.addItem(esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
                        "UsrActive", true));
                    esq.getEntityCollection(function (response) {
                        //добавлена валидация
                        if (response) {
                            var count = response.collection.getCount();
                            if (count >= maxCount) {
                                result.message = MESSAGE;
                                result.success = false;
                            }
                        }
                        callback.call(scope || this, result);
                    }, this);
                }, this);
            }
        },

        dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
        diff: /**SCHEMA_DIFF*/[
            {
                "operation": "insert",
                "name": "UsrStr0ef9b6cf-fd5e-4f51-9feb-0a43632d7a57",
                "values": {
                    "layout": {
                        "colSpan": 24,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 0,
                        "layoutName": "ProfileContainer"
                    },
                    "bindTo": "UsrCode",
                    "enabled": true
                },
                "parentName": "ProfileContainer",
                "propertyName": "items",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "UsrNamead1818d8-cbae-4bbd-ad2d-6595a49b5407",
                "values": {
                    "layout": {
                        "colSpan": 24,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 1,
                        "layoutName": "ProfileContainer"
                    },
                    "bindTo": "UsrName",
                    "enabled": true
                },
                "parentName": "ProfileContainer",
                "propertyName": "items",
                "index": 1
            },
            {
                "operation": "insert",
                "name": "LOOKUP7439255f-6ed9-4763-bc43-cad311138e13",
                "values": {
                    "layout": {
                        "colSpan": 24,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 2,
                        "layoutName": "ProfileContainer"
                    },
                    "bindTo": "UsrPereodicity",
                    "enabled": true,
                    "contentType": 3
                },
                "parentName": "ProfileContainer",
                "propertyName": "items",
                "index": 2
            },
            {
                "operation": "insert",
                "name": "LOOKUP1b8c83af-4d24-4c98-9939-f1ee3d8ae024",
                "values": {
                    "layout": {
                        "colSpan": 24,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 3,
                        "layoutName": "ProfileContainer"
                    },
                    "bindTo": "UsrOwner",
                    "enabled": true,
                    "contentType": 5
                },
                "parentName": "ProfileContainer",
                "propertyName": "items",
                "index": 3
            },
            {
                "operation": "insert",
                "name": "DATETIME7beb1d21-6a87-4c6a-9d6f-80c16b853a9c",
                "values": {
                    "layout": {
                        "colSpan": 24,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 4,
                        "layoutName": "ProfileContainer"
                    },
                    "bindTo": "UsrDateEdit",
                    "enabled": true
                },
                "parentName": "ProfileContainer",
                "propertyName": "items",
                "index": 4
            },
            {
                "operation": "insert",
                "name": "BOOLEAN94be6b14-e89e-4bba-9378-da86c458ec54",
                "values": {
                    "layout": {
                        "colSpan": 24,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 5,
                        "layoutName": "ProfileContainer"
                    },
                    "bindTo": "UsrActive",
                    "enabled": true
                },
                "parentName": "ProfileContainer",
                "propertyName": "items",
                "index": 5
            },
            {
                "operation": "insert",
                "name": "UsrComment68e9707a-49f8-4b9b-b6ad-144e41fbf1ff",
                "values": {
                    "layout": {
                        "colSpan": 22,
                        "rowSpan": 4,
                        "column": 0,
                        "row": 0,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrComment",
                    "enabled": true,
                    "contentType": 0
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "NotesAndFilesTab",
                "values": {
                    "caption": {
                        "bindTo": "Resources.Strings.NotesAndFilesTabCaption"
                    },
                    "items": [],
                    "order": 0
                },
                "parentName": "Tabs",
                "propertyName": "tabs",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "UsrIssues",
                "values": {
                    "itemType": 2,
                    "markerValue": "added-detail"
                },
                "parentName": "NotesAndFilesTab",
                "propertyName": "items",
                "index": 0
            },
            {
                "operation": "remove",
                "name": "ESNTab"
            },
            {
                "operation": "remove",
                "name": "ESNFeedContainer"
            },
            {
                "operation": "remove",
                "name": "ESNFeed"
            }
        ]/**SCHEMA_DIFF*/
    };
});
