// Generated from: e2e/features/search-request-index.feature
import { test } from "playwright-bdd";

test.describe('Search Request Index einsehen und filtern', () => {

  test('Staff Member sieht nur Gesuche seiner Company', async ({ Given, When, Then, And, page }) => { 
    await Given('der Staff Member ist eingeloggt für Company "abc"', null, { page }); 
    await And('es existieren Gesuche für Company "abc" und Company "xyz"', null, { page }); 
    await When('der Staff Member die Gesuchskartei öffnet', null, { page }); 
    await Then('sieht er nur die Gesuche der Company "abc"', null, { page }); 
  });

  test('Staff Member sieht alle Felder eines Gesuchs', async ({ Given, When, Then, And, page }) => { 
    await Given('der Staff Member ist eingeloggt für Company "abc"', null, { page }); 
    await And('es existiert ein Gesuch mit Stadt "Berlin", E-Mail "max@example.com" und Telefonnummer "01234"', null, { page }); 
    await When('der Staff Member die Gesuchskartei öffnet', null, { page }); 
    await Then('sieht er Stadt, E-Mail und Telefonnummer des Gesuchs', null, { page }); 
  });

  test('Staff Member filtert nach Stadt', async ({ Given, When, Then, And, page }) => { 
    await Given('der Staff Member ist eingeloggt für Company "abc"', null, { page }); 
    await And('es existieren Gesuche für die Städte "Berlin" und "Hamburg"', null, { page }); 
    await When('der Staff Member nach Stadt "Berlin" filtert', null, { page }); 
    await Then('sieht er nur Gesuche mit Stadt "Berlin"', null, { page }); 
  });

  test('Staff Member filtert nach mehreren Kriterien gleichzeitig', async ({ Given, When, Then, And, page }) => { 
    await Given('der Staff Member ist eingeloggt für Company "abc"', null, { page }); 
    await And('es existieren mehrere Gesuche mit verschiedenen Kriterien', null, { page }); 
    await When('der Staff Member nach Stadt "Berlin" und maximaler Preisvorstellung "1000" filtert', null, { page }); 
    await Then('sieht er nur Gesuche, die beide Kriterien erfüllen', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e/features/search-request-index.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given der Staff Member ist eingeloggt für Company \"abc\"","stepMatchArguments":[{"group":{"start":44,"value":"\"abc\"","children":[{"start":45,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And es existieren Gesuche für Company \"abc\" und Company \"xyz\"","stepMatchArguments":[{"group":{"start":34,"value":"\"abc\"","children":[{"start":35,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"xyz\"","children":[{"start":53,"value":"xyz","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When der Staff Member die Gesuchskartei öffnet","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then sieht er nur die Gesuche der Company \"abc\"","stepMatchArguments":[{"group":{"start":37,"value":"\"abc\"","children":[{"start":38,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given der Staff Member ist eingeloggt für Company \"abc\"","stepMatchArguments":[{"group":{"start":44,"value":"\"abc\"","children":[{"start":45,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And es existiert ein Gesuch mit Stadt \"Berlin\", E-Mail \"max@example.com\" und Telefonnummer \"01234\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Berlin\"","children":[{"start":35,"value":"Berlin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"max@example.com\"","children":[{"start":52,"value":"max@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":87,"value":"\"01234\"","children":[{"start":88,"value":"01234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When der Staff Member die Gesuchskartei öffnet","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then sieht er Stadt, E-Mail und Telefonnummer des Gesuchs","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given der Staff Member ist eingeloggt für Company \"abc\"","stepMatchArguments":[{"group":{"start":44,"value":"\"abc\"","children":[{"start":45,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And es existieren Gesuche für die Städte \"Berlin\" und \"Hamburg\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Berlin\"","children":[{"start":38,"value":"Berlin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"Hamburg\"","children":[{"start":51,"value":"Hamburg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When der Staff Member nach Stadt \"Berlin\" filtert","stepMatchArguments":[{"group":{"start":28,"value":"\"Berlin\"","children":[{"start":29,"value":"Berlin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then sieht er nur Gesuche mit Stadt \"Berlin\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Berlin\"","children":[{"start":32,"value":"Berlin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":28,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given der Staff Member ist eingeloggt für Company \"abc\"","stepMatchArguments":[{"group":{"start":44,"value":"\"abc\"","children":[{"start":45,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"And es existieren mehrere Gesuche mit verschiedenen Kriterien","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When der Staff Member nach Stadt \"Berlin\" und maximaler Preisvorstellung \"1000\" filtert","stepMatchArguments":[{"group":{"start":28,"value":"\"Berlin\"","children":[{"start":29,"value":"Berlin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":68,"value":"\"1000\"","children":[{"start":69,"value":"1000","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then sieht er nur Gesuche, die beide Kriterien erfüllen","stepMatchArguments":[]}]},
]; // bdd-data-end