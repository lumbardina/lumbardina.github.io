'use strict';
/*jshint esnext: true */

var pdfViewDirective = () => {
    return {
	restrict: 'E',
	templateUrl: 'components/ui/pdf-view/pdf-view.template.html',
	scope: { pdf     : '='
	       }
    };
};

export default pdfViewDirective;
