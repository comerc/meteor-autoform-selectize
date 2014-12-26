AutoForm.addInputType("selectize-input", {
  template: "afSelectizeInput",
  // valueOut: function () {
  //   return this[0].value;
  // },
  // valueConverters: {
  //   "number": AutoForm.Utility.stringToNumber,
  //   "numberArray": function (val) {
  //     if (_.isArray(val)) {
  //       return _.map(val, function (item) {
  //         item = $.trim(item);
  //         return AutoForm.Utility.stringToNumber(item);
  //       });
  //     }
  //     return val;
  //   },
  //   "boolean": AutoForm.Utility.stringToBool,
  //   "booleanArray": function (val) {
  //     if (_.isArray(val)) {
  //       return _.map(val, function (item) {
  //         item = $.trim(item);
  //         return AutoForm.Utility.stringToBool(item);
  //       });
  //     }
  //     return val;
  //   },
  //   "date": AutoForm.Utility.stringToDate,
  //   "dateArray": function (val) {
  //     if (_.isArray(val)) {
  //       return _.map(val, function (item) {
  //         item = $.trim(item);
  //         return AutoForm.Utility.stringToDate(item);
  //       });
  //     }
  //     return val;
  //   }
  // },
  // contextAdjust: function (context) {
  //   //can fix issues with some browsers selecting the firstOption instead of the selected option
  //   context.atts.autocomplete = "off";
  //
  //   var itemAtts = _.omit(context.atts, 'firstOption');
  //   var firstOption = context.atts.firstOption;
  //
  //   // build items list
  //   context.items = [];
  //
  //   // If a firstOption was provided, add that to the items list first
  //   if (firstOption !== false) {
  //     context.items.push({
  //       name: context.name,
  //       label: (typeof firstOption === "string" ? firstOption : "(Select One)"),
  //       value: "",
  //       // _id must be included because it is a special property that
  //       // #each uses to track unique list items when adding and removing them
  //       // See https://github.com/meteor/meteor/issues/2174
  //       _id: "",
  //       selected: false,
  //       atts: itemAtts
  //     });
  //   }
  //
  //   var fetchOpt = function fetchOpt(opt) {
  //     return {
  //       name: context.name,
  //       label: opt.label,
  //       value: opt.value,
  //       // _id must be included because it is a special property that
  //       // #each uses to track unique list items when adding and removing them
  //       // See https://github.com/meteor/meteor/issues/2174
  //       _id: opt.value,
  //       selected: _.isArray(context.value) ?
  //         _.contains(context.value, opt.value) : (opt.value === context.value),
  //       atts: itemAtts
  //     };
  //   };
  //
  //   // Add all defined options
  //   _.each(context.selectOptions, function(opt) {
  //     if (opt.optgroup) {
  //       context.items.push({
  //         optgroup: opt.optgroup,
  //         items: _.map(opt.options, fetchOpt)
  //       });
  //     } else {
  //       context.items.push(fetchOpt(opt));
  //     }
  //   });
  //
  //   return context;
  // }
});

Template.afSelectizeInput.helpers({
  atts: function afSelectAtts() {
    var atts = _.clone(this.atts);
    delete atts.selectizeOptions;
    return atts;
  }
});

Template.afSelectizeInput.rendered = function () {
  // instanciate selectize
  this.$('input').selectize(this.data.atts.selectizeOptions || {});
};

Template.afSelectizeInput.destroyed = function () {
  this.$('input')[0].selectize.destroy();
};
