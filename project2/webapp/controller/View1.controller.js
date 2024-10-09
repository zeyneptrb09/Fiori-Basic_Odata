sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit: function () {
            console.log("init function")
           // OData modelini tanımla
           var oModel = this.getOwnerComponent().getModel("formData");
        
           if (oModel) {
            oModel.read("/FormDataSet", {
                success: function(oData) {
                    console.log("OData'dan gelen veriler: ", oData);
                    var oJSONModel = new sap.ui.model.json.JSONModel();
                    oJSONModel.setData(oData.results);  // Verileri JSON modele set et
                    this.getView().setModel(oJSONModel, "formData");
                }.bind(this),
                error: function(oError) {
                    console.log("Veri çekilirken hata oluştu.", oError);
                }
            });
            } else {
            console.error("formData Modeli bulunamadı.");
            }
           
        }
    });
});
