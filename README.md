Introductie
===========

In dit artikel wordt beschreven hoe we binnen team Rood een nieuwe
integratie-test met Cucumber kunnen toevoegen.

Status en voortgang
-------------------

-   0.1.0

    -   Bevat beschrijving hoe ad-hoc een test kan worden toegevoegd
        zodat deze kennis direct geborgd is. Zie onderdeel ?

-   0.2.0

-   Uitleg over Cucumber gebaseerd voor SEA

    -   Handleiding gebaseerd op de eerste implementatie in het project
        sea-uitnodigen, d.d. 8-05-2017 schrijven

    -   Beschrijving van de installatie van Cucumber binnen projecten
        van SEA

Definities en afkortingen
-------------------------

-   Flow: het geheel van stappen in een usecase/ feature om van de start
    A naar eindpunt B te komen

-   Stub: Een stub is in de informatica een tijdelijke versie van een
    functie. Een stub is een testtool. Een stub vervangt een nog
    ontbrekende (sub)module en reageert net als het ontbrekende
    gedeelte. Hierdoor is de communicatie met het nog ontbrekende stuk
    toch te testen.

-   Mock: Een mockobject is een (software)object speciaal gemaakt om de
    eigenschappen en gedragingen te simuleren van een of meerdere
    objecten tijdens een softwaretest, zoals een unittest. Of anders
    gezegd een *Stub* waarop ook een test wordt uitgevoerd

-   Integratie-test: binnen team Rood hebben we afgesproken dat de
    cucumber-testen integratie-testen worden genoemd. Met een
    integratietest wordt in deze context bedoelt een test die de gehele
    flow vanaf begin tot einde use case afdekt. Een voorbeeld hiervan is
    bijvoorbeeld om de **MkmFacadeImpl::verwerkBericht(MkmValueObject)**
    als startpunt te definieren en dan te controleren aan het einde van
    de gehele flow of het bericht in de Queue of MessageConsumer is
    terechtgekomen en/of dit bericht aan de SplunkLogger is aangeboden

-   Steps: Een onderdeel van een cucumbertest gedeinieerd door *@Given,
    @When, @Then*

For the impatient
=================

*Wat te doen indien de build faalt*.  
Indien de build (spontaan) faalt nadat je een component zoals
bijvoorbeeld een service hebt toegevoegd. Bijkomend voordeel is dat het
nu verplicht is om in ieder geval een Cucumber gebaseerde mock te maken
- en eigenlijk dus ook de test.

-   Controleer of je een nieuwe service hebt toegevoegd

-   Indien dit het geval is en de build faalt met iets als *Unable to
    load Application Context* dan heb je waarschijnlijk (nog) geen mock
    gemaakt in SeaWarContainerBeans.

