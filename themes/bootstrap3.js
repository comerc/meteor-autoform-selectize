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
    delete atts.selectizeOptions;
    return atts;
  }
});

Template["afSelectize_bootstrap3"].events({
  "click .selectized": function (event) {
    // TODO: https://github.com/brianreavis/selectize.js/issues/658
    $(event.toElement).next().children(":first-child").children("input:first").focus();
  }
});

Template["afSelectize_bootstrap3"].rendered = function () {
  // instanciate selectize
  this.$('select').selectize(this.data.atts.selectizeOptions || {});
};

Template["afSelectize_bootstrap3"].destroyed = function () {
  this.$('select')[0].selectize.destroy();
};

Template["afSelectizeInput_bootstrap3"].helpers({
  atts: function afSelectAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.selectizeOptions;
    return atts;
  }
});

Template["afSelectizeInput_bootstrap3"].rendered = function () {
  // instanciate selectize
  this.$('input').selectize(this.data.atts.selectizeOptions || {});
};

Template["afSelectizeInput_bootstrap3"].destroyed = function () {
  this.$('input')[0].selectize.destroy();
};
