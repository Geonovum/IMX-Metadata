let respecConfig = {
  useLogo: true,
  useLabel: true,
  preProcess: [loadTurtle],
  pluralize: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "IMX - Metadata basic principles",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "wv",                   // Werkversie
  specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  specType: "HR",
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "dk",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "WaU-Metadata",
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2023-03-28",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2014-05-01",
  //previousMaturity: "CV",
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "Paul Janssen",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "Jesse Bakker",
        company: "Kadaster",
        companyURL: "https://www.kadaster.nl"
      },
	        {
        name: "Paul Janssen",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl"
      }
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/IMX-Metadata/",
  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ], 
  localBiblio: 
  {
    "Property-Stereotype-for-Metadata":
      {
        title:      "Property Stereotype for Metadata",
        href:       "https://shapechange.net/wp-content/uploads/2019/12/UGAS19-D100_property_stereotypes.pdf",
        status:     "V1.0",
        publisher:  "Publisher-1",
        company:    "Interactive Instruments",
    },
    "MIM":
      {
        title:      "Metamodel Informatie Modellering",
        href:       "https://docs.geostandaarden.nl/mim/def-st-mim-20220217/",
        status:     "1.1.1",
        publisher:  "Geonovum",
        company:    "Geonovum",
    },
    "ISO11179":
      {
        date:       "2023-01",
        title:      "ISO/IEC 11179-3",
        href:       "https://www.iso.org/standard/78915.html",
        publisher:  "International Organization for Standardization (ISO)",
        status:     "Published",
    },
    "UDT":
      {
        title:      "Unified database theory",
        href:       "https://www.odaba.com/content/downloads/documentation/P1_UnifiedDatabaseTheory.pdf",
        publisher:  "International Organization for Standardization (ISO)",
        status:     "Published",
    },
    "NTM":
      {
        title:      "Neuchâtel Terminology Model PART II: Variables and related concepts",
        href:       "https://web.archive.org/web/20120305234809/http://www1.unece.org/stat/platform/download/attachments/14319930/Neuchatel+Model+V1.pdf?version=1",
        status:     "Published",
    },
    "DCS":
    {
      date:       "2020-09",
      title:      "Data Concept System for Data Quality Dimensions",
      href:       "https://www.dama-nl.org/wp-content/uploads/2020/09/DCS-Data-Concept-System-DDQ-Research-Paper-version-1.2-d.d.-3-Sept-2020.pdf",
      status:     "Published",
      publisher:  "DAMA NL",
  },
  }
};
