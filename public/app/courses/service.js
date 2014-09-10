uvic
.filter('coursesFilter', function () {
    return function (scope, cities, subjects) {

        console.log(cities);
        console.log(subjects);

        _.mixin({
          'findByValues': function(collection, property, values) {
            return _.filter(collection, function(item) {
              return _.contains(values, item[property]);
            });
          }
        });

        var filteredCourses = scope;
        /*var filteredCourses = _.chain(scope).
        where({city: cities}).
        where({subject: subjects})['__wrapped__'];*/
        filteredCourses = _.chain(scope).
        findByValues("city", cities).
        findByValues("subject", subjects)['__wrapped__'];

        /*if (cities != undefined  && subjects == undefined) {
            var filteredCities =_.findByValues(scope, "city", cities);
            var filteredCourses = filteredCities;
        };
        if (cities == undefined  && subjects != undefined) {
            var filteredSujects =_.findByValues(scope, "subject", subjects);
            var filteredCourses = filteredSujects;
        };
        if (cities != undefined && subjects != undefined) {
            var filteredCities =_.findByValues(scope, "city", cities);
            var filteredSujects = _.findByValues(filteredCities, "subject", subjects);
            var filteredCourses = filteredSujects;
        };*/
        
        return filteredCourses;
    };
});