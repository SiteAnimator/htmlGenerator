/*
        @package    SiteAnimator/Modules/HtmlGenerator
  
        file:       titleModule.js
        function:   Creates the title.
  
        Last revision: 12-09-2022
 
*/

// create module function
( function( htmlGenerator ){
    
    // create name space
    htmlGenerator.content = htmlGenerator.content ? htmlGenerator.content : {};
    
    // MODULE: titleModule( html element id: parentId ) void 
    htmlGenerator.content.titleModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'titleModule';                    // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.containerOptions = {                           // named array 
            'id'                    :    htmlGenerator.getUiId( self.moduleName + 'Container' ),   // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.contentOptions = {                             // named array 
            'id'                    :    htmlGenerator.getUiId( self.moduleName + 'Content' ),     // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'This is a demonstration of Javascript application build with modules.', // string 
            'readOnly'              :   true,               // boolean
            'textAlign'             :   'center',           // css
            'styleWidth'            :   '100%',             // css
            'styleHeight'           :   '100%',             // css
            'backgroundColor'       :   'transparent',      // css
            'color'                 :   'Chocolate',        // css
            'fontSize'              :   '1.5rem',           // css
            'marginTop'             :   '5rem',             // css
            'textShadow'            :   '2px -1px rgba( 0, 0, 0, 0.3 )',  // css
        };                                                  // done named array  
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'title module construct' );
 
            // create html
            self.createHtml();
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            htmlGenerator.appendContainer( self.parentId, self.containerOptions );
            
            // create content
            htmlGenerator.appendContainer( self.containerOptions['id'], self.contentOptions );
        
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
    // DONE MODULE: titleModule( html element id: parentId ) void 
    
})( htmlGenerator );
// done create module function
