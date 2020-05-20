console.log('Test to ensure RegExp generates single character matches in the correct order');
/[\w']+/.exec("'_'").toString();
