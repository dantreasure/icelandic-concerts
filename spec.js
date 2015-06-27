describe('icelandic concerts exercise', function() {
	var concerts = element.all(by.repeater('concert in concerts'));
	var concertElements = element.all(by.css('.concert'));
	var concertTitles = element.all(by.css('.title'));
	var concertCount;
	var titleCount = 0;
	var beforeCounter = 0;

	beforeEach(function() {
    browser.get('http://localhost:8080/');

    concerts.count().then(function(ret){
    	concertCount = ret;
    });

    if(beforeCounter == 0){
    	concertTitles.each(function(concertTitle, index) {
			  concertTitle.getText().then(function (text) {
			    if(text.length > 0 && text typeof == 'string'){
			    	titleCount++;
			    }
			  });
			});
    }
    beforeCounter++;
  });

  it('should get information from the icelandic api', function() {
  	expect(concerts.count()).toBeGreaterThan(0);
  });

  //Test that the number of individual concert elements, is equal
	//to the total of elements from the ng-repeat
  it('should have an element for each concert', function(){
  	expect(concerts.count()).toBe(concertElements.count());
  });

  it('should have the concert title', function(){
		expect(concertCount).toBe(titleCount);
  });

  it('should have the concert image', function(){

  });
});
