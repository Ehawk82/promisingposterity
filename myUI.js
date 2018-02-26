(function () {
	var myUI, newsObjectDates, newsName, newsImg, blogNames, blogEhawk, aboutDesc;
	
	newsObjectDates = ["2/25/18", "2/25/18"];
	newsImg = [
	"<div id='dvImg01' class='dvNewsImgs'>&nbsp;</div>",
	"<div id='dvImg02' class='dvNewsImgs'>&nbsp;</div>"
	];
	newsName = [
	"Nature",
	"Computers"
	];
	
	blogNames = ["Ehawk", "Febee"];
	blogEhawk = ["t", "e", "s", "t"];
	
	aboutDesc = [
	                "<p>The Promising Posterity Page was created as a measure to track, obtain, & share the work it takes to move toward progress.</p>", 
	                "<p> The culmination is to document the specific engineering and scientific methods on or related to the enlightened idea of leaving the Earth a better place rather than using it for mere luxury and survival",
				    "<p>&nbsp;</p>",
				    "<h3>Donations and Contributions</h3>",
					"<div><form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'><input type='hidden' name='cmd' value='_s-xclick'><input type='hidden' name='hosted_button_id' value='X89Y9WB52VZTW'><input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'><img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'></form></div>",
				    "<p>&nbsp;</p>",
					"<p><span id='spnLicense'>2018 MIT License</span></p>",
					"<p>&nbsp;</p>",
					"<p>&nbsp;</p>",
					"<p id='gap'>&nbsp;</p>",
					"<p>&nbsp;</p>"
				 ];
	
	myUI = {
		bySel: (x) => { return document.querySelector(x); },
		bySelAll: (x) => { return document.querySelectorAll(x); },
		createEle: (x) => { return document.createElement(x); },
		init: () => {
			var navBtns = myUI.bySelAll("nav ul li"),
       			mySection0 = myUI.createEle("section"),
			    mySection1 = myUI.createEle("section"),
				mySection2 = myUI.createEle("section"),
				mySection3 = myUI.createEle("section"),
				photoCase = myUI.createEle("div"),
				newsThumbBox = myUI.createEle("div"),
				newsBuffer = myUI.createEle("p"),
				blogSheet = myUI.createEle("div")
				blogViewer = myUI.createEle("div"),
				aboutPage = myUI.createEle("div"),
				ehawkBlogger = myUI.createEle("div");
			
		    for (var j = 0; j < blogNames.length; j++) {
			    ehawkBlogger.innerHTML += "<p>" + blogNames[j] + "</p>";
			}
			ehawkBlogger.className = "ehawkBlogger";
			
			var descElems = "";
			for (var d = 0; d < aboutDesc.length; d++) {
			    descElems += aboutDesc[d] + "<br/>";
				
			}
			
			aboutPage.innerHTML = descElems;
			aboutPage.className = "aboutPage";
			
			blogSheet.className = "blogSheet";
			
			blogViewer.className = "blogViewer";
			
			newsThumbBox.className = "newsThumbBox";
			
			newsBuffer.innerHTML = "<br />&nbsp;";
			newsBuffer.id = "newsBuffer";
			
			photoCase.innerHTML = "&nbsp;";
			photoCase.className = "photoCase";
			
			mySection0.innerHTML = "<h2>NEWS</h2>";
			mySection0.className = "mySection_full";
			mySection0.id = "mySection0";
			
			mySection1.innerHTML = "<h2>PHOTO JOURNAL</h2>" + "<button>\u25C0</button><button>\u25B6</button>";
			mySection1.className = "mySection";
			mySection1.id = "mySection1";
			
			mySection2.innerHTML = "<h2>BLOG</h2>";
			mySection2.className = "mySection";
			mySection2.id = "mySection2";
			
			mySection3.innerHTML = "<h2>ABOUT OUR GROUP</h2>";
			mySection3.className = "mySection";
			mySection3.id = "mySection3";

			for (var i = 0; i < navBtns.length; i++) {
				navBtns[i].onclick = myUI.userSel(navBtns, i);
				navBtns[i].className = "navBtns";
			}
			navBtns[0].className = "navBtns_checked";
			navBtns[0].onclick = null;
			
			blogSheet.appendChild(ehawkBlogger);
			var newsFixedDates = newsObjectDates.reverse();
			
			for (var p = 0; p < newsObjectDates.length; p++) {
				var newsNodes = myUI.createEle("div");
				
				newsNodes.innerHTML = newsFixedDates[p] + "<br />" + newsImg[p] + "<h3>" + newsName[p] + "</h3>";
				newsNodes.className = "newsNodes";
				
				newsThumbBox.appendChild(newsNodes);
			}
	
			newsThumbBox.appendChild(newsBuffer);
	
			mySection0.appendChild(newsThumbBox);
			mySection1.appendChild(photoCase);
			mySection2.appendChild(blogSheet);
			mySection2.appendChild(blogViewer);
			mySection3.appendChild(aboutPage);
			
			dvContain.appendChild(mySection0);
			dvContain.appendChild(mySection1);
			dvContain.appendChild(mySection2);
			dvContain.appendChild(mySection3);
		},
		navReflect: (navBtns, i) => {

			navBtns[0].className = "navBtns";
		    navBtns[1].className = "navBtns";
			navBtns[2].className = "navBtns";
			navBtns[3].className = "navBtns";
				
			navBtns[i].className = "navBtns_checked";

		},
		doSection: (navBtns, i) => {
			var elem = myUI.bySel("#mySection" + i),
			    elemFull = myUI.bySel(".mySection_full");
			
			if (elemFull) {
			    elemFull.className = "mySection";
			} else {
                
			}
			setTimeout(() => {
				elem.className = "mySection_full";
			    navBtns[0].onclick = myUI.userSel(navBtns, 0);
			    navBtns[1].onclick = myUI.userSel(navBtns, 1);
			    navBtns[2].onclick = myUI.userSel(navBtns, 2);
			    navBtns[3].onclick = myUI.userSel(navBtns, 3);
				navBtns[i].onclick = null;
			}, 500);
			//console.log(elems);
		},
		userSel: (navBtns, i) => {
			return () => {
				myUI.navReflect(navBtns, i);
				myUI.doSection(navBtns, i);
			}
		}
		
	};
	window.onload = () => {
		myUI.init();
	};
})();
