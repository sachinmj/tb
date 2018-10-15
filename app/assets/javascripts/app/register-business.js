// console.log(ko);

function Tag(tag) {
  var self = this;
  self.name = ko.observable(tag.name);
  self.isSelected = ko.observable(tag.isSelected);

  self.selectTag = function(){
    self.isSelected(!self.isSelected());
    console.log(self.isSelected);
  }

  // Accordion Toggle
  // self.toggleAccoddion = function () {
  //   self.isOpen(!self.isOpen());
  // };

}

function BusinessViewModel() {
  self = this;
  self.AllTags = ko.observableArray([]);
  self.SelectedTags = ko.observableArray([]);

  // console.log(self.AllTags);

  // Load initial State from Server
  $.getJSON('/tags.json', function (allTags) {
    var mappedTags = $.map(allTags, function (tag){ return new Tag(tag)});
    self.AllTags(mappedTags);
  })
}

$(function(){
  ko.applyBindings( new BusinessViewModel());
})
