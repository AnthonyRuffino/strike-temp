/* jshint node:true */ /* global define, escape, unescape */
"use strict";

/*
Strike Water Temperature Tw = (.2/r)(T2 - T1) + T2
where:
r = The ratio of water to grain in quarts per pound.
T1 = The initial temperature (Farenheit) of the mash.
T2 = The target temperature (Farenheit) of the mash.
Tw = The actual temperature (Farenheit) of the infusion water. 
*/

module.exports = function(quartsWater, lbsGrain, t1, t2) {

	if (quartsWater === undefined || quartsWater <= 0) {
		throw "The 'quartsWater' parameter was not set.";
	}
	else if (lbsGrain === undefined || lbsGrain <= 0) {
		throw "The 'lbsGrain' parameter was not set.";
	}
	else if (t1 === undefined || t1 <= 32) {
		throw "The 't1' parameter was not set.";
	}
	else if (t2 === undefined || t2 <= 32) {
		throw "The 't2' parameter was not set.";
	}

	quartsWater = parseFloat(quartsWater);
	lbsGrain = parseFloat(lbsGrain);
	t1 = parseFloat(t1);
	t2 = parseFloat(t2);

	var temp = (((0.2 / (quartsWater / lbsGrain)) * (t2 - t1)) + t2);

	return { strikeTemp: temp, quartsWater: quartsWater, lbsGrain: lbsGrain, t2: t2, t1: t1, formula: "strikeTemp = (((.2 / (quartsWater/lbsGrain) ) * (t2 - t1)) + t2)" }

};
