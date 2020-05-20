console.log('Test JS parser handling of regex literals starting with /=');
/=/.toString();
/=/.test('');
/=/.test('=');
'='.match(/=/);
'='.match(/\=/);
