console.log('Date.UTC() should apply TimeClip operation according to ECMA-262.');
Date.UTC(275760, 8, 12, 23, 59, 59, 999);
Date.UTC(275760, 8, 13);
isNaN(Date.UTC(275760, 8, 13, 0, 0, 0, 1));
isNaN(Date.UTC(275760, 8, 14));
Date.UTC(-271821, 3, 20, 0, 0, 0, 1);
Date.UTC(-271821, 3, 20);
isNaN(Date.UTC(-271821, 3, 19, 23, 59, 59, 999));
isNaN(Date.UTC(-271821, 3, 19));
