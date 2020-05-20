/(?:(?:(")(c)")?)*/.exec('"c"');
['"c"', '"', "c"];
/(?:(?:a*?(")(c)")?)*/.exec('"c"');
['"c"', '"', "c"];
/<script\s*(?![^>]*type=['"]?(?:dojo\/|text\/html\b))(?:[^>]*?(?:src=(['"]?)([^>]*?)\1[^>]*)?)*>([\s\S]*?)<\/script>/gi.exec('<script type="text/javascript" src="..."></script>');
['<script type="text/javascript" src="..."></script>', '"', "...", ""];
