---
id: AUC
title: AUC (Aire sous la courbe ROC)
sidebar_label: AUC
---
import useBaseUrl from '@docusaurus/useBaseUrl';

L'aire sous une courbe ROC , abrégée en AUC, est une valeur scalaire unique qui mesure la performance globale d'un classificateur binaire (Hanley et McNeil 1982). La valeur AUC se situe dans la plage [0,5-1,0], où la valeur minimale représente la performance d'un classificateur aléatoire et la valeur maximale correspondrait à un classificateur parfait (par exemple, avec un taux d'erreur de classification équivalent à zéro).

L'AUC est une mesure globale robuste pour évaluer la performance des classificateurs de score car son calcul est basé sur la courbe ROC complète et implique donc tous les seuils de classification possibles. L'AUC est généralement calculée en ajoutant des surfaces trapézoïdales successives sous la courbe ROC. La figure 1 montre les courbes ROC pour deux classificateurs de score A et B. Dans cet exemple, le classificateur A a une valeur AUC plus importante que le classificateur B.
<img alt="Docusaurus with Keytar" src={useBaseUrl('img/glossary/AUC.gif')} />



Sources:    
[1] : https://link.springer.com/referenceworkentry/10.1007%2F978-1-4419-9863-7_209

