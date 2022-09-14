/*
    @package    SiteAnimator\Modules\HtmlGenerator

    file:       main.js
    function:   This file contains the main application module.    
                
    Last revision: 12-09-2022
 
*/    

// create module function
( function( htmlGenerator ){
    
    // MODULE: mainModule( named array: options ) void 
    htmlGenerator.mainModule = function( options ) {
    
        // PRIVATE:
        
        // MEMBERS
        var self = this;                        // object
        self.moduleName = 'main';               // string
        self.options = options;                 // named array
        self.modules = {};                      // named array
    
        self.start = function() {
        // FUNCTION: start( void ) void

            // create services
            self.createServices();

            // create content
            self.createContent();

        // DONE FUNCTION: start( void ) void
        };
        self.createServices = function() {
        // FUNCTION: createServices( void ) void

            // create debugger module
            self.modules.debugger = new htmlGenerator.service.debuggerModule( self.options['debugOptions'] );

            // create get ui id module
            self.modules.getUiId = new htmlGenerator.service.getUiIdModule( );

            // create html generator module
            self.modules.htmlGenerator = new htmlGenerator.service.htmlGeneratorModule( );


        // DONE FUNCTION: createServices( void ) void
        };
        self.createContent = function() {
        // FUNCTION: createContent( void ) void

            // get content module
            let contentModule = htmlGenerator.content.contentModule;

            // create content module
            self.modules.content = new contentModule();

        // DONE FUNCTION: createContent( void ) void
        };

        // PUBLIC
        return {
            
            // FUNCTION: start( void ) void    
            start : function( ){
                
                // call internal
                self.start( );
                
            }
            
        };
        // DONE PUBLIC
                
    };
    // DONE MODULE: mainModule( named array: options ) void
    
})( htmlGenerator );
// done create module function
        
