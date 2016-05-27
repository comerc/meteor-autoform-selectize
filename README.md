comerc:autoform-selectize
=========================

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "selectize", which renders an input using the [selectize](http://brianreavis.github.io/selectize.js/) plugin.

## Prerequisites

The plugin library must be installed separately.

In a Meteor app directory, enter:

```bash
$ meteor add jeremy:selectize
$ meteor add aldeed:autoform
```

If using with bootstrap, you'll probably also want to:

```bash
$ meteor add jamiecollinson:selectize-bootstrap
```
(note: as replace of `jeremy:selectize`)

## Installation

In a Meteor app directory, enter:

```bash
$ meteor add comerc:autoform-selectize
```

## Usage

Specify "selectize" for the `type` attribute of any input. This can be done in a number of ways:

In the schema, which will then work with a `quickForm` or `afQuickFields`:

```js
{
  tags: {
    type: [String],
    autoform: {
      type: "selectize",
      multiple: true,
      options: function () {
        return [
          {label: "2013", value: 2013},
          {label: "2014", value: 2014},
          {label: "2015", value: 2015}
        ];
      },
      selectizeOptions: {
        hideSelected: true,
        plugins: {
          "remove_button": {}
        }
      }
    }
  }
}
```

Or on the `afFieldInput` component or any component that passes along attributes to `afFieldInput`:

```js
{{> afQuickField name="tags" type="selectize" multiple=true}}

{{> afFormGroup name="tags" type="selectize" multiple=true}}

{{> afFieldInput name="tags" type="selectize" multiple=true}}
```

To provide [selectize options](https://github.com/selectize/selectize.js/blob/master/docs/usage.md#options), set a `selectizeOptions` attribute equal to a helper that returns the options object. Most of the `data-` attributes that the plugin recognizes should also work.

## Demo

[Live](http://autoform.meteor.com/types)

## Limitations

Currently only `select` element features are supported. **UPD** You can use `selectize-input` now.

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.

## See also

[selectize-placecomplete](https://github.com/comerc/selectize-placecomplete)

## License

MIT
