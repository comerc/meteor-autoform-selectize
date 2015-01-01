AutoForm.addInputType("selectize-input", {
  template: "afSelectizeInput",
  valueOut: function () {
    // if (this[0].selectize) {
      return this[0].selectize.getValue();
    // }
  },
  valueConverters: {
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
    delete atts.selectizeOptions;
    return atts;
  }
});

Template.afSelectizeInput.events({
  "click .selectized": function (event) {
    // TODO: https://github.com/brianreavis/selectize.js/issues/658
    $(event.toElement).next().children(":first-child").children("input:first").focus();
  }
});

Template.afSelectizeInput.rendered = function () {
  // instanciate selectize
  this.$('input').selectize(this.data.atts.selectizeOptions || {});
};

Template.afSelectizeInput.destroyed = function () {
  this.$('input')[0].selectize.destroy();
};
