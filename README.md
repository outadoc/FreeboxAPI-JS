## Présentation
Une API JavaScript basique pour contrôler la Freebox de Free.  
Cette API utilise l'API télécommande officielle qui repose sur des requêtes GET.

## Exemples
	
#### Instanciation d'une Freebox
	var freebox_1 = new Freebox(1, 12345678);
	//1 = identifiant du boitier, 12345678 = code télécommande de la Freebox

#### Accesseurs pour les identifiants
	freebox_1.setCode(87654321);
	var freebox_hd = freebox_1.getHd();

#### Appel d'une touche de la télécommande
	freebox_1.callKey(FreeboxKey.FREE, false);
	//FreeboxKey.FREE = bouton "Free" de la télécommande, false(/true) = appui long ?

#### Appel simplifié d'une chaîne
	freebox_1.callChannel(18);
	//on zappe sur Gulli
	
## Liste des boutons disponibles
NUM_ONE : 1  
NUM_TWO : 2  
NUM_THREE : 3  
NUM_FOUR : 4  
NUM_FIVE : 5  
NUM_SIX : 6  
NUM_SEVEN : 7  
NUM_EIGHT : 8  
NUM_NINE : 9  
NUM_ZERO : 0  

RED : Bouton rouge (B)  
YELLOW : Bouton jaune (Y)  
BLUE : Bouton bleu (B)  
GREEN : Bouton vert (A)

DIR_UP : Haut  
DIR_DOWN : Bas  
DIR_LEFT : Gauche  
DIR_RIGHT : Droite  

VOL_INC : Augmenter le volume  
VOL_DEC : Baisser le volume  

PRGM_INC : Passer à la chaîne suivante  
PRGM_DEC : Passer à la chaîne précédente  

OK : OK  
BACK : Retour  
SWAP : Revenir à la dernière chaîne visionnée  
POWER : On/Off  
FREE : Free  
MUTE : Muet  

LIST : Liste des chaînes  
MAIL : Messages vocaux  
AUX : Auxilliaires  
PIP : Picture in Picture  
EPG : Programme TV  

PLAYER_RECORD : Enregistrer  
PLAYER_PREV : Précédent  
PLAYER_BACKWARD : Retour rapide  
PLAYER_PLAY : Lecture/pause  
PLAYER_STOP : Stop  
PLAYER_FORWARD : Avance rapide  
PLAYER_NEXT : Suivant