(function( $ ){

    var process = 'img/process.gif';
    var succeed = 'img/succeed.png';
    var fail = 'img/fail.png';

    var methods = {
        init : function(options) {
            this.progressTickListItem('reset');
            return this;
        },
        reset : function() {
            this.css('list-style-image', 'none');
            return this;
        },
        start : function() {
            this.css('list-style-image', 'url("' + process + '")');
            return this;
        },
        succeed : function() {
            this.css('list-style-image', 'url("' + succeed + '")');
            return this;
        },
        fail: function() {
            this.css('list-style-image', 'url("' + fail + '")');
            return this;
        }
    };

    $.fn.progressTickListItem = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.progressTickListItem' );
        }    
    };
})( jQuery );