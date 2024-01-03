## Metadata MIM extension

For this extention a common solution to relate metadata to semantics of a logical data model is provided.


### Requirements

The extention provides a metamodel to model metadata - data about =[data items=]. 

Requirements of for this metamodel in this respect are the following:

1. bind metadata models at the [=property=] level of object types
2. ability to express metadata at the level of [=data items=]
3. metadata can optionally be published
4. metadata model does not have effect on the structure of a logical data model


ad 1,2: MIM-UML does not have a construct to bind (meta)data to properties, i.e. attributes or association ends. It is therefore necessary to extend MIM-UML.

ad 3,4: The metadata is modelled independently from the logical data model. Both are 'loosely' connected.

An approach to these requirements can be found in the [[Property-Stereotype-for-Metadata]]. This publication presents a UML profile extension of [[iso-19109-2015]] through a stereotype `«propertyMetadata»` and a tagged value `metadataType`. An example is presented below.

![](media/example_extension.png "Example showing use of stereotype: Properties with stereotype `«HasMetadata»` reference metadata types via tagged value `metadataType`. Source:[[Property-Stereotype-for-Metadata]]")

For this use case, the above presented pattern is slightly adapted by changing the stereotype name from `«propertyMetadata»` to a general `«HasMetadata»`. The pattern is presented below on a general class `AnyFeature` representing any possible feature type in a logical data model.

![](media/ProductmodelProxy.png "Metadata expressed at the conceptual level of a logical data model")

### Explanation and definition

Stereotype «HasMetadata»
>   **Definition <dfn>«HasMetadata»</dfn>**  
>   This element has associated metadata.

Description:
The stereotype specifies that this [=data element=] has metadata associated. This is a specification at the conceptual level. A related tagged value `Metadata type` specifies the association to specific metadata.

Tagged Value: Metadata type
>   **Definition <dfn>Metadata type</dfn>**  
>   Name of the target class of associated metadata.

Description:
This tagged value specifies the relation to a specific target class in a specific metadata model. This target class serves as the receptor defining the type of metadata that is associated.

In [[[#fig-metadata-expressed-at-the-conceptual-level-of-a-logical-data-model]]] the value for `Metadata type = GeorkestreerdGegeven` is only an example and may differ according to the required metadata class that relates to the specified metadata.

### MIM-UML extension

The defined stereotype and related tagged value lead to an extension of the MIM metamodel. As the extension for now is independent from MIM the extension is described both as an extension of the UML profile metamodel of the [[iso-19109-2015]] and the MIM-UML metamodel.

**Extension on UML [[iso-19109-2015]]**

![](media/UML%20extension.png "Stereotype `«HasMetadata»` as extension on UML metaclass Property")

This UML profile is implemented in a EA MDG Technology named [HasMetadata_mdg](UML-profile/HasMetadata_mdg_build01.xml).

**Extension on MIM-UML**

The metadata information as related to properties in the context of MIM relates to several MIM metaclasses. The `«HasMetadata»` stereotype is defined as an extension on these MIM classes.

![](media/MIM%20hasMetadata%20extensie.png "Stereotype `«HasMetadata»` as extension on MIM-UML metaclasses")
 
 **Example of this Metadata profile applied in a MIM-UML model.**
 
 ![](media/Example_gebouw.png "Example of Stereotype `«HasMetadata»` applied in MIM-UML model")

### Implementation, encoding

The challenges regarding the implementation of this conceptual metadata construct vary across different encoding formats. For example in XML a construct exists to add attributes to XML elements, which provides a means to give attributes to properties, in this case reference to a metadata object. In JSON this does not exist. The `«HasMetadata»` stereotype is therefore extended with a model transformation that objectifies properties of a logical data model. The objectified properties are not part of the logical data model but serve as a loosely coupled intermediate binding mechanism between data and metadata.

The UML model of this pattern is presented below.

![](media/Binding%20model.png "Pattern for the Metadata binding model. Objectification of properties.")

Explanation of diagram.  
The Metadata binding model serves as a model for the [=data elements=] of the logical data model allowing us to express [=data items=] as objects. Each [=property=] (attributes and association roles) is transfomed to an instance of the object type `OrchestratedDataItem` where the value of `property` is the property name. Depending on the type of property (or its associated value type) a `SimpleDataItem`, `ComplexDataItem` or the `RelationDataItem` is chosen.

`SimpleDataItem` for properties with a unstructured value types, `ComplexDataItem` for structured value types and `RelationDataItem` for association roles.
The [=value=] for a property is transformed to the `value` attribute or the `value` association role.

In this model there is no explicit link, expressed in a data structure, between a data value for a property in the original logical data model and its corresponding objectified [=data item=]. The link is there by definition, as defined in [[[#vocabulary]]], because the value for `property` and `value` equal the name of the property of the object type in the original logical data model and the data value, respectively.

Without specifying specifically for the three subtypes of `OrchestratedDataItem` the rule is: `DataModel.property.name = DataItem.property.value AND DataModel.property.value = DataItem.value.value`
