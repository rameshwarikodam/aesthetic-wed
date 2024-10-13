/**
 * Foo takes any argument.
 * The return value is 'baz' in all cases.
 * @param {template} bar - String that needs to be interpolated.
 * @param {map} [optionalArg] - requires a object with the properties that need to be replaced.
 */
export default function templateString(template, map, fallback) {
  return template.replace(/\$\[[^\]]+\]/g, match => match
    .slice(2, -1)
    .trim()
    .split('.')
    .reduce(
      (searchObject, key) => searchObject[key] || fallback || match,
      map,
    ));
}


export function checkSpecialChars(text) {
  const regex = /^[a-zA-Z][a-zA-Z0-9_-]*$/gi;
  if (text && text.match(regex)) {
    return true;
  }
  return false;
}

export function checkNumberOnly(text) {
  const regex = /^[0-9]*$/gi;
  if (text && text.match(regex)) {
    return true;
  }
  return false;
}

export function checkAlphaNumeric(text) {
  const regex = /^[a-zA-Z0-9_-\s]*$/gi;
  if (text && text.match(regex)) {
    return true;
  }
  return false;
}

/* this method is added specifically for intrument name as it allows '+' and ' ' special chars */
export function checkAlphaNumericWithExceptions(text) {
  const regex = /^[a-zA-Z0-9_-\s+ ]*$/gi;
  if (text && text.match(regex)) {
    return true;
  }
  return false;
}

/**
 * Foo takes any argument.
 * The return value is 'baz' in all cases.
 * @param {str1} bar - character that needs to be search in a string.
 * @param {str2} - character that needs to be replaced in a string.
 * @param {ignore} [optionalArg] - set to true if you want to perform case insensitive search.
 * @param {text} bar - String that needs to be searched.
 */
export function replaceAll(str1, str2, ignore, text) {
  return text.replace(
    new RegExp(
      str1.replace(/([/,!\\^${}[\]().*+?|<>\-&])/g, '\\$&'),
      ignore ? 'gi' : 'g',
    ),
    typeof str2 === 'string' ? str2.replace(/\$/g, '$$$$') : str2,
  );
}

/**
 * Foo takes any argument.
 * The return value is 'baz' in all cases.
 * @param {urlString} - String that needs to be interpolated.
 * @param {map} [optionalArg] - requires a object with the properties that need to be replaced.
 */
export function formatAPIURL(urlString, map, fallback) {
  return 'http://localhost:3000/' + urlString.replace(/\$\[[^\]]+\]/g, match => match
    .slice(2, -1)
    .trim()
    .split('.')
    .reduce(
      (searchObject, key) => searchObject[key] || fallback || match,
      map,
    ));
}