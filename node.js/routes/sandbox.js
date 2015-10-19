///////////////////////////////////////////////////////////////////////////////
// File: sandbox.js
// Description:
//    The routing methods for the sandbox controller
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// GET the index
exports.index = function( req, res ) {
   res.render( 'sandbox' );
};

// GET the about page
exports.about = function( req, res ) {
    res.render( 'about', { title: 'About' } );
};

// GET the resume page
exports.resume = function( req, res ) {
    res.render( 'resume', { title: 'Resume' } );
};

// GET the music page
exports.music = function( req, res ) {
   res.render( 'music', { title: 'Music' } );
};

// GET the design gallery
exports.design = function( req, res ) {
   res.render( 'design', { title: 'Design' } );
};

// GET the theme page
exports.theme = function( req, res ) {
   res.render( 'theme', { title: 'Theme' } );
};

// GET the code page
exports.software = function( req, res ) {
   res.render( 'code', { title: 'Code' } );
}

// GET the photography page
exports.photography = function( req, res ) {
   res.render( 'photography', { title: 'Photography' } );
}


///////////////////////////////////////////////////////////////////////////////
