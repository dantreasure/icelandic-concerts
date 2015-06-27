describe('icelandic concerts exercise', function() {
	var concerts = element.all(by.repeater('concert in concerts'));
	var concertElements = element.all(by.css('.concert'));
	var concertTitles = element.all(by.css('.title'));
	var concertImages = element.all(by.css('.image'));
	var concertCount;
	var titleCount = 0;
	var concertImagesCount;
	var beforeCounter = 0;

	beforeEach(function() {
    browser.get('http://localhost:8080/');

    concerts.count().then(function(ret){
    	concertCount = ret;
    });

    concertImages.count().then(function(ret){
    	concertImagesCount = ret;
    });

    if(beforeCounter == 0){
    	concertTitles.each(function(concertTitle, index) {
			  concertTitle.getText().then(function (text) {
			    if(text.length > 0 && typeof text == 'string'){
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

  it('should have an element for each concert', function(){
  	expect(concerts.count()).toBe(concertElements.count());
  });

  it('should have the concert title', function(){
		expect(concertCount).toBe(titleCount);
  });

  it('should have the concert image', function(){
  	expect(concertImagesCount).toBe(concertCount);
  });
});
