it('should add a new server to allServers on submitPaymentInfo()', function () {
    submitPaymentInfo("submit");

    expect(calculateTipPercent(1,1)).toEqual(100);
    
  });