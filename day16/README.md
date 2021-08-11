# jour 16
## Description
Le challenge du jour 16 consiste à la mise en place d'une ombre dynamique.

La particularité de ce challenge est que l'ombre du texte est calculée de manière dynamique par rapport à la souris.

\
Le fonctionnement de l'algorithme est :


* Récupération de l'emplacement du texte
  
* Récupération de l'emplacement de la souris

* Calcul de la distance entre la souris et le texte

* Mise à l'échelle entre 0 et 1 :

  * La taille du conteneur du texte est la valeur maximale ou la souris est détectée. Donc diviser par elle revient à échelonnée la distance entre 0 et 1

* Multiplication par le pas 

## Démonstration
https://user-images.githubusercontent.com/67798835/129020869-ed5d7364-bd7e-4c3d-9cb6-6f01034c3c6b.mp4
