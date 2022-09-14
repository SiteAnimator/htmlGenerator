/*
        @package    SiteAnimator/Modules/HtmlGenerator
  
        file:       introModule.js
        function:   Creates the HTML for the intro.
  
        Last revision: 12-09-2022
 
*/

// create module function
( function( htmlGenerator ){
    
    // create name space
    htmlGenerator.content = htmlGenerator.content ? htmlGenerator.content : {};
    
    // MODULE: introModule( html element id: parentId ) void 
    htmlGenerator.content.introModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'introModule';                    // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.containerOptions = {                           // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'Container' ), // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.titleOptions = {                               // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'Title' ), // string 
            'element'               :   'div',              // html element type 
            'text'                  :   '',                 // string 
            'readOnly'              :   true,               // boolean
            'textAlign'             :   'center',           // css
            'styleWidth'            :   '100%',             // css
            'styleHeight'           :   '100%',             // css
            'backgroundColor'       :   'transparent',      // css
            'color'                 :   'LightSeaGreen',    // css
            'fontSize'              :   '1.2rem',           // css
            'marginTop'             :   '1rem',             // css
        };                                                  // done named array  
        self.introOptions = {                               // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'Intro' ), // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'This is a HTML generator module that creates an HTML from JSON.',  // string 
            'readOnly'              :   true,               // boolean
            'textAlign'             :   'center',           // css
            'styleWidth'            :   '100%',             // css
            'styleHeight'           :   '100%',             // css
            'backgroundColor'       :   'transparent',      // css
            'color'                 :   'LightSeaGreen',             // css
            'fontSize'              :   '1.2rem',           // css
            'marginTop'             :   '1rem',             // css
        };                                                  // done named array  
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'intro module construct' );
 
            // create html
            self.createHtml();
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            htmlGenerator.appendContainer( self.parentId, self.containerOptions );
            
            // add title to container
            htmlGenerator.appendContainer( self.containerOptions['id'], self.titleOptions );
               
            // add intro to container
            htmlGenerator.appendContainer( self.containerOptions['id'], self.introOptions );
        
        // DONE FUNCTION: createHtml( void ) void
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                
                // debug
                htmlGenerator.debug( self.moduleName + ' ' + message );
                
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        
        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: introModule( html element id: parentId ) void 
    
})( htmlGenerator );
// done create module function
