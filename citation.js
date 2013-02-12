   // Citazioni casuali nell'header della pagina
    var mottos = new Array(
        "Some call it piracy, We call it freedom! <br/>[TPB Community]",
        "The difference between Insanity and Genius is measured only by Success. <br/>[Anonymous]",
        "Teachers open us the doors of knowledge, but you must enter by yourself. <br/>[Anonymous]",
        "No Rain, No Rainbow...But More Rain you take, the Greater will be your Rainbow. <br/>[TheZero]",
        "Without an opponent the virtue rots. <br/>[Seneca]",
        "Everybody is a Genius, but if you Judge a Fish by its ability to climb a Tree, it will live its whole Life believing that it's Stupid. <br/>[Albert Einstein]",
        "I do not approve what you Say but I will defend to the Death your Right to do so. <br/>[Voltaire]",
        "Never discuss with Fools, first Pull you to their Level then Beat you with their Experience. <br/>[Anonymous]",
        "The Wise do not need Suggestions. Fools do not take account. <br/>[Anonymous]",
        "Never trust a computer you can not throw out the window. <br/>[Steve Wozniak]",
		"Good programmers know what to write, best know what to rewrite. <br/>[Eric Steven Raymond]",
        "To iterate is human, to recurse divine. <br/>[L. Peter Deutsch]",
        "An infinite number of monkeys typing into GNU Emacs would never make a good program. <br/>[Linus Torvalds]");
        
    function fetchRandomMotto()
    {
        var rnd = Math.floor(Math.random() * mottos.length);
        var randomMotto = mottos[Math.min(rnd, mottos.length - 1)];
        $("#cit").fadeOut(500, function()
        {
            $(this).html("\"" + randomMotto + "\"");
            $(this).fadeIn(500);
        });
    }
    
    setInterval(fetchRandomMotto, 20000);
    
    //main script
    fetchRandomMotto();
	me();
}); 
