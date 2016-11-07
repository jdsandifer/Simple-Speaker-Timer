QUnit.test( 'Basic QUnit Verification', function( assert ) {
  assert.ok( 1 == '1', '1 == "1"' );
});

QUnit.test( 'extractMinutesNum()', function( assert ) {
  // Happy path
  assert.strictEqual( extractMinutesNum('00:00'), 0, '"00:00" returns 0.' );
  assert.strictEqual( extractMinutesNum('00:33'), 0, '"00:33" returns 0.' );
  assert.strictEqual( extractMinutesNum('05:00'), 5, '"05:00" returns 5.' );
  assert.strictEqual( extractMinutesNum('33:00'), 33, '"33:00" returns 33.' );
  assert.strictEqual( extractMinutesNum('933:00'), 933, '"933:00" returns 933.' );

  // Bad inputs
  assert.strictEqual( extractMinutesNum('0:00'), 0, '"0:00" returns 0.' );
  assert.strictEqual( extractMinutesNum('00'), 0, 
    '"00" returns 0. (Input without the colon should be interpreted as seconds.' );
  assert.strictEqual( extractMinutesNum('00'), 0, 
    '"13" returns 0. (Input without the colon should be interpreted as seconds.' );
  assert.strictEqual( extractMinutesNum('1345'), -1, 
    '"1345" returns 22. (Input without the colon should be interpreted as seconds.' );
});

