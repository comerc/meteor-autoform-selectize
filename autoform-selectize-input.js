AutoForm.addInputType("selectize-input", {
  template: "afSelectizeInput",
  valueOut: function () {
    if (this[0].selectize) {
      return this[0].selectize.getValue();
    }
  },
  valueConverters: {
    "stringArray": function (val) {
      if (_.isArray(val)) {
        return _.map(val, function (item) {
          return $.trim(item);
        });
      }
      return val;
    },
    "number": AutoForm.Utility.stringToNumber,
    "numberArray": function (val) {
      if (_.isArray(val)) {
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToNumber(item);
        });
      }
      return val;
    },
    "boolean": AutoForm.Utility.stringToBool,
    "booleanArray": function (val) {
      if (_.isArray(val)) {
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToBool(item);
        });
      }
      return val;
    },
    "date": AutoForm.Utility.stringToDate,
    "dateArray": function (val) {
      if (_.isArray(val)) {
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToDate(item);
        });
      }
      return val;
    }
  }
});

Template.afSelectizeInput.helpers({
  atts: function afSelectAtts() {
    var atts = _.clone(this.atts);
    // TODO: if (style == 'bootstrap3') ...
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.selectizeOptions;
    return atts;
  }
});

Template.afSelectizeInput.events({
  "click .selectized": function (event) {
    // TODO: https://github.com/selectize/selectize.js/issues/658
    $(event.toElement).next().children(":first-child").children("input:first").focus();
  }
});

Template.afSelectizeInput.rendered = function () {
  var selectizeOptions = this.data.atts.selectizeOptions || {};
  // selectize rearranges one option from the middle of the list
  // https://github.com/selectize/selectize.js/issues/640#issuecomment-71788203
  if (!selectizeOptions.sortField) {
    selectizeOptions.sortField = 'text';
  }
  // instanciate selectize
  this.$('input').selectize(selectizeOptions);
};

Template.afSelectizeInput.destroyed = function () {
  var input = this.$('input');
  var selectize = input && input[0] && input[0].selectize;
  if (selectize && selectize.destroy) {
    selectize.destroy();
  }
};
