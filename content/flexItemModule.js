/*
        @package    SiteAnimator/Modules/HtmlGenerator
  
        file:       flexItemModule.js
        function:   Creates the HTML for a flex item from JSON.
  
        Last revision: 16-06-2022
 
*/

// create module function
( function( htmlGenerator ){
    
    // create name space
    htmlGenerator.content = htmlGenerator.content ? htmlGenerator.content : {};
    
    // MODULE: flexItemModule( html element id: parentId,
    //                         named array: options ) void 
    htmlGenerator.content.flexItemModule = function( parentId, 
                                                     options ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'flexItemModule';                 // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.options = options;                             // named array
        self.containerOptions = {                           // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'Container' ), // string 
            'element'               :   'div',              // html element type 
            'display'               :   'table',            // css
            'maximumWidth'          :   '80%',              // css
            'marginRight'           :   '1.4rem',           // css
            'marginBottom'          :   '0.8rem',           // css
            'padding'               :   '1.2rem',           // css
            'backgroundColor'       :   'transparent',      // css
            'border'                :   true,               // boolean
            'borderWidth'           :   '0.1rem',           // css
            'borderStyle'           :   'groove',           // css
            'borderColor'           :   'silver',           // css
            'borderRadius'          :   '1.2rem',             // css
        };                                                  // done named array  
        self.titleOptions = {                               // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'title' ), // string 
            'element'               :   'div',              // html element type 
            'textAlign'             :   'left',             // css
            'fontSize'              :   '1.5rem',           // css
            'color'                 :   'Moccasin',       // css
        };                                                  // done named array  
        self.descriptionOptions = {                         // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'description' ), // string 
            'element'               :   'div',              // html element type 
            'textAlign'             :   'left',             // css
            'fontSize'              :   '1.1rem',           // css
            'marginTop'             :   '1rem',             // css
            'color'                 :   'NavajoWhite',       // css
        };                                                  // done named array  
        self.modules = {};                                  // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'flex item module construct' );
 
            // create html
            self.createHtml();
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            $( '#' + self.parentId ).append( htmlGenerator.generateHtml( self.containerOptions ) );
            
            // set title
            self.titleOptions['text'] = self.options['title'];
            
            // add title to container
            $( '#' + self.containerOptions['id'] ).append( htmlGenerator.generateHtml( self.titleOptions ) );
        
            // set description
            self.descriptionOptions['text'] = self.options['description'];
            
            // add description to container
            $( '#' + self.containerOptions['id'] ).append( htmlGenerator.generateHtml( self.descriptionOptions ) );
        
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
    // DONE MODULE: flexItemModule( html element id: parentId,
    //                              named array: options ) void 
    
})( htmlGenerator );
// done create module function
