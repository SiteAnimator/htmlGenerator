/*
        @package    SiteAnimator/Modules/HtmlGenerator
  
        file:       flexModule.js
        function:   Generates a flex container and creates the items.
  
        Last revision: 12-09-2022
 
*/

// create module function
( function( htmlGenerator ){
    
    // create name space
    htmlGenerator.content = htmlGenerator.content ? htmlGenerator.content : {};
    
    // MODULE: flexModule( html element id: parentId ) void 
    htmlGenerator.content.flexModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'flexModule';                     // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.containerOptions = {                           // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'Container' ), // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'For example a generated flex container:', // string 
            'textAlign'             :   'center',           // css
            'color'                 :   'Peru',             // css
            'fontSize'              :   '1.2rem',           // css
            'marginTop'             :   '1rem',             // css
            'marginBottom'          :   '3rem',             // css
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.titleOptions = {                               // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'title' ), // string 
            'element'               :   'div',              // html element type 
            'text'                  :   'This appliation has several modules:', // string 
            'textAlign'             :   'center',           // css
            'fontSize'              :   '1.1rem',           // css
            'marginBottom'          :   '3rem',             // css
            'color'                 :   'Peru',             // css
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.flexOptions = {                                // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'flex' ), // string 
            'element'               :   'div',              // html element type 
            'display'               :   'flex',             // css
            'flexWrap'              :   'wrap',             // css
            'justifyContent'        :   'center',           // css
            'margin'                :   '0 auto',           // css
            'maximumWidth'          :   '80%',              // css
        };                                                  // done named array  
        self.flexItems = {                                  // named array 
            'main' : {                                      // named array 
                'title'             :   'main',             // string 
                'description'       :   'The main module is called when the page is loaded.<br>' +
                                        'First the services are created.<br>' +
                                        'Then the content is generated.', // string 
            },                                              // done named array 
            'debugger' : {                                  // named array 
                'title'             :   'debugger',         // string 
                'description'       :   'The debugger module provides on screen messages<br>' +
                                        'to the modules of the application.', // string 
            },                                              // done named array 
            'getUniqueId' : {                               // named array 
                'title'             :   'getUniqueId',      // string 
                'description'       :   'The getUniqueId module provides unique id`s<br>' +
                                        'for the HTML elements created in the application.', // string 
            },                                              // done named array 
            'htmlGenerator' : {                             // named array 
                'title'             :   'htmlGenerator',    // string 
                'description'       :   'The htmlGenerator module provides a function<br>' +
                                        'to create HTML from JSON.', // string 
            },                                              // done named array 
            'content' : {                                   // named array 
                'title'             :   'content',          // string 
                'description'       :   'The content module creates the HTML content<br>' +
                                        'of the page.',     // string 
            },                                              // done named array 
            'flex' : {                                      // named array 
                'title'             :   'flex',             // string 
                'description'       :   'The flex module creates a flex container<br>' +
                                        'with several flex items as an example<br>' +
                                        'for the HTML generator.<br>', // string 
            },                                              // done named array 
            'flexItem' : {                                  // named array 
                'title'             :   'flexItem',         // string 
                'description'       :   'The flexItem module creates an item<br>' +
                                        'of the flex container from JSON.', // string 
            }                                               // done named array 
        };                                                  // done nsmed array  
        self.modules = {};                                  // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'flex module construct' );
 
            // create html
            self.createHtml();
 
            // create items
            self.createItems();
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            htmlGenerator.appendContainer( self.parentId, self.containerOptions );
                        
            // add title to container
            htmlGenerator.appendContainer( self.containerOptions['id'], self.titleOptions );
                
            // add flex to container
            htmlGenerator.appendContainer( self.containerOptions['id'], self.flexOptions );
                
        // DONE FUNCTION: createHtml( void ) void
        };
        self.createItems = function() {
        // FUNCTION: createItems( void ) void

            // get flex item module
            let flexItemModule = htmlGenerator.content.flexItemModule;

            // loop over items
            Object.entries( self.flexItems ).forEach( ( [key, options] ) => {
            
                // create flex item 
                self.flexItems[key]['module'] = new flexItemModule( self.flexOptions['id'],
                                                                    options );
                // create flex item 
                
            });
            // loop over items
            
        // DONE FUNCTION: createItems( void ) void
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
    // DONE MODULE: flexModule( html element id: parentId ) void 
    
})( htmlGenerator );
// done create module function
