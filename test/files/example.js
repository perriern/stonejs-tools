/**
 * Long doc comment
 *
 */
var text0 = _("This is a translatable string");
var text1 = _('This is a other\' translatable string');
var text2 = "This is NOT a stranslatable string";
var text3 = _("blah blah" /* Hello */ + " World");

_("This is a long" +
  "translatable string");

_("This is an other long " +
  // comment.....
  "translatable string");

_(
"This is a bad \
multiline string"
);

// _("This should not be translated")

var username = "Jean-Kevin";
_("Hello {username}, how are you today?", {"username": username});


Stone.gettext("THIS SHOULD BE TRANSLATABLE TOO!");
Stone.lazyGettext("THIS SHOULD BE TRANSLATABLE TOO! #Lazy");

_ ( "Spaces everywhere" ) ;

_("Chaîne avec des caractères spéciaux");

_("duplicated straing");
_("duplicated straing");
