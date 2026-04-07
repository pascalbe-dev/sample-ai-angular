Feature: Search Request Index einsehen und filtern

  Scenario: Staff Member sieht nur Gesuche seiner Company
    Given der Staff Member ist eingeloggt für Company "abc"
    And es existieren Gesuche für Company "abc" und Company "xyz"
    When der Staff Member die Gesuchskartei öffnet
    Then sieht er nur die Gesuche der Company "abc"

  Scenario: Staff Member sieht alle Felder eines Gesuchs
    Given der Staff Member ist eingeloggt für Company "abc"
    And es existiert ein Gesuch mit Stadt "Berlin", E-Mail "max@example.com" und Telefonnummer "01234"
    When der Staff Member die Gesuchskartei öffnet
    Then sieht er Stadt, E-Mail und Telefonnummer des Gesuchs

  Scenario: Staff Member filtert nach Stadt
    Given der Staff Member ist eingeloggt für Company "abc"
    And es existieren Gesuche für die Städte "Berlin" und "Hamburg"
    When der Staff Member nach Stadt "Berlin" filtert
    Then sieht er nur Gesuche mit Stadt "Berlin"

  Scenario: Staff Member filtert nach mehreren Kriterien gleichzeitig
    Given der Staff Member ist eingeloggt für Company "abc"
    And es existieren mehrere Gesuche mit verschiedenen Kriterien
    When der Staff Member nach Stadt "Berlin" und maximaler Preisvorstellung "1000" filtert
    Then sieht er nur Gesuche, die beide Kriterien erfüllen
