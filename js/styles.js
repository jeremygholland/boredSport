$(function(){
var styles = ["Classic English-Style Pale Ale","English-Style India Pale Ale","Ordinary Bitter","Special Bitter or Best Bitter","Extra Special Bitter","English-Style Summer Ale","Scottish-Style Light Ale","Scottish-Style Heavy Ale","Scottish-Style Export Ale","English-Style Pale Mild Ale","English-Style Dark Mild Ale","English-Style Brown Ale","Old Ale","Strong Ale","Scotch Ale","British-Style Imperial Stout","British-Style Barley Wine Ale","Brown Porter","Robust Porter","Sweet or Cream Stout","Oatmeal Stout","Irish-Style Red Ale","Classic Irish-Style Dry Stout","Foreign (Export)-Style Stout","American-Style Pale Ale","Fresh \"Wet\" Hop Ale","Pale American-Belgo-Style Ale","Dark American-Belgo-Style Ale","American-Style Strong Pale Ale","American-Style India Pale Ale","Imperial or Double India Pale Ale","American-Style Amber/Red Ale","Imperial Red Ale","American-Style Barley Wine Ale","American-Style Wheat Wine Ale","Golden or Blonde Ale","American-Style Brown Ale","Smoke Porter","Brett Beer","American-Style Sour Ale","American-Style Black Ale","American-Style Stout","American-Style Imperial Stout","Specialty Stouts","German-Style Kölsch / Köln-Style Kölsch","Berliner-Style Weisse (Wheat)","Leipzig-Style Gose","South German-Style Hefeweizen / Hefeweissbier","South German-Style Kristall Weizen / Kristall Weissbier","German-Style Leichtes Weizen / Weissbier","South German-Style Bernsteinfarbenes Weizen / Weissbier","South German-Style Dunkel Weizen / Dunkel Weissbier","South German-Style Weizenbock / Weissbock","Bamberg-Style Weiss (Smoke) Rauchbier (Dunkel or Helles)","German-Style Altbier","Kellerbier (Cellar beer) or Zwickelbier - Ale","Belgian-Style Flanders Oud Bruin or Oud Red Ales","Belgian-Style Dubbel","Belgian-Style Tripel","Belgian-Style Quadrupel","Belgian-Style Blonde Ale","Belgian-Style Pale Ale","Belgian-Style Pale Strong Ale","Belgian-Style Dark Strong Ale","Belgian-Style White (or Wit) / Belgian-Style Wheat","Belgian-Style Lambic","Belgian-Style Gueuze Lambic","Belgian-Style Fruit Lambic","Belgian-Style Table Beer","Other Belgian-Style Ales","French-Style Bière de Garde","French & Belgian-Style Saison","International-Style Pale Ale","Australian-Style Pale Ale","German-Style Pilsener","Bohemian-Style Pilsener","German-Style Leichtbier","Münchner (Munich)-Style Helles","Dortmunder / European-Style Export","Vienna-Style Lager","German-Style Märzen","German-Style Oktoberfest / Wiesen (Meadow)","European-Style Dark / Münchner Dunkel","German-Style Schwarzbier","Bamberg-Style Märzen Rauchbier","Bamberg-Style Helles Rauchbier","Bamberg-Style Bock Rauchbier","Traditional German-Style Bock","German-Style Heller Bock/Maibock","German-Style Doppelbock","German-Style Eisbock","Kellerbier (Cellar beer) or Zwickelbier - Lager","American-Style Lager","American-Style Light (Low Calorie) Lager","American-Style Low-Carbohydrate Light Lager","American-Style Amber (Low Calorie) Lager","American-Style Premium Lager","American-Style Pilsener","American-Style Ice Lager","American-Style Malt Liquor","American-Style Amber Lager","American-Style Märzen / Oktoberfest","American-Style Dark Lager","Baltic-Style Porter","Australasian, Latin American or Tropical-Style Light Lager","International-Style Pilsener","Dry Lager","Session Beer","American-Style Cream Ale or Lager","California Common Beer","Ginjo Beer or Sake-Yeast Beer","Light American Wheat Ale or Lager with Yeast","Light American Wheat Ale or Lager without Yeast","Fruit Wheat Ale or Lager with or without Yeast","Dark American Wheat Ale or Lager with Yeast","Dark American Wheat Ale or Lager without Yeast","Rye Ale or Lager with or without Yeast","German-Style Rye Ale (Roggenbier) with or without Yeast","Fruit Beer","Field Beer","Pumpkin Beer","Chocolate / Cocoa-Flavored Beer","Coffee-Flavored Beer","Herb and Spice Beer","Specialty Beer","Specialty Honey Lager or Ale","Gluten-Free Beer","Indigenous Beer (Lager or Ale)","Smoke Beer (Lager or Ale)","Experimental Beer (Lager or Ale)","Historical Beer","Wood- and Barrel-Aged Beer","Wood- and Barrel-Aged Pale to Amber Beer","Wood- and Barrel-Aged Dark Beer","Wood- and Barrel-Aged Strong Beer","Wood- and Barrel-Aged Sour Beer","Aged Beer (Ale or Lager)","Other Strong Ale or Lager","Non-Alcoholic (Beer) Malt Beverages","Dry Mead","Semi-Sweet Mead","Sweet Mead","Cyser (Apple Melomel)","Pyment (Grape Melomel)","Other Fruit Melomel","Metheglin","Braggot","Open Category Mead","Common Cider","English Cider","French Cider","Common Perry","Traditional Perry","New England Cider","Fruit Cider","Apple Wine","Other Specialty Cider or Perry","American-Style Imperial Porter","Adambier","Grodziskie","Flavored Malt Beverage","Energy Enhanced Malt Beverage","Double Red Ale","Session India Pale Ale","Contemporary Gose","Dutch-Style Kuit, Kuyt or Koyt","Belgian-style Fruit Beer","Chili Pepper Beer","Mixed Culture Brett Beer","Wild Beer"]


$('.styles').autocomplete({
	source: styles,
	minLength: 3
});
});