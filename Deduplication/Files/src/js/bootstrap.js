(function() {
    require.config({
        paths: {
            "DuplicatesWidgetComponent": Terrasoft.getFileContentUrl("Deduplication", "src/js/duplicates-widget.js"),
           
        },
        shim: {
            "DuplicatesWidgetComponent": {
                deps: ["ng-core", "chartjs"]
            }
        }
    });
})();
