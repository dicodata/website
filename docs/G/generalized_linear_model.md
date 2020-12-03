---
id: generalized_linear_model
title: generalized_linear_model
sidebar_label: generalized_linear_model
---
**Generalized linear model** (*modèle linéaire généralisé en français*) est une généralisation des modèles de régression des moindres carrés, qui sont basés sur le bruit gaussien, à d'autres types de modèles basés sur d'autres types de bruit, par exemple le bruit de grenaille ou le bruit catégorique. Exemples de modèles linéaires généralisés :
* Régression logistique
* Régression à classes multiples
* Régression des moindres carrés

Les paramètres d'un modèle linéaire généralisé peuvent être déterminés via une optimisation convexe.

Les modèles linéaires généralisés présentent les propriétés suivantes :
* La prédiction moyenne du modèle de régression des moindres carrés optimal est égale à l'étiquette moyenne des données d'apprentissage.
* La probabilité moyenne prédite par le modèle de régression logistique optimal est égale à l'étiquette moyenne des données d'apprentissage.

La puissance d'un modèle linéaire généralisé est limitée par les caractéristiques de celui-ci. Contrairement à un modèle profond, un modèle généralisé ne peut pas "apprendre de nouvelles caractéristiques".
