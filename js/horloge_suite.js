// On crée le tableau des jours
var jours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi") ;
// On crée le tableau des mois
var mois = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre") ;
// On crée une instance de la classe Date
var uneDate = new Date() ;
// On affiche la date du jours avec le nom du jours en toute lettre et le nom du mois en toute lettre aussi
document.write( "<div class=\"jour-mois-annee\">" + jours[uneDate.getDay()] + "</div><div id=\"numero-jour\" class=\"couleur\">"+ uneDate.getDate() + "</div><div class=\"jour-mois-annee\">" + mois[uneDate.getMonth()] + "</div><div id=\"clock\"></div>");
