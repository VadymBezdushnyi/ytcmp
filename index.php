<html>
	<head>
		<link rel="stylesheet" type="text/css" href="reset.css">
		<link rel="stylesheet" type="text/css" href="style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="script.js"></script>
	</head>
	<body onload="init()">
		<div id="content">
			<nav>
			<a><b>Ytcmp</b></a>
			</nav>
			<div id="win-block">
				<h1>You are winner!</h1>
			</div>

			<div id="left">
                <video id="video1" onclick="select(0)" 
				onmousemove='this.play()'
				onmouseout='this.pause()' 
				autobuffer='true' loop>

                </video>
			</div>
			<div id="right">
                <video id="video2" onclick="select(1)" 
				onmousemove='this.play()'
				onmouseout='this.pause()' 
				autobuffer='true' loop>

                </video>
			</div>
            <br><br>
            <div id="result">

            </div>
            <div id="fail">

            </div>
		</div>
	</body>
</html>
