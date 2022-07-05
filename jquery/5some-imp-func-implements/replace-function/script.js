'use strict'

// $( "div.second" ).replaceWith( "<h2>New</h2>" );

// $( "<h2>New heading</h2>" ).replaceAll( ".inner" );

// $( ".first" ).replaceWith( $( ".last" ) );

$( "button" ).click(function() {
  $( this ).replaceWith( "<div>" + $( this ).text() + "</div>" );
});