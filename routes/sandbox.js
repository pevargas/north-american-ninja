///////////////////////////////////////////////////////////////////////////////
// File: sandbox.js                    October 2014
// Description: 
//    The routing methods for the sandbox controller
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// GET the index
exports.index = function( req, res )
{
   res.render( 'sandbox', { title: 'Patrick E. Vargas' } );
};

// GET the about page
exports.about = function( req, res )
{
   res.render( 'about', { title: 'About' } );
};
///////////////////////////////////////////////////////////////////////////////
