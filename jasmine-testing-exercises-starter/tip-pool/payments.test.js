it('should submit payment info()', function () {
    submitPaymentInfo();

    expect(billAmtInput.value).toEqual('');
    expect(tipAmtInput.value).toEqual('');
  });



  it('should appendToPaymentTable()', function ()
   {

    let lenOfPaymentTBody = paymentTbody.length;
    billAmtInput.value = 1.00;

    appendPaymentTable(createCurPayment());

    expect(paymentTbody.length-lenOfPaymentTBody).toEqual(1);


    

  });



  it('should update summary()', function ()
   {

   updateSummary();

expect(summaryTds[0].innerHTML).toEqual('$' + sumPaymentTotal('billAmt'))
;
expect(summaryTds[1].innerHTML).toEqual('$' + sumPaymentTotal('tipAmt'))


    
   });
   

  