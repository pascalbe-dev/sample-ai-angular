Feature: Search Request anlegen

  Scenario: Lead legt erfolgreich ein Gesuch an
    Given der Lead befindet sich auf der Gesuch-Seite der Company "abc"
    When der Lead die Stadt "Berlin" eingibt
    And der Lead die E-Mail "max@example.com" eingibt
    And das Formular absendet
    Then ist das Gesuch gespeichert und der Company "abc" zugeordnet

  Scenario: Lead legt Gesuch nur mit Telefonnummer an
    Given der Lead befindet sich auf der Gesuch-Seite der Company "abc"
    When der Lead die Stadt "Berlin" eingibt
    And der Lead die Telefonnummer "01234567890" eingibt
    And das Formular absendet
    Then ist das Gesuch gespeichert und der Company "abc" zugeordnet

  Scenario: Lead legt Gesuch mit allen optionalen Feldern an
    Given der Lead befindet sich auf der Gesuch-Seite der Company "abc"
    When der Lead die Stadt "Berlin" eingibt
    And der Lead den Stadtteil "Mitte" eingibt
    And der Lead die minimale Raumanzahl "2" eingibt
    And der Lead die maximale Raumanzahl "4" eingibt
    And der Lead die maximale Preisvorstellung "1200" eingibt
    And der Lead die E-Mail "max@example.com" eingibt
    And das Formular absendet
    Then ist das Gesuch gespeichert und der Company "abc" zugeordnet

  Scenario: Absenden ohne Stadt ist nicht möglich
    Given der Lead befindet sich auf der Gesuch-Seite der Company "abc"
    When der Lead die E-Mail "max@example.com" eingibt
    Then ist der Absenden-Button deaktiviert

  Scenario: Absenden ohne Kontaktdaten ist nicht möglich
    Given der Lead befindet sich auf der Gesuch-Seite der Company "abc"
    When der Lead die Stadt "Berlin" eingibt
    Then ist der Absenden-Button deaktiviert
