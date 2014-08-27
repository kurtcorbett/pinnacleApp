describe('Hello Map', function() {

  it('sets map and its center', function() {
  browser.get('hello_map.html');
    // expect(browser.getLocationAbsUrl()).toMatch("/hello_map.html");
    browser.wait( function() {
      return browser.executeScript( function() {
        var el = document.querySelector("map");  
        var scope = angular.element(el).scope();
        return scope.map.getCenter().lat();
      }).then(function(result) {
        return result;
      });
    }, 5000);
    element(by.css("map")).evaluate('map.getCenter().lat()').then(function(lat) {
      expect(lat).toBeGreaterThan(0);
    });
    element(by.css("map")).evaluate('map.getCenter().lng()').then(function(lng) {
      expect(lng).toBeLessThan(0);
    });
  });

});
