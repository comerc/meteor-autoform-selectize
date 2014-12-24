Template["afSelectize_bootstrap3"].helpers({
  optionAtts: function afSelectOptionAtts() {
    var item = this
    var atts = {
      value: item.value
    };
    if (item.selected) {
      atts.selected = "";
    }
    return atts;
  },
  atts: function afSelectAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.select2Options;
    return atts;
  }
});

Template["afSelectize_bootstrap3"].rendered = function () {
  // instanciate selectize
  this.$('select').selectize(this.data.atts.selectizeOptions || {});
};

Template["afSelectize_bootstrap3"].destroyed = function () {
  this.$('select')[0].selectize.destroy();
};
