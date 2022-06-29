define("UsrPublisher1MiniPage", [], function() {
	return {
		entitySchemaName: "UsrPublisher",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "HeaderContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "HeaderColumnContainer",
				"values": {
					"itemType": 6,
					"caption": {
						"bindTo": "getPrimaryDisplayColumnValue"
					},
					"labelClass": [
						"label-in-header-container"
					],
					"visible": {
						"bindTo": "isNotAddMode"
					}
				},
				"parentName": "HeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName1e4c1e1a-030b-4140-bf1e-510e426cd2af",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrName"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrOwnera54e9dfe-2ff8-487e-a6a4-e7adbdbb589a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrOwner"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrPereodicity94952838-fbae-4379-b8c9-d0bb5818fb2a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrPereodicity"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrActive91caa525-7a69-4003-b01e-db6cd865466b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrActive"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrCodef536bd24-6c1d-4c80-b769-d067b72362f4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isEditMode"
					},
					"bindTo": "UsrCode",
					"labelConfig": {
						"visible": false
					},
					"enabled": true
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrActived2f435c4-c3dc-4b52-930a-85bdb51f2adc",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "UsrActive"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrOwner56dd1011-7a01-4869-971a-d85a8606c070",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "UsrOwner"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrPereodicity8f2dd9f5-2745-42e6-b716-8db7f80f35c0",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "UsrPereodicity"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 8
			}
		]/**SCHEMA_DIFF*/
	};
});
