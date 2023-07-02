'use strict';

angular.
    module('sectionReferidos').
        component('sectionReferidos',{
            templateUrl: 'section-referidos/section-referidos.template.html',
            controller: function sectionRederidosController(){
                this.buttonInfo = false;
                this.buttonRef = true;
            }
        })