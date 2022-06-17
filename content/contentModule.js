/*
        @package    SiteAnimator/Modules/HtmlGenerator
  
        file:       contentModule.js
        function:   Generates a HTML element for the content.
  
        Last revision: 16-06-2022
 
*/

// create module function
( function( htmlGenerator ){
    
    // create name space
    htmlGenerator.content = htmlGenerator.content ? htmlGenerator.content : {};
    
    // MODULE: contentModule( void ) void 
    htmlGenerator.content.contentModule = function( ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'contentModule';                  // string
        self.debugOn = true;                                // boolean
        self.containerOptions = {                           // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'Container' ), // string 
            'element'               :   'div',              // html element type 
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array  
        self.contentOptions = {                             // named array 
            'id'                    :   htmlGenerator.getUiId( self.moduleName + 'content' ), // string 
            'element'               :   'div',              // html element type 
        };                                                  // done named array  
        self.modules = {};                                  // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'content module construct' );
 
            // create html
            self.createHtml();
 
            // create content
            self.createContent();
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // create container
            $( document.body ).prepend( htmlGenerator.generateHtml( self.containerOptions ) );
            
            // add content to container
            $( '#' + self.containerOptions['id'] ).append( htmlGenerator.generateHtml( self.contentOptions ) );
        
        // DONE FUNCTION: createHtml( void ) void
        };
        self.createContent = function() {
        // FUNCTION: createContent( void ) void

            // create title
            self.createTitle();

            // create intro
            self.createIntro();

            // create flex
            self.createFlex();

        // DONE FUNCTION: createContent( void ) void
        };
        self.createTitle = function() {
        // FUNCTION: createTitle( void ) void

            // get title module
            let titleModule = htmlGenerator.content.titleModule;

            // create title module
            self.modules.title = new titleModule( self.contentOptions['id'] );

        // DONE FUNCTION: createTitle( void ) void
        };
        self.createIntro = function() {
        // FUNCTION: createIntro( void ) void

            // get intro module
            let introModule = htmlGenerator.content.introModule;

            // create intro module
            self.modules.intro = new introModule( self.contentOptions['id'] );

        // DONE FUNCTION: createIntro( void ) void
        };
        self.createFlex = function() {
        // FUNCTION: createFlex( void ) void

            // get flex module
            let flexModule = htmlGenerator.content.flexModule;

            // create flex module
            self.modules.flex = new flexModule( self.contentOptions['id'] );

        // DONE FUNCTION: createFlex( void ) void
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
    // DONE MODULE: introModule( void ) void 
    
})( htmlGenerator );
// done create module function
