// Generated from: e2e/features/search-request-form.feature
import { test } from "playwright-bdd";

test.describe('Search Request anlegen', () => {

  test('Lead legt erfolgreich ein Gesuch an', async ({ Given, When, Then, And, page }) => { 
    await Given('der Lead befindet sich auf der Gesuch-Seite der Company "abc"', null, { page }); 
    await When('der Lead die Stadt "Berlin" eingibt', null, { page }); 
    await And('der Lead die E-Mail "max@example.com" eingibt', null, { page }); 
    await And('das Formular absendet', null, { page }); 
    await Then('ist das Gesuch gespeichert und der Company "abc" zugeordnet', null, { page }); 
  });

  test('Lead legt Gesuch nur mit Telefonnummer an', async ({ Given, When, Then, And, page }) => { 
    await Given('der Lead befindet sich auf der Gesuch-Seite der Company "abc"', null, { page }); 
    await When('der Lead die Stadt "Berlin" eingibt', null, { page }); 
    await And('der Lead die Telefonnummer "01234567890" eingibt', null, { page }); 
    await And('das Formular absendet', null, { page }); 
    await Then('ist das Gesuch gespeichert und der Company "abc" zugeordnet', null, { page }); 
  });

  test('Lead legt Gesuch mit allen optionalen Feldern an', async ({ Given, When, Then, And, page }) => { 
    await Given('der Lead befindet sich auf der Gesuch-Seite der Company "abc"', null, { page }); 
    await When('der Lead die Stadt "Berlin" eingibt', null, { page }); 
    await And('der Lead den Stadtteil "Mitte" eingibt', null, { page }); 
    await And('der Lead die minimale Raumanzahl "2" eingibt', null, { page }); 
    await And('der Lead die maximale Raumanzahl "4" eingibt', null, { page }); 
    await And('der Lead die maximale Preisvorstellung "1200" eingibt', null, { page }); 
    await And('der Lead die E-Mail "max@example.com" eingibt', null, { page }); 
    await And('das Formular absendet', null, { page }); 
    await Then('ist das Gesuch gespeichert und der Company "abc" zugeordnet', null, { page }); 
  });

  test('Absenden ohne Stadt ist nicht möglich', async ({ Given, When, Then, page }) => { 
    await Given('der Lead befindet sich auf der Gesuch-Seite der Company "abc"', null, { page }); 
    await When('der Lead die E-Mail "max@example.com" eingibt', null, { page }); 
    await Then('ist der Absenden-Button deaktiviert', null, { page }); 
  });

  test('Absenden ohne Kontaktdaten ist nicht möglich', async ({ Given, When, Then, page }) => { 
    await Given('der Lead befindet sich auf der Gesuch-Seite der Company "abc"', null, { page }); 
    await When('der Lead die Stadt "Berlin" eingibt', null, { page }); 
    await Then('ist der Absenden-Button deaktiviert', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e/features/search-request-form.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given der Lead befindet sich auf der Gesuch-Seite der Company \"abc\"","stepMatchArguments":[{"group":{"start":56,"value":"\"abc\"","children":[{"start":57,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When der Lead die Stadt \"Berlin\" eingibt","stepMatchArguments":[{"group":{"start":19,"value":"\"Berlin\"","children":[{"start":20,"value":"Berlin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And der Lead die E-Mail \"max@example.com\" eingibt","stepMatchArguments":[{"group":{"start":20,"value":"\"max@example.com\"","children":[{"start":21,"value":"max@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And das Formular absendet","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then ist das Gesuch gespeichert und der Company \"abc\" zugeordnet","stepMatchArguments":[{"group":{"start":43,"value":"\"abc\"","children":[{"start":44,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given der Lead befindet sich auf der Gesuch-Seite der Company \"abc\"","stepMatchArguments":[{"group":{"start":56,"value":"\"abc\"","children":[{"start":57,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When der Lead die Stadt \"Berlin\" eingibt","stepMatchArguments":[{"group":{"start":19,"value":"\"Berlin\"","children":[{"start":20,"value":"Berlin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And der Lead die Telefonnummer \"01234567890\" eingibt","stepMatchArguments":[{"group":{"start":27,"value":"\"01234567890\"","children":[{"start":28,"value":"01234567890","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And das Formular absendet","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then ist das Gesuch gespeichert und der Company \"abc\" zugeordnet","stepMatchArguments":[{"group":{"start":43,"value":"\"abc\"","children":[{"start":44,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given der Lead befindet sich auf der Gesuch-Seite der Company \"abc\"","stepMatchArguments":[{"group":{"start":56,"value":"\"abc\"","children":[{"start":57,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When der Lead die Stadt \"Berlin\" eingibt","stepMatchArguments":[{"group":{"start":19,"value":"\"Berlin\"","children":[{"start":20,"value":"Berlin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And der Lead den Stadtteil \"Mitte\" eingibt","stepMatchArguments":[{"group":{"start":23,"value":"\"Mitte\"","children":[{"start":24,"value":"Mitte","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And der Lead die minimale Raumanzahl \"2\" eingibt","stepMatchArguments":[{"group":{"start":33,"value":"\"2\"","children":[{"start":34,"value":"2","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And der Lead die maximale Raumanzahl \"4\" eingibt","stepMatchArguments":[{"group":{"start":33,"value":"\"4\"","children":[{"start":34,"value":"4","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And der Lead die maximale Preisvorstellung \"1200\" eingibt","stepMatchArguments":[{"group":{"start":39,"value":"\"1200\"","children":[{"start":40,"value":"1200","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And der Lead die E-Mail \"max@example.com\" eingibt","stepMatchArguments":[{"group":{"start":20,"value":"\"max@example.com\"","children":[{"start":21,"value":"max@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And das Formular absendet","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then ist das Gesuch gespeichert und der Company \"abc\" zugeordnet","stepMatchArguments":[{"group":{"start":43,"value":"\"abc\"","children":[{"start":44,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":35,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given der Lead befindet sich auf der Gesuch-Seite der Company \"abc\"","stepMatchArguments":[{"group":{"start":56,"value":"\"abc\"","children":[{"start":57,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When der Lead die E-Mail \"max@example.com\" eingibt","stepMatchArguments":[{"group":{"start":20,"value":"\"max@example.com\"","children":[{"start":21,"value":"max@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then ist der Absenden-Button deaktiviert","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":41,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given der Lead befindet sich auf der Gesuch-Seite der Company \"abc\"","stepMatchArguments":[{"group":{"start":56,"value":"\"abc\"","children":[{"start":57,"value":"abc","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When der Lead die Stadt \"Berlin\" eingibt","stepMatchArguments":[{"group":{"start":19,"value":"\"Berlin\"","children":[{"start":20,"value":"Berlin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then ist der Absenden-Button deaktiviert","stepMatchArguments":[]}]},
]; // bdd-data-end