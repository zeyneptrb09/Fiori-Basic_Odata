/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "project2/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("project2.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {

                
               
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // OData modelini manifest.json'dan yükle ve Component'e set et
                var oModel = this.getModel("mainService");  // manifest'ten mainService modelini al

                console.log(oModel);
                
                if (oModel) {
                    // Modeli tüm component seviyesinde set et
                    this.setModel(oModel, "formData");
                    console.log("OData Model yüklendi ve Component'e set edildi.");
                } else {
                    console.error("OData Model bulunamadı.");
                }

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);