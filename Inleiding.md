## Introduction

Kadaster and Geonovum are developing a mechanism to facilitate the semantic integration of decentralized data registers. A central API operates on an integrated semantic layer. The semantic layer consists of a coherent information model integrating several domain-specific domain models. An API orchestration layer directs data communication to and from existing data registries.

The data retrieval schema is in accordance with the logical data model of the semantic layer. Data retrieval will optionally include metadata about the lineage (provenance) of each singular piece of data about a resource.

This document describes a proposed standard for describing [=data items=].

### Target audience

Information modeller, API developer, IT architect.

### Introduction to document

Chapter [[[#vocabulary]]] introduces a conceptual model for data items. Since this model describes how data can be described it is considered a metadata model.

In chapter [[[#metadata-mim-extension]]] we will apply this vocabulary and introduce an extension to [[MIM]] that allows to connect a model element in an information model to a model element in a metadata model.
