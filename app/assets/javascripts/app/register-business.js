// console.log(ko);

function Tag(tag) {
  var self = this;
  self.id = ko.observable(tag.id);
  self.name = ko.observable(tag.name);
  self.isSelected = ko.observable(tag.isSelected);
  self.isFiltered = ko.observable(true);
  self.aboutToClear = ko.observable(false);
};

function BusinessViewModel() {
  self = this;
  self.AllTags = ko.observableArray([]);
  self.SelectedTags = ko.observableArray([]);
  self.searchTerm = ko.observable("");
  self.maxSelect = ko.observable(5);
  self.undoEnabled = ko.observable(false)


  self.selectTag = function(tag){
    tag.isSelected(!tag.isSelected());
    // tag.aboutToClear(!tag.aboutToClear());
    // Underscore Implementation
    var selectedTags = _.filter(self.AllTags(), function(tag) { return tag.isSelected() == true;});
    self.SelectedTags(selectedTags);
    console.log(self.SelectedTags().length);
  };

  // Clear Search field
  self.clearSearch = function () {
    self.searchTerm('');
  }

  // Clear selected Tags
  self.clearSelectedTags = function () {
    self.undoEnabled(true);
    console.log('Clear selection called: ' + self.undoEnabled());
    // self.SelectedTags('');
    self.AllTags().forEach(function (tag) {
      if (tag.isSelected()) {
        tag.aboutToClear(true);
        tag.isSelected(false);
      }
    })
  }

  // Un do clear selected Tags
  self.UndoClearTags = function () {
    self.undoEnabled(false);
    console.log('Clear selection called');
    // self.SelectedTags('');
    self.AllTags().forEach(function (tag) {
      if (tag.aboutToClear()) {
        tag.aboutToClear(false);
        tag.isSelected(true);
      }
    })
  }


  // Toggle Message
  self.hasSelectedTags = ko.computed(function () {
    console.log(self.SelectedTags().length > 0);
    return self.SelectedTags().length > 0;
    // return self.SelectedTags().length >= self.maxSelect();
  });


  self.allTagsSelected = ko.computed(function () {
    return self.SelectedTags().length >= self.maxSelect();
    // console.log(self.SelectedTags().length >= self.maxSelect());
  });

  // console.log(self.AllTags);
  console.log(self.SelectedTags());

  // Load initial Tags from Server
  $.getJSON('/tags.json', function (allTags) {
    var mappedTags = $.map(allTags, function (tag){ return new Tag(tag)});
    self.AllTags(mappedTags);
  });
}

// Function to search the tag filter, it sets isFiltered Parameter of the tag
// Once this parameter is set the isFiltered = false, tags are hidden
var filterTags = function (searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  self.AllTags().forEach(function (tag) {
    if (tag.name().toLowerCase().indexOf(searchTerm) > -1 )  {
      tag.isFiltered(true);
    } else {
      tag.isFiltered(false);
    }
  })
  // console.log(self.AllTags());
}

$(function(){
  var BusVM = new BusinessViewModel();
  ko.applyBindings(BusVM);

  // Subscribes to the search field changes
  BusVM.searchTerm.subscribe(function (searchTerm) {
    // Function call
    filterTags(searchTerm)
  })

})
