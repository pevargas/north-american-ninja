///////////////////////////////////////////////////////////////////////////////
// File: sandbox.js                    October 2014
// Description: 
//    The routing methods for the sandbox controller
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// GET the index
exports.index = function( req, res )
{
   res.render( 'sandbox' );
};

// GET the about page
exports.about = function( req, res )
{
   res.render( 'about', { title: 'About' } );
};

// GET the resume page
exports.resume = function( req, res )
{
	res.render( 'resume', { title: 'Resume' } );
};

// GET the music page
exports.music = function( req, res )
{
	res.render( 'music', { title: 'Music' } );
};
///////////////////////////////////////////////////////////////////////////////
