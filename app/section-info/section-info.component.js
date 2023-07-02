'use strict';

angular.
    module('sectionInfo').
        component('sectionInfo', {
            templateUrl: 'section-info/section-info.template.html',
            controller: function sectionInfoController(){
                this.colores = true;
                this.week = false;
                this.all = true;
                this.setAtribu = function(){
                    this.week = !this.week;
                    this.all = !this.all;
                }   
            }
        })