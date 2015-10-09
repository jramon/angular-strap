angular.module('deathstar', [])
  .config(function ($provide) {
    $provide.decorator('datepickerViews', function ($delegate) {
          return function decoratedDatepickerViews () {
            var pickerViews = $delegate.apply(this, arguments);

            var build = function () {

              var firstMonth = new Date(viewDate.year, 0, 1);
              var months = [], month;
              for (var i = 0; i < 12; i++) {
                month = new Date(viewDate.year, i, 1);
                months.push({date: month, label: formatDate(month, this.format), selected: picker.$isSelected(month), disabled: this.isDisabled(month)});
              }
              scope.title = "Hola";
              scope.showLabels = false;
              //scope.rows = split(months, this.split);
              this.built = true;
            };

            pickerViews.views[1]['build'] = build;

            return pickerViews;
          }
    });
  });
