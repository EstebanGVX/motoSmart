'use strict';

angular.
    module('sectionRede').
        component('sectionRede', {
            templateUrl: 'section-rede/section-rede.template.html',
            controller: function sectionRedeController(){
                this.colores = true;
                this.toRedeem = false;
                this.redeemed = true;
                this.setAtribu = function(){
                    this.toRedeem = !this.toRedeem;
                    this.redeemed = !this.redeemed;
                }
            }
        })