Hieronder volgt een beschrijving hoe we dit probleem op kunnen lossen.
Als voorbeeld volgt hieronder de implementatie van
*MassaalAfhandelenAangifteVAServiceClientFacadeImpl* want Spring Boot
mist op dit moment nog een mock voor de URL en voor de
MassaalAfhandelenAangifteVAService en deze gaan we toevoegen

    public class MassaalAfhandelenAangifteVAServiceClientFacadeImpl extends CommunicatieHubWebserviceSupport
    implements MassaalAfhandelenAangifteVAServiceClientFacade {

    //overige code weggelaten

    @Resource(name = "url/sea/massaalAfhandelenAangifteVAWsEndpointRef")
    private URL wsEndpoint;

    @WebServiceRef(wsdlLocation = "wsdl/sea/massaal/MassaalAfhandelenAangifteVAService.wsdl")
    private MassaalAfhandelenAangifteVAService_Service afhandelenAangifteVAClient;

    @Bean(name = "url/sea/bepalenBehandelwijzeWsEndpointRef")
    public URL bepalenBehandelwijzeWsEndpointRef() {
        return url();
    }

Implementatie van ontbrekende code
----------------------------------

Hieronder wat tips en technieken die gebruikt kunnen worden. Wellicht
heb je hiervoor andere tools die je handig vindt

-   Maak een build en redirect naar file

<!-- -->

    $ mvn clean test –e &2>output.log

-   Open de logfile van Maven (output.log)

-   Zoek de foutmeldingen op van Spring

    -   Waarschijnlijk mis je ergens een url en krijg je de name van de
        url in de log

-   Voeg deze URL toe in SeaWarContainerBeans.java

    -   Open daartoe SeaWArContainerBeans

    -   Vind de methode url()

    -   Maak een copie van deze methode of maak een nieuwe methode die
        deze url() aanroept, zie voorbeeld

    -   Vervang de name van de bean door de missing url. In dit geval
        dus de hierboven vermelde
        *url/sea/massaalAfhandelenAangifteVAWsEndpointRef*

-   Draai opnieuw \$ mvn clean test –e &2\>output.log

-   Zoek in de logfile naar melding omtrent invalid wsdlLocation for
    WebService

Indien dit het geval is doe dan het volgende

    @Bean
    public MassaalAfhandelenAangifteVAService_Service afhandelenAangifteVAClient() {
      String location = "wsdl/sea/massaal/MassaalAfhandelenAangifteVAService.wsdl";
      URL wsdlDocumentLocation = resolveUrl(location);

      QName serviceName = new QName("http://massaal.services.generated.massaal.sea.belastingdienst.nl", "MassaalAfhandelenAangifteVAService");
      MassaalAfhandelenAangifteVAService_Service result = new MassaalAfhandelenAangifteVAService_Service(wsdlDocumentLocation, serviceName);

      return result;
    }

Vervang daarbij de locale variabele location uit de location die staat
in de @WebServiceRef annotatie. In dit geval dus
*wsdl/sea/massaal/MassaalAfhandelenAangifteVAService.wsdl*

1.  Open het bestand “MassaalAfhandelenAangifteVAService.wsdl”

    1.  Daarin vindt je onder wsdl:definition de targetNamespace: vul
        die als String in als eerste argument
        (*\\http://massaal.services.generated.massaal.sea.belastingdienst.nl*)

    2.  Vind in hetzelfde bestand de sectie: wsdl:service en vindt de
        *name* property direct in deze sectie. Vervang argument van
        bovenstaande constructie door deze String
        *MassaalAfhandelenAangifteVAService*

De overige zaken van constructie en het maken van een mock SOAP endpoint
worden door het door ons gemaakte product vanzelf gegeneerd.

Na de bovenstaande wijzigingen zou de build dus moeten slagen

Cucumber
========

Cucumber file
-------------

Maak een file met een extentie .feature aan in
src/test/resources/cucumber Alle filenames zijn geldig zolang ze maar
eindigen op .feature en in src/test/resources/cucumber staan. Het
Cucumber framework zal vervolgens deze bestanden automatisch oppakken.

Cucumber sentences
------------------

Door middel van natuurlijke taal kunnen we een test schrijven, eigenlijk
zou die test moeten worden opgesteld door de product-owner en de zijnen
maar voor nu wordt dit nog door de developers gedaan.

-   Given

-   When

-   Then

*Syntax van een aantal cucumber-sentences:*.  
Given \<preconditie\> When \<actie\> Then \<test\>

-   Given Ik heb een persoon die is overleden op 9-03-2017

-   When Ik voor deze persoon een overlijdensignaal verstuur

-   Then het bericht is doorgezet naar SEA

<!-- -->

    Feature: UDA1 Send messsage to SEA or GRS
      As a Erflater
      I want to see that I am in SEA or GRS
      So that I can do my aangifte



       Scenario: Verwerk bericht in 2017 means SEA
        Given Ik heb een persoon met overlijdensdatum 09-03-2017
        When Ik een overlijdenssignaal verstuur
        Then the message is sent to SEA

Structuur van een cucumber file
-------------------------------

-   Feature: omschrijving van de feature – rechtstreeks uit de story uit
    JIRA – Vrije tekst met daarin een beschrijving van de feature

-   Scenario: omschrijving van EEN scenario met betrekking tot de
    feature. Vrije tekst

-   Given: een zin die bedoeld is om het scenario op te zetten. De
    pre-conditie.

-   When: een zin om een actie uit te laten voeren door het systeem.
    Feitelijk de (echte) start van de use case. De actie

-   Then: validatie, test.

Implementatie van Cucumber Steps
================================

Voor bovenstaande cucumber sentences moeten vervolgens steps worden
gedefinieerd. Het definiereen van deze steps wordt behandeld in de
volgende sectie.

Steps file
----------

Zoals hierboven kort is vermeld kent Cucumber een aantal steps te weten
Given, When en Then Implementatie van deze steps geschiedt door het
volgende te doen:

Maken van een Steps class
-------------------------

Maak een class in je project onder de sourcefolder src/test/java die
erft van AbstractSteps. Je krijgt dan direct de verplichting om de
(abstracte) methode

      Class<?> getClassContainingMyUnitTests()

te implementeren Deze methode is een template-method die de afronding
verzorgt van het creeren van het unittest overzicht van dit scenario.
Return indien mogelijk de class die de unittesten voor deze story
verzorgt.

Aanmaken van de steps
---------------------

Voor elke zin in de cucumber file dient er een passende step methode te
komen.

Als we bijvoorbeeld de hierboven vermelde zin

     Given Ik heb een persoon met overlijdensdatum 09-03-2017

zouden willen invoeren in bovenvermelde steps file dan gaan we als volgt
te werk

      public void hebEenPersoonMetOverlijdensDatum(String overlijdensDatum) {

      }

Om cucumber deze methode als implementatie van de bovenvermelde Given te
laten herkennen moeten we de volgende annotatie en reguliere
expressie(s) toevoegen boven de methode:

       @Given(“^Ik heb een persoon met overlijdensdatum (.*)$”)

Zodat de methode er als volgt uit komt te zien

      @Given(“^Ik heb een persoon met overlijdensdatum (.*)$”)
      public void hebEenPersoonMetOverlijdensDatum(String overlijdensDatum) {

      }

Het idee hier achter is dat het gedeelte in (\*.) als argument in de
parameter overlijdensDatum wordt geinjecteerd.

Dus in de zin: Ik heb een persoon met overlijdensdatum 09-03-2017 wordt
De methode aangeroepen met 09-03-2017 als String overlijdensDatum.

Binnen de Given methode ga je dus eigenlijk *aan de slag* met de
overlijdensDatum string.

Omdat we iets met een persoon willen doen zouden we als volgt een
instance variable Persoon kunnen maken.

    // instance
    private Persoon persoon;

    @Inject
    private BvrMessageFacadeImpl bvrMessageFacadeImpl;

    @Inject
    Private MessageConsumer consumer;


    @Given(“^Ik heb een persoon met overlijdensdatum (.*)$”)
    public void hebEenPersoonMetOverlijdensDatum(String overlijdensDatum) {
      this.persoon = new Persoon();
      this.persoon.setOverijdensDatum(new Date(overlijdensDatum));
    }

Na het maken van de Given constructie dien je ook de When en Then
constructie te maken volgens hetzelfde principe.

Een enorm simpele versie van een When zou iets als dit kunnen zijn. We
willen testen of de persoon met zijn overlijdensDatum in sea of grs is
opgeslagen. Daartoe testen we uiteindelijk of de consumer het
desbetreffende verzonden bericht bevat.

    @When(“^Ik een overlijdenssignaal verstuur $”)
    public void whenIkEenOverlijdenssignaalVerstuur() {
        this. bvrMessageFacadeImpl.verstuur(this.persoon);
    }

    @Then(“^the message is sent to (.*)$”)
    public void theMessageIsSentTo(String destination) {
        Assert.assertTrue(this.consumer.getMessage.contains(destination)); // pseudo
    }

Deze integratie test moet alle onderdelen van de flow passeren. Alle
onderdelen van de test moeten daarom ofwel:

1.  Reeds te instantieren zijn tijdens het draaien van een test

2.  Te worden geinstantieerd tijdens het draaien van de test in een
    container als WebSphere

3.  Door gebruik maken van @Inject annotaties te kunnen worden
    geinstantieerd

Optie 1 is triviaal Optie 2 en 3 moeten door de developer worden
gecreerd in het bestand “SeaWarContainerBeans” Optie 2 en 3 moeten ook
worden gemaakt als file in src/test/java/…/stubs

De stubs dienen vervolgens te worden vermeld in de SeaWarContainerBeans,
tenzij dit niet nodig is omdat het component/class is geannoteerd met
@Named.

Problemen, oorzaak en oplossing
===============================

De implementatie van de Cucumber omgeving is gedaan met de gedachte dat
het echt MOET. Daarom faalt Cucumber als er van een component die in de
flow voorkomt niet een stub is gemaakt. Voorbeelden hiervan zijn
beschreven in bovenvermelde omschrijven en stappen.

Aanmaken van stub’s
===================

To be continued maar zie vooral het begin dit artikel onder ?

Toevoegen van een nieuwe test
=============================

To be continued

Voorbeeld van een nieuwe test
=============================

To be continued
