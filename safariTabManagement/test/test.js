test("a tab has an id as soon as it is instantiated", function () {
  var myTab = new Tab();
  equal(myTab.id.length, "b4c536f8-e4f2-4ddf-8334-fead5fdede48".length);
});

