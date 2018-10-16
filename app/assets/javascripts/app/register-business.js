// console.log(ko);

function Tag(tag) {
  var self = this;
  self.name = ko.observable(tag.name);
  self.isSelected = ko.observable(tag.isSelected);
};

function BusinessViewModel() {
  self = this;
  self.AllTags = ko.observableArray([]);
  self.SelectedTags = ko.observableArray([]);

  self.maxSelect = ko.observable(5);

  self.selectTag = function(tag){
    tag.isSelected(!tag.isSelected());
    //
    var selectedTags = _.filter(self.AllTags(), function(tag) { return tag.isSelected() == true;});
    self.SelectedTags(selectedTags);
  };

  // Toggle Message
  self.hasSelectedTags = ko.computed(function () {
    return self.SelectedTags().length >= 1;
    // return self.SelectedTags().length >= self.maxSelect();
  })

  self.allTagsSelected = ko.computed(function () {
    return self.SelectedTags().length >= self.maxSelect();
    // console.log(self.SelectedTags().length >= self.maxSelect());
  })

  // self.SelectedTags.push(_.filter(self.AllTags(), function(tag) { return tag.isSelected == true;}));
  // console.log(self.SelectedTags);

  // console.log(self.AllTags);
  console.log(self.SelectedTags());

  // Load initial State from Server
  $.getJSON('/tags.json', function (allTags) {
    var mappedTags = $.map(allTags, function (tag){ return new Tag(tag)});
    self.AllTags(mappedTags);
  })
}

$(function(){
  ko.applyBindings( new BusinessViewModel());
})
