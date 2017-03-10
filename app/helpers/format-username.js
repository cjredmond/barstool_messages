import Ember from 'ember';

export function formatUsername(params) {
  var splitNames = params[0].split('.');
  var firstName = splitNames[0];
  var lastName = splitNames[1];
  var lastNameClean = lastName.replace(/\d+/g,'');

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

  var firstNameTitle = toTitleCase(firstName);
  var lastNameTitle = toTitleCase(lastNameClean);

  return firstNameTitle + ' ' + lastNameTitle;
}

export default Ember.Helper.helper(formatUsername);
