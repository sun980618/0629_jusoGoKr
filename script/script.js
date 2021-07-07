/*eslint-disable*/

$(function () {

	/*GNB 메뉴 시작*/
	$("li.mainLi").mouseover(function () {
		$("ul.subMenu").show();
		$("div#gnbBGFrame").show();
	});

	$("li.mainLi").mouseout(function () {
		$("ul.subMenu").hide();
		$("div#gnbBGFrame").hide();
	});
	/*GNB 메뉴 끝*/

	/*주소 검색 시작*/
	$("input#searchWord").keyup(function () {

		var txt = $("input#searchWord").val();
		/*변수:값을 저장
		        txt에 저장된 값이 비어있는 공백(="")이 아니라면 제이쿼리의 css를 사용하여 x 기호를 표시하세요.*/

		if (txt == "") {
			/*텍스트 박스의 값이 공백이라면*/
			$("span#closeMark").css({
				"visibility": "hidden"
			});
			/* "X" 기호를 숨겨주세요*/
		}

		if (txt != "") {
			/*텍스트박스의 값이 공백이 아니라면*/
			$("span#closeMark").css({
				"visibility": "visible"
			});
			/*"x" 기호를 표시해주세요*/
		}

	}); /*2차 기능 주소 검색 끝*/

	/*검색 내영 제거 (closeMaek 버튼) 시작
	  1차 기능->closeMark 클릭
	  2차 기능->텍스트박스(input type="text)내용 제거
	*/

	$("span#closeMark").click(function () {

		$("input#searchWord").val("");

		$(this).css({
			"visibility": "hidden"
		});
		/*1차기능에서 선책자로 지정된 항목이 추가기능에서 동일하게 지정할 때 this 선택자를 사용한다.*/

	}); /*검색 내용 제거 (closeMark 버튼) 끝*/

	/*검색창 실행 유효성검사 시작
	검색창이 공백일 떄 검색 실행 버튼을 누르면 경고창을 발생하여 내용을 입력하게 만든다.
	이렇게 사용자에게 올바른 행동을 유도하는 코드를 작성하는 것을 "JS유효성 검사"라고 한다.
	Validation 밸리데이션(=유효성)
	*/

	$("span#searchMark").click(function () {

		var txt = $("input#searchWord").val();
		/*변수->텍스트박스의 입력값이 임시 저장되어 있음*/
		if (txt == "") {
			/*if 조건식 또는 if 조건문*/
			alert("검색어을(를)입력해주세요!");
		}

		if (txt != "") {
			/*검색어가 공백이 아니라면 데이터 전송*/
			$("form").submit();
		}
		/*텍스트박스에 포커스 설정하기
		$("선택자").포커스설절기능();->해당메서드. focus()*/

		$("input#searchWord").focus();

	});

	/*검색창 실행 유효성검사 끝*/
	/*도로명 주소 클래스 속성 추가/제거 ul#jusoItem>li 시작*/

	$("ul#jusoItem>li").click(function () {

		$("ul#jusoItem>li").removeClass("selected");

		$(this).addClass("selected");

	});

	/*도로명 주소 클래스속성 추가/제거 ul#jusoItem>li 끝*/
	/*도로명 주소 슬라이드쇼 샘플 (임시적용)*/
	$("ul#jusoItem>li:nth-child(2)").click(function () {

		$("div#jusoIntro div#shuttleFrame").animate({
				"margin-left": "-800px"
			},
			3000
		);

	});

	/*도로명 주소 슬라이드쇼 샘플(임시적용)*/

	/*개발자센터 페이지(=활용 서비스)이동*/

	$("div.apiBox").eq(0).click(function(){
		/*location.href="addrlink/developerCenter01.html"; 현재페이지에서 이동*/
		window.open("addrlink/developerCenter01.html");/*새로운페이지에서 이동*/
		return false;
	});

	$("div.apiBox").eq(1).click(function(){
		/*location.href="addrlink/developerCenter01.html"; 현재페이지에서 이동*/
		window.open("addrlink/developerCenter02.html");/*새로운페이지에서 이동*/
		return false;
	});

	$("div.apiBox").eq(2).click(function(){
		/*location.href="addrlink/developerCenter01.html"; 현재페이지에서 이동*/
		window.open("addrlink/developerCenter03.html");/*새로운페이지에서 이동*/
		return false;
	});

	$("div.apiBox").eq(3).click(function(){
		/*location.href="addrlink/developerCenter01.html"; 현재페이지에서 이동*/
		window.open("addrlink/developerCenter04.html");/*새로운페이지에서 이동*/
		return false;
	});

	/*개발자센터 페이지(=활용 서비스)이동*/






});
