const exp = document.getElementById("exp");
const btn = document.getElementById("btn");
const out = document.getElementById("out");

const outs =
[
'0',			/* invalid expression / always false */
'a && b', 		/* 11 			AND 		*/
'a && !b', 		/* 10 			NOT, AND 	*/
'a', 			/* 10 11 					*/
'!a && b', 		/* 01 			NOT, AND 	*/
'b', 			/* 01 11 					*/
'a ^ b', 		/* 01 10 		XOR 		*/
'a || b', 		/* 01 10 11 	OR 			*/
'!(a || b)', 	/* 00 			NOR 		*/
'!a ^ b', 		/* 00 11 		XNOR 		*/
'!b', 			/* 00 10 		NOT 		*/
'!a || b', 		/* 00 01 11 	NOT, OR 	*/
'!a', 			/* 00 01 		NOT 		*/
'a || !b', 		/* 00 10 11 	NOT, OR 	*/
'!(a && b)', 	/* 00 01 10 	NAND 		*/
'1' 			/* 00 01 10 11 				*/
];

function xpab(a, b)
{
	return eval(exp.value);
}

btn.onclick = function()
{
	out.innerHTML = outs[(((((xpab(0,0) << 1) | xpab(0,1)) << 1) | xpab(1,0)) << 1) | xpab(1,1)];
}