function funButton(button, popup) {
	var buttonElement = button
	var popupElement = popup
	var initialClick = false
	var randomRange = 7

	var sitesList = [
    		"https://funstuff.vercel.app/fun1.html",
    		"https://funstuff.vercel.app/fun2.html",
    		"https://funstuff.vercel.app/fun3.html",
    		"https://funstuff.vercel.app/fun4.html",
    		"https://funstuff.vercel.app/fun5.html",
    		"https://funstuff.vercel.app/fun6.html",
    		"https://funstuff.vercel.app/fun7.html",
    		"https://funstuff.vercel.app/fun8.html",
    		"https://funstuff.vercel.app/fun9.html",
    		"https://funstuff.vercel.app/fun10.html",
    		"https://longdogechallenge.com/",
		"https://checkboxrace.com/",
		"https://onesquareminesweeper.com/",
		"http://heeeeeeeey.com/",
		"http://corndog.io/",
		"https://binarypiano.com/",
		"https://mondrianandme.com/",
		"https://puginarug.com",
		"http://floatingqrcode.com/",
		"https://checkboxolympics.com/",
		"https://alwaysjudgeabookbyitscover.com",
		"https://thatsthefinger.com/",
		"https://cant-not-tweet-this.com/",
		"https://cursoreffects.com",
		"http://eelslap.com/",
		"http://www.staggeringbeauty.com/",
		"http://burymewithmymoney.com/",
		"https://smashthewalls.com/",
		"https://jacksonpollock.org/",
		"http://endless.horse/",
		"http://drawing.garden/",
		"https://www.trypap.com/",
		"http://www.republiquedesmangues.fr/",
		"http://www.movenowthinklater.com/",
		"http://www.rrrgggbbb.com/",
		"http://www.koalastothemax.com/",
		"http://www.everydayim.com/",
		"http://randomcolour.com/",
		"http://cat-bounce.com/",
		"http://chrismckenzie.com/",
		"https://thezen.zone/",
		"http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
		"http://ninjaflex.com/",
		"http://ihasabucket.com/",
		"http://corndogoncorndog.com/",
		"http://www.hackertyper.com/",
		"https://pointerpointer.com",
		"http://imaninja.com/",
		"http://www.partridgegetslucky.com/",
		"http://www.ismycomputeron.com/",
		"http://www.nullingthevoid.com/",
		"http://www.muchbetterthanthis.com/",
		"http://www.yesnoif.com/",
		"http://lacquerlacquer.com",
		"http://potatoortomato.com/",
		"http://iamawesome.com/",
		"https://strobe.cool/",
		"http://thisisnotajumpscare.com/",
		"http://doughnutkitten.com/",
		"http://crouton.net/",
		"http://corgiorgy.com/",
		"http://www.wutdafuk.com/",
		"http://unicodesnowmanforyou.com/",
		"http://chillestmonkey.com/",
		"http://scroll-o-meter.club/",
		"http://www.crossdivisions.com/",
		"http://tencents.info/",
		"https://boringboringboring.com/",
		"http://www.patience-is-a-virtue.org/",
		"http://pixelsfighting.com/",
		"http://isitwhite.com/",
		"https://existentialcrisis.com/",
		"http://onemillionlols.com/",
		"http://www.omfgdogs.com/",
		"http://oct82.com/",
		"http://chihuahuaspin.com/",
		"https://popcat.click/",
		"http://www.blankwindows.com/",
		"http://tunnelsnakes.com/",
		"http://www.trashloop.com/",
		"http://www.ascii-middle-finger.com/",
		"http://spaceis.cool/",
		"http://www.doublepressure.com/",
		"http://www.donothingfor2minutes.com/",
		"http://buildshruggie.com/",
		"http://buzzybuzz.biz/",
		"http://yeahlemons.com/",
		"http://wowenwilsonquiz.com",
		"https://thepigeon.org/",
		"http://notdayoftheweek.com/",
		"http://www.amialright.com/",
		"http://nooooooooooooooo.com/",
		"https://greatbignothing.com/",
		"https://zoomquilt.org/",
		"https://dadlaughbutton.com/",
		"https://remoji.com/",
		"http://papertoilet.com/",
		"https://loopedforinfinity.com/",
		"https://www.bouncingdvdlogo.com/",
		"https://findtheinvisiblecow.com/"
	]

	var sites = null

	// Prepares and binds the button
	var init = function () {
		button.onclick = onButtonClick

		// Initial set sites
		sites = sitesList.slice()

		if (localStorage["currentSiteList"]) {
			// They have storage, filter out any not in the base list, that could be spam now
			var currentSites = JSON.parse(localStorage["currentSiteList"])
			var filteredSites = currentSites.filter(
				(site) => sitesList.indexOf(site) !== -1
			)
			if (filteredSites.length > 0) {
				sites = filteredSites
			}
		}
	}

	// Selects and removes the next website from the list
	var selectWebsite = function () {
		var site, range, index

		range = randomRange > sites.length ? sites.length : randomRange
		index = Math.floor(Math.random() * range)

		site = sites[index]
		sites.splice(index, 1)

		return site
	}

	var openSite = function (url) {
		window.open(url)
	}

	var onButtonClick = function () {
		if (initialClick === false) {
			initialClick = true
		}

		var url = selectWebsite()
		openSite(url)

		// User has visited ALL the sites... refresh the list.
		if (sites.length == 0) {
			sites = sitesList.slice()
		}

		localStorage["currentSiteList"] = JSON.stringify(sites)
	}

	init()
}

var funButton = new funButton(document.getElementById("button"))
;
